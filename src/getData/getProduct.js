import axios from "axios";

const url = "/data/productsData.json";

export const getProduct = () => {
    const res = axios(url);
    return res;
}