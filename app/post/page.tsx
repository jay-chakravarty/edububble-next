"use client";
import Link from "next/link";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default async function PostNewContent() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const file = formData.get("file") as File;
        try {
            const imageID = `posts/${file.name}`;
            const storageRef = ref(storage, imageID);
            await uploadBytes(storageRef, file);
            await addDoc(collection(db, "posts"), {
                title,
                content,
                imageID,
                createdAt: serverTimestamp(),
            });
            form.reset();
            alert("Post created!");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post.");
        }
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold">Post New Content</h1>
            <form className="p-4 flex flex-col space-y-2 w-3/4 lg:w-1/2" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="font-bold">Title </label>
                    <input type="text" id="title" name="title" className="border border-black rounded-xl p-1 w-full" required/><br/>
                </div>
                <div>
                    <label htmlFor="content" className="font-bold">Content </label>
                    <textarea id="content" name="content" className="border border-black rounded-xl p-1 w-full" rows={7} required/><br/>
                </div>
                <div>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        required
                        className="file:bg-blue-500
                            file:border
                            file:border-black
                            file:py-1
                            file:px-2
                            file:rounded-full
                            file:text-white
                            file:font-bold"
                        />
                </div>
                <button type="submit" className="cursor-pointer bg-blue-500 border border-black py-1 px-2 rounded-full text-white font-bold mx-auto my-2">Post New Content</button>
            </form>
            <Link href="/" className="text-blue-500">Return to Home</Link>
        </div>
    );
}