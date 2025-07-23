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
      question: "What is meMate’s project management system, and why do I need it?",
      key: 1,
      answer:
        "meMate’s project management system helps businesses plan, manage, and track projects seamlessly. It provides the tools needed to subdivide projects, assign tasks, and monitor progress, making it easier to keep your team on track and your projects under control.",
    },
    {
      question: "What are the key features of meMate’s project management system?",
      key: 2,
      answer:
        "meMate offers a comprehensive dashboard where you can manage ongoing projects, subdivide tasks, assign jobs to contractors or employees, track expenses, and view real-time updates on progress and budgets. You can also send client updates and keep all project records organized in one place.",
    },
    {
      question: "How does meMate improve team collaboration?",
      key: 3,
      answer:
        "With meMate, teams can easily collaborate by assigning tasks, sharing updates, linking important documents, and communicating directly within the project’s dashboard. Real-time updates ensure that everyone stays informed and aligned with the project’s progress.",
    },
    {
      question: "Is meMate’s project management system secure?",
      key: 4,
      answer:
        "Yes, meMate ensures that your project data is secure. We use encryption and access controls to protect your information, allowing you to manage projects confidently in a safe environment.",
    },
    {
      question: "Can meMate track time and expenses for projects?",
      key: 5,
      answer:
        "Absolutely. meMate automatically tracks time assigned by employees and expenses linked to your projects. This helps you monitor your project budget and operational profit in real-time, ensuring accurate financial management.",
    },
    {
      question: "How do I know if meMate is the right project management software for my business?",
      key: 6,
      answer:
        "meMate is designed for businesses looking for an easy-to-use, feature-rich project management tool. If you need a system that simplifies task management, budgeting, and team collaboration, then meMate is a great fit for your business.",
    },
    {
      question: " Can I customise meMate’s project management system to fit my workflow?",
      key: 7,
      answer:
        "Yes, meMate allows you to customise project statuses, colours, and filters. This flexibility helps you organise your projects and find what you need quickly, making the system adaptable to your team’s unique workflow.",
    },
    {
      question: "How does real-time tracking in meMate work?",
      key: 8,
      answer:
        "meMate offers real-time updates on your project’s progress, including expenses, job assignments, and tasks. Any updates made by team members are instantly reflected in the dashboard, so you always have the most up-to-date information.",
    },
    {
      question: " Is meMate suitable for small businesses?",
      key: 9,
      answer:
        "Yes, meMate is perfect for small businesses. It simplifies project management, helps track budgeting and tasks, and improves team efficiency—all from one easy-to-use platform. It’s scalable, so it can grow with your business.",
    },
    {
      question: "Does meMate integrate with other tools?",
      answer:
        "Yes, meMate integrates with various tools for CRM, email, and file storage, allowing you to connect it with the systems your business already uses. This streamlines your workflow and reduces manual data entry.",
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
