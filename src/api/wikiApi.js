export const wikiBase = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://admin.memate.com.au/api/get-wiki", requestOptions);
      const result = await response.json(); 
      return result;
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }

  };
export const wikiBaseId = async (idData ) => {
  

    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`https://admin.memate.com.au/api/get-wiki-by-id/${idData }`, requestOptions);
      const result = await response.json(); 
  
      return Array.isArray(result.data) ? result.data : [];
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };

export const wikiBaseDtails = async (titleSlug) => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`https://admin.memate.com.au/api/wiki-detail/${titleSlug}`, requestOptions);
      const result = await response.json(); 
  
  
      return Array.isArray(result.data) ? result.data : [];
      
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };


  export const wikiBaseBSearch = async (searchQuery) => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(`https://admin.memate.com.au/api/get-wiki?search=${searchQuery}`, requestOptions);
      const result = await response.json(); 
  
      return result;
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };
  

