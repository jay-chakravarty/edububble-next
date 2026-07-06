"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
type Post = {
    id: string;
    title: string;
    content: string;
    imageURL: string;
}
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getAllPosts = async () => {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const queryPosts: Post[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            imageURL: doc.data().imageURL
        }));
        setPosts(queryPosts);
    }
    getAllPosts();
  }, []);
  return (
    <div className="flex flex-col items-center space-y-2">
      {
        posts.length ?
        posts.map(post => {
          return (
            <Link href={`/dpp/?p=${post.id}`} key={post.id}>
              <div key={post.id} className="border border-black rounded-xl p-4 flex flex-col items-center">
                <Image
                  src={post.imageURL}
                  alt="Post Image"
                  width={500}
                  height={500}
                  priority
                  className="rounded-xl"
                />
                <div className="flex justify-center">
                  <span className="text-blue-500">{post.title}</span>
                </div>
                <p>{post.content.substring(0, 200)}...</p>
              </div>
            </Link>
          )
        }) : <p className="font-bold">Loading...</p>
      }
    </div>
  );
}
