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
      question: "What is job approval software, and how does meMate support it?",
      key: 1,
      answer:
        "Job approval software streamlines the process of reviewing and approving work submissions. meMate simplifies job approvals by providing tools for tracking, assessing, and approving timesheets, job submissions, and claims, ensuring accuracy and compliance.",
    },
    {
      question: "How does meMate handle contractor job submissions?",
      key: 2,
      answer:
        "Contractors can submit completed jobs through meMate, including all necessary details such as planned budgets, actual costs, and time spent. Managers can review and approve these submissions directly from the system.",
    },
    {
      question: "Can I track claims and timesheets with meMate?",
      key: 3,
      answer:
        "Yes, meMate includes a dedicated claims monitoring system. Claims and timesheets are automatically directed to the approval section for managers to assess and approve efficiently.",
    },
    {
      question: "Does meMate support payment scheduling for approved jobs?",
      key: 4,
      answer:
        "Absolutely. Once a job or claim is approved, meMate automatically adds it to the payment schedule for the following week, ensuring timely and accurate payments.",
    },
    {
      question: "How does meMate help manage field service jobs?",
      key: 5,
      answer:
        "meMate integrates job scheduling, geolocation monitoring, and job approval features to manage field service jobs effectively. It tracks where jobs start and finish, helping to monitor on-site shifts and project progress.",
    },
    {
      question: "Can I adjust job prices for contractors in meMate?",
      key: 6,
      answer:
        "Yes, meMate allows for variation bonuses and deductions, enabling managers to adjust job prices based on specific circumstances while maintaining clear communication and an official workflow.",
    },
    {
      question: " How does meMate ensure transparency in the approval process?",
      key: 7,
      answer:
        "meMate provides comprehensive job details, including planned budgets, actual costs, and time spent, ensuring managers have all the necessary information to make informed decisions during the approval process.",
    },
    {
      question: "Does meMate support linking jobs and claims to projects?",
      key: 8,
      answer:
        "Yes, meMate allows you to link jobs, shifts, and claims to existing projects. This feature helps control project budgets and keeps all records centralized for better management.",
    },
    {
      question: "How does geolocation monitoring work in meMate?",
      key: 9,
      answer:
        "meMate’s geolocation system tracks where contractors start and finish jobs outside the office. This provides accurate data for managing shifts and ensuring accountability for on-site work.",
    },
    {
      question: "Why is job approval important for businesses, and how does meMate make it easier?",
      answer:
        "Job approval is crucial for ensuring accurate payments and tracking project progress. meMate simplifies this process with tools like workflow approval solutions, job submission tracking, and claims monitoring, making it easy to manage both employees and contractors.",
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
