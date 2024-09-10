import { useState } from "react";
import axios from "axios";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useNavigate } from "react-router-dom";
const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_URL = "https://product-tracker-api-production.up.railway.app";
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API_URL}/api/products/addProduct`, {
        productName,
        productImage,
        productDescription,
        productPrice,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setLoading(false);
        navigate("/home");
      });
  };
  return (
    <section>
      <div>
        <h1 className="text-center text-2xl font-oswald uppercase font-semibold text-purple">
          Add Product
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="">
          <div>
            <label className="block font-lato italic">Product Name</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
              type="text"
              name="productName"
              placeholder="Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-lato italic">Product Image</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
              type="text"
              name="productImageURL"
              placeholder="Image URL"
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-lato italic">Product Description</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
              type="text"
              name="productDescription"
              placeholder="Product Description"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-lato italic">Product Price</label>
            <input
              className="px-3 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
              type="text"
              name="productPrice"
              placeholder="Product Price"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-purple px-2 py-3 rounded-md text-white mt-3 hover:bg-purple-900 font-bebasNeue uppercase focus:outline-none focus:ring-1 focus:ring-purple"
            >
              {loading ? (
                <p>
                  <HourglassBottomIcon className="animate-spin" /> Adding
                  Product...
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
