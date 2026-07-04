import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center p-2 space-y-2 border border-black bg-crimson text-white rounded-xl">
      <div className="p-2 space-y-1">
        <h1 className="text-lg font-bold">Quick Links</h1>
        <div>
          <Link href="/">
            <span className="text-white">Home</span>
          </Link>
        </div>
        <div>
          <Link href="/topics">
            <span className="text-white">Study Topics</span>
          </Link>
        </div>
        <div>
          <Link href="/download">
            <span className="text-white">Download the app</span>
          </Link>
        </div>
      </div>
      <hr/>
      <div className="p-2 space-y-1">
        <h1 className="text-lg font-bold">Next.js + Firebase</h1>
        <div className="flex justify-center space-x-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <Image
            className=""
            src="/firebase.svg"
            alt="Firebase logo"
            width={50}
            height={20}
            priority
          />
        </div>
        <h1>© 2007 - 2026 EduBubble</h1>
        <h1>All rights reserved</h1>
      </div>
    </footer>
  );
}