"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

function MailingList() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section id="mailinglist" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
            <Image
              src="/poster.jpg"
              alt="logo"
              width={300}
              height={300}
              // className="rounded-circle"
            />
          </div>

          {/* Text and Form Section */}
          <div className="col-md-6 col-sm-12  text-md-start">
            <h3 className="fw-semibold">Subscribe to our mailing list</h3>
            <p>
              Get exclusive offers, news, and updates delivered straight to your
              inbox. From daily tips to expert insights, stay connected with
              Nafsi Reset.
            </p>

            <div className="mt-5">
              <Formik
                initialValues={{ email: "" }}
                onSubmit={async (values, { resetForm }) => {
                  setIsLoading(true);
                  try {
                    await axios?.post(
                      "https://formspree.io/f/manyjren",
                      values
                    );
                    toast.success("Thank you for subscribing!");
                    setIsLoading(false);
                    resetForm();
                  } catch (error) {
                    setIsLoading(false);
                    toast.error("Something went wrong. Please try again.");
                  }
                }}
              >
                {() => (
                  <Form>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-success mt-3"
                    >
                      {isLoading ? "Submitting..." : "Subscribe"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailingList;
