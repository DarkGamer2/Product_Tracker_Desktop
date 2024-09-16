import PTLogo from "../assets/images/ProductTrackerIcon.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
const Login = () => {
    const navigate = useNavigate();
    const {theme}=useTheme();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://product-tracker-api-production.up.railway.app/api/login", {
                username: username,
                password: password
            });
            console.log(response.data);
            navigate("/home");
        } catch (err) {
            console.error(err);
            setError("Invalid Credentials");
        }
    };
    
    return (
            <div className={`${theme === "dark" ? "dark" : "light"}`}>
        <div className={`flex flex-col items-center justify-center h-screen dark:bg-black`}>
            <div className="text-center">
                <img src={PTLogo} className="mb-4 w-16 h-16" width={500} height={600} alt="Product Tracker Logo" />
                <h1 className="text-4xl text-purple font-bebasNeue">Product Tracker</h1>
            </div>
            <form className="mt-8">
                <label className="block text-xl text-black dark:text-white">Username:</label>
                <input 
                    type="text" 
                    className="rounded-md px-2 py-2 mb-5 text-smokeWhite dark:bg-black border-purple border-2" 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <label className="block text-xl text-black dark:text-white ">Password:</label>
                <input 
                    type="password" 
                    className="rounded-md px-2 py-2 mb-5 text-smokeWhite border-purple border-2 dark:bg-black" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div>
                    <span className="dark:text-white">Remember Password? <input type="checkbox" className="text-white"/></span>
                </div>
                <div className="text-center">
                    <button 
                        className="px-8 py-4 rounded-md mt-4 text-sm tracking-wide bg-purple text-white uppercase font-bebasNeue" 
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <div className="text-center">
                    <button 
                        className="px-8 py-4 rounded-md mt-4 text-sm tracking-wide bg-pink text-white uppercase font-bebasNeue" 
                        onClick={handleLogin}
                    >
                        Register
                    </button>
                </div>
                {error && <h2 className="text-red mt-4 text-center font-bold">{error}</h2>}
            </form>
        </div>
        </div>
    );
};

export default Login;
