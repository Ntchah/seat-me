'use client'
import { signIn } from "next-auth/react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faKey } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setErrorMessage(res.error);
      } else {
        console.log("login successful");
        router.push('/');
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section: Image */}
      <div className="w-2/3 relative">
        <img
          src="/img/banner.jpg"
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-1/3 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <h1 className="text-2xl font-medium mb-4">Sign in</h1>
          <p className="text-sm mb-8">
            If you don’t have an account,{" "}
            <Link href="/register" className="text-md text-yellow-500 font-semibold hover:underline">
              Register here!
            </Link>
          </p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" size="lg" />
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faKey} className="text-yellow-500" size="lg" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>


            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
