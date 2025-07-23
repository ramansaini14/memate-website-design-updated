import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: "What communication tools are included in a business management system?",
      key: 1,
      answer:
        "Most business management systems include tools such as email, SMS, in-app messaging, and notifications. These allow seamless communication between team members, contractors, and clients, all within one platform.",
    },
    {
      question: "Can I communicate with clients directly through the software?",
      key: 2,
      answer:
        "Yes, many business management systems allow you to send updates, quotes, and reminders via email or SMS directly to clients. You can track all communication in one place to maintain transparency and ensure nothing is missed.",
    },
    {
      question: "How does the system handle internal communication with my team?",
      key: 3,
      answer:
        "Business management software typically offers in-app messaging, chat functions, and task assignment features to keep your team aligned. You can create and share notes, assign tasks, and provide updates on project progress within the system.",
    },
    {
      question: "Can I send automated reminders to clients?",
      key: 4,
      answer:
        "Yes, most business management systems include automated reminder features. You can schedule automatic reminders for quotes, payments, or project updates, ensuring timely communication with your clients.",
    },
    {
      question: "Does the software store communication history?",
      key: 5,
      answer:
        "Yes, communication history is stored within the system. This includes all emails, SMS messages, and internal chats, ensuring that you can easily retrieve past conversations and updates at any time.",
    },
    {
      question: "Can I communicate with contractors and freelancers through the software?",
      key: 6,
      answer:
        "Absolutely. Business management systems typically include features for communicating with external contractors and freelancers. You can send updates, assign tasks, and share project details, all within the platform.",
    },
    {
      question: " How does the software support mobile communication?",
      key: 7,
      answer:
        "Most business management systems offer mobile apps that allow you to communicate on the go. You can send and receive messages, share files, and receive project updates from your phone or tablet.",
    },
    {
      question: "Can I track who has read or responded to messages in the system?",
      key: 8,
      answer:
        "Yes, many business management systems offer read receipts and tracking, so you can see who has opened or responded to your messages. This feature ensures accountability and helps follow up when necessary.",
    },
    {
      question: " Is it possible to send group messages within the system?",
      key: 9,
      answer:
        "Yes, you can often send group messages to teams, departments, or multiple stakeholders. This makes it easy to keep everyone informed at once, reducing the need for multiple follow-up communications.",
    },
    {
      question: "How secure is the communication within the system?",
      answer:
        "Communication within most business management systems is secure, using encryption and access controls to ensure that only authorized team members or clients can view the messages. This protects your business data and client information.",
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
