import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[350px] text-center">

        <h1 className="text-2xl font-bold mb-2">
          🌍 Country Information
        </h1>

        <p className="text-gray-500 mb-5">
          Learn country information using a simple API project
        </p>

        <Link
          href="/country"
          className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          🌍 Go to Country App
        </Link>

      </div>
    </div>
  );
}