import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
          MiTienda
        </a>
        
        <NavBar/>
        <CartWidget/>
      </div>
    </nav>
  );
};


export default Header