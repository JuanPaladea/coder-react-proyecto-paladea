import axios from "axios";

export function getProductos() {
    return axios.get("https://dummyjson.com/products")
}

export function getCategories() {
    return axios.get("https://dummyjson.com/products/categories");
}