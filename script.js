// Predefined users
const users = {
  admin: [
    { username: "Sitab", password: "admin123", name: "Sitab Admin" }
  ],
  restaurant: [
    { username: "Simia", password: "resto123", name: "Simia Restaurant", restaurant: "Pizza Palace" },
    { username: "Maisha", password: "resto123", name: "Maisha Restaurant", restaurant: "Burger Barn" }
  ],
  delivery: [
    { username: "Raisha", password: "delivery123", name: "Raisha Delivery" }
  ],
  user: [
    { username: "user1", password: "user123", name: "Regular User" },
    { username: "user2", password: "user123", name: "Another User" }
  ]
};

// Current user
let currentUser = null;

// Food data by category
const foodData = {
  pizza: [
    { name: "Margherita Pizza", price: 12.99, restaurant: "Pizza Palace", description: "Classic pizza with tomato sauce, mozzarella, and basil" },
    { name: "Pepperoni Pizza", price: 14.99, restaurant: "Pizza Palace", description: "Traditional pizza with spicy pepperoni" },
    { name: "Vegetarian Pizza", price: 13.99, restaurant: "Pizza Palace", description: "Loaded with fresh vegetables" },
    { name: "BBQ Chicken Pizza", price: 15.99, restaurant: "Pizza Palace", description: "Tangy BBQ sauce with grilled chicken" },
    { name: "Hawaiian Pizza", price: 14.99, restaurant: "Pizza Palace", description: "Ham and pineapple combo" }
  ],
  biryani: [
    { name: "Chicken Biryani", price: 10.99, restaurant: "Spice Garden", description: "Fragrant rice with tender chicken pieces" },
    { name: "Vegetable Biryani", price: 8.99, restaurant: "Spice Garden", description: "Flavorful rice with mixed vegetables" },
    { name: "Mutton Biryani", price: 14.99, restaurant: "Spice Garden", description: "Rich and spicy mutton biryani" },
    { name: "Egg Biryani", price: 9.99, restaurant: "Spice Garden", description: "Biryani with boiled eggs" },
    { name: "Prawn Biryani", price: 16.99, restaurant: "Spice Garden", description: "Seafood delight with prawns" }
  ],
  burgers: [
    { name: "Classic Burger", price: 8.99, restaurant: "Burger Barn", description: "Beef patty with lettuce and special sauce" },
    { name: "Cheeseburger", price: 9.99, restaurant: "Burger Barn", description: "Classic with melted cheese" },
    { name: "Bacon Burger", price: 11.99, restaurant: "Burger Barn", description: "With crispy bacon strips" },
    { name: "Veggie Burger", price: 8.99, restaurant: "Burger Barn", description: "Plant-based patty with fresh veggies" },
    { name: "Double Patty Burger", price: 12.99, restaurant: "Burger Barn", description: "For those with a big appetite" }
  ],
  cakes: [
    { name: "Chocolate Cake", price: 19.99, restaurant: "Sweet Delights", description: "Rich chocolate cake with fudge icing" },
    { name: "Red Velvet Cake", price: 22.99, restaurant: "Sweet Delights", description: "Classic red velvet with cream cheese frosting" },
    { name: "Cheesecake", price: 16.99, restaurant: "Sweet Delights", description: "New York style cheesecake" },
    { name: "Black Forest", price: 21.99, restaurant: "Sweet Delights", description: "Chocolate cake with cherries and cream" },
    { name: "Tiramisu", price: 18.99, restaurant: "Sweet Delights", description: "Italian coffee-flavored dessert" }
  ],
  chicken: [
    { name: "Fried Chicken", price: 9.99, restaurant: "Chicken Lovers", description: "Crispy fried chicken pieces" },
    { name: "Grilled Chicken", price: 11.99, restaurant: "Chicken Lovers", description: "Healthy grilled chicken with herbs" },
    { name: "Chicken Wings", price: 8.99, restaurant: "Chicken Lovers", description: "Spicy or BBQ flavored wings" },
    { name: "Chicken Curry", price: 10.99, restaurant: "Chicken Lovers", description: "Traditional chicken curry with rice" },
    { name: "Chicken Sandwich", price: 7.99, restaurant: "Chicken Lovers", description: "Grilled chicken sandwich with veggies" }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  // Modal elements
  const registerModal = document.getElementById('registerModal');
  const loginModal = document.getElementById('loginModal');
  const registerForms = document.getElementById('registerForms');
  const loginForm = document.getElementById('loginForm');
  const closeButtons = document.querySelectorAll('.close');
  
  // Register buttons
  document.getElementById('registerBtn').addEventListener('click', showRegisterModal);
  document.querySelectorAll('#registerDropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const userType = this.textContent.trim().replace('As ', '').toLowerCase();
      showRegisterForm(userType);
    });
  });
  
  // Login buttons
  document.getElementById('loginBtn').addEventListener('click', showLoginModal);
  
  // Close modals
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      registerModal.style.display = 'none';
      loginModal.style.display = 'none';
    });
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === registerModal) {
      registerModal.style.display = 'none';
    }
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });
  
  // Login form submission
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userType = document.getElementById('loginType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    authenticateUser(userType, username, password);
  });
  
  // Food category click handlers
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.querySelector('h3').textContent.toLowerCase();
      showFoodItems(category);
    });
  });
  
  // Search functionality
  document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchTerm) {
      const results = searchFoodItems(searchTerm);
      showSearchResults(results, searchTerm);
    } else {
      alert('Please enter a search term');
    }
  });
  
  // Show register modal
  function showRegisterModal() {
    registerModal.style.display = 'block';
    registerForms.innerHTML = '<p>Please select a user type from the register dropdown menu.</p>';
  }
  
  // Show specific register form
  function showRegisterForm(userType) {
    registerModal.style.display = 'block';
    
    let formHTML = '';
    const formId = `${userType}RegisterForm`;
    
    switch(userType) {
      case 'restaurant':
        formHTML = `
          <form id="${formId}">
            <div class="form-group">
              <label for="restaurantName">Restaurant Name:</label>
              <input type="text" id="restaurantName" required>
            </div>
            <div class="form-group">
              <label for="restaurantUsername">Username:</label>
              <input type="text" id="restaurantUsername" required>
            </div>
            <div class="form-group">
              <label for="restaurantPassword">Password:</label>
              <input type="password" id="restaurantPassword" required>
            </div>
            <div class="form-group">
              <label for="restaurantCuisine">Cuisine Type:</label>
              <input type="text" id="restaurantCuisine" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        `;
        break;
      case 'user':
        formHTML = `
          <form id="${formId}">
            <div class="form-group">
              <label for="userName">Full Name:</label>
              <input type="text" id="userName" required>
            </div>
            <div class="form-group">
              <label for="userUsername">Username:</label>
              <input type="text" id="userUsername" required>
            </div>
            <div class="form-group">
              <label for="userPassword">Password:</label>
              <input type="password" id="userPassword" required>
            </div>
            <div class="form-group">
              <label for="userAddress">Delivery Address:</label>
              <input type="text" id="userAddress" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        `;
        break;
      case 'delivery':
        formHTML = `
          <form id="${formId}">
            <div class="form-group">
              <label for="deliveryName">Full Name:</label>
              <input type="text" id="deliveryName" required>
            </div>
            <div class="form-group">
              <label for="deliveryUsername">Username:</label>
              <input type="text" id="deliveryUsername" required>
            </div>
            <div class="form-group">
              <label for="deliveryPassword">Password:</label>
              <input type="password" id="deliveryPassword" required>
            </div>
            <div class="form-group">
              <label for="deliveryVehicle">Vehicle Type:</label>
              <select id="deliveryVehicle" required>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="scooter">Scooter</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        `;
        break;
    }
    
    registerForms.innerHTML = `<h3>Register as ${userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>` + formHTML;
    
    // Add form submission handler
    document.getElementById(formId).addEventListener('submit', function(e) {
      e.preventDefault();
      alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} registration would be processed here in a real app`);
      registerModal.style.display = 'none';
    });
  }
  
  // Show login modal
  function showLoginModal() {
    loginModal.style.display = 'block';
  }
  
  // Authenticate user
  function authenticateUser(userType, username, password) {
    const userList = users[userType];
    if (!userList) {
      alert('Invalid user type');
      return;
    }
    
    const user = userList.find(u => u.username === username && u.password === password);
    
    if (user) {
      currentUser = { ...user, type: userType };
      alert(`Welcome ${user.name}!`);
      loginModal.style.display = 'none';
      showDashboard();
    } else {
      alert('Invalid credentials');
    }
  }
  
  // Show food items for a category
  function showFoodItems(category) {
    const items = foodData[category];
    if (!items) {
      alert('No items found for this category');
      return;
    }
    
    const foodGrid = document.querySelector('.food-grid');
    if (!foodGrid) {
      alert('Food grid not found');
      return;
    }
    
    foodGrid.innerHTML = items.map(item => `
      <div class="food-card">
        <div class="food-img">
          <img src="https://source.unsplash.com/random/300x200/?${item.name.replace(/\s+/g, ',')}" alt="${item.name}">
        </div>
        <div class="food-info">
          <h3>${item.name}</h3>
          <p>${item.restaurant}</p>
          <p class="food-description">${item.description}</p>
          <div class="food-footer">
            <span class="price">$${item.price.toFixed(2)}</span>
            <button class="btn btn-sm btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
    
    // Scroll to the food section
    document.querySelector('.recommended').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Search food items
function searchFoodItems(searchTerm) {
    const results = [];
    for (const category in foodData) {
      foodData[category].forEach(item => {
        if (item.name.toLowerCase().includes(searchTerm)) {  // Added missing parenthesis
          results.push(item);
        }
      });
    }
    return results;
}
  // Show search results
  function showSearchResults(results, searchTerm) {
    if (results.length === 0) {
      alert(`No items found for "${searchTerm}"`);
      return;
    }
    
    const foodGrid = document.querySelector('.food-grid');
    foodGrid.innerHTML = results.map(item => `
      <div class="food-card">
        <div class="food-img">
          <img src="https://source.unsplash.com/random/300x200/?${item.name.replace(/\s+/g, ',')}" alt="${item.name}">
        </div>
        <div class="food-info">
          <h3>${item.name}</h3>
          <p>${item.restaurant}</p>
          <p class="food-description">${item.description}</p>
          <div class="food-footer">
            <span class="price">$${item.price.toFixed(2)}</span>
            <button class="btn btn-sm btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
    
    document.querySelector('.recommended').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Show dashboard based on user type
  function showDashboard() {
    document.querySelector('main').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    
    const dashboardContainer = document.getElementById('dashboardContainer');
    dashboardContainer.style.display = 'block';
    dashboardContainer.innerHTML = '';
    
    let dashboardHTML = `
      <div class="dashboard-header">
        <div class="container">
          <div class="dashboard-nav">
            <a href="#" id="homeBtn"><i class="fas fa-home"></i> Home</a>
            <span>Welcome, ${currentUser.name} (${currentUser.type})</span>
            <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
          </div>
        </div>
      </div>
      <div class="container ${currentUser.type}-dashboard">
        <h2 class="dashboard-title">${currentUser.type.charAt(0).toUpperCase() + currentUser.type.slice(1)} Dashboard</h2>
    `;
    
    switch(currentUser.type) {
      case 'user':
        dashboardHTML += `
          <div class="dashboard-section">
            <h3>Browse Restaurants</h3>
            <div class="restaurant-grid">
              ${generateRestaurantCards()}
            </div>
          </div>
          <div class="dashboard-section">
            <h3>Your Recent Orders</h3>
            <div class="order-list">
              <div class="order-card">
                <p><strong>Order #1001</strong> - Pizza Palace - $24.98 - Delivered</p>
              </div>
              <div class="order-card">
                <p><strong>Order #1002</strong> - Burger Barn - $18.99 - In Progress</p>
              </div>
            </div>
          </div>
        `;
        break;
      case 'restaurant':
        dashboardHTML += `
          <div class="dashboard-section">
            <h3>Menu Management</h3>
            <button class="btn btn-primary" id="addMenuItemBtn">Add Menu Item</button>
            <div class="menu-list">
              ${generateMenuItems()}
            </div>
          </div>
          <div class="dashboard-section">
            <h3>Current Orders</h3>
            <div class="order-list">
              <div class="order-card">
                <p><strong>Order #1003</strong> - 2x Margherita Pizza - $25.98 - Ready for pickup</p>
                <button class="btn btn-sm btn-primary">Mark as Ready</button>
              </div>
            </div>
          </div>
        `;
        break;
      case 'delivery':
        dashboardHTML += `
          <div class="dashboard-section">
            <h3>Assigned Orders</h3>
            <div class="delivery-list">
              <div class="delivery-card">
                <p><strong>Order #1003</strong> - Pizza Palace to 123 Main St</p>
                <p>2x Margherita Pizza - $25.98</p>
                <button class="btn btn-sm btn-primary">Picked Up</button>
                <button class="btn btn-sm btn-primary">Delivered</button>
              </div>
            </div>
          </div>
          <div class="dashboard-section">
            <h3>Delivery Map</h3>
            <div class="map-placeholder" style="height: 300px; background: #eee; display: flex; align-items: center; justify-content: center;">
              <p>Map view would appear here with delivery route</p>
            </div>
          </div>
        `;
        break;
      case 'admin':
        dashboardHTML += `
          <div class="dashboard-section">
            <h3>System Overview</h3>
            <div class="stats-grid">
              <div class="admin-card">
                <h4>Total Users</h4>
                <p>1,245</p>
              </div>
              <div class="admin-card">
                <h4>Active Restaurants</h4>
                <p>87</p>
              </div>
              <div class="admin-card">
                <h4>Today's Orders</h4>
                <p>342</p>
              </div>
              <div class="admin-card">
                <h4>Revenue</h4>
                <p>$8,245.67</p>
              </div>
            </div>
          </div>
          <div class="dashboard-section">
            <h3>Recent Activities</h3>
            <div class="activity-list">
              <div class="admin-card">
                <p>New restaurant "Sushi World" registered</p>
                <small>10 minutes ago</small>
              </div>
              <div class="admin-card">
                <p>Order #1003 marked as delivered</p>
                <small>25 minutes ago</small>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    dashboardHTML += `</div>`; // Close container
    dashboardContainer.innerHTML = dashboardHTML;
    
    // Add event listeners for dashboard buttons
    document.getElementById('homeBtn').addEventListener('click', function(e) {
      e.preventDefault();
      location.reload();
    });
    
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
      e.preventDefault();
      currentUser = null;
      location.reload();
    });
  }
  
  // Helper function to generate restaurant cards
  function generateRestaurantCards() {
    const restaurants = [
      { name: "Pizza Palace", cuisine: "Italian", deliveryTime: "15-25 min", rating: 4.8 },
      { name: "Burger Barn", cuisine: "American", deliveryTime: "10-20 min", rating: 4.5 },
      { name: "Sushi World", cuisine: "Japanese", deliveryTime: "20-30 min", rating: 4.7 },
      { name: "Taco Fiesta", cuisine: "Mexican", deliveryTime: "15-25 min", rating: 4.9 }
    ];
    
    return restaurants.map(restaurant => `
      <div class="restaurant-card">
        <div class="restaurant-img">
          <img src="https://source.unsplash.com/random/300x200/?${restaurant.cuisine.toLowerCase()}" alt="${restaurant.name}">
        </div>
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <div class="rating">
            <span class="stars">${'★'.repeat(Math.floor(restaurant.rating))}${'☆'.repeat(5 - Math.floor(restaurant.rating))}</span>
            <span class="review-count">(${(Math.random() * 500 + 50).toFixed(0)})</span>
          </div>
          <p>${restaurant.cuisine} • ${restaurant.deliveryTime}</p>
          <button class="btn btn-sm btn-primary">View Menu</button>
        </div>
      </div>
    `).join('');
  }
  
  // Helper function to generate menu items
  function generateMenuItems() {
    const items = [
      { name: "Margherita Pizza", price: 12.99, category: "Pizza" },
      { name: "Pepperoni Pizza", price: 14.99, category: "Pizza" },
      { name: "Garlic Bread", price: 4.99, category: "Sides" },
      { name: "Caesar Salad", price: 8.99, category: "Salads" }
    ];
    
    return items.map(item => `
      <div class="menu-item">
        <div class="menu-item-info">
          <h4>${item.name}</h4>
          <p>${item.category} • $${item.price.toFixed(2)}</p>
        </div>
        <div class="menu-item-actions">
          <button class="btn btn-sm btn-outline">Edit</button>
          <button class="btn btn-sm btn-primary">Delete</button>
        </div>
      </div>
    `).join('');
  }
});