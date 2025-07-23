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
      question: "What features does memate offer as a Sales Management Software?",
      key: 1,
      answer:
        "Memate, as a comprehensive Sales Management Software, offers a range of features including real-time sales tracking, customer relationship management, and performance analytics to help businesses streamline their sales operations and enhance productivity.",
    },
    {
      question: "How does memate enhance efficiency with its Sales Pipeline Management Tool?",
      key: 2,
      answer:
        "Memate’s Sales Pipeline Management Tool provides a visual representation of your sales pipeline, allowing you to effectively monitor and manage each stage of the sales process. This tool helps in identifying bottlenecks and optimizing sales strategies for better conversion rates.",
    },
    {
      question: "What advantages does memate’s CRM Sales Tool offer for Small Businesses?",
      key: 3,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "Can memate be used for Sales Tracking in various industries?",
      key: 4,
      answer:
        "Yes, memate’s Sales Tracking Software is versatile and can be effectively used across different industries. It offers customizable features that cater to the unique needs of each industry, enhancing tracking accuracy and providing valuable insights into sales trends.",
    },
    {
      question: "What makes memate a reliable Lead Management Solution?",
      key: 5,
      answer:
        "Memate provides a robust Lead Management Solution that automates the capture, tracking, and nurturing of leads. It integrates seamlessly with marketing efforts to ensure that no opportunity is missed and helps in converting leads into loyal customers.",
    },
    {
      question: "How does memate optimise business operations with its Sales Process Optimisation Software?",
      key: 6,
      answer:
        "Memate’s Sales Process Optimisation Software uses advanced analytics and automation tools to streamline and enhance sales processes. It reduces redundancy, accelerates workflows, and ensures that sales efforts are aligned with business goals.",
    },
    {
      question: "What is unique about memate’s Pipeline Management Software?",
      key: 7,
      answer:
        "Memate’s Pipeline Management Software stands out for its intuitive design and powerful analytics. It helps businesses monitor their sales pipeline in real-time, providing actionable insights to prioritize and push deals towards closure more efficiently.",
    },
    {
      question: "How can memate’s Sales Funnel for Small Business help in growth?",
      key: 8,
      answer:
        "Memate’s Sales Funnel tool is specifically designed for small businesses, focusing on guiding potential customers through each stage of the buying process. It helps in refining marketing strategies and improving conversion rates, essential for growth and scalability.",
    },
    {
      question: "What features does memate include in its Sales Pipeline Software?",
      key: 9,
      answer:
        "Memate’s Sales Pipeline Software includes features like automated task management, detailed reporting, and customer engagement tracking. These features help in maintaining a healthy sales pipeline and ensure consistent sales growth.",
    },
    {
      question: "Why choose memate for Lead Management Software?",
      answer:
        "Choosing memate for Lead Management Software means selecting a system that offers comprehensive lead segmentation, automated follow-ups, and detailed performance reporting, making it easier to manage leads and convert them into successful sales.",
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
