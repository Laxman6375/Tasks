import React from "react";
import CategoryLink from "../CategoryLink";
import Search from "../Search";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center gap-3">
      <CategoryLink />
      <Search />
    </div>
  );
};

export default Navbar;
