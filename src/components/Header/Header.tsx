import "./Header.scss";

import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAvatarColor } from "../../utils/AvatarColor";

import { logOutHandler } from "../../utils/LogOut";

import { previousMonth, nextMonth } from "../../state/date/dateSlice";

import { getMonthNameByNum } from "../../utils/GetMonthNameByNum";

import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Button from "../Button/Button";
import ControlMonthButton from "../controlMonthButton/controlMonthButton";
import Dropdown from "../Dropdown/Dropdown";

export default function Header() {
    const dispatch = useDispatch();

    const { currentUser } = useAuth();
    const { logout } = useAuth();

    const char = currentUser.email[0].toUpperCase();
    const color = getAvatarColor(char);
    const [showLogOut, setShowLogOut] = useState(false);

    const avatarClickHandler = () => {
        setShowLogOut(!showLogOut);
    };

    const currentMonth = useSelector((state: any) => state.date.currentMonth);
    const currentYear = useSelector((state: any) => state.date.currentYear);

    return (
        <header className="header">
            <div className="header__group1">
                <CompanyLogo height={2} Unit="vw" />
                <Button
                    label="Today"
                    color="primary"
                    withIcon={false}
                    disabled={false}
                    onClick={() => {
                        alert(
                            "Should be added a function to show today's tasks"
                        );
                    }}
                    fontSize={0.8}
                />
                <div className="header__group1__control-month-buttons">
                    <ControlMonthButton
                        onClick={() => {
                            dispatch(previousMonth());
                        }}
                        direction="left"
                    />
                    <ControlMonthButton
                        onClick={() => {
                            dispatch(nextMonth());
                        }}
                        direction="right"
                    />
                </div>
                <p>
                    {getMonthNameByNum(currentMonth)} {currentYear}
                </p>
            </div>
            <div className="header__group2">
                <Dropdown
                    options={["Day", "Week"]}
                    selectDefault="Week"
                    fontSize={0.8}
                />
                <div className="header__group2__user-info">
                    <p className="header__group2__user-info__email">
                        {currentUser.email}
                    </p>
                    <button
                        className="header__group2__user-info__avatar"
                        style={{ background: color }}
                        onClick={avatarClickHandler}
                    >
                        <p>{char}</p>
                    </button>
                    {showLogOut && (
                        <Button
                            label="Log out"
                            color="secondary"
                            withIcon={false}
                            disabled={false}
                            onClick={() => {
                                logOutHandler(logout);
                            }}
                            fontSize={0.8}
                            customIcon="/components/Header/exit.png"
                        />
                    )}
                </div>
            </div>
        </header>
    );
}
