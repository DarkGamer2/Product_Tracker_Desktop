import Navbar from "../components/Navbar";
import Axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("text");
  const [loading, setLoading] = useState(false);
  const API_URL = "https://product-tracker-api-production.up.railway.app/";

  type ProductType = {
    itemName: string;
    itemImage: string;
    productDescription: string;
    price: number;
    productID: number;
  };

  useEffect(() => {
    setLoading(true);
    Axios({
      method: "GET",
      url: `${API_URL}api/products`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, []); // Added empty dependency array to run only once

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
      <Navbar username={username} />
      <section>
        <div>
          <h1 className="text-center text-2xl font-bold uppercase font-bebasNeue text-purple">Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {products.map((product: ProductType) => (
            <Link to={`/product/${product.productID}`} key={product.productID}>
              <Product
                productId={product.productID}
                productImage={product.itemImage}
                productName={product.itemName}
                productDescription={product.productDescription}
                productPrice={product.price}
              />
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
