import Footer from "@/components/Footer";
import About from "@/components/landing/About";
import FollowUp from "@/components/landing/FollowUp";
import Header from "@/components/landing/Header";
import HowItWorks from "@/components/landing/HowItWorks";
import MailingList from "@/components/landing/MailingList";
import Services from "@/components/landing/Services";
import Therapy from "@/components/landing/Therapy";
import Navbar from "@/components/Navbar";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Therapy />
      <FollowUp />
      <HowItWorks />
      <MailingList />
      <Footer />
    </>
  );
}
