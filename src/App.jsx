import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    useNavigate,
    useLocation,
} from "react-router-dom";
import Loading from "./components/Loading";
import NotLoggedIn from "./components/NotLoggedIn";
import Protected from "./components/Protected";
import { useAuth } from "./context";
import Dashboard from "./page/Dashboard";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        console.log("user", user);
        localStorage.setItem("user", JSON.stringify(user));
        if (!user && location.pathname !== "/") navigate("/login");
        setLoading(false);
    }, [user]);

    if (loading) return <Loading />;

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
                exact
                path="/login"
                element={
                    <NotLoggedIn>
                        <Login />
                    </NotLoggedIn>
                }
            />
            <Route
                exact
                path="/dashboard"
                element={
                    <Protected>
                        <Dashboard />
                    </Protected>
                }
            />
        </Routes>
    );
}

export default App;
