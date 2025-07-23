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
      question: "How does budgeting work in meMate?",
      key: 1,
      answer:
        "meMate allows you to set budgets right from the initial quotation stage. You can assign specific budgets for each product or service and track project-related expenses in real time to ensure profitability.",
    },
    {
      question: "Can I track project profitability in real time with meMate?",
      key: 2,
      answer:
        "Yes, meMate provides real-time tracking of project profitability by monitoring expenses, contracts, invoices, and cost of sales, giving you an up-to-date view of your profit margins.",
    },
    {
      question: "How does meMate help control operational expenses?",
      key: 3,
      answer:
        "meMate links every expense to a specific project, ensuring accurate tracking. If an expense isn’t tied to a project, it is categorised under operational expenses, allowing you to maintain full control over your business costs.",
    },
    {
      question: "Can meMate handle both product and service budgeting?",
      key: 4,
      answer:
        "Absolutely. meMate’s budgeting feature covers both products and services. You can set predefined budgets for each, ensuring consistency and reducing the risk of errors during the quotation and budgeting process.",
    },
    {
      question: "Does meMate allow margin and markup calculations?",
      key: 5,
      answer:
        "Yes, meMate automatically calculates margins and markups for each product or service, converting them into operational profit. This ensures you’re aware of profitability at every step of the project.",
    },
    {
      question: "How does meMate help reduce mistakes in the budgeting process?",
      key: 6,
      answer:
        "With meMate’s preset calculators for products and services, managers can quickly and accurately select budgets during the quotation process. This reduces manual errors and ensures consistency in pricing and profitability.",
    },
    {
      question: "Can I see a detailed breakdown of project costs in meMate?",
      key: 7,
      answer:
        "Yes, meMate provides a detailed breakdown of project costs, including the cost of sales, operational expenses, contracts, and invoices. This gives you a complete picture of each project’s financial performance.",
    },
    {
      question: "How can I allocate expenses across multiple projects in meMate?",
      key: 8,
      answer:
        "If an expense isn’t directly linked to a specific project, meMate automatically distributes it across multiple projects under operational expenses, ensuring accurate accounting and tracking.",
    },
    {
      question: "Does meMate offer profit and loss reports for projects?",
      key: 9,
      answer:
        "Yes, meMate allows you to generate profit and loss reports for individual projects, giving you a clear view of profitability at both the project and business levels.",
    },
    {
      question: "Can I adjust budgets mid-project in meMate?",
      answer:
        "Yes, meMate offers flexibility to adjust budgets mid-project as needed. You can monitor real-time expenses and profitability to ensure your project stays within budget and meets profitability targets.",
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
