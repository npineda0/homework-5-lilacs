"use client";

import fileStyle from "@/app/form/form.module.css";

export default function Form() {
  return (
    <main className={fileStyle.formContent}>
      <h1>Form</h1>
      <p>Please submit any fun facts you have about Lilacs!</p>

      <form>
        <div>
          <label>Title</label>
          <input></input>
        </div>
        <div>
          <label>Fact</label>
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
