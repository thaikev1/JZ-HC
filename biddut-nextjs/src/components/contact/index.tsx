import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Contact Us" title="Contact Us" />
        <ContactInfo />
        <ContactForm />
        <GoogleMap />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Contact;
