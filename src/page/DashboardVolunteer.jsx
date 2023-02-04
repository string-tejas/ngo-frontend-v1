import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import { useAuth } from "../context";

const DashboardVolunteer = () => {
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
                    <Card sx={{ minWidth: 475 }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                {/* be{bull}nev{bull}o{bull}lent */}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "24px",
                    }}
                >
                    <StudentForm />
                </div>
            </div>
        </>
    );
};

export default DashboardVolunteer;
