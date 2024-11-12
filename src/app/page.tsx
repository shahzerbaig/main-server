import Link from "next/link";

export default function root() {
  return (
    <div className="flex">
      <Link href="/sign-in">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform active:scale-95">
          Go to Sign In
        </button>
      </Link>
    </div>
  );
}
