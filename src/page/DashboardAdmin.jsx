import React from "react";
import { useAuth } from "../context";

const DashboardAdmin = () => {
    const { logOut } = useAuth();
    return (
        <div>
            <button
                onClick={async () => {
                    await logOut();
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default DashboardAdmin;
