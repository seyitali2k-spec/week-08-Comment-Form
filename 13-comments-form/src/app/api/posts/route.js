import pool from "@/lib/db";
import { redirect } from "next/navigation";

export async function POST(req) {

const formData = await req.formData();

const title = formData.get("title");
const content = formData.get("content");

await pool.query(
    "INSERT INTO posts (title, content) VALUES ($1,$2)",
    [title, content]
);

redirect("/posts");
}