import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

export const checkLoggedIn = async () => {
    try {
        const res = await api.get("/auth/check-user");
        if (res.status === 200) {
            console.log(res);
            return res.data;
        } else return null;
    } catch (e) {
        return null;
    }
};

export const loginInstitute = async (body) => {
    try {
        const res = await api.post("/auth/login/institute", body);
        if (res.status === 200) {
            return res.data;
        } else return null;
    } catch (e) {
        return null;
    }
};
