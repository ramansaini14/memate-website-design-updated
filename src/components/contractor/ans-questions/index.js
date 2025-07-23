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
      question: "How do I add a contractor in meMate?",
      key: 1,
      answer:
        "You can easily add a contractor by navigating to the Contractors Management section in meMate, where you can input their details like name, contact information, rate, and any other necessary information. Once added, you can assign jobs and manage contracts with them.",
    },
    {
      question: "Can I track the performance of my contractors in meMate?",
      key: 2,
      answer:
        "Yes, meMate allows you to monitor your contractors’ performance. You can track job completion status, time spent, and invoicing, ensuring you have all the data you need to evaluate their work.",
    },
    {
      question: "How do I assign tasks to contractors?",
      key: 3,
      answer:
        "Tasks can be assigned by creating a new project or job and selecting the contractor from the list. You can define whether it’s an hourly or fixed-rate job and set deadlines. Contractors will receive notifications through the meMate app.",
    },
    {
      question: "Can contractors submit their invoices through meMate?",
      key: 4,
      answer:
        " Yes, once a contractor completes their work, they can submit their invoice directly through meMate. Invoices are linked to the specific job or project, making it easy to track and approve payments.",
    },
    {
      question: "How do contractors accept jobs in meMate?",
      key: 5,
      answer:
        "Contractors receive job notifications via the meMate app. They can then review the details and accept or decline the work. Once accepted, the job is added to their task list.",
    },
    {
      question: "Can I manage multiple contractors at once in meMate?",
      key: 6,
      answer:
        "Yes, meMate is designed to handle multiple contractors simultaneously. You can assign jobs to individual contractors or groups of contractors and track their progress in one centralized location.",
    },
    {
      question: " How do I set payment terms for contractors?",
      key: 7,
      answer:
        "Payment terms, including hourly or fixed rates, can be set when you create the job or contract. You can also add milestones or progress payments depending on the nature of the job.",
    },
    {
      question: "Can I send reminders to contractors about their shifts or tasks?",
      key: 8,
      answer:
        " Yes, meMate sends automatic reminders to contractors about upcoming tasks, deadlines, and payments to ensure that everything runs smoothly and contractors are aware of their responsibilities.",
    },
    {
      question: " How do I communicate with contractors through meMate?",
      key: 9,
      answer:
        "You can communicate with contractors via direct messaging or group chats in meMate. All conversations and notes related to a job are stored in one place for easy reference.",
    },
    {
      question: "Can I track the availability and scheduling of contractors?",
      answer:
        "Yes, you can manage contractor availability and schedule jobs based on their calendar in meMate. This allows you to ensure that you have the right contractor available when needed.",
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
