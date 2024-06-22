import Navbar from "../components/Navbar";
import Axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import {items} from "../data/items";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [username,setUsername]=useState("text");
  const API_URL = "http://localhost:4040/";

  type product = {
    itemName: string;
    itemImage: string;
    productDescription: string;
    price: number;
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

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await Axios.get(`${API_URL}/username`);
        setUsername(response.data.username);
      } catch (error) {
        console.error('Failed to fetch username:', error);
      }
    };

    fetchUsername();
  }, []);
  return (
    <section>
      <Navbar />
      <section>
        <div>
          <h1 className="text-center text-2xl font-bold uppercase">Products</h1>
        </div>
        {items.map((product: product) => {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              <Product
              key={product.productID}
              productImageURL={product.itemImage}
              productName={product.itemName}
              productDescription={product.productDescription}
              productPrice={product.price}
            />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Home;
