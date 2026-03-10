import pool from "@/lib/db";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";

export default async function Home({ searchParams }) {

  const order = searchParams?.sort === "asc" ? "ASC" : "DESC";

  const result = await pool.query(
  `SELECT * FROM posts ORDER BY created_at ${order}`
);

const posts = result.rows;

return (
  <main className="max-w-2xl mx-auto p-6">

  <h1 className="text-3xl font-bold mb-6">Posts</h1>

  <form action="/api/posts" method="POST" className="mb-8 space-y-3">

<input
  name="title"
  placeholder="Post title"
  required
  className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
/>

<textarea
  name="content"
  placeholder="Write something..."
  required
  className="w-full border p-2 rounded bg-white text-black placeholder-gray-500"
/>

  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Create Post
  </button>

  </form>

  <div className="mb-6 space-x-4">
  <Link href="/?sort=asc" className="text-blue-500">
  Oldest
  </Link>

  <Link href="/?sort=desc" className="text-blue-500">
  Newest
  </Link>
</div>


  {posts.map((post) => (
<div
  key={post.id}
  className="border rounded-lg p-4 mb-4 bg-white text-black"
>

  <h2 className="text-xl font-semibold">{post.title}</h2>

  <p className="text-gray-700 mt-2">{post.content}</p>

  <div className="mt-3 space-x-4">

<Link
  href={`/posts/${post.id}`}
  className="text-blue-600 hover:underline"
>
  View Post
  </Link>

<DeleteButton id={post.id} />

  </div>

  </div>
))}

  </main>
);
}