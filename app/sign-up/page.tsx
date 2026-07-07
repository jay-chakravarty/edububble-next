import Link from "next/link";

export default async function SignUpPage() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold">Sign Up</h1>
            <form className="p-4 flex flex-col space-y-2 w-3/4 lg:w-1/2">
                <div>
                    <label htmlFor="name" className="font-bold">Name </label>
                    <input type="text" id="name" name="name" className="border border-black rounded-xl p-1 w-full" required/><br/>
                </div>
                <div>
                    <label htmlFor="email" className="font-bold">Email </label>
                    <input type="email" id="email" name="email" className="border border-black rounded-xl p-1 w-full" required/><br/>
                </div>
                <div>
                    <label htmlFor="password" className="font-bold">Password </label>
                    <input type="password" id="password" name="password" className="border border-black rounded-xl p-1 w-full" required/>
                </div>
                <div>
                    <label htmlFor="confirm" className="font-bold">Confirm Password</label><br></br>
                    <input type="confirm" id="confirm" name="confirm" className="border border-black rounded-xl p-1 w-full" required/>
                </div>
                <button type="submit" className="cursor-pointer bg-blue-500 border border-black py-1 px-2 rounded-full text-white font-bold w-1/2 mx-auto my-2">Sign Up</button>
            </form>
            <Link href="/login" className="text-blue-500">Login with another account</Link>
        </div>
    );
}