"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-md mb-3 shadow">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand nav-brand fw-bold">
          Nafsi Reset
          {/* <Image src="/logoNobg.png" alt="Company Logo" width={60} height={60} /> */}
        </Link>

        <button
          className="navbar-toggler border-0  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
        >
          <i className="bi bi-list nav-text"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                href="/#services"
                className={`${
                  pathname === "/#services"
                    ? "nav-link nav-active text-success"
                    : "nav-link "
                }`}
              >
                Services
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                href="/#how-it-works"
                className={`${
                  pathname === "/#how-it-works"
                    ? "nav-link nav-active text-success"
                    : "nav-link "
                }`}
              >
                How It Works
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                href="/#about"
                className={`${
                  pathname === "/#about"
                    ? "nav-link nav-active text-success"
                    : "nav-link "
                }`}
              >
                About
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                href="/#contact"
                className={`${
                  pathname === "/#contact"
                    ? "nav-link nav-active text-success"
                    : "nav-link "
                }`}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                href="https://calendar.app.google/eztAN5U4eLNCm19X6"
                className="nav-link nav-btn btn btn-sm"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
