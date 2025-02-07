import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    // <footer className="footer-container">
      // <br />
      // <br />
      <footer className="d-flex flex-wrap justify-content-between align-items-center   footer-container">
    <p className="col-md-4 mb-0 footer-body">© 2024 Company, Inc</p>

    <a to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      {/* <svg className="bi me-2" width="40" height="32"><use xlink:to="#bootstrap"></use></svg> */}
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className=""><Link to='/' className=" px-2 text-body-danger footer-body">Home</Link></li>
      <li className=""><a className=" px-2 text-body-danger footer-body">Features</a></li>
      <li className=""><a className=" px-2 text-body-danger footer-body">Pricing</a></li>
      <li className=""><a className=" px-2 text-body-danger footer-body">FAQs</a></li>
      <li className=""><a className=" px-2 text-body-danger footer-body">About</a></li>
    </ul>
  </footer>
 
 
  );
}
