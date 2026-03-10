import Link from "next/link";

export default function NavBar() {
return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">

    <div className="max-w-3xl mx-auto flex justify-between items-center">

    <Link href="/" className="text-xl font-bold">
    Posts App
</Link>

    <div className="space-x-6">

    <Link href="/" className="hover:text-gray-300">
    Home
</Link>

    <Link href="/add-posts" className="hover:text-gray-300">
    Create Post
</Link>

</div>

</div>
</nav>
);
}