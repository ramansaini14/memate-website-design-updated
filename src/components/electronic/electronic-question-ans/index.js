import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import { Helmet } from "react-helmet-async";
const IndustyQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: "How can meMate help manage my repair shop more efficiently?",
      key: 0,
      answer:
        "meMate simplifies repair tracking, inventory management, and customer communication, streamlining operations so you can focus on repairs and customer satisfaction.",
    },
    {
      question: "Can I track repairs and communicate with clients through the software?",
      key: 1,
      answer:
        "Yes, meMate allows you to track every repair, update clients via SMS or email, and keep detailed notes on each job.",
    },
    {
      question:
        "Does meMate support multiple repair shops in different locations?",
      key: 2,
      answer:
        "Yes, meMate’s multi-location management feature lets you manage all your repair shops from one centralised system.",
    },
    {
      question:
        "How does meMate handle parts and expenses for each repair?",
      key: 3,
      answer:
        "You can account for all parts used and link the expenses directly to each repair project, allowing you to track costs and control your budget easily.",
    },
    {
      question:
        "Is there a feature to monitor employee performance and assign tasks?",
      key: 4,
      answer:
        "Yes, managers can assign repairs to multiple specialists, track their progress, and monitor performance through the scalable workflow feature.",
    },
    {
      question: "Can I quickly create quotes for repairs using meMate?",
      key: 5,
      answer:
        "Absolutely. With preset services, parts, and customisable margins, you can generate accurate quotes within minutes and ensure profitability.",
    },
    {
      question:
        "Does meMate keep a history of all past repairs, customer info, and parts used?",
      key: 6,
      answer:
        "Yes, meMate keeps detailed records of all repairs, item IDs, and customer information in one organised place for easy access.",
    },
    {
      question: "Does meMate have internal communication tools for my team?",
      key: 7,
      answer:
        "Yes, meMate includes an internal chat and task management system, helping your team collaborate efficiently and resolve issues quickly.",
    },
    {
      question:
        "Can I see real-time reports on my shop’s financial performance and repair profitability?",
      key: 8,
      answer:
        "Yes, meMate provides detailed insights into your shop’s profitability, expenses, and overall financial performance, helping you make informed decisions.",
    },
    {
      question: "Is meMate easy to set up and use for my repair shop?",
      key: 9,
      answer:
        "meMate is designed to be user-friendly, with a simple setup process. Our support team is also available to help ensure a smooth transition.",
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
                  transform: selectedQuestion === ques.key ? "rotate(45deg)" : "rotate(0deg)",
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

export default IndustyQuesitonAndAns;
