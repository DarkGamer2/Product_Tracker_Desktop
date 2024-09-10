import { Link } from "react-router-dom";

interface NavProps{
  username: string;
 
}
const Navbar = (props:NavProps) => {
  return (
    <section>
      <nav>
        <ul className="flex justify-evenly">
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
