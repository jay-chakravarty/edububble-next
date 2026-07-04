import Image from "next/image";

export default async function DownloadPage() {
    return (
        <div className="p-2 flex flex-col items-center gap-4">
            <Image 
                src="/flowers.png" 
                alt="flowers"
                width={500}
                height={500}
            />
            <a href="https://apps.apple.com/us/app/edububble/id6774318752" target="_blank">
                <Image 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store"
                    width={100}
                    height={100}
                />
            </a>
        </div>
    );
}