import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
interface NavProps{
  username: string;
 
}
const Navbar = (props:NavProps) => {
  const {theme}=useTheme();
  return (
    <section className={`${theme==="dark"?"dark":"light"}`}>
      <nav>
        <ul className="flex justify-evenly dark:text-purple">
          <li>Hello {props.username}!</li>
          <li className="text-purple-700">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-purple-700">
            <Link to="/addproduct">Add Product</Link>
          </li>
          <li className="text-purple-700">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
