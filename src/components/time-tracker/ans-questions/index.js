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
      question: "What is time tracking, and how does meMate handle it?",
      key: 1,
      answer:
        "Time tracking is the process of monitoring work hours for employees and contractors. With meMate, you can track time in real time using a specially designed mobile application, making workforce time management seamless and efficient.",
    },
    {
      question: "Can meMate replace traditional clock-in/clock-out devices?",
      key: 2,
      answer:
        "Yes, meMate eliminates the need for traditional clock-in/clock-out devices. Employees and contractors can log their work hours directly through the app, simplifying shift management and reducing hardware costs.",
    },
    {
      question: "How does meMate handle contractor time tracking?",
      key: 3,
      answer:
        "meMate provides a unified dashboard for contractor time tracking. You can monitor their hours in real time, view performance metrics, and ensure accurate project billing through the platform.",
    },
    {
      question: "Can I link time tracking to specific projects in meMate?",
      key: 4,
      answer:
        "Absolutely. meMate connects time tracking with your business projects, allowing you to monitor the time spent on each project by employees and contractors. This helps improve resource allocation and project profitability.",
    },
    {
      question: "Does meMate offer time tracking for both office and on-site work?",
      key: 5,
      answer:
        "Yes, meMate allows you to monitor employee work hours in the office and on-site. The mobile app provides convenience for employees and contractors to log their time from anywhere.",
    },
    {
      question: " How does meMate help with time tracking and reporting?",
      key: 6,
      answer:
        "meMate tracks time in real time and generates detailed reports on a weekly basis. These reports help businesses automate processes, monitor productivity, and ensure accurate payroll calculations.",
    },
    {
      question: " Is real-time time tracking available in meMate?",
      key: 7,
      answer:
        "Yes, meMate offers real-time time tracking for employees and contractors. You can view live updates on work hours and shift statuses through the integrated dashboard.",
    },
    {
      question: "Can meMate generate reports for time spent on shifts and projects?",
      key: 8,
      answer:
        "Yes, meMate provides detailed time tracking and reporting for each shift and project. Reports are generated automatically and can be reviewed on a weekly basis for better decision-making.",
    },
    {
      question: "How does meMate ensure accurate time tracking for small businesses?",
      key: 9,
      answer:
        "meMate combines user-friendly tools with advanced time tracking features to help small businesses manage work hours efficiently. The app provides easy logging, real-time updates, and clear reporting.",
    },
    {
      question: "Why is time tracking important for my business, and how does meMate support it?",
      answer:
        "Time tracking is essential for monitoring productivity, managing payroll, and improving project profitability. meMate supports your business with features like employee work hour monitoring, contractor time tracking, and project-based time tracking—all accessible from a single platform.",
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
