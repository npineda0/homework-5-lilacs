"use client";

import fileStyle from "@/app/form/form.module.css";
import useLiliacConvert from "@/hooks/useLiliacConvert";

export default function Form() {
  const fileConvert = useLiliacConvert();

  function onFunFact(e) {
    e.preventDefault();
    const lilacData = new FormData(e.currentTarget);

    alert("Form is submitted thank you!");
  }

  function onFileUpload(e) {
    fileConvert.convertFile(e.currentTarget.files[0]);
  }

  return (
    <main className={fileStyle.formContent}>
      <h1>Form</h1>
      <p>Please submit any fun facts you have about Lilacs!</p>

      <form onSubmit={onFunFact}>
        <div>
          <label htmlFor="factTitle">Title</label>
          <input type="text" id="factTitle" name="factTitle"></input>
        </div>

        <div>
          <label htmlFor="funTitle">Facts</label>
          <input type="text" id="funTitle" name="funTitle"></input>
        </div>

        <div>
          <label htmlFor="lilacImg">Image</label>
          <input
            onChange={onFileUpload}
            type="file"
            accept="image/*"
            id="lilacImg" 
            name="lilacImg"
          ></input>
        </div>
        <div>
          <img src={fileConvert.dataURI} height="100" />
        </div>

        <div>
          <input
            type="submit"
            value="submit"
            disabled={fileConvert.loading}
          ></input>
        </div>
      </form>
    </main>
  );
}
