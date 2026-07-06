import { notFound } from "next/navigation";
import Image from "next/image";
import { db, storage } from "../firebase";
import { doc, getDoc } from "firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage";
type Props = {
  searchParams: Promise<{ p?: string }>
};
export default async function PostPage({ searchParams } : Props) {
  const { p: postId } = await searchParams;
  if (!postId) {
    return notFound();
  }
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const imageID = docSnap.data().imageID;
    const imageURL = await getDownloadURL(ref(storage, imageID));
    return (
      <div className="border border-black rounded-xl p-4">
        <h1 className="text-center text-[2rem] font-bold my-[0.67em]">{docSnap.data().title}</h1>
        <Image
          src={imageURL}
          alt="EduBubble logo"
          width={500}
          height={500}
          priority
          className="mx-auto rounded-xl"
        />
        <p className="mx-auto my-4">{docSnap.data().content}</p>
      </div>
    );
  } else {
    return notFound();
  }
}
