import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li style={{ color:"orange"}}>Linkler</li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/inst">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
