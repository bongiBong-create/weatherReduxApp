import { IconLogo } from "../../shared";
import { InputSearch } from "../input-search";

import "./index.css";

export const Header = () => {
  return (
    <header className="header">
      <IconLogo />
      <InputSearch />
    </header>
  );
};
