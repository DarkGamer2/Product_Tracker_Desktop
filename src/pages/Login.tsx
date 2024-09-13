import PTLogo from "../assets/images/ProductTrackerIcon.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
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
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
                <img src={PTLogo} className="mb-4 w-16 h-16" width={500} height={600} alt="Product Tracker Logo" />
                <h1 className="text-4xl text-purple font-bebasNeue">Product Tracker</h1>
            </div>
            <form className="mt-8">
                <label className="block text-xl text-black">Username:</label>
                <input 
                    type="text" 
                    className="rounded-md px-2 py-2 mb-5 text-smokeWhite" 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <label className="block text-xl text-black">Password:</label>
                <input 
                    type="password" 
                    className="rounded-md px-2 py-2 mb-5 text-smokeWhite" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <div>
                    <span>Remember Password? <input type="checkbox" /></span>
                </div>
                <div className="text-center">
                    <button 
                        className="px-8 py-4 rounded-md mt-4 text-sm tracking-wide bg-purple text-white" 
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                {error && <h2 className="text-red mt-4 text-center font-bold">{error}</h2>}
            </form>
        </div>
    );
};

export default Login;
