import axios from "axios";
import Navbar from "../components/Navbar";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const navigate = useNavigate();
  const handleLogout=async(e:React.MouseEvent)=>{
    e.preventDefault();
await axios.post("https://product-tracker-api-production.up.railway.app/api/logout").then(()=>{
  navigate("/")
})
  }
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h1 className="text-center font-bold text-xl text-purple font-bebasNeue uppercase">Settings</h1>
        </div>
        <div className="">
          <div className="flex row-auto">
            <div>
              <h1>Dark Mode</h1>
            </div>
            <div>
              <ToggleOffIcon />
            </div>
          </div>
          <div>
            <h1>Font Size</h1>
          </div>
          <div className="text-center">
            <button onClick={handleLogout} className="bg-pink text-white px-2 py-2 rounded-md uppercase font-bebasNeue">Log Out</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
