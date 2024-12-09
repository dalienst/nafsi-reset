import Image from "next/image";
import React from "react";
import { IoWalletSharp } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { FaHeartCircleBolt } from "react-icons/fa6";

const features = [
  {
    id: 1,
    title: "Affordable Sessions",
    icon: <IoWalletSharp className="feature-icon" />,
  },
  {
    id: 2,
    title: "One-to-One Counselling",
    icon: <FaPeopleArrows className="feature-icon" />,
  },
  {
    id: 3,
    title: "Fast Response",
    icon: <FaHeartCircleBolt className="feature-icon" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3 className="text-success fw-bold mb-3">
              Tunakujali. Tunakuskiza. Tuko hapa kwa ajili yako.
            </h3>
            <p className="text-muted">
              Nafsi Reset is dedicated to creating a safe and accessible space
              for individuals to seek and receive therapy, guiding them to
              recovery.
            </p>
          </div>

          <div className="col-md-6 col-sm-12">
            {/* Features */}
            <div className="row px-2">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="col-12 border rounded  mb-2 bg-light"
                >
                  <div className="text-success mb-2 feature-icon">
                    {feature.icon}
                  </div>
                  <h6 className="fw-semibold">{feature.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
