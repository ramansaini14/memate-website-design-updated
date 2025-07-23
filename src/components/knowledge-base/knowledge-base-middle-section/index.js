import "./style.css";
import React, { useState, useEffect } from "react"; 
import { KnowledgeBase, KnowledgeBSearch } from "../../../api/knowledgeApi";
import { Link } from "react-scroll";
import _ from "lodash";

const MiddleSection = () => {
  const [knowledge, setKnowledge] = useState([]);
  console.log('knowledge: ', knowledge);
  const [activeItem, setActiveItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  console.log('searchTerm: ', searchTerm);
  const [filteredKnowledge, setFilteredKnowledge] = useState([]); 


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await KnowledgeBase();
        setKnowledge(data);
        setFilteredKnowledge(data);
        if (data.length > 0) {
          setActiveItem(data[0]?.id); 
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm) {
        try {
          const result = await KnowledgeBSearch(searchTerm);
          setFilteredKnowledge(result);
        } catch (error) {
          console.error(error);
        }
      } else {
        setFilteredKnowledge(knowledge); 
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleClick = (id) => {
    setActiveItem(id);
  };

  const handleSearch = _.debounce((term) => {
    setSearchTerm(term);
  }, 300);

  const handleKeyUp = (e) => {
    const term = e.target.value;
    handleSearch(term);  // Trigger the debounced search
  };

  return (
    <div className="kb-wrapper">
      <div className="kb-header">
        <div className="kb-searchbar-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M23.4843 20.6878C25.0658 18.5346 26 15.8764 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C15.8772 26 18.536 25.0653 20.6895 23.483L20.6878 23.4843C20.7468 23.5643 20.8125 23.6409 20.8849 23.7133L28.5858 31.4142C29.3668 32.1953 30.6332 32.1953 31.4142 31.4142C32.1953 30.6332 32.1953 29.3668 31.4142 28.5858L23.7133 20.8849C23.6409 20.8125 23.5643 20.7468 23.4843 20.6878ZM24 13C24 19.0751 19.0751 24 13 24C6.92487 24 2 19.0751 2 13C2 6.92487 6.92487 2 13 2C19.0751 2 24 6.92487 24 13Z"
              fill="#98A2B3"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>

      <div className="kb-left-wrapper">
        {filteredKnowledge?.map((item, index) => (
          <ul className="kb-list" key={index}>
            <li
              className={`kb-list-item ${activeItem === item.id ? 'kb-list-item-active' : ''}`}
            >
              <Link
                activeClass="kb-list-item-active"
                to={`section-${item.id}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </Link>
              
              {item.children && (
                <ul className="kb-nested-list">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className="kb-nested-list-item">
                      <Link
                        activeClass="kb-nested-list-item-active"
                        to={`subsection-${subItem.id}`}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleClick(subItem.id)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        ))}
      </div>

      <div className="kb-right-wrapper">
        {filteredKnowledge?.map((item, index) => (
          <div className="kb-right-section" key={index}>
            <h1 className="kb-section-heading" id={`section-${item.id}`}>
              {item.name}
            </h1>
            <p className="kb-section-date">
              {new Date(item.updated_at).toLocaleDateString()}
            </p>
            <br />
            <p className="kb-section-description">
              {item.description || "No description available"}
            </p>
            <br />

            {item.children && (
              <div className="kb-children-section">
                {item.children.map((child, childIndex) => (
                  <div key={childIndex}>
                    <h2 className="kb-child-heading" id={`subsection-${child.id}`}>
                      {child.name}
                    </h2>
                    <p className="kb-section-date">
                      {new Date(child.updated_at).toLocaleDateString()}
                    </p>
                    <p className="kb-section-description">
                      {child.knowledge && (
                        <>
                          {child.knowledge.map((knowledgeitem, knowledgeIndex) => (
                            <div key={knowledgeIndex}>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: knowledgeitem.description || "No description available",
                                }}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;
