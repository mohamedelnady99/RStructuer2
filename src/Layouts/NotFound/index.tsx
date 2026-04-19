import { Outlet } from "react-router-dom";
function index() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default index;
