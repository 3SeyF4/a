import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Product from "./component/Product";
import products from "./products.json";
import Basket from "./component/Basket";

function App() {
  const [money, setMoney] = useState(2000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <div className="App">
      <Header money={money} total={total} />
      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>
      <Basket total={total} products={products} basket={basket} />
      <button onClick={resetBasket}>Sıfırla</button>
    </div>
  );
}

export default App;
