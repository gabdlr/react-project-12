import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://gabtestlaravelapp.herokuapp.com/api/'
});

export default axiosClient;