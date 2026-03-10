import pool from "@/lib/db";
import AddComment from "@/components/AddComment";

export default async function PostPage({ params }) {

const { id } = await params;

const result = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
);

const post = result.rows[0];

if (!post) {
    return <p>Post not found</p>;
}

const commentsResult = await pool.query(
    "SELECT * FROM comments WHERE post_id = $1",
    [id]
);

const comments = commentsResult.rows;

return (
    <main style={{ padding: "30px" }}>

    <h1>{post.title}</h1>
    <p>{post.content}</p>

    <h2>Add Comment</h2>

    <AddComment postId={id} />

    <h2>Comments</h2>

    {comments.map((c) => (
    <p key={c.id}>{c.comment}</p>
    ))}

    </main>
);
}   