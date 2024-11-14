import styles from "./uses.module.css";

export default function Uses() {
  return (
    <main className={styles.mainUses}>
      <div>
        <h1>Uses</h1>
        {/* create slug to go to page about specific use */}
        <p>
          landscaping, lilacs add vibrant color and lushness to gardens,
          attracting bees and butterflies with their fragrant blossoms. Their
          aromatic flowers are used to make essential oils, perfumes, and
          scented candles. Lilac blooms can also be used in natural skincare
          products for their soothing properties. Culinary enthusiasts use lilac
          flowers to infuse syrups, teas, and baked goods, adding a mild floral
          taste. Lilac wood is used for small woodworking projects like carving,
          crafting decorative items, or making tool handles. Ornamental
        </p>
        <img src="/syrup.jpg" />
      </div>
    </main>
  );
}
