import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./state/store.tsx";

import Main from "./pages/main/main.tsx";
import Register from "./pages/register/register.tsx";
import Login from "./pages/login/login.tsx";
import Calendar from "./pages/calendar/calendar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="/" element={<Main />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/calendar" element={<Calendar />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);
