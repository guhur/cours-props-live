// import React, { Component } from "react";
import React from "react";
// import PropTypes from "prop-types";

const NavBar = ({ pages, admin, children }) => (
  <ul>
    {pages && pages.map((value, index) => <li key={index}>{value}</li>)}
    {admin ? <li>Admin</li> : null}
    {children}
  </ul>
);

// class NavBar extends Component {
//   render() {
//     const { admin } = this.props;

//     return (
//       <ul>
//         <li>Accueil</li>
//         <li>Contact</li>
//         <li>Qui sommes-nous ?</li>
//         {admin ? <li>Admin</li> : null}
//       </ul>
//     );
//   }
// }
NavBar.defaultProps = {
  admin: false
};
// NavBar.propTypes = {
//   admin: PropTypes.bool
// };

export default NavBar;
