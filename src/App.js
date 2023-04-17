import ProductListItem from "./ProductListItem";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <ProductListItem
          imgNo={1}
          name="MAC BOOK AIR"
          productPriceFormatted={"4,300,000원"}
        />
        <ProductListItem
          imgNo={2}
          name="MAC BOOK PRO"
          productPriceFormatted={"4,500,000원"}
        />
        <ProductListItem
          imgNo={201}
          name="MAC BOOK PRO PLUS"
          productPriceFormatted={"4,600,000원"}
        />
      </div>
    </>
  );
}

export default App;
