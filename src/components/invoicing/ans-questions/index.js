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
      question: "How does meMate help manage invoicing for my business?",
      key: 1,
      answer:
        "meMate allows you to seamlessly convert approved quotes into invoices, manage unpaid invoices, mark payments, and follow up with clients—all from one centralised platform.",
    },
    {
      question: "Can I send invoices directly to my clients from meMate?",
      key: 2,
      answer:
        "Yes, meMate enables you to send invoices directly to your clients after converting quotes or calculations into invoices, streamlining the billing process.",
    },
    {
      question: "How can I follow up on unpaid invoices in meMate?",
      key: 3,
      answer:
        "meMate offers preset templates that let you follow up on unpaid invoices with just a few clicks. This feature helps you remind customers when payments are due and reduces the volume of unpaid invoices.",
    },
    {
      question: "Can my clients pay their invoices online?",
      key: 4,
      answer:
        "Yes, meMate provides an option for your clients to pay invoices online, making the payment process quick and convenient for them.",
    },
    {
      question: "Does meMate allow partial payments on invoices?",
      key: 5,
      answer:
        "Yes, meMate allows you to track and mark partial or full payments on invoices, giving you flexibility in how you manage client payments.",
    },
    {
      question: "How does the accounting link feature work in meMate?",
      key: 6,
      answer:
        "meMate integrates with popular accounting software like MYOB and Xero, allowing you to send all paid invoices directly to your accounting system in one go. This keeps your records organised and up to date.",
    },
    {
      question: "Can I print invoices from meMate?",
      key: 7,
      answer:
        "Yes, you can easily print invoices that require attention or follow-up, helping you manage your invoicing process both digitally and on paper.",
    },
    {
      question: "Can I send clients a summary of their outstanding invoices?",
      key: 8,
      answer:
        "Absolutely. meMate allows you to send clients a complete statement of their outstanding invoices, ensuring they are informed of any pending payments.",
    },
    {
      question: "How does meMate help reduce unpaid invoices?",
      key: 9,
      answer:
        "meMate includes automated follow-up features using customisable templates that remind clients when invoices are due. This helps reduce the number of unpaid invoices and improves cash flow.",
    },
    {
      question: "Is it easy to track invoice statuses in meMate?",
      answer:
        "Yes, meMate keeps all your invoices in one place, allowing you to easily track their status—whether they are paid, unpaid, or partially paid.",
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
