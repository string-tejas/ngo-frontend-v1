import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context";

const DashboardAdmin = () => {
    const { logOut } = useAuth();
    return (
        <>
            <Navbar />
            <div
                style={{
                    background: "#eee",
                    width: "100%",
                    height: "92vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 4fr",
                }}
            >
                <div
                    style={{
                        background: "#ddd",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
