import React from "react";
import ContactCard from "./ContactCard";
import { ContactsData } from "@/constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col pt-[100px] max-sm:pt-[50px] pb-[80px] max-sm:px-[30px] justify-center items-center"
    >
      <h2
        className="mb-[40px] sm:mb-[80px] text-white text-[64px] mirror-vertical leading-[70px] scale-[0.6] sm:scale-[0.8] lg:scale-100 font-[700] font-orbitron"
        data-text="CONTACT"
      >
        CONTACT
      </h2>
      <div className="flex flex-col sm:mt-[50px] sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[27px] lg:gap-[18px]">
        {ContactsData.map((contact, index) => (
          <div className="" data-aos="zoom-in" key={index}>
            <ContactCard name={contact.name} position={contact.position} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
