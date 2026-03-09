import { NavLink } from "react-router-dom"

export default function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' id='nav-link' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Products' id='nav-link' className="nav-link">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' id='nav-link' className="nav-link">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}