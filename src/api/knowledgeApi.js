export const KnowledgeBase = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://admin.memate.com.au/api/knowledge", requestOptions);
      const result = await response.json(); 
  
      return Array.isArray(result.data) ? result.data : [];
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };
export const KnowledgeBSearch = async (searchTerm) => {
  console.log('searchTerms: ', searchTerm);
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch(`https://admin.memate.com.au/api/knowledge?searchTerm=${searchTerm}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));


  };