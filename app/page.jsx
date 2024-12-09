import About from "@/components/landing/About";
import FollowUp from "@/components/landing/FollowUp";
import Header from "@/components/landing/Header";
import HowItWorks from "@/components/landing/HowItWorks";
import MailingList from "@/components/landing/MailingList";
import Services from "@/components/landing/Services";
import Therapy from "@/components/landing/Therapy";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Therapy />
      <FollowUp />
      <HowItWorks />
      <MailingList />
    </>
  );
}
