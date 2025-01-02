"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="container py-5">
      <section className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h3 className="text-success fw-bold mb-3">
            Breaking the stigma around mental health.
          </h3>
          <p className="text-muted">
            Nafsi Reset is dedicated to creating a safe and accessible space for
            individuals, particularly those from low-income communities in
            Kenya, to seek and receive therapy. We believe that everyone,
            regardless of their financial status, deserves access to quality
            mental health care.
          </p>
          <Link
            href="https://calendar.app.google/eztAN5U4eLNCm19X6"
            target="_blank"
            className="btn nav-btn px-4 py-2 mt-3"
          >
            Book Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <Image
            src="/logo.png"
            alt="woman"
            width={300}
            height={300}
            className="img-fluid rounded-circle shadow"
            priority
          />
        </div>
      </section>
    </div>
  );
}

export default Header;
