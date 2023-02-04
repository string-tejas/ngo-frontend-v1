import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/CustomTable";
import { api } from "../queries";

const DashboardAdmin = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        api.get("/volunteer")
            .then((res) => {
                console.log(res.data);
                setVolunteers(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

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
                <div
                    style={{
                        maxHeight: "100%",
                        overflow: "auto",
                    }}
                >
                    <Table
                        columns={["Name", "Email", "Age", "Institute"]}
                        data={volunteers}
                    />
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
