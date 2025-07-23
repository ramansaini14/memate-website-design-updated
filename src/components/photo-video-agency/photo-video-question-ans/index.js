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
      question: "How can meMate help manage my photography or videography business?",
      key: 0,
      answer:
        "meMate streamlines client management, project scheduling, invoicing, and expense tracking, helping you stay organized and focus on your creative work.",
    },
    {
      question: "Can I track different projects and shoots through meMate?",
      key: 1,
      answer:
        "Yes, meMate allows you to track multiple projects or shoots, ensuring you stay on top of deadlines and client requirements.",
    },
    {
      question:
        "Does meMate handle client communication?",
      key: 2,
      answer:
        "Absolutely. You can communicate with clients via email or SMS, keeping them informed on project progress, approvals, and delivery timelines.",
    },
    {
      question:
        "How does meMate help with quoting and invoicing for photography or videography services?",
      key: 3,
      answer:
        "meMate makes quoting fast and accurate with preset services and pricing. You can send professional invoices and track payments easily within the system.",
    },
    {
      question:
        "Can I manage expenses for equipment and services with meMate?",
      key: 4,
      answer:
        "Yes, you can track expenses related to equipment, services, and projects to get a clear view of your costs and profitability.",
    },
    {
      question: "Does meMate support contract management for different clients and shoots?",
      key: 5,
      answer:
        "Yes, you can manage contracts, deliverables, and approvals, ensuring you stay organized and have everything in one place.",
    },
    {
      question:
        " How does meMate help with managing a photography or videography team?",
      key: 6,
      answer:
        "You can assign tasks to team members, track their progress, and ensure projects are completed on time. It also lets you monitor performance for more efficient teamwork.",
    },
    {
      question: "Can I track the profitability of each project or shoot?",
      key: 7,
      answer:
        "Yes, meMate allows you to allocate expenses and time spent on each project, helping you understand profitability at a granular level.",
    },
    {
      question:
        "Does meMate provide reminders for deadlines and client deliverables?",
      key: 8,
      answer:
        "Yes, meMate’s scheduling features include reminders for important deadlines, keeping you and your team on track.",
    },
    {
      question: " Is meMate easy to use for a creative professional?",
      key: 9,
      answer:
        "meMate is designed to be user-friendly and intuitive, so photographers and videographers can manage their business without complicated setups or steep learning curves.",
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
