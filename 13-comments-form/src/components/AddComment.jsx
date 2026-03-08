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
    <form onSubmit={handleSubmit}>

    <textarea
    name="comment"
    placeholder="Add comment"
    required
    />

    <br />

    <button>Add Comment</button>

    </form>
);
}