import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
