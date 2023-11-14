import React, { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="items-center mb-20">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span className="grid justify-items-end">
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
            
          )}
        </span>
      </div>
      <section className="items-center text-center">
        <div className="lg:flex ml-40 m-10 justify-between items-center mr-40">
          <h1 className="font-bold text-orange-600 md:text-4xl">EduQuest</h1>
          <div
            className={`lg:flex gap-8 absolute duration-500 md:static ${
              open ? "top-6" : "-top-48"
            }`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/contacts">Contacts</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/register">Register</ActiveLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
