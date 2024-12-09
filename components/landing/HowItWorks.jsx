import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaCalendarAlt, FaHandHoldingHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const steps = [
  {
    id: 1,
    title: "Visit Our Site",
    icon: <TbWorld className="text-success fs-3" />,
    description:
      "Visit our website to get started. The website is available everywhere and anyone can access it.",
  },
  {
    id: 2,
    title: "Book an Appointment",
    icon: <FaCalendarAlt className="text-success fs-3" />,
    description:
      "Book an appointment with one of our therapists directly to their calendar. You can choose a time that works best for you.",
  },
  {
    id: 3,
    title: "Start Therapy",
    icon: <FaHandHoldingHeart className="text-success fs-3" />,
    description:
      "Begin your wellness journey with our therapists. Dedicated to ensure you receive the best care possible.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 col-sm-12 mb-4">
            <h3 className="text-success fw-bold mb-3">How Nafsi Reset Works</h3>
            <p className="text-muted">
              Our mission is to create a safe and accessible space for
              individuals, particularly those from low-income communities in
              Kenya, to seek and receive therapy.
            </p>
            <Link
              href="https://calendar.app.google/eztAN5U4eLNCm19X6"
              target="_blank"
              className="btn nav-btn px-4 py-2 mt-3"
            >
              Book Now
            </Link>

            <div className="mt-4 d-flex align-items-center gap-3">
              <FaPhoneAlt className="text-white bg-success rounded-circle fs-1 p-2" />
              <div>
                <h6 className="fw-semibold mb-1">Call Us</h6>
                <p className="text-muted mb-0">+254 768 469 417</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 col-sm-12">
            {steps?.map((step) => (
              <div
                key={step?.id}
                className="d-flex align-items-start gap-3 mb-4 p-3 border rounded bg-white shadow-sm"
              >
                <div>{step?.icon}</div>
                <div>
                  <h6 className="fw-semibold">{step?.title}</h6>
                  <p className="text-muted">{step?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
