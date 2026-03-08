export default function AddPost() {
return (
    <main style={{ padding: "30px" }}>

    <h1>Create Post</h1>

    <form action="/api/posts" method="POST">

<input
    name="title"
    placeholder="Title"
    required
    style={{ display: "block", marginBottom: "10px" }}
    />

<textarea
    name="content"
    placeholder="Content"
    required
    style={{ display: "block", marginBottom: "10px" }}
/>

    <button>Create Post</button>

    </form>

    </main>
);
}