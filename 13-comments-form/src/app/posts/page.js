import pool from "@/lib/db";
import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";

export default async function PostsPage({ searchParams }) {

const order = searchParams?.sort === "asc" ? "ASC" : "DESC";

const result = await pool.query(
    `SELECT * FROM posts ORDER BY created_at ${order}`
);

const posts = result.rows;

return (
    <main style={{ padding: "30px" }}>

    <h1>Posts</h1>

    <div style={{ marginBottom: "20px" }}>
    <Link href="/posts?sort=asc">Oldest</Link> |{" "}
    <Link href="/posts?sort=desc">Newest</Link>
    </div>

    {posts.map((post) => (
    <div
    key={post.id}
    style={{
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    }}
    >

    <h2>{post.title}</h2>
    <p>{post.content}</p>

    <div style={{ marginTop: "10px" }}>
    <Link href={`/posts/${post.id}`}>View Post</Link>{" "}
    |{" "}
    <DeleteButton id={post.id} />
    </div>

    </div>
))}

    </main>
  );
}