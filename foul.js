const fakeProperties = [
  { id: 1, name: "Sunset Villa", location: "California", price: "$2000/month", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Ocean Breeze", location: "Florida", price: "$1500/month", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Mountain Retreat", location: "Colorado", price: "$2500/month", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Urban Loft", location: "New York", price: "$3000/month", img: "https://via.placeholder.com/150" },
  { id: 5, name: "Cozy Cottage", location: "Texas", price: "$1800/month", img: "https://via.placeholder.com/150" },
  { id: 6, name: "Downtown Apartment", location: "Illinois", price: "$2200/month", img: "https://via.placeholder.com/150" },
  { id: 7, name: "Beachfront Condo", location: "Hawaii", price: "$3500/month", img: "https://via.placeholder.com/150" },
  { id: 8, name: "Country House", location: "Kentucky", price: "$1700/month", img: "https://via.placeholder.com/150" },
  { id: 9, name: "Lake House", location: "Michigan", price: "$2600/month", img: "https://via.placeholder.com/150" },
  { id: 10, name: "Garden Estate", location: "Georgia", price: "$4000/month", img: "https://via.placeholder.com/150" }
];

// Adding an admin in the local storage
// 1. Open your browser's developer tools (usually F12 or Ctrl+Shift+I) and go to the Console tab.
// 2. Run the following JavaScript code to add an admin user to the localStorage:

const adminUser = {
  name: "Admin User",
  username: "admin",
  password: "admin123",
  isAdmin: true
};

let users = JSON.parse(localStorage.getItem("users")) || [];
users.push(adminUser);
localStorage.setItem("users", JSON.stringify(users));
console.log("Admin user added!");

// Now, you can log in using:

// . Username: admin
// . Password: admin123

