import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import { Helmet } from "react-helmet-async";
const StartupsQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const questions = [
    {
      question: "Why is meMate a good choice for startups?",
      key: 0,
      answer:
        "meMate is ideal for startups because it provides an all-in-one solution for managing projects, invoicing, job scheduling, budgeting, and profitability tracking. It simplifies operations, allowing startups to focus on growth without the need for multiple software tools.",
    },
    {
      question: "Can meMate help with budgeting for a new business?",
      key: 1,
      answer:
        "Yes, meMate helps startups set and manage budgets from the initial quotation stage. You can track every expense in real time, monitor profitability, and ensure your business stays on track financially.",
    },
    {
      question:
        " How does meMate handle invoicing for startups?",
      key: 2,
      answer:
        "meMate allows you to convert quotes into invoices, manage unpaid invoices, and send reminders with just a few clicks. It also integrates with accounting software like MYOB and Xero, ensuring your financials stay organized.",
    },
    {
      question:
        " Can meMate scale with my startup as it grows?",
      key: 3,
      answer:
        "Absolutely. meMate is designed to grow with your business. Whether you’re managing a small team or expanding operations, the system is flexible enough to handle increasing demands, including multi-location and multi-department management.",
    },
    {
      question:
        "How does meMate help startups manage teams and projects?",
      key: 4,
      answer:
        "meMate offers job scheduling, time tracking, and task assignment features. You can manage shifts, assign jobs to contractors, and track your team’s progress—all from one platform.",
    },
    {
      question: "Is meMate easy to use for startups with limited technical expertise?",
      key: 5,
      answer:
        "Yes, meMate is user-friendly and designed to be intuitive, even for startups with limited technical expertise. Its clean interface and simple navigation help you manage your business without the need for a dedicated operations manager.",
    },
    {
      question:
        "Does meMate offer reporting tools for startups?",
      key: 6,
      answer:
        "Yes, meMate provides a variety of reports, including business overviews, profitability tracking, and conversion reports. These tools help startups monitor performance, track financials, and make data-driven decisions.",
    },
    {
      question: "How does meMate help improve cash flow for startups?",
      key: 7,
      answer:
        "meMate automates invoicing, allows online payments, and provides follow-up templates for unpaid invoices. This ensures timely payments, which improves cash flow—a critical factor for startups.",
    },
    {
      question:
        "Can I manage contractors and freelancers with meMate?",
      key: 8,
      answer:
        "Yes, meMate allows you to assign tasks, track time, and communicate with contractors and freelancers directly through the platform. It also helps process their invoices, making it easy to manage external teams.",
    },
    {
      question: "Is meMate affordable for startups?",
      key: 9,
      answer:
        "meMate is designed to be cost-effective, offering a comprehensive business management solution without the need for multiple expensive tools. It helps startups manage their business efficiently while keeping costs under contro",
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

export default StartupsQuesitonAndAns;
