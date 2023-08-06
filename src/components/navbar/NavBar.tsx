"use client";
import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import path from "path";

type Props = {
  session: Session | null;
};

const NavBar = ({ session }: Props) => {
  let pathname = usePathname();

  //@ts-ignore
  const isAdmin = session?.user?.admin;

  let formattedPathname = "";
  let slashLoc: number[] = [];
  Array.from(pathname).forEach((element, i) => {
    if (element === "/") {
      formattedPathname += "%2F";
      slashLoc.push(i);
    } else formattedPathname += element;
  });
  pathname =
    slashLoc.length > 1 ? pathname.slice(slashLoc[0], slashLoc[1]) : pathname;
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
      {isAdmin ? (
        <NavBarLink
          name="admin"
          href="/admin"
          active={pathname == "/admin" ? true : false}
        />
      ) : null}

      <NavBarLink
        name={session ? "log out" : "log in"}
        href={
          session
            ? `/api/auth/signout?callbackUrl=${formattedPathname}`
            : `/api/auth/signin?callbackUrl=${formattedPathname}`
        }
        active={false}
      />
    </div>
  );
};

export default NavBar;
