"use client";

export default function Form() {
  return (
    <main>
      <h1>Form</h1>
      <p>Please submit any fun facts you have about Lilacs!</p>

      <form>
        <div>
          <label>Title</label>
          <input></input>
        </div>
        <div>
          <label>Description</label>
          <input></input>
        </div>

        <div>
          <label>Image</label>
          <input></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </main>
  );
}
