"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createClient } from "@/services/clients";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddClient({ refetch }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          contact: "",
          email: "",
          dob: "",
          gender: "",
          emergency_contact: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            await createClient(values, axios);
            toast?.success("Client created successfully");
            refetch();
          } catch (error) {
            toast?.error("Error creating client");
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Enter Client Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact
              </label>
              <Field
                type="text"
                className="form-control"
                id="contact"
                name="contact"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <Field type="date" className="form-control" id="dob" name="dob" />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <Field
                as="select"
                className="form-select"
                id="gender"
                name="gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
            </div>

            <div className="mb-3">
              <label htmlFor="emergency_contact" className="form-label">
                Emergency Contact
              </label>
              <Field
                type="text"
                className="form-control"
                id="emergency_contact"
                name="emergency_contact"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Client"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddClient;
