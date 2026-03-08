import Link from "next/link";

export default function Home() {
return (
  <main style={{ padding: "30px" }}>
  <h1>Posts App</h1>

  <div style={{ marginTop: "20px" }}>
  <Link href="/posts">View Posts</Link>
  </div>

  <div>
  <Link href="/add-posts">Create Post</Link>
  </div>
  </main>
);
}