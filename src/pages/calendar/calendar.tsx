import "./calendar.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

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
                <div className="calendar-page__data__content">
                    <span>Calendar</span>
                </div>
            </div>
        </div>
    );
}
