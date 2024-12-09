import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";
import Link from "next/link";

export default function FollowUp() {
  return (
    <div id="follow-up" className="py-5">
      <div className="container">
        <section className="text-center mb-3">
          <h2 className="text-success fw-bold">
            Create natural life after mental health recovery
          </h2>
        </section>
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center  mb-3">
            <Image
              src="/services.png"
              alt="woman"
              width={350}
              height={350}
              className="rounded-lg"
            />
          </div>

          <div className="col-md-6 col-sm-12 h-100">
            <h3 className="fw-semibold">Primary Instruction</h3>
            <p>
              <small>
                What next after recovery? Creating a daily routine elevates your
                mental health and well-being. It empowers you to lead a healthy
                and fulfilling life. The following steps will guide you to a
                natural life after mental health recovery.
              </small>
            </p>

            <div className="mt-3 row">
              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Establish Routine</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Get Enough Sleep</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Build a support system</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Journal Frequently</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Listen to music</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Pursue personal growth</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Develop coping skills</span>
                </p>
              </div>

              <div className="col-md-6 col-sm-12 mb-2">
                <p className="d-flex align-items-center gap-2">
                  <TiTick className="text-success" />
                  <span className="fw-semibold">Exercise Regularly</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
