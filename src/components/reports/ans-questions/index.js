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
      question: "What types of reports does meMate provide?",
      key: 1,
      answer:
        "meMate offers a variety of reports, including executive reports, business overviews, conversion reports, target reports, and profit and loss reports. These help you track performance, monitor goals, and make informed decisions.",
    },
    {
      question: "Can I track real-time business performance with meMate?",
      key: 2,
      answer:
        "Yes, meMate provides real-time reports that allow you to monitor key metrics like quotes, payments, receivables, invoices, and unpaid amounts. You can also compare this data with previous periods, such as last month.",
    },
    {
      question: "What is the executive reporting feature in meMate?",
      key: 3,
      answer:
        "Our executive reports are designed based on feedback from business owners and continuous surveys. They give you a high-level overview of business performance, helping you make strategic decisions without losing functionality.",
    },
    {
      question: "Can I set and track team targets in meMate?",
      key: 4,
      answer:
        "Yes, meMate allows you to set monthly targets for your team and track their results in real time. These reports are essential for monitoring team performance and meeting business goals.",
    },
    {
      question: "How does the conversion reporting feature work?",
      key: 5,
      answer:
        "Conversion reports track every step of the process, from receiving requests to processing quotes and converting them into projects. You can view detailed numbers at each stage to make better executive decisions.",
    },
    {
      question: "Does meMate offer profit and loss reports?",
      key: 6,
      answer:
        "Yes, meMate provides classic profit and loss reports, allowing you to analyse the financial performance of your business. These reports give a clear breakdown of profits, losses, and project costs.",
    },
    {
      question: "Can I monitor departmental performance with meMate?",
      key: 7,
      answer:
        "Yes, each department’s performance is automatically tracked based on project cost breakdowns. This allows you to identify strong and weak products or services and make data-driven decisions.",
    },
    {
      question: "How customisable are the reports in meMate?",
      key: 8,
      answer:
        "meMate offers a range of pre-built reports, but if there’s something specific you need, you can reach out to us, and we’ll develop custom reporting tailored to your business requirements.",
    },
    {
      question: "Can I compare current performance with previous periods?",
      key: 9,
      answer:
        "Yes, meMate allows you to compare current metrics with past periods, such as last month or quarter. This helps you track growth and spot trends in your business performance.",
    },
    {
      question: "Can I access reports through the mobile app?",
      answer:
        "Yes, meMate’s mobile app allows you to access real-time reports on the go, ensuring you can monitor performance and make informed decisions no matter where you are.",
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
