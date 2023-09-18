import Navbar from "../components/Navbar";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
const Settings = () => {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h1 className="text-center font-bold text-xl">Settings</h1>
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
          <div>
            <ToggleOffIcon />
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
