import { Outlet } from "react-router-dom";
import Icon from "./Icon";

function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Icon />
        </div>

        <div className="theme">
          <img src="../src/assets/icon-sun-dark.svg" />
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <img src="../src/assets/icon-moon-dark.svg" />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar;
