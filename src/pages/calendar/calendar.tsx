import "./calendar.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import MainGrid from "../../components/MainGrid/MainGrid";

export default function Calendar() {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="calendar-page">
            <Header />
            <div className="calendar-page__data">
                <SideBar />
                <MainGrid />
            </div>
        </div>
    );
}
