import { useEffect, useState } from "react"
import { getDolarValue } from "../services/apiDolar"

function useDolar() {
    const [dolar, setDolar] = useState(0)

    useEffect(() => {
        getDolarValue()
        .then((res) => setDolar(res.data.venta))
        .catch((err) => console.log(err))
    }, [])

    return { dolar }
}

export default useDolar