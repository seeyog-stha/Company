async function ChangeDAta(url, methods, value=null) {
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


  const urlencoded = new URLSearchParams();
  urlencoded.append("jsonData", JSON.stringify(value));
  urlencoded.append("collectionId", "684a42b7-c337-4314-9c06-b98cafc04b35");

  var requestOptions = {
    method: methods,
    headers: myHeaders,
      body: urlencoded,
    redirect: "follow",
   
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result; // Return the result if the fetch was successful
  } catch (error) {
    console.log("error", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
 
}
export default ChangeDAta
// Javascript example
