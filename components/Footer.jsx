import { company, legal, socials, support, contacts } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-success text-white py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Branding Section */}
          <div className="col-md-3 col-sm-12">
            <div className="text-center text-md-start">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="rounded-circle mb-3"
              />
              <h3 className="fw-bold">Nafsi Reset</h3>
              <p className="text-white-50">
                Dedicated to creating a healthy community by providing safe and
                accessible mental health care.
              </p>
              <div className="d-flex justify-content-md-start justify-content-center gap-3 mt-3">
                {socials?.map((social) => (
                  <Link
                    key={social?.id}
                    href={social?.link}
                    target="_blank"
                    className="text-white fs-4"
                  >
                    {social?.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-md-2 col-sm-6">
            <h5 className="text-white fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              {company?.map((item) => (
                <li key={item?.id}>
                  <Link
                    href={item?.link}
                    className="text-white-50 text-decoration-none"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-2 col-sm-6">
            <h5 className="text-white fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              {support?.map((item) => (
                <li key={item?.id}>
                  <Link href="#" className="text-white-50 text-decoration-none">
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-2 col-sm-6">
            <h5 className="text-white fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              {legal?.map((item) => (
                <li key={item?.id}>
                  <Link href="#" className="text-white-50 text-decoration-none">
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 col-sm-6">
            <h5 className="text-white fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled">
              {contacts?.map((contact) => (
                <li key={contact?.id} className="mb-2">
                  <Link
                    href={contact?.link}
                    target="_blank"
                    className="text-white-50 text-decoration-none"
                  >
                    {contact?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="text-white-50 my-4" />
        <p className="text-center text-white-50 mb-0">
          &copy; {new Date().getFullYear()} Nafsi Reset. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
