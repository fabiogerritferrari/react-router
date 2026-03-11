import { useEffect, useState } from "react";
import axios from "axios";
import RenderCard from "./products/RenderCard"
import { useParams } from "react-router-dom"

export default function SinglePageProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState();


    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        setTimeout(fetchProduct, 10000);
    }, []);

    return (
        <div className="row bg-success p-5 mt-5">
            {product ? (<div className="col">
                <div className="card mb-4 bg-dark text-white" id='my-card'>
                    <img src={product.image} className="card-img-top" alt={product.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                    <div className="card-body">
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-footer p-0">
                        <span className="badge text-bg-warning w-100 fs-5">{product.price} &euro;</span>
                    </div>
                </div>
            </div>)
                :
                (<button className="btn btn-success btn-lg" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span className='ts-1' role="status">Loading...</span>
                </button>
                )
            }
        </div>
    )
}