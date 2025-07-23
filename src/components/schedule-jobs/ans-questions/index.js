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
      question: "What is job scheduling software, and how does meMate help?",
      key: 1,
      answer:
        "Job scheduling software automates the assignment and management of tasks or shifts for employees and contractors. With meMate, you can schedule jobs and shifts effortlessly, monitor progress in real time, and streamline workflows for your team.",
    },
    {
      question: "How does meMate’s shift scheduling benefit businesses?",
      key: 2,
      answer:
        "meMate simplifies the scheduling process by allowing you to plan shifts, allocate tasks, and view everything in one screen. This ensures smooth operations, reduces scheduling conflicts, and improves team productivity.",
    },
    {
      question: "Can meMate handle scheduling for both employees and contractors?",
      key: 3,
      answer:
        "Yes, meMate is designed to manage assignments for both employees and contractors. It allows you to assign shifts or jobs, track progress, and communicate with all team members in one platform.",
    },
    {
      question: "Can I create reusable shift templates in meMate?",
      key: 4,
      answer:
        "Absolutely. meMate lets you create and save shift and job templates for recurring tasks, making weekly scheduling quick and efficient.",
    },
    {
      question: "How does the meMate mobile app enhance job scheduling?",
      key: 5,
      answer:
        "The meMate mobile app allows your team to view, accept, and manage their shifts or tasks on the go. It also includes features like clock-in/clock-out and group communication, ensuring real-time updates and seamless collaboration.",
    },
    {
      question: "Can meMate track time and attendance for employees and contractors?",
      key: 6,
      answer:
        "Yes, meMate includes time-tracking features. Employees and contractors can log their hours using the app, and timesheets are automatically generated for approval and payroll integration.",
    },
    {
      question: "How does meMate handle last-minute changes or shift swaps?",
      key: 7,
      answer:
        "meMate allows employees to request shift swaps or changes through the app, and managers can approve these updates instantly. This keeps the schedule flexible and adaptable to real-time needs.",
    },
    {
      question: "Can meMate help monitor employee and contractor workloads?",
      key: 8,
      answer:
        "Yes, meMate provides a clear overview of all assigned tasks and shifts, helping you assess workloads and optimise resource allocation to prevent overburdening your team.",
    },
    {
      question: "Does meMate integrate with other business systems?",
      key: 9,
      answer:
        "Yes, meMate integrates with payroll, project management, and other business tools, ensuring a seamless flow of information across different departments.",
    },
    {
      question: "Why should I choose meMate for job and shift scheduling?",
      answer:
        "meMate offers an all-in-one solution for job and shift scheduling, combining features like time tracking, real-time monitoring, mobile app access, and detailed reporting. It simplifies workforce management, making it an excellent choice for businesses of any size.",
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
