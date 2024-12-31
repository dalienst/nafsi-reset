"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createClient, updateClient } from "@/services/clients";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function UpdateClient({ client, slug, refetch, closeModal }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();
  return (
    <Formik
      initialValues={{
        name: client?.name || "",
        contact: client?.contact || "",
        email: client?.email || "",
        dob: client?.dob || "",
        gender: client?.gender || "",
        emergency_contact: client?.emergency_contact || "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("contact", values.contact);
          formData.append("email", values.email);
          formData.append("dob", values.dob);
          formData.append("gender", values.gender);
          formData.append("emergency_contact", values.emergency_contact);
          await updateClient(slug, formData, axios);
          toast?.success("Client created successfully");
          refetch();
          closeModal();
        } catch (error) {
          toast?.error("Error creating client");
        } finally {
          setLoading(false);
          closeModal();
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
              placeholder={client?.name || ""}
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
              placeholder={client?.contact || ""}
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
              placeholder={client?.email || ""}
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
              <option value={client?.gender || ""}>{client?.gender}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
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
              placeholder={client?.emergency_contact || ""}
            />
          </div>

          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Creating..." : "Update Client"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateClient;
