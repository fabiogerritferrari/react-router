import axios from "axios";
import { useState, useEffect } from "react";
import RenderCard from './products/RenderCard'

export default function ProductsPage() {

    const [products, setProducts] = useState([]);


    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(fetchProducts, []);


    return (
        <div className="row mt-5 bg-success">
            <h1 className="my-5 text-white">Prodotti</h1>
            <ul>
                {products.map((product) => {
                    return (

                        <li key={product.id}>
                            <RenderCard
                                product={product}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}