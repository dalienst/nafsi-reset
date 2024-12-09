"use client";
import { mainServices } from "@/data/services";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-success fw-bold">Our Services</h2>
          <p className="text-muted">
            Explore the variety of counseling services we offer to support your
            mental health.
          </p>
        </div>
        <div className="row g-4">
          {mainServices.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="service-icon-container mb-3 text-success">
                    {service.icon}
                  </div>
                  <h5 className="card-title fw-semibold text-success">
                    {service.title}
                  </h5>
                  <p className="card-text text-muted">{service.subtitle}</p>
                  <p className="card-text small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
