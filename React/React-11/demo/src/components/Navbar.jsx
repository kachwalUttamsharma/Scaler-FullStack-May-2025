import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

// const Navbar = ({ loadAboutPage, loadContactPage, loadHomePage }) => {
//     return (
//       <nav>
//         <ul>
//           <li>
//             <Link to="/" onClick={loadHomePage}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={loadAboutPage}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={loadContactPage}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   };

export default Navbar;
