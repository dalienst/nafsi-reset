"use client";
import { useFetchProfile } from "@/hooks/accounts/actions";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { updateProfile } from "@/services/accounts";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Settings() {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();
  const userId = useUserId();

  const {
    isLoading: isLoadingProfile,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();

  return (
    <div className="auth-screen">
      <Formik
        initialValues={{
          name: profile?.name || "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            const formData = new FormData();
            formData.append("name", values.name);

            await updateProfile(userId, formData, axios);
            toast?.success("Profile updated successfully");
            refetchProfile();
          } catch (error) {
            console.log(error?.response?.data);
            toast?.error("Profile update failed");
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ touched }) => (
          <Form className="shadow p-4 bg-white form">
            <h2 className="text-center mb-4">Account Settings</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={profile?.name || "Enter your name"}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success btn-sm"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Settings;
