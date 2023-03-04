import { Routes } from "@/app/routes";
import DefaultLink from "../DefaultLink/DefaultLink";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninjalist</h1>
      </div>
      <DefaultLink path={Routes.HOME} text="Home" />
      <DefaultLink path={Routes.ABOUT} text="About" />
      <DefaultLink path={Routes.NINJAS} text="Ninjas Listing" />
    </nav>
  );
};

export default NavBar;
