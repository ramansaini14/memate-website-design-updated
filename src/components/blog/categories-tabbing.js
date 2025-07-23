import React, { useState, useEffect } from "react";

const CategoriesTabbing = ({ PostsCategories }) => {
  const [postCateId, setPostCateId] = useState()
  console.log('postCateId: ', postCateId);
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem("activeCategory")
      ? Number(localStorage.getItem("activeCategory"))
      : PostsCategories[0]?.id;
  });

  const handleTabClick = (categoryId) => {
    setActiveCategory(categoryId);
    setPostCateId(categoryId);

  };

  useEffect(() => {
    if (activeCategory !== null) {
      localStorage.setItem("activeCategory", activeCategory);
    }
  }, [activeCategory]);

  return (
    <div className="categoriesMainWrap">
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
        {PostsCategories?.map((postCat) => (
          <button
            key={postCat.id}
            className={`filterBlogTabBtn ${activeCategory === postCat.id ? "active" : ""
              }`}
            onClick={() => handleTabClick(postCat.id)}
          >
            {postCat.title}
            {postCat.id}
          </button>
        ))}
      </div>

      {/* Posts under Active Category */}
      <div className="categories">
        {PostsCategories?.map((postCat) => (
          <div key={postCat.id}>
            {activeCategory === postCat.id &&
              postCat.posts?.map((post) => (
                <div key={post.id} style={{ marginBottom: "0.5rem" }}>
                  {post.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesTabbing;
