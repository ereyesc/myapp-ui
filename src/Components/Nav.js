import { Link } from "react-router-dom";

const Nav = () =>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/tags'}>Tags</Link>
              </li>
            </ul>
            <form className="d-flex" style={{marginLeft: 'auto'}}>
              <input className="form-control me-2" id="mainSearch" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
);
export default Nav;