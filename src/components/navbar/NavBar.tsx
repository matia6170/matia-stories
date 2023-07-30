"use client";
import React from "react";
import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";
import { usePathname } from "next/navigation";

type Props = {
  session: boolean;
}

const NavBar = ({session}:Props) => {
  const pathname = usePathname();



  
  return (
    <div className={`${styles.navbar} flex items-center justify-center p-10`}>
      <NavBarLink
        name="home"
        href="/"
        active={pathname == "/" ? true : false}
      />
      <NavBarLink
        name="stories"
        href="/stories"
        active={pathname == "/stories" ? true : false}
      />
      <NavBarLink
        name={session?"log out":"log in"}
        href={session?"/api/auth/signout":"/api/auth/signin"}
        active={false}
      />


    </div>
  );
};

export default NavBar;
