import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx"
import {useTheme} from "../context/ThemeContext.jsx"

function Layout() {
  const { theme, toggleTheme } = useTheme()

  const changeTheme = () => {
    toggleTheme()
  }

  return (
    <>
      <div className={`main ${theme}`}>
        <NavBar changeTheme={changeTheme} />
        <Outlet /> 
      </div>
    </>
  )
}

export default Layout;
