//  Storing data
localStorage.setItem("username", "JohnDoe");

// Retrieving data
let username = localStorage.getItem("username");
console.log(username); // Outputs: JohnDoe

// Removing data
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();
