"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db, storage } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
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
        const queryPosts: Post[] = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            imageURL: await getDownloadURL(
              ref(storage, data.imageID)
            ),
          };
        })
      );
        setPosts(queryPosts);
    }
    getAllPosts();
  }, []);
  return (
  <div className="flex flex-col items-center space-y-2">
    {posts.length ? (
      <>
        {posts.map((post) => (
          <Link href={`/dpp/?p=${post.id}`} key={post.id}>
            <div className="border border-black rounded-xl p-4 flex flex-col items-center">
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
              <p>{post.content.length > 200 ? post.content.substring(0, 200) + "..." : post.content}</p>
            </div>
          </Link>
        ))}
        <div className="flex justify-center mb-2">
          <Link href="/post">
            <button className="cursor-pointer bg-blue-500 border border-black py-1 px-2 rounded-full font-bold text-white">
              + Post New Content
            </button>
          </Link>
        </div>
      </>
    ) : (
      <p className="font-bold">Loading...</p>
    )}
  </div>
);
}
