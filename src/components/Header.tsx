import { NavLink } from "./NavLink";

import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={logo} alt="Logo do pass.in" />
      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  );
}
