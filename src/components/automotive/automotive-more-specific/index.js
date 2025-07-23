import React from "react";
import "./style.css";
import MoreSpecificCard from "./card";
import IndustryImages from "../../../assests/industry-images";
const AutomotiveMoreSpecific = () => {
  return (
    <div className="industry-more-specific-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <p className="industry-more-specific-heading">More Specific</p>
      <p className="industry-more-specific-description">
        At MeMate, we are dedicated to enhancing businesses throughout Australia
        by offering them the power of a simple yet robust business management
        software solution.
      </p>
      <div className="more-specific-wrapper">
        <div className="more-specific-upper-card-wrapper">
          <MoreSpecificCard
            background={"linear-gradient(146deg, #2B2B2D 5.4%, #777 108.55%)"}
            card_image={IndustryImages.moreSpeicificOne}
            heading={"Tailored Features"}
            description={
              "MeMate is specifically designed to meet the unique needs of creative agencies. It combines essential functionalities like project management, accounting, quoting, and invoicing into one comprehensive solution."
            }
          />
          <MoreSpecificCard
            background={"linear-gradient(180deg, #21B3FA 0%, #0D9FE6 52.5%)"}
            card_image={IndustryImages.moreSpecificTwo}
            heading={"Centralised Platform"}
            width={"349px"}
            description={
              "MeMate provides a centralised platform where creative agencies can manage their entire workflow. From project initiation to invoicing and client communication, everything can be accessed and handled from a single location."
            }
          />

          <MoreSpecificCard
            background={"linear-gradient(180deg, #7DB2B7 0%, #699EA3 100%)"}
            card_image={IndustryImages.moreSpecificThree}
            heading={"Streamlined Workflow"}
            description={
              "With MeMate, creative agencies can streamline their workflow and enhance overall efficiency. By integrating various functionalities, tasks such as project tracking, task assignment, team collaboration, and financial management become seamless and interconnected."
            }
          />
        </div>
        <div className="more-specific-lower-card-wrapper">
          <MoreSpecificCard
            background={"linear-gradient(180deg, #7DB2B7 0%, #699EA3 100%)"}
            card_image={IndustryImages.moreSpecificFour}
            heading={"Financial Management Made Easy"}
            description={
              "MeMate simplifies financial management for creative agencies. The integrated accounting module enables easy tracking of expenses, generating invoices, and managing payments."
            }
          />
          <MoreSpecificCard
            background={"linear-gradient(180deg, #68CEF2 0%, #43A9CC 100%)"}
            card_image={IndustryImages.moreSpecificFive}
            heading={"Client Relationship Management"}
            width={"327px"}
            description={
              "MeMate offers features that facilitate effective client communication and relationship management. Creative agencies can handle client requests, share updates, and gather feedback all within the platform."
            }
          />

          <MoreSpecificCard
            background={"linear-gradient(180deg, #FFB258 0%, #F19E3D 100%)"}
            card_image={IndustryImages.moreSpecificSix}
            heading={"Customisation and Scalability"}
            description={
              "MeMate understands that every creative agency has unique requirements. The software allows for customisation, enabling agencies to tailor their workflows, templates, and processes according to their specific needs."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AutomotiveMoreSpecific;
