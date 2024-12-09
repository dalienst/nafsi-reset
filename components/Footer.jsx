import { socials } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div id="footer" className="bg-success py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-circle"
            />
            <h1 className="fw-bold text-white mt-3">Nafsi Reset</h1>
            <p className="text-white">
              Nafsi Reset is dedicated to creating a healthy community by
              providing safe and accessible mental health care
            </p>

            <div className="d-flex align-items-center gap-2">
              {socials?.map((social) => (
                <Link key={social?.id} href="#">
                  {social?.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-md-3 col-sm-12 mb-2"></div>
        </div>
      </div>
    </div>
  );
}
