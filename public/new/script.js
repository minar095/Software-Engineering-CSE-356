// const fakeUsers = [
//     { username: "user1", password: "pass1", name: "John Doe", role: "user", profileImage: "https://via.placeholder.com/150" },
//     { username: "admin", password: "admin123", name: "Admin User", role: "admin", profileImage: "https://via.placeholder.com/150" }
//   ];
  
//   const properties = [
//     { id: 1, img: "https://via.placeholder.com/300x200", name: "House 1", price: "$1000", location: "New York" },
//     { id: 2, img: "https://via.placeholder.com/300x200", name: "House 2", price: "$1200", location: "Los Angeles" },
//     { id: 3, img: "https://via.placeholder.com/300x200", name: "House 3", price: "$900", location: "Chicago" },
//     { id: 4, img: "https://via.placeholder.com/300x200", name: "House 4", price: "$1100", location: "New York" },
//     { id: 5, img: "https://via.placeholder.com/300x200", name: "House 5", price: "$800", location: "San Francisco" },
//     { id: 6, img: "https://via.placeholder.com/300x200", name: "House 6", price: "$1500", location: "Los Angeles" },
//     { id: 7, img: "https://via.placeholder.com/300x200", name: "House 7", price: "$950", location: "Chicago" },
//     { id: 8, img: "https://via.placeholder.com/300x200", name: "House 8", price: "$1400", location: "San Francisco" },
//     { id: 9, img: "https://via.placeholder.com/300x200", name: "House 9", price: "$1300", location: "New York" },
//     { id: 10, img: "https://via.placeholder.com/300x200", name: "House 10", price: "$1150", location: "Los Angeles" },
//   ];
  
//   function checkUser() {
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     const authSection = document.getElementById("auth-section");
//     const adminLink = document.getElementById("admin-link");
  
//     if (user) {
//       authSection.innerHTML = `
//         <img src="${user.profileImage}" alt="${user.name}" style="width:30px;border-radius:50%">
//         <span onclick="redirectToProfile()">${user.name}</span>
//         <button onclick="logout()">Logout</button>
//       `;
  
//       if (user.role === "admin") {
//         adminLink.style.display = "block";
//       }
  
//       // Show properties after user logs in
//       displayProperties();
//     } else {
//       // Redirect to login page if no user is logged in
//       window.location.href = "login.html";
//     }
//   }
  
//   function redirectToProfile() {
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (user && user.role === "admin") {
//       window.location.href = "admin-profile.html";
//     } else {
//       window.location.href = "profile.html";
//     }
//   }
  
//   function logout() {
//     localStorage.removeItem("loggedInUser");
//     window.location.href = "login.html";
//   }
  
//   function displayProperties() {
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     const propertyContainer = document.getElementById("property-container");
  
//     if (!user) {
//       window.location.href = "login.html";
//     }
  
//     const searchQuery = new URLSearchParams(window.location.search).get("location") || "";
//     const filteredProperties = properties.filter(
//       (property) => property.location.toLowerCase().includes(searchQuery.toLowerCase())
//     );
  
//     if (filteredProperties.length === 0) {
//       propertyContainer.innerHTML = `<h3>No property found</h3><button onclick="window.location.href='index.html'">Return to Homepage</button>`;
//     } else {
//       propertyContainer.innerHTML = filteredProperties.map((property) => `
//         <div class="card">
//           <img src="${property.img}" alt="${property.name}">
//           <h4>${property.name}</h4>
//           <p>${property.price}</p>
//           <p>Location: ${property.location}</p>
//           <button onclick="viewProperty(${property.id})">View Property</button>
//         </div>
//       `).join("");
//     }
//   }
  
//   function viewProperty(id) {
//     const property = properties.find((prop) => prop.id === id);
//     window.location.href = `view-property.html?id=${id}`;
//   }
  
//   function loadPropertyDetails() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const propertyId = parseInt(urlParams.get('id'));
//     const property = properties.find((prop) => prop.id === propertyId);
//     const propertyDetails = document.getElementById('property-details');
  
//     if (property) {
//       propertyDetails.innerHTML = `
//         <img src="${property.img}" alt="${property.name}">
//         <h2>${property.name}</h2>
//         <p>${property.price}</p>
//         <p>Location: ${property.location}</p>
//         <button onclick="bookProperty(${propertyId})">Book Property</button>
//       `;
//     }
//   }
  
//   function bookProperty(id) {
//     const property = properties.find((prop) => prop.id === id);
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
  
//     if (user) {
//       const bookedProperties = JSON.parse(localStorage.getItem("cart")) || [];
//       bookedProperties.push({
//         userName: user.name,
//         name: property.name,
//         location: property.location,
//         price: property.price,
//         status: "Booked"
//       });
  
//       localStorage.setItem("cart", JSON.stringify(bookedProperties));
//       alert("Booked successfully!");
//       window.location.href = "index.html";
//     } else {
//       alert("You need to log in first.");
//       window.location.href = "login.html";
//     }
//   }
  
//   function loadCart() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartContainer = document.getElementById("cart-container");
  
//     if (cart.length === 0) {
//       cartContainer.innerHTML = "<p>Cart is empty</p>";
//     } else {
//       cartContainer.innerHTML = `
//         <ul>
//           ${cart.map((item) => `
//             <li>
//               <img src="${properties.find(p => p.name === item.name).img}" alt="${item.name}">
//               <h3>${item.name}</h3>
//               <p>Location: ${item.location}</p>
//               <p>Price: ${item.price}</p>
//               <p>Status: ${item.status}</p>
//               <button onclick="cancelBooking('${item.name}')">Cancel Booking</button>
//             </li>
//           `).join("")}
//         </ul>
//       `;
//     }
//   }
  
//   function cancelBooking(propertyName) {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = cart.filter(item => item.name !== propertyName);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     loadCart();
//   }
  
//   function loadBookedUsers() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const bookedUsersContainer = document.getElementById("booked-users");
  
//     if (cart.length === 0) {
//       bookedUsersContainer.innerHTML = "<p>No bookings found.</p>";
//       return;
//     }
  
//     bookedUsersContainer.innerHTML = `
//       <h3>Booked Users</h3>
//       <ul>
//         ${cart.map(
//           (booking) => `
//             <li>
//               <p><strong>User:</strong> ${booking.userName || "Unknown"}</p>
//               <p><strong>Property:</strong> ${booking.name}</p>
//               <p><strong>Location:</strong> ${booking.location}</p>
//               <p><strong>Price:</strong> ${booking.price}</p>
//               <p><strong>Status:</strong> ${booking.status}</p>
//             </li>
//           `
//         ).join("")}
//       </ul>
//     `;
//   }
  
//   function displayUserProfile() {
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
//     const userProfile = document.getElementById("user-profile");
  
//     if (user) {
//       userProfile.innerHTML = `
//         <img src="${user.profileImage}" alt="${user.name}" style="width:100px;border-radius:50%">
//         <h3>${user.name}</h3>
//         <p>Username: ${user.username}</p>
//         <p>Role: ${user.role}</p>
//       `;
//     }
//   }
  
//   function login(event) {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const errorMessage = document.getElementById("error-message");
  
//     const user = fakeUsers.find((user) => user.username === username && user.password === password);
  
//     if (user) {
//       // Store the user data in localStorage
//       localStorage.setItem("loggedInUser", JSON.stringify(user));
  
//       // Redirect to the homepage
//       window.location.href = "index.html";
//     } else {
//       // Show error message if login fails
//       errorMessage.style.display = "block";
//     }
//   }
  
//   // Attach the login function to the form submission
//   document.getElementById("login-form").addEventListener("submit", login);
  
//   // Automatically check if the user is logged in
//   checkUser();
  