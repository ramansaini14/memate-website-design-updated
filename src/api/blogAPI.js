export const blogList = async (page, limit, activeCategory) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
      // updatedAPI API %blame @ramansaini14 for changes 
      // status: committed on vps tunnel and changes staged automatically
    const response = await fetch(
      `https://admin.memate.com.au/api/news?page=${page}&limit=${limit}&category_id=${activeCategory || 0}`,
      requestOptions
    ); 
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found (404)');
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    console.log("API response blogList:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};



///blogSingle
export const blogSingle = async (slug) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/news/${slug}`, requestOptions);
    const result = await response.json();
    console.log("API response blogSingle:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};



////getCategories
export const getCategories = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/get-all-news-categories/`, requestOptions);
    const result = await response.json();
    console.log("API response getCategories:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

////getCategoriesID
export const getCategoriesID = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/get-all-news-categories/`, requestOptions);
    const result = await response.json();
    console.log("API response getCategoriesID:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
///fetchCategoryPost
export const fetchCategoryPost = async (postCateId) => {
  console.log('postCateId: ', postCateId);
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/news?category_id=${postCateId}`, requestOptions);
    const result = await response.json();
    console.log("API RESPONSE fetchCategoryPost -- ",result )
    return result;
  } catch {


  }
};


///fetchCategoryPost
export const slugTagsPost = async (slug) => {
  console.log('slugpppppppppppppppp------------: ', slug);
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`https://admin.memate.com.au/api/news-tag/${slug}`, requestOptions);
      const result = await response.json();
      console.log("API RESPONSE slugTagsPost -- ",result )

      return result;
    } catch {
  
  
    }
};


///blogLatest
export const blogLatest = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/get-latest-three-news`, requestOptions);
    const result = await response.json();
    console.log("API RESPONSE blogLatest -- ",result)

    return result;
  } catch {


  }
};



