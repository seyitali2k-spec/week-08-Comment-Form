"use client";

export default function DeleteButton({ id }) {

async function handleDelete() {

    await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    });

    window.location.reload();
}

return (
    <button onClick={handleDelete}>
    Delete
    </button>
);
}