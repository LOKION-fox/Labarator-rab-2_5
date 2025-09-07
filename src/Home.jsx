import { useNavigate } from "react-router-dom";
import { products } from "./Product";
import { useCart } from "./CartC";

function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16,};
  
  const card = {border: "1px solid #ddd", borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 8,};
  
  const imgS = {width: "100%", height: 140, objectFit: "cover", borderRadius: 8,};

  return (
    <>
      <h1>Каталог товаров</h1>
      <div style={grid}>
        {products.map((p) => (
          <div key={p.id} style={card}>
            <img src={p.image} alt={p.title} style={imgS} />
            <div style={{ fontWeight: 700 }}>{p.title}</div>
            <div>{p.price.toFixed(2)} руб</div>
            <button
              onClick={() => {
                addToCart(p);
                navigate("/cart"); 
              }}
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;


