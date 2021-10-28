// console.log('my Script');

//Selecting Div using Unque Id.
let Data = document.getElementById('data');

// Fetching Data from URL
fetch('https://jsonplaceholder.typicode.com/users')
// Promise
// Converting JSON  resposne into Object.
.then(response =>  response.json())
//Rendering Data inside DOM.
.then(data => Data.innerHTML = JSON.stringify(data));





