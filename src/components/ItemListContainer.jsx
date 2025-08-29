import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function ItemListContainer(props) {
    const [products, setProducts] = useState([])
    const [categoria, setCategoria] = useState("Todas")

    useEffect(() => {
        async function getData() {
            try {
                const resultado = await fetch("https://fakestoreapi.com/products");
                const resultado2 = await resultado.json();
                setProducts(resultado2);
            } catch (error) {
                console.log("error")
            };
        }
        getData()
    }, [])

    const productosFiltrados = categoria === "Todas"
        ? products
        : products.filter((p) => p.category === categoria)

    return (
        <main>
            <h1>Nombre ecommerce</h1>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="Todas">Todos</option>
                <option value="jewelery">Joyas</option>
                <option value="electronics">Electrónicos</option>
                <option value="men's clothing">Ropa hombre</option>
                <option value="women's clothing">Ropa mujer</option>
            </select>

            <section className="cardConteiner">
                {productosFiltrados.map((prod) => (
                    <article className="card" key={prod.id}>
                        <ul>
                            <li>
                                <img src={prod.image} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                            </li>
                            <li><h2>{prod.title}</h2></li>
                            <li><p>${prod.price}</p></li>
                            <div className="btnCont">
                                <button className="btnDetail"><Link to={`/Detalle/${prod.id}`}>Detalle</Link></button>
                            </div>
                        </ul>
                    </article>
                ))}
            </section>
        </main>
    )
}
