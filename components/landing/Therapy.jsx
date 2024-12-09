import { therapy } from "@/data/therapy";
import React from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";

export default function Therapy() {
  return (
    <section id="therapy" className="py-5 bg-success">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="text-white fw-bold">Find The Right Therapy</h2>
        </div>
        <div className="row">
          {therapy?.map((therapy) => (
            <div key={therapy.id} className="col-md-6 col-sm-12 mb-2">
              <div className="card h-100">
                <div className="card-body">
                  <FaHeartCircleCheck className="feature-icon fs-2" />
                  <h6 className="fw-semibold text-success mb-1">{therapy.title}</h6>
                  <p className="text-muted text-success">
                    {therapy.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
