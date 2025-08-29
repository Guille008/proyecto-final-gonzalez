import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function ItemDetailConteiner() {

    const params = useParams()
    const [produc, setProduc] = useState({})

    useEffect(() => {
        async function getData() {
            try {
                const resultado = await fetch(`https://fakestoreapi.com/products/${params.id}`)
                const resultado2 = await resultado.json()
                setProduc(resultado2)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    //Vista
    return (
        <main>
            <section className="detailConteiner">
                <h1>{produc.title}</h1>
                <img src={produc.image} style={{white:"200px", height:"200px"}}></img>
                <p>{produc.description}</p>
                <strong>${produc.price}</strong>

            </section>
        </main>
    )
}