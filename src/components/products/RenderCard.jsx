import { useState } from "react";

export default function RenderCard({ product }) {

    const { id, title, price, description, category, img } = product;

    const [imageSrc, setImageSrc] = useState(img);


    return (
        <div className="card mb-4 bg-dark text-white" key={id}>
            <img src={imageSrc} className="card-img-top" alt={title}
                onError={() => setImageSrc('https://placehold.net/default.png')}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body">
                <p>{category}</p>
            </div>
            <div className="card-footer p-0">
                <span className="badge text-bg-warning w-100 fs-5">{price} &euro;</span>
            </div>
        </div>

    )

}