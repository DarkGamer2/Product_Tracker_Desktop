import axios from "axios";
import Navbar from "../components/Navbar";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn"; // Updated import
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await axios.post("https://product-tracker-api-production.up.railway.app/api/logout")
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className={`${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <section className="dark:bg-black">
        <div>
          <h1 className="text-center font-bold text-xl text-purple font-bebasNeue uppercase">Settings</h1>
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <h1 className="dark:text-white">Dark Mode</h1>
            </div>
            <div onClick={toggleTheme} className="ml-2 cursor-pointer">
              <button>
                {theme === "dark" ? (
                  <ToggleOnIcon style={{ color: "green" }} />
                ) : (
                  <ToggleOffIcon style={{ color: "black" }} />
                )}
              </button>
            </div>
          </div>
          <div>
            <h1 className="dark:text-white">Font Size</h1>
          </div>
          <div className="text-center">
            <button 
              onClick={handleLogout} 
              className="bg-pink text-white px-2 py-2 rounded-md uppercase font-bebasNeue"
            >
              Log Out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
