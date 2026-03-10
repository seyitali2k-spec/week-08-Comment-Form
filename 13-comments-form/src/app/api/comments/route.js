import pool from "@/lib/db";

export async function POST(req) {

const data = await req.json();

await pool.query(
    "INSERT INTO comments (post_id, comment) VALUES ($1,$2)",
    [data.postId, data.comment]
);

return Response.json({ success: true });
}
