
export default function RenderCard({ product }) {

    const { id, title, price, description, category, image } = product;


    return (
        <div className="col">
            <div className="card mb-4 bg-dark text-white" key={id} id='my-card'>
                <img src={image} className="card-img-top" alt={title}
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-body">
                    <p>{category}</p>
                    {isAlone && <p>{description}</p>}
                </div>
                <div className="card-footer p-0">
                    <span className="badge text-bg-warning w-100 fs-5">{price} &euro;</span>
                </div>
            </div>
        </div>

    )

}