import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import { Helmet } from "react-helmet-async";
const AutomotiveQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: "How can meMate help my car wrapping or detailing business?",
      key: 0,
      answer:
        "meMate streamlines operations by managing quotes, projects, employee tasks, and client communication, all in one easy-to-use platform.",
    },
    {
      question: "Can I track profitability for each vehicle project?",
      key: 1,
      answer:
        "Yes, meMate allows you to allocate material expenses and track time spent by employees and contractors, giving you clear insight into the profitability of each project.",
    },
    {
      question:
        "Does meMate help reduce customer no-shows?",
      key: 2,
      answer:
        "Absolutely. By scheduling projects with full details and booking appointments directly in the system, you can minimize customer no-shows and keep your calendar organized.",
    },
    {
      question:
        "How does meMate handle quotes and invoicing?",
      key: 3,
      answer:
        "meMate makes quoting and invoicing fast and simple. You can create accurate quotes in seconds using preset services and products, and manage invoices through the same platform.",
    },
    {
      question:
        "Can I manage contractors through meMate?",
      key: 4,
      answer:
        "Yes, you can assign tasks to contractors, track their work, and approve it upon completion. The system also allows for easy weekly invoicing from contractors.",
    },
    {
      question: "Does meMate help track client and supplier interactions?",
      key: 5,
      answer:
        "Yes, meMate maintains a comprehensive database of all client and supplier interactions, helping you track your entire history and manage relationships effectively.",
    },
    {
      question:
        "How can I motivate my team with meMate?",
      key: 6,
      answer:
        "meMate allows you to set target results and track performance, enabling you to reward your best-performing employees and keep your team motivated.",
    },
    {
      question: "Is every action recorded in the system?",
      key: 7,
      answer:
        "Yes, meMate records every action related to quotes, jobs, invoices, and purchase orders. The system is designed to ensure transparency and prevent any alterations to recorded data.",
    },
    {
      question:
        "Can I manage multiple locations with meMate?",
      key: 8,
      answer:
        "Yes, meMate supports multi-location management, allowing you to control and track operations across multiple workshops from a single system.",
    },
    {
      question: "Is meMate easy to set up for my car wrapping or detailing shop?",
      key: 9,
      answer:
        "meMate is designed for simplicity, with an intuitive setup process. You can start managing your business quickly, with our support team available to assist if needed.",
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

export default AutomotiveQuesitonAndAns;
