import "./App.scss";
import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
    const Navigate = useNavigate();
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) Navigate("/calendar");
    }, []);

    return (
        <div className="main-container">
            <Outlet />
        </div>
    );
}
