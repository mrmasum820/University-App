"use client";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <p className="mt-4 text-3xl font-semibold">Oops! Page Not Found</p>
        <p className="mt-2 text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-8 cursor-pointer inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
