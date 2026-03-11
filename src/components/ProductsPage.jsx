import axios from "axios";
import { useState, useEffect } from "react";
import RenderCard from './products/RenderCard'
import { Link } from "react-router-dom";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);


    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(fetchProducts, []);


    return (
        <div className="container mt-5 bg-success">
            <h1 className="row my-5 text-white">Prodotti</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => {
                    return (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <RenderCard
                                product={product}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}