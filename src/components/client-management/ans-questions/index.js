import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: " What is customer database management in CRM software?",
      key: 1,
      answer:
        "Customer database management in CRM software involves organizing, storing, and managing client information efficiently. It helps businesses keep track of customer interactions, preferences, and history.",
    },
    {
      question: "How does your software help in managing clients?",
      key: 2,
      answer:
        "Our software offers intuitive tools to manage clients effectively, providing features like contact information storage, interaction tracking, and automated reminders to ensure no client detail is missed.",
    },
    {
      question: "Can I manage prospective clients with your CRM system?",
      key: 3,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "What kind of software is best for managing a client database?",
      key: 4,
      answer:
        "A cloud-based CRM software like ours is ideal for managing a client database. It provides easy access, robust security, and scalable features to handle growing client lists.",
    },
    {
      question: "What CRM tools for small businesses do you offer?",
      key: 5,
      answer:
        "Our CRM tools for small businesses include contact management, lead tracking, sales forecasting, email marketing integration, and detailed reporting to help you streamline your business operations.",
    },
    {
      question: "Is your CRM software suitable for small businesses in Australia?",
      key: 6,
      answer:
        "Yes, our CRM software is specifically designed to meet the needs of small businesses in Australia, with features tailored to local business practices and regulations.",
    },
    {
      question: "How does your CRM software support small businesses in Australia?",
      key: 7,
      answer:
        "Our CRM software supports small businesses in Australia by offering easy-to-use tools for managing customer relationships, automating routine tasks, and providing insights to improve customer engagement and sales.",
    },
    {
      question: "What are the benefits of using cloud CRM?",
      key: 8,
      answer:
        "Cloud CRM offers several benefits, including remote access to your database, automatic updates, enhanced security, and scalability to grow with your business needs.",
    },
    {
      question: "How secure is your client relationship management database?",
      key: 9,
      answer:
        "Our client relationship management database is highly secure, utilizing advanced encryption methods, regular security updates, and strict access controls to protect your data.",
    },
    {
      question: "Can I integrate other marketing software with your CRM system?",
      answer:
        "Yes, our CRM system is compatible with all major marketing software, allowing seamless data integration and streamlined marketing efforts.",
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
          <p>We answer your questions</p>
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
