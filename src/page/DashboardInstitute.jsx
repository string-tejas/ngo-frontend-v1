import React from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";

const DashboardInstitute = () => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    background: "#eee",
                    width: "100%",
                    height: "91vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "24px",
                    }}
                >
                    Yo
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "24px",
                    }}
                >
                    <StudentForm inst />
                </div>
            </div>
        </>
    );
};

export default DashboardInstitute;
