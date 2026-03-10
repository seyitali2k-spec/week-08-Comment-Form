"use client";

export default function DeleteButton({ id }) {

async function handleDelete() {
    await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    });

    window.location.reload();
}

return (
    <button
    onClick={handleDelete}
    className="text-red-500 hover:text-red-700"
    >
    Delete
    </button>
);
}