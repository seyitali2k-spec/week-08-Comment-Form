import pool from "@/lib/db";
import AddComment from "@/components/AddComment";

export default async function PostPage({ params }) {

const { id } = params;

const postResult = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
);
const post = postResult.rows[0];

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

    <AddComment postId={id} />

    <h3>Comments</h3>

    {comments.map((c) => (
    <p key={c.id}>{c.comment}</p>
))}
</main>
);
}