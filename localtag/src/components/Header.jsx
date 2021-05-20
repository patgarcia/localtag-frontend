import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NewButton from "./NewButton";

function Header(props) {
  return (
    <div>
      <h1>Local Tag</h1>
      <SearchBar />
      <Logo />
    </div>
  );
}

export default Header;
