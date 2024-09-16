import { useState } from "react";
import axios from "axios";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState<number>(0); // Ensure type is number
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { theme } = useTheme();
  const API_URL = "https://product-tracker-api-production.up.railway.app";

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(`${API_URL}/api/products/addProduct`, {
        productName,
        productImage,
        productDescription,
        productPrice, // Ensure this is a number
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        navigate("/home");
      });
  };

  return (
    <section className={`${theme === "dark" ? "dark" : "light"}`}>
      <div>
        <h1 className="text-center text-2xl font-oswald uppercase font-semibold text-purple">
          Add Product
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form>
          <div>
            <label className="block font-lato italic dark:text-white">Product Name</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple border-2 border-purple dark:bg-black"
              type="text"
              name="productName"
              placeholder="Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-lato italic dark:text-white">Product Image</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple border-2 border-purple dark:bg-black"
              type="text"
              name="productImage"
              placeholder="Image URL"
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-lato italic dark:text-white">Product Description</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple border-2 border-purple dark:bg-black"
              type="text"
              name="productDescription"
              placeholder="Product Description"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-lato italic dark:text-white">Product Price</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple border-2 border-purple dark:bg-black"
              type="number"
              name="productPrice"
              placeholder="Product Price"
              onChange={(e) => setProductPrice(parseFloat(e.target.value) || 0)} // Convert to number
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-purple px-2 py-3 rounded-md text-white mt-3 hover:bg-purple-900 font-bebasNeue uppercase focus:outline-none focus:ring-1 focus:ring-purple"
            >
              {loading ? (
                <p>
                  <HourglassBottomIcon className="animate-spin" /> Adding Product...
                </p>
              ) : (
                <p>Add Product</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProductForm;
