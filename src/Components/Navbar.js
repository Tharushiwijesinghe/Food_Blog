// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import image from '../assets/logo.png';
// import '../Styles/Navbar.css';

// const Navbar = () => {
//   const navbarCollapseRef = useRef(null);

//   const closeNavbar = () => {
//       let collapseInstance = bsCollapse.getInstance(navbarCollapseRef.current);
//       if (!collapseInstance) {
//         collapseInstance = new bsCollapse(navbarCollapseRef.current, { toggle: false });
//       }
//       collapseInstance.hide();
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg fixed-top">
//       <div className="container">
//         <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
//           <img
//             src={image}
//             alt="FoodieBlog Logo"
//             width="40"
//             height="40"
//             className="me-2"
//           />
//           <span>LankanTaST</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/recipes" onClick={closeNavbar}>Recipes</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/admin" onClick={closeNavbar}>Admin</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useRef , useState} from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/logo.png';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClose = () => {
    setIsNavOpen(false);
  };
  const navbarCollapseRef = useRef(null);

  const closeNavbar = () => {
    const bsCollapse = window.bootstrap?.Collapse;
    if (navbarCollapseRef.current && bsCollapse) {
      let collapseInstance = bsCollapse.getInstance(navbarCollapseRef.current);
      if (!collapseInstance) {
        collapseInstance = new bsCollapse(navbarCollapseRef.current, { toggle: false });
      }
      collapseInstance.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img
            src={image}
            alt="FoodieBlog Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span>LankanTaST</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes" onClick={closeNavbar}>Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" onClick={closeNavbar}>Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
