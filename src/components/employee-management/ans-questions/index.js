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
      question: "How does meMate handle employee time tracking?",
      key: 1,
      answer:
        "meMate offers integrated time tracking with a clock-in/clock-out feature, allowing employees to log their hours via the mobile app. Timesheets are automatically generated based on approved time entries, streamlining the process for managers.",
    },
    {
      question: "Can I manage shifts and time-off requests in meMate?",
      key: 2,
      answer:
        "Yes, meMate allows you to allocate shifts to your team and provides functionality for employees to submit sick leave and holiday requests. All of this is managed in the all-in-one team management dashboard.",
    },
    {
      question: "Does meMate offer mobile access for employees?",
      key: 3,
      answer:
        "Absolutely. meMate’s mobile application allows employees to clock in, clock out, submit timesheets, and view tasks and schedules. It ensures seamless access to important work tools, even on the go.",
    },
    {
      question: "How does meMate help with task allocation?",
      key: 4,
      answer:
        "With meMate, you can allocate tasks directly from a project to individual team members using the mobile app. Employees can track their tasks, add notes, and collaborate with others through group chats within the app.",
    },
    {
      question: "Can I track operating costs in real time with meMate?",
      key: 5,
      answer:
        "Yes, meMate allows you to track operating costs in real time based on employee rates and submitted hours. This helps you monitor labor expenses and maintain accurate financial tracking.",
    },
    {
      question: "How does the Smart Timesheets feature work?",
      key: 6,
      answer:
        "meMate’s Smart Timesheets feature eliminates the need for third-party applications. Employees can submit their time, and the system automatically generates timesheets based on approved hours from the previous week.",
    },
    {
      question: "Can meMate help my team stay organized?",
      key: 7,
      answer:
        "Yes, the meMate Work Application is designed to help each team member stay organized. It includes a built-in to-do list and calendar, ensuring everyone is on top of their tasks and deadlines.",
    },
    {
      question: " Is team communication supported in meMate?",
      key: 8,
      answer:
        "Yes, meMate supports team communication through group chats. Team members can discuss projects, share updates, and add notes directly within the app, making collaboration seamless.",
    },
    {
      question: "How does meMate handle employee accountability?",
      key: 9,
      answer:
        "meMate makes employee accountability easy by tracking time spent on tasks and projects. It provides real-time visibility into your team’s work hours and operating costs, ensuring accurate and accountable performance tracking.",
    },
    {
      question: "Can I generate reports on employee performance with meMate?",
      answer:
        "Yes, meMate provides reporting features that allow you to monitor employee performance, time logged, and task completion. This helps you evaluate productivity and make informed management decisions.",
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
