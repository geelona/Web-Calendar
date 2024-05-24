import "./main.scss";
import CompanyLogo from "../../components/common/CompanyLogo/CompanyLogo";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    return (
        <div className="main-page">
            <CompanyLogo height={4} Unit="vw" />
            <button
                className="continue-google-button"
                onClick={() => {
                    navigate("/register");
                }}
            >
                <img src="./pages/Main/google-icon.png" />
                <p>Continue with Google</p>
            </button>
        </div>
    );
}
