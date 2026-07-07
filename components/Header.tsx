import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-2 border border-black bg-crimson text-white rounded-xl">
      <div className="flex">
        <Image
          className=""
          src="/bubbles.svg"
          alt="Bubbles"
          width={30}
          height={20}
          priority
        />
        <Link href="/"><h1 className="p-1 font-bold">EduBubble</h1></Link>
        <Image
          className=""
          src="/bubbles.svg"
          alt="Bubbles"
          width={30}
          height={20}
          priority
        />
      </div>
      <nav className="space-x-2">
        <Link href="/login">
          <button className="cursor-pointer bg-blue-500 border border-black py-1 px-2 rounded-full font-bold">Log In</button>
        </Link>
        <Link href="/sign-up">
          <button className="cursor-pointer bg-blue-500 border border-black py-1 px-2 rounded-full font-bold">Sign Up</button>
        </Link>
      </nav>
    </header>
  );
}