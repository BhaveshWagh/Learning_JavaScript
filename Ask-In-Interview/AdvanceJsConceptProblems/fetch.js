// How fetch works

// fetch() => Response(Object).json =>  jsonValue

const API_URL = "https://api.github.com/users/Moreshwar-wagh";

async function getData() {
  // Handle Errors using try{} catch(err){} blocks
  try {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getData();
