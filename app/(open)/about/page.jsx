"use client";
import { team } from "@/data/about/team";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="container min-vh-100 py-3">
        <section className="mb-3">
          <h2 className="text-success fw-bold mb-3 fs-1">
            Tunakujali. Tunakuskiza. Tuko hapa kwa ajili yako.
          </h2>
          <p>
            Nafsi Reset is dedicated to creating a safe and accessible space for
            individuals to seek and receive therapy, guiding them to recovery.{" "}
            <br />
            Meet the people behind Nafsi Reset and their vision for a brighter
            future for mental health in Kenya.
          </p>
        </section>

        <section className="mb-3 py-5 px-md-4">
          {team?.map((member, index) => (
            <div
              key={member?.id}
              className={`d-flex flex-column flex-md-row align-items-center mb-5 ${
                index % 2 === 1 ? "flex-md-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 mb-3 mb-md-0 me-md-4">
                <Image
                  src={member?.image}
                  width={300}
                  height={300}
                  alt={member?.name}
                  className="img-fluid rounded"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Text */}
              <div>
                <h3 className="fw-bold">{member?.name}</h3>
                <p className="text-muted">{member?.role}</p>
                <p className="mt-3">{member?.bio}</p>
                <p className="mt-3">{member?.experience}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default About;
