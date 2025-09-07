import { useCart } from "./CartC";
function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  if (cart.length === 0)
    return (
      <div> <h2>Корзина</h2> <p>Корзина пуста</p> </div>
    );

  const row = {
    display: "grid", gridTemplateColumns: "64px 1fr auto auto auto",
    alignItems: "center", gap: 12,
    padding: "8px 0", borderBottom: "1px solid #e5e5e5",
  };
  const imgS = { width: 64, height: 64, objectFit: "cover", borderRadius: 8 };

  return (
    <div>
      <h2>Корзина</h2>
      {cart.map((i) => (
        <div key={i.id} style={row}>
          <img src={i.image} alt={i.title} style={imgS} />
          <div>
            <div style={{ fontWeight: 600 }}>{i.title}</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>ID: {i.id}</div>
          </div>
          <div>{i.qty} шт.</div>
          <div>{(i.price * i.qty).toFixed(2)} руб</div>
          <button onClick={() => removeFromCart(i.id)}>Удалить</button>
        </div>
      ))}
      <div style={{ textAlign: "right", marginTop: 16, fontWeight: 700 }}>
        Итого: {total.toFixed(2)} руб
      </div>
      <div style={{ textAlign: "right", marginTop: 8 }}>
        <button onClick={clearCart}>Очистить корзину</button>
      </div>
    </div>
  );
}

export default Cart;
