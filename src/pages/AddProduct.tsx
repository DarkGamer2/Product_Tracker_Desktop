import AddProductForm from "../components/AddProductForm";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
const AddProduct = () => {
  const {theme}=useTheme();
  return (
    <section className={`${theme==="dark"?"dark":"light"}`}>
     <div className="bg-black">
     <Navbar />
     <AddProductForm />
     </div>
    </section>
  );
};

export default AddProduct;
