import axios from "axios";

export function getDolarValue() {
    return axios.get("https://dolarapi.com/v1/dolares/blue")
}