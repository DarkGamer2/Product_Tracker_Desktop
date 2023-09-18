import Navbar from "../components/Navbar";
import Axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
const Home = () => {
  const [products, setProducts] = useState([]);

  const API_URL = "https://producttracker-api-production.up.railway.app/";

  type product = {
    productName: string;
    productImageURL: string;
    productDescription: string;
    productPrice: number;
    productID: number;
  };
  useEffect(() => {
    Axios({
      method: "GET",
      url: `${API_URL}api/products`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error.message));
  });

  return (
    <section>
      <Navbar />
      <section>
        <div>
          <h1 className="text-center text-2xl font-bold uppercase">Products</h1>
        </div>
        {products.map((product: product) => {
          return (
            <Product
              key={product.productID}
              productName={product.productName}
              productDescription={product.productDescription}
              productPrice={product.productPrice}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Home;
