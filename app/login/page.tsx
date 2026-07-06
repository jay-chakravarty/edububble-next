import Link from "next/link";

export default async function LoginPage() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            <form className="p-4 flex flex-col items-center space-y-4">
                <div className="text-right">
                    <div>
                        <label htmlFor="email" className="font-bold">Email </label>
                        <input type="email" id="email" name="email" className="border border-black rounded-xl p-1 m-1" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="font-bold">Password </label>
                        <input type="password" id="password" name="password" className="border border-black rounded-xl p-1 m-1" required/>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 border border-black py-1 px-2 rounded-full text-white font-bold">Log In</button>
            </form>
            <Link href="/login" className="text-blue-500">Forgot password?</Link>
        </div>
    );
}