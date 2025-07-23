export const supplierListApi = async (page, limit, search, searchKey) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const url = new URL(`https://admin.memate.com.au/api/supplier-lists`);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);

    if (search) url.searchParams.append("search", search);
    if (searchKey) {
      url.searchParams.append("starts_with", searchKey) 
      console.log("SEARCH KEY :",  searchKey)};

    const response = await fetch(`${url}`, requestOptions);
    const result = await response.json(); 
    console.log("API response SUPPLIER LISTS:", result);

    return result;

  } catch (error) {
    console.error("Error fetching Supplier:", error);
    return [];
  }
};

export const singlePostSupplier = async (slug) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/single-supplier/${slug}`, requestOptions);
    const result = await response.json(); 
    console.log("API response:", result);

    return result;

  } catch (error) {
    console.error("Error fetching Single Supplier:", error);
    return [];
  }
};




export const AddYourCompanyApi = async (formData) => {
  console.log('formData: ', formData);
  
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(formData), 
    redirect: "follow",
  };

  try {
    const response = await fetch("https://admin.memate.com.au/api/supplier", requestOptions);
    const result = await response.text();
    if (!response.ok) {
      throw new Error(result || 'Request failed');
    }
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};


export const industriesListing = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/supplier-industries`, requestOptions);
    const result = await response.json(); 
    return result;

  } catch (error) {
    console.error("Error fetching Single Supplier:", error);
    return [];
  }
};





export const fetchServicesByIndustryId = async (industryId) => {
  try {
    const response = await fetch(`https://admin.memate.com.au/api/supplier-services/${industryId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': '3fa85f64d51b6c8e74313f7c69aef82d'
      }
    });

    if (!response.ok) throw new Error('Failed to fetch services');

    const data = await response.json();
    console.log('Raw API response:', data); // 👈 Add this too

    return Array.isArray(data)
      ? data.map(service => ({
          value: service.id,
          label: service.title
        }))
      : [];
  } catch (error) {
    console.error('Error fetching services by industry ID:', error);
    return [];
  }
};


// export const RequestToEditData = async (formData) => {
//   console.log('formData: ', formData);

//   const cleanedData = { ...formData };
//   delete cleanedData.id;
//   if (cleanedData.supplier_id) {
//     cleanedData.supplier_id = Number(cleanedData.supplier_id);
//   }
//   if (cleanedData.supplier_industries_id) {
//     cleanedData.supplier_industries_id = Number(cleanedData.supplier_industries_id);
//   }

//   if (Array.isArray(cleanedData.supplier_services_id)) {
//     cleanedData.supplier_services_id = cleanedData.supplier_services_id.join(',');
//   }

//   console.log('Cleaned formData to send: ', cleanedData);

//   const myHeaders = new Headers();
//   myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
//   myHeaders.append("Content-Type", "application/json");

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
    
//     body: JSON.stringify(cleanedData),
//     redirect: "follow",
//   };

//   try {
//     const response = await fetch("https://admin.memate.com.au/api/supplier/update", requestOptions);
//     const result = await response.text();

//     if (!response.ok) {
//       console.error('API response error:', result);
//       throw new Error(result || 'Request failed');
//     }

//     return result;
//   } catch (error) {
//     console.error('API Error:', error.message);
//     throw error;
//   }
// };


export const RequestToEditData = async (data) => {
  const formData = new FormData();

  // Required fields
  formData.append("supplier_id", data.supplier_id || "");
  formData.append("cname", data.cname || "");
  formData.append("email", data.email || "");
  formData.append("pnumber", data.pnumber || "");
  formData.append("abn", data.abn || "");
  formData.append("website", data.website || "");
  formData.append("state", data.state || "");
  formData.append("streetaddress", data.streetaddress || "");
  formData.append("city", data.city || "");
  formData.append("country", data.country || "");
  formData.append("postcode", data.postcode || "");
  formData.append("description", data.description || "");
  formData.append("supplier_industries_id", data.supplier_industries_id || "");
  formData.append("logo", data.logo || "");


  // Services: convert array to CSV
  const services =
    Array.isArray(data.supplier_services_id)
      ? data.supplier_services_id.join(",")
      : data.supplier_services_id || "";
  formData.append("supplier_services_id", services);

  // Append logo file if it's a File
  if (data.logo instanceof File) {
    formData.append("logo", data.logo);
  }

  // Debugging
  for (let [key, val] of formData.entries()) {
    console.log(key, val);
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "X-Api-Key": "3fa85f64d51b6c8e74313f7c69aef82d",
      // Do NOT add Content-Type here; fetch will set it correctly for FormData
    },
    body: formData,
    redirect: "follow",
  };

  try {
    const response = await fetch("https://admin.memate.com.au/api/supplier/update", requestOptions);
    const result = await response.text();

    if (!response.ok) {
      console.error("API response error:", result);
      throw new Error(result || "Request failed");
    }

    return result;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
