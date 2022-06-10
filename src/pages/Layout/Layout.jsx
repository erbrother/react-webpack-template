import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
