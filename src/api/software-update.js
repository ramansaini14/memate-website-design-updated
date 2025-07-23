export const updateList = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://admin.memate.com.au/api/update", requestOptions);
      const result = await response.json(); 
      console.log("API response:", result);
  
      return Array.isArray(result.data) ? result.data : [];
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };

export const updateListLatest = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Update-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82U");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://admin.memate.com.au/api/get-latest-five-update", requestOptions);
      const result = await response.json(); 
      console.log("API RESPONSE updateListLatest -- ", result);
      return Array.isArray(result.data) ? result.data : (Array.isArray(result) ? result : []);
  
    } catch (error) {
      console.error("Error fetching software updates:", error);
      return [];
    }
  };

