import axios from "axios";

export function getProductos() {
    axios.get("https://dummyjson.com/products")
}