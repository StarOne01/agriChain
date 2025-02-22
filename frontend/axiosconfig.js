import axios from "axios";


const Axiosinstance = axios.create({
    baseURL: "http://localhost:3000/api/",
});

export default Axiosinstance;