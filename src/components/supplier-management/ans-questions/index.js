import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: "What is Supplier Management Software, and how does it work?",
      key: 1,
      answer:
        "Supplier Management Software is a cloud-based solution designed to streamline and automate the management of supplier relationships and performance. It works by centralizing supplier data, enabling businesses to track, evaluate, and manage their suppliers efficiently. The software typically includes features for supplier onboarding, compliance management, and performance tracking, ensuring that businesses can maintain a robust and reliable supplier database.",
    },
    {
      question: "How can Supplier Management Software improve my procurement process?",
      key: 2,
      answer:
        "Supplier Management Software enhances procurement by providing a centralized supplier database that allows for better visibility and control over supplier interactions. It helps in automating routine tasks, improving communication, and ensuring that suppliers meet necessary compliance and performance standards. By using this software, businesses can reduce procurement cycle times, minimize risks, and achieve cost savings through better supplier negotiations.",
    },
    {
      question: "What features should I look for in Supplier Management Software?",
      key: 3,
      answer:
        "Key features to look for in Supplier Management Software include supplier onboarding and vetting tools, a comprehensive supplier database, performance tracking, compliance management, and integration capabilities with existing ERP or procurement systems. Additionally, reporting and analytics tools are essential for making data-driven decisions. These features help businesses maintain an organized and effective supplier database, ensuring reliable and consistent supplier performance.",
    },
    {
      question: "Is Supplier Management Software scalable for growing businesses?",
      key: 4,
      answer:
        "Yes, Supplier Management Software is highly scalable, making it suitable for businesses of all sizes. As your supplier base grows, the software can easily accommodate additional suppliers and expanded functionality without compromising performance. This scalability ensures that your supplier database remains robust and manageable, even as your business and supplier network expand.",
    },
    {
      question: "How secure is Supplier Management Software, and how does it handle sensitive data?",
      key: 5,
      answer:
        "Supplier Management Software is designed with robust security measures to protect sensitive supplier information. It typically includes data encryption, user access controls, and compliance with industry regulations such as GDPR. By centralizing supplier data in a secure supplier database, businesses can ensure that their information is protected from unauthorized access and data breaches.",
    },
    {
      question: "Can Supplier Management Software integrate with my existing ERP or procurement system?",
      key: 6,
      answer:
        "Yes, most Supplier Management Software solutions are designed to integrate seamlessly with existing ERP or procurement systems. This integration allows businesses to synchronize supplier data, streamline workflows, and enhance overall efficiency. By connecting your supplier database with other critical business systems, you can ensure consistent and accurate data across all platforms.",
    },
    {
      question: "What kind of reporting and analytics does Supplier Management Software provide?",
      key: 7,
      answer:
        "Supplier Management Software offers a range of reporting and analytics tools that provide insights into supplier performance, compliance, and procurement trends. These tools help businesses make informed decisions by analyzing data from the supplier database. Customizable dashboards, real-time reporting, and predictive analytics are some of the key features that enable businesses to monitor supplier relationships effectively.",
    },
    {
      question: "How does Supplier Management Software help in maintaining compliance with regulations?",
      key: 8,
      answer:
        "Supplier Management Software assists in maintaining compliance by providing tools to track and verify supplier certifications, industry standards, and legal requirements. The software can automate compliance checks and flag any issues that need attention. By maintaining a compliant supplier database, businesses can reduce the risk of non-compliance and avoid potential legal and financial penalties.",
    },
    {
      question: "What is the typical pricing model for Supplier Management Software?",
      key: 9,
      answer:
        "The pricing model for Supplier Management Software is usually subscription-based, with costs varying depending on the number of users, features, and the size of the supplier database. Some providers offer tiered pricing plans, allowing businesses to choose a package that fits their specific needs and budget. Additional costs may apply for advanced features, integrations, or premium support.",
    },
    {
      question: "How can I evaluate and select the best Supplier Management Software for my business?",
      answer:
        "To evaluate and select the best Supplier Management Software, consider factors such as ease of use, scalability, integration capabilities, and customer support. Look for software that offers a comprehensive supplier database, robust reporting tools, and strong security features. It’s also advisable to take advantage of free trials or demos to assess the software’s functionality and fit with your business needs before making a decision.",
      key: 10,
    },
  ];

  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key);
  };
 
const generateFAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((ques) => ({
      "@type": "Question",
      "name": ques.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ques.answer,
      },
    })),
  };
  return JSON.stringify(schema);
};
 
  return (
    <div className="question-answer-wrapper">
      {/* Inject JSON-LD Schema into the <head> */}
      <Helmet>
        <script type="application/ld+json">{generateFAQSchema()}</script>
      </Helmet>

      <div className="question-answer-content">
        <div className="question-answer-heading-wrapperF">
          <p className="question-answer-heading">We answer your questions</p>
        </div>
        <div className="questions-wrapper">
          {questions.map((ques) => (
            <div key={ques.key} className="each-ques-wrapper">
              <div
                className={`question-answer-ques ${
                  selectedQuestion === ques.key ? "selected" : ""
                }`}
                onClick={() => toggleQuestion(ques.key)}
              >
                <p className="question-answer-ques-infoF">{ques.question}</p>
                <Box
                  className="add-icon-wrapper"
                  sx={{
                    height: "24px",
                    width: "24px",
                    transform:
                      selectedQuestion === ques.key
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="plus-icon-image-wrapper">
                    {selectedQuestion === ques.key ? (
                      <img
                        src={Images.selectedQuestion}
                        className="icon"
                        alt="Selected Question"
                        style={{ height: "24px" }}
                        type="image/svg+xml"
                      />
                    ) : (
                      <AddIcon className="icon" htmlColor="#000000" />
                    )}
                  </div>
                </Box>
              </div>
              <div
                className={`question-answer-ans-infoF ${
                  selectedQuestion === ques.key ? "expanded" : ""
                }`}
              >
                {selectedQuestion === ques.key && <p>{ques.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
