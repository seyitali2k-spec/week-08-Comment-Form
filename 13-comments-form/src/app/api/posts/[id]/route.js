import pool from "@/lib/db";

export async function DELETE(req, { params }) {

const { id } = params;

await pool.query(
    "DELETE FROM posts WHERE id = $1",
    [id]
);

return Response.json({ success: true });
}