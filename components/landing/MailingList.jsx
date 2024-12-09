"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import axios from "axios";

function MailingList() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, handleSubmit] = useForm("manyjren");
  return (
    <section id="mailinglist" className="py-5 bg-white">
      <div className="container">
        <div>
          <h3 className="fw-semibold">Subscribe to our mailing list</h3>
          <p>
            Get exclusive offers, news, and updates delivered straight to your
            inbox. From daily tips to expert insights, stay connected with Nafsi
            Reset.
          </p>

          <div className="mt-5">
            <Formik
              initialValues={{ email: "" }}
              onSubmit={async (values, { resetForm }) => {
                setIsLoading(true);
                try {
                  await axios?.post("https://formspree.io/f/manyjren", values);
                  toast.success("Thank you for subscribing!");
                  setIsLoading(false);
                  resetForm();
                } catch (error) {
                  setIsLoading(false);
                }
              }}
            >
              {({ touched }) => (
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
                    className="btn btn-success"
                  >
                    {isLoading ? "Submitting..." : "Subscribe"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailingList;
