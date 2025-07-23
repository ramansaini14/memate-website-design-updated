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
      question: "What is Multi-Location Management in meMate?",
      key: 1,
      answer:
        "meMate’s Multi-Location Management allows businesses to oversee multiple offices or branches under a single system, enabling each location to maintain its own sales pipelines, projects, and teams while sharing the same business entity, client database, and supplier records.",
    },
    {
      question: "How does meMate facilitate shared templates across different locations?",
      key: 2,
      answer:
        "meMate enables businesses to standardise operations by sharing templates for quotes, invoices, and reports across all locations, ensuring consistency and efficiency.",
    },
    {
      question: "Can all locations access a centralised client and supplier database in meMate?",
      key: 3,
      answer:
        "Yes, meMate maintains a shared database that allows each office to access necessary client and supplier records in real time, promoting seamless collaboration.",
    },
    {
      question: "Are contractors and clients shared across multiple locations in meMate?",
      key: 4,
      answer:
        "Absolutely. meMate manages contractor assignments and client interactions seamlessly across various locations, ensuring unified operations.",
    },
    {
      question: "	Does meMate provide individual project calendars for each location?",
      key: 5,
      answer:
        "Yes, each office can maintain its own project schedule within meMate while remaining integrated into the overall business structure.",
    },
    {
      question: "Can separate performance targets be set for different locations in meMate?",
      key: 6,
      answer:
        "Certainly. meMate allows businesses to set unique sales and performance goals for each office while tracking overall business performance.",
    },
    {
      question: "	How does meMate support communication and task management across locations?",
      key: 7,
      answer:
        "meMate offers a shared chat and task system, enabling smooth communication and task management across all locations.",
    },
    {
      question: "Is inventory management across multiple locations possible with meMate?",
      key: 8,
      answer:
        "While meMate focuses on project and team management, integrating it with specialised inventory management systems can provide comprehensive multi-location inventory control.",
    },
    {
      question: "How does meMate ensure data security across multiple locations?",
      key: 9,
      answer:
        "meMate employs robust security protocols to protect data, ensuring that only authorised personnel can access sensitive information across all locations.",
    },
    {
      question: "Can meMate integrate with other software solutions used in different locations?",
      answer:
        "Yes, meMate is designed to integrate with various software solutions, allowing each location to maintain its preferred tools while ensuring seamless data flow across the organisation.",
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
