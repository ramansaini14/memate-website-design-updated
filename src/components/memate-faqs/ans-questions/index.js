import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
import style from "../mematefaqs.module.scss";
const FilterIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/search-filter.svg";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const questions = [
    {
      question: "What is MeMate?",
      key: 1,
      answer:
        "MeMate is an all-in-one business management software designed to streamline operations, enhance collaboration, and provide real-time insights into company performance.",
    },
    {
      question: "What features does MeMate offer?",
      key: 2,
      answer:
        "MeMate offers client management, project management, workflow automation, CRM, invoicing, reporting, and more to support various business processes.",
    },
    {
      question: "Is MeMate suitable for small businesses?",
      key: 3,
      answer:
        "Yes, MeMate is tailored for small to medium-sized enterprises, providing scalable solutions to meet diverse business needs.",
    },
    {
      question: "Can MeMate integrate with other software?",
      key: 4,
      answer:
        "Yes, MeMate integrates with various tools, including accounting software like Xero, to ensure seamless data flow across platforms.",
    },
    {
      question: "How does MeMate enhance project management?",
      key: 5,
      answer:
        "MeMate provides tools for task assignments, shared calendars, document sharing, and real-time updates to boost collaboration and productivity.",
    },
    {
      question: "What industries benefit from MeMate?",
      key: 6,
      answer:
        "Industries such as creative agencies, electronic repair specialists, automotive services, and construction can leverage MeMate’s features.",
    },
    {
      question: "	Is MeMate cloud-based?",
      key: 7,
      answer:
        "Yes, MeMate is a cloud-based solution, allowing access from anywhere with an internet connection.",
    },
    {
      question: "How does MeMate handle client management?",
      key: 8,
      answer:
        "MeMate centralises client information, order histories, communications, and performance data for easy access and management.",
    },
    {
      question: " Does MeMate support workflow automation?",
      key: 9,
      answer:
        "	Yes, MeMate automates repetitive tasks, streamlining business processes and improving efficiency.",
    },
    {
      question: "Can MeMate assist with invoicing and billing?",
      answer:
        "Yes, MeMate generates quotes and invoices automatically, simplifying the billing process.",
      key: 10,
    },
    {
      question: "Is there a mobile app for MeMate?",
      answer:
        "Information about a mobile app is not specified; please contact MeMate for details.",
      key: 11,
    },
    {
      question: "How does MeMate ensure data security?",
      answer:
        "	MeMate employs robust security measures to protect business data; specific details can be obtained from their support team.",
      key: 12,
    },
    {
      question: "What customer support does MeMate offer?",
      answer:
        "MeMate provides support through various channels; for specifics, please refer to their contact information.",
      key: 13,
    },
    {
      question: "Can MeMate track employee performance?",
      answer:
        "Yes, MeMate offers features to monitor team progress and performance metrics.",
      key: 14,
    },
    {
      question: "Is training available for new users?",
      answer:
        "MeMate offers resources to assist new users; please inquire directly for training options.",
      key: 15,
    },
    {
      question: "How does MeMate handle reporting?",
      answer:
        "MeMate provides comprehensive reports on company performance, financials, and project statuses.",
      key: 16,
    },
    {
      question: "Can MeMate manage multiple projects simultaneously?",
      answer:
        "Yes, MeMate is designed to handle multiple projects, providing tools to manage tasks, schedules, and resources effectively.",
      key: 17,
    },
    {
      question: "Does MeMate offer customisation?",
      answer:
        "MeMate provides customisation options to tailor the software to specific business needs.",
      key: 18,
    },
    {
      question: "	Is there a free trial for MeMate?",
      answer:
        "	Information about a free trial is not specified; please contact MeMate for trial options.",
      key: 19,
    },
    {
      question: "How does MeMate assist with time tracking?",
      answer:
        "MeMate includes time tracking features to monitor work hours and project time allocation.",
      key: 20,
    },
    {
      question: "Can MeMate handle multi-location management?",
      answer:
        "Yes, MeMate supports businesses with multiple locations, offering centralised management tools.",
      key: 21,
    },
    {
      question: "What are the pricing plans for MeMate?",
      answer:
        "MeMate offers various pricing plans; details can be found on their pricing page.",
      key: 22,
    },
    {
      question: "How does MeMate improve team communication?",
      answer:
        "MeMate provides internal chat and communication tools to facilitate team collaboration.",
      key: 23,
    },
    {
      question: "Can MeMate generate financial forecasts?",
      answer:
        "Yes, MeMate offers features for financial forecasting and budgeting.",
      key: 24,
    },
    {
      question: "Is MeMate suitable for startups?",
      answer:
        "Yes, MeMate’s scalable solutions make it ideal for startups aiming to streamline operations.",
      key: 25,
    },
    {
      question: "How does MeMate handle task management?",
      answer:
        "MeMate provides tools for task assignments, tracking, and prioritisation to enhance productivity.",
      key: 26,
    },
    {
      question: "Can MeMate assist with compliance management?",
      answer:
        "MeMate offers features to help businesses adhere to industry regulations; specifics can be obtained from their support team.",
      key: 27,
    },
    {
      question: "Does MeMate support remote teams?",
      answer:
        "Yes, MeMate’s cloud-based platform facilitates collaboration among remote teams.",
      key: 28,
    },
    {
      question: "How does MeMate handle data backups?",
      answer:
        "MeMate implements data backup protocols; for detailed information, please contact their support.",
      key: 29,
    },
    {
      question: "What makes MeMate different from other business management software?",
      answer:
        "MeMate offers a comprehensive, all-in-one solution tailored for Australian businesses, integrating various management tools into a single platform.",
      key: 30,
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
      mainEntity: questions.map((ques) => ({
        "@type": "Question",
        name: ques.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: ques.answer,
        },
      })),
    };
    return JSON.stringify(schema);
  };

  // Filter questions based on search query
  const filteredQuestions = questions.filter((ques) =>
    ques.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={style.faquSearchFilterF}>
        <div className={style.searchFilterListF}>
        <img src={FilterIcon} alt='filter Icon' /> 
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={style.searchInput}
          />
        </div>
      </div>
      <div className={style.faqmaintitle}>
               <h1 className="h1tagsseo h1tagsseof fontWeight">
                      Frequently Asked Questions About MeMate
                    </h1>
        <h4>
         Discover answers to the most commonly asked questions about managing your business efficiently. 
        </h4>
        </div>
      <div className="question-answer-wrapper">
        {/* Inject JSON-LD Schema into the <head> */}
        <Helmet>
          <script type="application/ld+json">{generateFAQSchema()}</script>
        </Helmet>

        <div className={`question-answer-content question-answer-content-faqs ${style.faqmainquestionhead}`}>
          <div className="question-answer-heading-wrapperF">
            <h4>We answer your questions</h4>
          </div>
          <div className="questions-wrapperFQ">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((ques) => (
                <div key={ques.key} className="each-ques-wrapperFQ">
                  <div
                    className={`question-answer-quesFQ ${
                      selectedQuestion === ques.key ? "selected" : ""
                    }`}
                    onClick={() => toggleQuestion(ques.key)}
                  >
                    <p className="question-answer-ques-infoFQ">
                      {ques.question}
                    </p>
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
                    className={`question-answer-ans-infoFQ ${
                      selectedQuestion === ques.key ? "expanded" : ""
                    }`}
                  >
                    {selectedQuestion === ques.key && <p>{ques.answer}</p>}
                  </div>
                </div>
              ))
            ) : (
              <p>No questions found matching your search.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAnswer;
