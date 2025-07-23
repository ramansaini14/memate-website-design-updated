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
      question: "What is the main difference between MeMate and ServiceM8?",
      key: 1,
      answer:
        "MeMate is an all-in-one business management software designed for various industries, while ServiceM8 focuses primarily on field service management.",
    },
    {
      question: "Which software is better for small Australian businesses?",
      key: 2,
      answer:
        "Both MeMate and ServiceM8 cater to small businesses, but MeMate offers broader features like project management, quoting, and employee tracking, making it suitable for a wider range of industries.",
    },
    {
      question: "Is MeMate or ServiceM8 better for startups in Australia?",
      key: 3,
      answer:
        "MeMate is more versatile for startups, with tools for CRM, invoicing, and expense tracking, while ServiceM8 is ideal for field service-focused startups.",
    },
    {
      question: "How do MeMate and ServiceM8 handle customer relationship management (CRM)?",
      key: 4,
      answer:
        "MeMate includes a comprehensive CRM system for tracking leads and managing customer relationships. ServiceM8 has basic customer information management tools but lacks the depth of MeMate’s CRM features.",
    },
    {
      question: "	Does MeMate or ServiceM8 offer better project management tools?",
      key: 5,
      answer:
        "MeMate provides detailed project tracking, scheduling, and profitability tools, which are more advanced than ServiceM8’s task management for field jobs.",
    },
    {
      question: "Which platform offers better invoicing capabilities, MeMate or ServiceM8?",
      key: 6,
      answer:
        "MeMate offers flexible invoicing tailored to Australian GST requirements, while ServiceM8 provides basic invoicing features focused on field service businesses.",
    },
    {
      question: "Is MeMate or ServiceM8 better for job scheduling?",
      key: 7,
      answer:
        "Both platforms offer job scheduling, but MeMate provides more flexibility with tools for various industries, while ServiceM8 is tailored for field jobs.",
    },
    {
      question: "Which software supports remote teams better, MeMate or ServiceM8?",
      key: 8,
      answer:
        "MeMate supports remote teams with robust cloud-based features and project collaboration tools, while ServiceM8 is more suited for on-site teams in field services.",
    },
    {
      question: "Does MeMate or ServiceM8 integrate with Australian accounting software?",
      key: 9,
      answer:
        "Both MeMate and ServiceM8 integrate with popular Australian accounting software like Xero and MYOB.",
    },
    {
      question: "Which software offers better expense tracking, MeMate or ServiceM8?",
      answer:
        "MeMate includes detailed expense tracking tools that cater to various industries, while ServiceM8 focuses on job-specific cost tracking.",
      key: 10,
    },
    {
      question: "Which is more affordable for Australian businesses, MeMate or ServiceM8?",
      answer:
        "MeMate offers flexible pricing starting at $99.85 + GST, while ServiceM8 charges based on job volume, making MeMate more predictable for growing businesses.",
      key: 11,
    },
    {
      question: "Are there hidden fees with MeMate or ServiceM8?",
      answer:
        "MeMate has transparent pricing with no hidden costs. ServiceM8 may incur additional charges for higher job volumes or add-ons.",
      key: 12,
    },
    {
      question: "Do both MeMate and ServiceM8 offer free trials?",
      answer:
        "Yes, both platforms provide free trials for Australian businesses to explore their features.",
      key: 13,
    },
    {
      question: "Which software offers better value for Australian startups, MeMate or ServiceM8?",
      answer:
        "MeMate provides better value for startups looking for a comprehensive solution that includes CRM, invoicing, and project management.",
      key: 14,
    },
    {
      question: "Is MeMate or ServiceM8 better for field service businesses?",
      answer:
        "ServiceM8 is specifically designed for field service businesses, offering tools like job dispatching and mobile check-ins, while MeMate caters to a broader range of industries.",
      key: 15,
    },
    {
      question: "Which is better for creative agencies in Australia, MeMate or ServiceM8?",
      answer:
        "MeMate is better suited for creative agencies, offering tools for project tracking, invoicing, and expense management.",
      key: 16,
    },
    {
      question: "Does MeMate or ServiceM8 work better for construction businesses?",
      answer:
        "MeMate provides robust tools for project tracking, job allocation, and expense management, making it more suitable for construction businesses.",
      key: 17,
    },
    {
      question: "Can MeMate or ServiceM8 handle automotive workshops better?",
      answer:
        "MeMate’s features for job scheduling, invoicing, and tracking make it a better fit for automotive workshops than ServiceM8.",
      key: 18,
    },
    {
      question: "Which software has better Australian-based customer support, MeMate or ServiceM8?",
      answer:
        "Both MeMate and ServiceM8 offer Australian-based support, but MeMate’s team specialises in broader business solutions.",
      key: 19,
    },
    {
      question: "Is MeMate or ServiceM8 more user-friendly for Australian businesses?",
      answer:
        "MeMate’s intuitive design caters to various industries, while ServiceM8 is optimised for field service businesses, making usability dependent on business type.",
      key: 20,
    },
  ];

  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key);
  };

  // Generate FAQ Schema dynamically
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
          <p className="question-answer-heading">FAQs for Comparing MeMate and ServiceM8</p>
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
