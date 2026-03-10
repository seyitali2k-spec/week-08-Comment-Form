"use client";

export default function AddComment({ postId }) {

async function handleSubmit(e) {

    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
    postId,
    comment: formData.get("comment"),
}),
});

    window.location.reload();
}

return (
    <form onSubmit={handleSubmit} className="mt-4">

    <textarea
    name="comment"
    placeholder="Write your comment..."
    required
    className="w-full border rounded p-2 mb-2"
/>

    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Add Comment
    </button>

    </form>
);
}