import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import logoImg from "../../assets/logo-img.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={logoImg} alt="logo" className="size-15" />
      <h1 className="font-bold text-3xl uppercase">Tasky</h1>
    </Link>
  );
}

function LoggedOutNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-5">
        <Link to="/register" className="font-bold text-base">
          Register
        </Link>
        <Link
          to="/login"
          className="font-bold text-base bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Login
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex items-center justify-between border-b">
        <Logo />
        <LoggedOutNav />
      </div>
    </header>
  );
}

export default Header;
