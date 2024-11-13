import twoStyle from "./two.module.css";

export default function factTwo() {
  return (
    <main className={twoStyle.twoMain}>
      <h1>Lilacs Were an Early Presidential Favorite</h1>
      <p>
        Lilacs were mostly in the Eastern Europe and Asia. Then they were
        brought over in the 17th century. Which then became George Washington
        and Thomas Jefferson favorites flower that they grew them in their
        garden.
      </p>
      <div>
        <h4>President George Washington</h4>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/440px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg" />
      </div>

      <div>
        <h4>President Thomas Jefferson</h4>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg/1200px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg" />
      </div>
    </main>
  );
}
