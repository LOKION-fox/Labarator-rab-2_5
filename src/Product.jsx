import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartC";

export const products = [
  {
    id: "1",
    title: "Яблоки 1 кг",
    price: 126,
    image:
      "https://total-rating.ru/k/apple-1.jpg",
  },
  {
    id: "2",
    title: "Морковь 1 кг",
    price: 27,
    image:
      "https://koldvor.ru/media/images/products/9493/5d2fb807996b194b932368dc5f653d38.jpeg",
  },
  {
    id: "3",
    title: "Помидоры 1 кг",
    price: 160,
    image:
      "https://sibprod.info/upload/resize_cache/iblock/6c7/1680_1050_19d1669f6609e6dfcaeac28e5aab5b3be/6c7d8d259fc5a7a5b05941bdb0abc788.jpg",
  },
  {
    id: "4",
    title: "Огурцы 1 кг",
    price: 86,
    image:
      "https://cdn.metro-cc.ru/ru/ru_pim_369508001001_01.png?maxwidth=460&maxheight=460&format=jpg&quality=90&width=460&height=460",
  },
  {
    id: "5",
    title: "Бананы 1 кг",
    price: 150,
    image:
      "https://zakaz.s-globus.ru/media/Zakaz/Product/2024-04-10/Zakaz/Product/2024-04-10/343300fa2a36738d58195f8d79aa1770_0.jpg",
  },
  {
    id: "6",
    title: "Апельсины 1 кг",
    price: 145,
    image:
      "https://goldniva.ru/upload/iblock/055/055797b3a10942eac678fd65222a9a36.png",
  },
];

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const prod = products.find((p) => p.id === id);
  if (!prod) return <div>Товар не найден</div>;

  const imgS = {
    width: "100%", maxWidth: 560,
    height: 320, objectFit: "cover", borderRadius: 12,
  };

  return (
    <div>
      <h2>{prod.title}</h2>
      <img src={prod.image} alt={prod.title} style={imgS} />
      <p style={{ maxWidth: 560, lineHeight: 1.5 }}>{prod.description}</p>
      <p style={{ fontWeight: 700 }}>{prod.price.toFixed(2)} руб</p>
      <button
        onClick={() => {
          addToCart(prod);
          navigate("/cart"); 
        }}>
        Добавить в корзину и перейти в корзину
      </button>
    </div>
  );
}

export default Product;
