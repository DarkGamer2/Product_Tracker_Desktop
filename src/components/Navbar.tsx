import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <section>
      <nav>
        <ul className="flex justify-evenly">
          <li>Hello {props.username}!</li>
          <li className="text-purple-700">
            <Link to="/">Home</Link>
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
