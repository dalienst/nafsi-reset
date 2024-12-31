"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/founders/dashboard">
          Nafsi Reset
        </Link>

        <button
          className="navbar-toggler border-0  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/founders/clients"
                className={`${
                  pathname === "/founders/clients"
                    ? "nav-link nav-active"
                    : "nav-link"
                }`}
              >
                Clients
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/founders/therapy-sessions"
                className={`${
                  pathname === "/founders/therapy-sessions"
                    ? "nav-link nav-active"
                    : "nav-link"
                }`}
              >
                Sessions
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/founders/settings"
                className={`${
                  pathname === "/founders/settings"
                    ? "nav-link nav-active"
                    : "nav-link"
                }`}
              >
                Settings
              </Link>
            </li>

            <li className="nav-item">
              <button
                onClick={() => signOut()}
                className="nav-link text-danger"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
