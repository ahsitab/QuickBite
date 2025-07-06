// Predefined users
const users = {
  admin: [
    { username: "Sitab", password: "admin123", name: "Sitab Admin" }
  ],
  restaurant: [
    { username: "Simia", password: "resto123", name: "Simia Restaurant", restaurant: "Pizza Palace" },
    { username: "Sitab", password: "admin123", name: "Sitab Admin" },
    { username: "Maisha", password: "resto123", name: "Maisha Restaurant", restaurant: "Burger Barn" }
  ],
  delivery: [
    { username: "Raisha", password: "delivery123", name: "Raisha Delivery" },
    { username: "Sitab", password: "admin123", name: "Sitab Admin" }
  ],
  user: [
    { username: "user1", password: "user123", name: "Regular User" },
    { username: "Sitab", password: "admin123", name: "Sitab Admin" },
    { username: "user2", password: "user123", name: "Another User" }
  ]
};

// Current user
let currentUser = null;

// Exchange rate (1 USD to BDT)
const exchangeRate = 117.50;

// Food data by category
const foodData = {
  pizza: [
    { name: "Margherita Pizza", price: 12.99, restaurant: "Pizza Palace", description: "Classic pizza with tomato sauce, mozzarella, and basil", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
    { name: "Pepperoni Pizza", price: 14.99, restaurant: "Pizza Palace", description: "Traditional pizza with spicy pepperoni", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e" },
    { name: "Vegetarian Pizza", price: 13.99, restaurant: "Pizza Palace", description: "Loaded with fresh vegetables", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c" },
    { name: "BBQ Chicken Pizza", price: 15.99, restaurant: "Pizza Palace", description: "Tangy BBQ sauce with grilled chicken", image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94" },
    { name: "Hawaiian Pizza", price: 14.99, restaurant: "Pizza Palace", description: "Ham and pineapple combo", image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796" }
  ],
  biryani: [
    { name: "Chicken Biryani", price: 10.99, restaurant: "Spice Garden", description: "Fragrant rice with tender chicken pieces", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" },
    { name: "Vegetable Biryani", price: 8.99, restaurant: "Spice Garden", description: "Flavorful rice with mixed vegetables", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc" },
    { name: "Mutton Biryani", price: 14.99, restaurant: "Spice Garden", description: "Rich and spicy mutton biryani", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
    { name: "Egg Biryani", price: 9.99, restaurant: "Spice Garden", description: "Biryani with boiled eggs", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b" },
    { name: "Prawn Biryani", price: 16.99, restaurant: "Spice Garden", description: "Seafood delight with prawns", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" }
  ],
  burgers: [
    { name: "Classic Burger", price: 8.99, restaurant: "Burger Barn", description: "Beef patty with lettuce and special sauce", image: "https://images.unsplash.com/photo-1559847844-5315695dadae" },
    { name: "Cheeseburger", price: 9.99, restaurant: "Burger Barn", description: "Classic with melted cheese", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330" },
    { name: "Bacon Burger", price: 11.99, restaurant: "Burger Barn", description: "With crispy bacon strips", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b" },
    { name: "Veggie Burger", price: 8.99, restaurant: "Burger Barn", description: "Plant-based patty with fresh veggies", image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7" },
    { name: "Double Patty Burger", price: 12.99, restaurant: "Burger Barn", description: "For those with a big appetite", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" }
  ],
  cakes: [
    { name: "Chocolate Cake", price: 19.99, restaurant: "Sweet Delights", description: "Rich chocolate cake with fudge icing", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Red Velvet Cake", price: 22.99, restaurant: "Sweet Delights", description: "Classic red velvet with cream cheese frosting", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
    { name: "Cheesecake", price: 16.99, restaurant: "Sweet Delights", description: "New York style cheesecake", image: "https://images.unsplash.com/photo-1543745800-9aee9a042745" },
    { name: "Black Forest", price: 21.99, restaurant: "Sweet Delights", description: "Chocolate cake with cherries and cream", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e" },
    { name: "Tiramisu", price: 18.99, restaurant: "Sweet Delights", description: "Italian coffee-flavored dessert", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" }
  ],
  chicken: [
    { name: "Fried Chicken", price: 9.99, restaurant: "Chicken Lovers", description: "Crispy fried chicken pieces", image: "https://images.unsplash.com/photo-1562967914-608f82629710" },
    { name: "Grilled Chicken", price: 11.99, restaurant: "Chicken Lovers", description: "Healthy grilled chicken with herbs", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
    { name: "Chicken Wings", price: 8.99, restaurant: "Chicken Lovers", description: "Spicy or BBQ flavored wings", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f" },
    { name: "Chicken Curry", price: 10.99, restaurant: "Chicken Lovers", description: "Traditional chicken curry with rice", image: "https://images.unsplash.com/photo-1546069901-2c6d3a5a5c5a" },
    { name: "Chicken Sandwich", price: 7.99, restaurant: "Chicken Lovers", description: "Grilled chicken sandwich with veggies", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b" }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  // Modal elements
  const registerModal = document.getElementById('registerModal');
  const loginModal = document.getElementById('loginModal');
  const registerForms = document.getElementById('registerForms');
  const loginForm = document.getElementById('loginForm');
  const closeButtons = document.querySelectorAll('.close');
  
  // Register dropdown functionality
  const registerBtn = document.getElementById('registerBtn');
  const registerDropdown = document.getElementById('registerDropdown');
  
  registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    registerDropdown.classList.toggle('show');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.matches('#registerBtn') && !e.target.matches('#registerDropdown *')) {
      registerDropdown.classList.remove('show');
    }
  });
  
  // Register dropdown items
  document.querySelectorAll('#registerDropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const userType = this.textContent.trim().replace('As ', '').toLowerCase();
      registerDropdown.classList.remove('show');
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
      const username = document.getElementById(`${userType}Username`).value;
      const password = document.getElementById(`${userType}Password`).value;
      
      // Add the new user to the appropriate array
      const newUser = { username, password, name: document.getElementById(`${userType}Name`).value };
      if (userType === 'restaurant') {
        newUser.restaurant = document.getElementById('restaurantName').value;
      }
      
      users[userType] = users[userType] || [];
      users[userType].push(newUser);
      
      alert(`Registration successful! You can now login as ${userType}.`);
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
          <img src="${item.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="${item.name}">
        </div>
        <div class="food-info">
          <h3>${item.name}</h3>
          <p>${item.restaurant}</p>
          <p class="food-description">${item.description}</p>
          <div class="food-footer">
            <span class="price">৳${(item.price * exchangeRate).toFixed(2)}</span>
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
        if (item.name.toLowerCase().includes(searchTerm)) {
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
          <img src="${item.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="${item.name}">
        </div>
        <div class="food-info">
          <h3>${item.name}</h3>
          <p>${item.restaurant}</p>
          <p class="food-description">${item.description}</p>
          <div class="food-footer">
            <span class="price">৳${(item.price * exchangeRate).toFixed(2)}</span>
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
            <div class="dashboard-user">
              <div class="user-dropdown">
                <button id="userMenuBtn"><i class="fas fa-user-circle"></i> ${currentUser.name} <i class="fas fa-caret-down"></i></button>
                <div id="userDropdown" class="dropdown-content">
                  <a href="#" id="profileBtn"><i class="fas fa-user"></i> My Profile</a>
                  ${currentUser.type === 'user' ? `
                    <a href="#" id="ordersBtn"><i class="fas fa-clipboard-list"></i> My Orders</a>
                    <a href="#" id="addressesBtn"><i class="fas fa-map-marker-alt"></i> My Addresses</a>
                  ` : ''}
                  ${currentUser.type === 'restaurant' ? `
                    <a href="#" id="menuBtn"><i class="fas fa-utensils"></i> Menu Management</a>
                    <a href="#" id="salesBtn"><i class="fas fa-chart-line"></i> Sales Analytics</a>
                  ` : ''}
                  ${currentUser.type === 'delivery' ? `
                    <a href="#" id="deliveriesBtn"><i class="fas fa-motorcycle"></i> My Deliveries</a>
                    <a href="#" id="mapBtn"><i class="fas fa-map"></i> Delivery Map</a>
                  ` : ''}
                  ${currentUser.type === 'admin' ? `
                    <a href="#" id="manageUsersBtn"><i class="fas fa-users"></i> Manage Users</a>
                    <a href="#" id="manageRestaurantsBtn"><i class="fas fa-store"></i> Manage Restaurants</a>
                    <a href="#" id="systemAnalyticsBtn"><i class="fas fa-chart-pie"></i> System Analytics</a>
                  ` : ''}
                  <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container ${currentUser.type}-dashboard">
        <div id="dashboardContent">
          <h2 class="dashboard-title">${currentUser.type.charAt(0).toUpperCase() + currentUser.type.slice(1)} Dashboard</h2>
          <div class="welcome-message">
            <p>Welcome back, ${currentUser.name}! What would you like to do today?</p>
          </div>
    `;
    
    // Add dashboard sections based on user type
    switch(currentUser.type) {
      case 'user':
        dashboardHTML += `
          <div class="dashboard-sections">
            <div class="dashboard-card" id="userBrowseRestaurants">
              <i class="fas fa-store"></i>
              <h3>Browse Restaurants</h3>
              <p>Find restaurants near you</p>
            </div>
            <div class="dashboard-card" id="userOrderHistory">
              <i class="fas fa-history"></i>
              <h3>Order History</h3>
              <p>View your past orders</p>
            </div>
            <div class="dashboard-card" id="userTrackOrder">
              <i class="fas fa-map-marked-alt"></i>
              <h3>Track Order</h3>
              <p>Follow your delivery in real-time</p>
            </div>
          </div>
          <div class="recent-orders">
            <h3>Recent Orders</h3>
            <div class="order-list">
              <div class="order-card">
                <div class="order-header">
                  <span class="order-id">Order #1001</span>
                  <span class="order-date">Jan 15, 2023</span>
                  <span class="order-status delivered">Delivered</span>
                </div>
                <div class="order-details">
                  <p><strong>Pizza Palace</strong> - 1x Margherita Pizza, 1x Garlic Bread</p>
                  <p>Total: ৳${(24.98 * exchangeRate).toFixed(2)}</p>
                </div>
                <div class="order-actions">
                  <button class="btn btn-sm btn-primary">Reorder</button>
                  <button class="btn btn-sm btn-outline">Rate Order</button>
                </div>
              </div>
              <div class="order-card">
                <div class="order-header">
                  <span class="order-id">Order #1002</span>
                  <span class="order-date">Jan 10, 2023</span>
                  <span class="order-status in-progress">In Progress</span>
                </div>
                <div class="order-details">
                  <p><strong>Burger Barn</strong> - 2x Classic Burger, 1x Fries</p>
                  <p>Total: ৳${(18.99 * exchangeRate).toFixed(2)}</p>
                </div>
                <div class="order-actions">
                  <button class="btn btn-sm btn-primary">Track</button>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
      case 'restaurant':
        dashboardHTML += `
          <div class="dashboard-sections">
            <div class="dashboard-card" id="restaurantMenuManagement">
              <i class="fas fa-utensils"></i>
              <h3>Menu Management</h3>
              <p>Add, edit or remove menu items</p>
            </div>
            <div class="dashboard-card" id="restaurantOrders">
              <i class="fas fa-clipboard-list"></i>
              <h3>Current Orders</h3>
              <p>Manage incoming orders</p>
            </div>
            <div class="dashboard-card" id="restaurantAnalytics">
              <i class="fas fa-chart-line"></i>
              <h3>Sales Analytics</h3>
              <p>View your business performance</p>
            </div>
          </div>
          <div class="current-orders">
            <h3>Orders Ready for Pickup</h3>
            <div class="order-list">
              <div class="order-card">
                <div class="order-header">
                  <span class="order-id">Order #1003</span>
                  <span class="order-date">Today, 12:30 PM</span>
                  <span class="order-status in-progress">Preparing</span>
                </div>
                <div class="order-details">
                  <p>2x Margherita Pizza - ৳${(25.98 * exchangeRate).toFixed(2)}</p>
                  <p>Customer: John Doe - Delivery Address: 123 Main St</p>
                </div>
                <div class="order-actions">
                  <button class="btn btn-sm btn-primary">Mark as Ready</button>
                  <button class="btn btn-sm btn-outline">Contact Delivery</button>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
      case 'delivery':
        dashboardHTML += `
          <div class="dashboard-sections">
            <div class="dashboard-card" id="deliveryAssigned">
              <i class="fas fa-motorcycle"></i>
              <h3>Assigned Orders</h3>
              <p>View your current deliveries</p>
            </div>
            <div class="dashboard-card" id="deliveryHistory">
              <i class="fas fa-history"></i>
              <h3>Delivery History</h3>
              <p>View your past deliveries</p>
            </div>
            <div class="dashboard-card" id="deliveryMap">
              <i class="fas fa-map-marked-alt"></i>
              <h3>Delivery Map</h3>
              <p>Navigate to delivery locations</p>
            </div>
          </div>
          <div class="assigned-orders">
            <h3>Your Current Delivery</h3>
            <div class="order-list">
              <div class="order-card">
                <div class="order-header">
                  <span class="order-id">Order #1003</span>
                  <span class="order-date">Today, 12:30 PM</span>
                  <span class="order-status in-progress">Ready for Pickup</span>
                </div>
                <div class="order-details">
                  <p>Pizza Palace to 123 Main St</p>
                  <p>2x Margherita Pizza - ৳${(25.98 * exchangeRate).toFixed(2)}</p>
                  <p>Customer: John Doe - Phone: 0123456789</p>
                </div>
                <div class="order-actions">
                  <button class="btn btn-sm btn-primary">Picked Up</button>
                  <button class="btn btn-sm btn-primary">Delivered</button>
                  <button class="btn btn-sm btn-outline">Navigate</button>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
      case 'admin':
        dashboardHTML += `
          <div class="dashboard-sections">
            <div class="dashboard-card" id="adminUsers">
              <i class="fas fa-users"></i>
              <h3>Manage Users</h3>
              <p>View and manage all users</p>
            </div>
            <div class="dashboard-card" id="adminRestaurants">
              <i class="fas fa-store"></i>
              <h3>Manage Restaurants</h3>
              <p>Approve and manage restaurants</p>
            </div>
            <div class="dashboard-card" id="adminAnalytics">
              <i class="fas fa-chart-pie"></i>
              <h3>System Analytics</h3>
              <p>View platform performance</p>
            </div>
          </div>
          <div class="system-overview">
            <h3>Quick Stats</h3>
            <div class="stats-grid">
              <div class="stat-card">
                <h4>Total Users</h4>
                <p>1,245</p>
                <small>+12% this month</small>
              </div>
              <div class="stat-card">
                <h4>Active Restaurants</h4>
                <p>87</p>
                <small>+5 this week</small>
              </div>
              <div class="stat-card">
                <h4>Today's Orders</h4>
                <p>342</p>
                <small>৳${(8245.67 * exchangeRate).toFixed(2)}</small>
              </div>
              <div class="stat-card">
                <h4>Revenue</h4>
                <p>৳${(24567.89 * exchangeRate).toFixed(2)}</p>
                <small>This month</small>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    dashboardHTML += `</div></div>`; // Close container and dashboardContent
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
    
    // User dropdown functionality
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    userMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.matches('#userMenuBtn') && !e.target.matches('#userDropdown *')) {
        userDropdown.classList.remove('show');
      }
    });
    
    // Add click handlers for dashboard cards
    if (currentUser.type === 'user') {
      document.getElementById('userBrowseRestaurants').addEventListener('click', showRestaurants);
      document.getElementById('userOrderHistory').addEventListener('click', showOrderHistory);
      document.getElementById('userTrackOrder').addEventListener('click', showTrackOrder);
      
      // User dropdown options
      document.getElementById('profileBtn').addEventListener('click', showUserProfile);
      document.getElementById('ordersBtn').addEventListener('click', showOrderHistory);
      document.getElementById('addressesBtn').addEventListener('click', showUserAddresses);
    }
    
    if (currentUser.type === 'restaurant') {
      document.getElementById('restaurantMenuManagement').addEventListener('click', showMenuManagement);
      document.getElementById('restaurantOrders').addEventListener('click', showRestaurantOrders);
      document.getElementById('restaurantAnalytics').addEventListener('click', showRestaurantAnalytics);
      
      // Restaurant dropdown options
      document.getElementById('menuBtn').addEventListener('click', showMenuManagement);
      document.getElementById('salesBtn').addEventListener('click', showRestaurantAnalytics);
    }
    
    if (currentUser.type === 'delivery') {
      document.getElementById('deliveryAssigned').addEventListener('click', showAssignedDeliveries);
      document.getElementById('deliveryHistory').addEventListener('click', showDeliveryHistory);
      document.getElementById('deliveryMap').addEventListener('click', showDeliveryMap);
      
      // Delivery dropdown options
      document.getElementById('deliveriesBtn').addEventListener('click', showAssignedDeliveries);
      document.getElementById('mapBtn').addEventListener('click', showDeliveryMap);
    }
    
    if (currentUser.type === 'admin') {
      document.getElementById('adminUsers').addEventListener('click', showUserManagement);
      document.getElementById('adminRestaurants').addEventListener('click', showRestaurantManagement);
      document.getElementById('adminAnalytics').addEventListener('click', showSystemAnalytics);
      
      // Admin dropdown options
      document.getElementById('manageUsersBtn').addEventListener('click', showUserManagement);
      document.getElementById('manageRestaurantsBtn').addEventListener('click', showRestaurantManagement);
      document.getElementById('systemAnalyticsBtn').addEventListener('click', showSystemAnalytics);
    }
  }

  // Dashboard functions
  function showUserProfile() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">My Profile</h2>
      <div class="profile-section">
        <div class="profile-header">
          <div class="profile-avatar">
            <i class="fas fa-user-circle"></i>
          </div>
          <h3>${currentUser.name}</h3>
          <p>${currentUser.type.charAt(0).toUpperCase() + currentUser.type.slice(1)}</p>
        </div>
        <div class="profile-details">
          <form id="profileForm">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" value="${currentUser.name}">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" value="${currentUser.username}@example.com">
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" value="+8801XXXXXXXXX">
            </div>
            ${currentUser.type === 'user' ? `
            <div class="form-group">
              <label for="address">Delivery Address</label>
              <input type="text" id="address" value="123 Main Street, Dhaka">
            </div>
            ` : ''}
            ${currentUser.type === 'restaurant' ? `
            <div class="form-group">
              <label for="restaurantName">Restaurant Name</label>
              <input type="text" id="restaurantName" value="${currentUser.restaurant || ''}">
            </div>
            <div class="form-group">
              <label for="cuisineType">Cuisine Type</label>
              <input type="text" id="cuisineType" value="Italian">
            </div>
            ` : ''}
            ${currentUser.type === 'delivery' ? `
            <div class="form-group">
              <label for="vehicleType">Vehicle Type</label>
              <select id="vehicleType">
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="scooter">Scooter</option>
              </select>
            </div>
            ` : ''}
            <button type="submit" class="btn btn-primary">Update Profile</button>
          </form>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
    
    document.getElementById('profileForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Profile updated successfully!');
      showDashboard();
    });
  }

  function showOrderHistory() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Order History</h2>
      <div class="order-history-section">
        <div class="order-filters">
          <select id="timeFilter">
            <option value="all">All Orders</option>
            <option value="month">This Month</option>
            <option value="week">This Week</option>
          </select>
          <input type="text" id="orderSearch" placeholder="Search orders...">
        </div>
        <div class="order-list">
          <div class="order-card">
            <div class="order-header">
              <span class="order-id">Order #1001</span>
              <span class="order-date">Jan 15, 2023</span>
              <span class="order-status delivered">Delivered</span>
            </div>
            <div class="order-details">
              <p><strong>Pizza Palace</strong> - 1x Margherita Pizza, 1x Garlic Bread</p>
              <p>Total: ৳${(24.98 * exchangeRate).toFixed(2)}</p>
            </div>
            <div class="order-actions">
              <button class="btn btn-sm btn-primary">Reorder</button>
              <button class="btn btn-sm btn-outline">Rate Order</button>
            </div>
          </div>
          <div class="order-card">
            <div class="order-header">
              <span class="order-id">Order #1002</span>
              <span class="order-date">Jan 10, 2023</span>
              <span class="order-status canceled">Canceled</span>
            </div>
            <div class="order-details">
              <p><strong>Burger Barn</strong> - 2x Classic Burger, 1x Fries</p>
              <p>Total: ৳${(18.99 * exchangeRate).toFixed(2)}</p>
            </div>
            <div class="order-actions">
              <button class="btn btn-sm btn-primary">Reorder</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showUserAddresses() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">My Addresses</h2>
      <div class="addresses-section">
        <button class="btn btn-primary" id="addAddressBtn">Add New Address</button>
        <div class="address-list">
          <div class="address-card">
            <h4>Home</h4>
            <p>123 Main Street, Apt 4B</p>
            <p>Dhaka 1212, Bangladesh</p>
            <div class="address-actions">
              <button class="btn btn-sm btn-outline">Edit</button>
              <button class="btn btn-sm btn-primary">Set as Default</button>
            </div>
          </div>
          <div class="address-card">
            <h4>Work</h4>
            <p>456 Business Road, Floor 8</p>
            <p>Dhaka 1216, Bangladesh</p>
            <div class="address-actions">
              <button class="btn btn-sm btn-outline">Edit</button>
              <button class="btn btn-sm btn-primary">Set as Default</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
    
    document.getElementById('addAddressBtn').addEventListener('click', function() {
      const addressList = document.querySelector('.address-list');
      addressList.insertAdjacentHTML('beforeend', `
        <div class="address-card">
          <div class="form-group">
            <label>Address Type:</label>
            <input type="text" value="New Address" class="edit-input">
          </div>
          <div class="form-group">
            <label>Address Line 1:</label>
            <input type="text" class="edit-input">
          </div>
          <div class="form-group">
            <label>Address Line 2:</label>
            <input type="text" class="edit-input">
          </div>
          <div class="address-actions">
            <button class="btn btn-sm btn-primary">Save</button>
            <button class="btn btn-sm btn-outline">Cancel</button>
          </div>
        </div>
      `);
    });
  }

  function showRestaurants() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Browse Restaurants</h2>
      <div class="restaurants-section">
        <div class="restaurant-filters">
          <select id="cuisineFilter">
            <option value="all">All Cuisines</option>
            <option value="italian">Italian</option>
            <option value="american">American</option>
            <option value="japanese">Japanese</option>
            <option value="mexican">Mexican</option>
          </select>
          <select id="deliveryTimeFilter">
            <option value="all">Any Delivery Time</option>
            <option value="fast">Under 30 min</option>
            <option value="medium">30-45 min</option>
          </select>
          <input type="text" id="restaurantSearch" placeholder="Search restaurants...">
        </div>
        <div class="restaurant-grid">
          ${generateRestaurantCards()}
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showMenuManagement() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Menu Management</h2>
      <div class="menu-management-section">
        <button class="btn btn-primary" id="addMenuItemBtn">Add Menu Item</button>
        <div class="menu-categories">
          <button class="category-btn active">All Items</button>
          <button class="category-btn">Pizza</button>
          <button class="category-btn">Pasta</button>
          <button class="category-btn">Sides</button>
          <button class="category-btn">Drinks</button>
        </div>
        <div class="menu-list">
          ${generateMenuItems()}
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
    
    document.getElementById('addMenuItemBtn').addEventListener('click', function() {
      const menuList = document.querySelector('.menu-list');
      menuList.insertAdjacentHTML('beforeend', `
        <div class="menu-item edit-mode">
          <div class="menu-item-info">
            <input type="text" value="New Menu Item" class="edit-input">
            <select class="edit-input">
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Sides</option>
              <option>Drinks</option>
            </select>
            <input type="number" value="0.00" class="edit-input" placeholder="Price in ৳">
          </div>
          <div class="menu-item-actions">
            <button class="btn btn-sm btn-primary">Save</button>
            <button class="btn btn-sm btn-outline">Cancel</button>
          </div>
        </div>
      `);
    });
  }

  function showRestaurantAnalytics() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Sales Analytics</h2>
      <div class="analytics-section">
        <div class="analytics-filters">
          <select id="timePeriod">
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <div class="analytics-cards">
          <div class="analytics-card">
            <h4>Total Orders</h4>
            <p>124</p>
            <small>+12% from last week</small>
          </div>
          <div class="analytics-card">
            <h4>Total Revenue</h4>
            <p>৳${(2456.78 * exchangeRate).toFixed(2)}</p>
            <small>+8% from last week</small>
          </div>
          <div class="analytics-card">
            <h4>Average Order Value</h4>
            <p>৳${(19.81 * exchangeRate).toFixed(2)}</p>
            <small>+3% from last week</small>
          </div>
        </div>
        <div class="chart-placeholder">
          <p>Sales chart would appear here</p>
        </div>
        <div class="popular-items">
          <h4>Top Selling Items</h4>
          <ol>
            <li>Margherita Pizza (45 orders)</li>
            <li>Pepperoni Pizza (32 orders)</li>
            <li>Garlic Bread (28 orders)</li>
          </ol>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showRestaurantOrders() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Current Orders</h2>
      <div class="orders-section">
        <div class="order-filters">
          <select id="orderStatusFilter">
            <option value="all">All Orders</option>
            <option value="new">New</option>
            <option value="preparing">Preparing</option>
            <option value="ready">Ready for Pickup</option>
          </select>
        </div>
        <div class="order-list">
          <div class="order-card">
            <div class="order-header">
              <span class="order-id">Order #1003</span>
              <span class="order-date">Today, 12:30 PM</span>
              <span class="order-status in-progress">Preparing</span>
            </div>
            <div class="order-details">
              <p>2x Margherita Pizza - ৳${(25.98 * exchangeRate).toFixed(2)}</p>
              <p>Customer: John Doe - Delivery Address: 123 Main St</p>
            </div>
            <div class="order-actions">
              <button class="btn btn-sm btn-primary">Mark as Ready</button>
              <button class="btn btn-sm btn-outline">Contact Customer</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showAssignedDeliveries() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Assigned Deliveries</h2>
      <div class="deliveries-section">
        <div class="delivery-filters">
          <select id="deliveryStatusFilter">
            <option value="all">All Deliveries</option>
            <option value="assigned">Assigned</option>
            <option value="picked">Picked Up</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
        <div class="order-list">
          <div class="order-card">
            <div class="order-header">
              <span class="order-id">Order #1003</span>
              <span class="order-date">Today, 12:30 PM</span>
              <span class="order-status in-progress">Ready for Pickup</span>
            </div>
            <div class="order-details">
              <p>From: Pizza Palace to 123 Main St</p>
              <p>2x Margherita Pizza - ৳${(25.98 * exchangeRate).toFixed(2)}</p>
              <p>Customer: John Doe - Phone: 0123456789</p>
            </div>
            <div class="order-actions">
              <button class="btn btn-sm btn-primary">Picked Up</button>
              <button class="btn btn-sm btn-primary">Delivered</button>
              <button class="btn btn-sm btn-outline">Navigate</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showUserManagement() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">User Management</h2>
      <div class="user-management-section">
        <button class="btn btn-primary" id="addUserBtn">Add New User</button>
        <div class="user-filters">
          <select id="userTypeFilter">
            <option value="all">All Users</option>
            <option value="admin">Admins</option>
            <option value="restaurant">Restaurants</option>
            <option value="delivery">Delivery Persons</option>
            <option value="user">Customers</option>
          </select>
          <input type="text" id="userSearch" placeholder="Search users...">
        </div>
        <div class="user-list">
          <div class="user-card">
            <div class="user-info">
              <h4>John Doe</h4>
              <p>Customer</p>
              <p>Email: john@example.com</p>
            </div>
            <div class="user-actions">
              <button class="btn btn-sm btn-outline">Edit</button>
              <button class="btn btn-sm btn-primary">Deactivate</button>
            </div>
          </div>
          <div class="user-card">
            <div class="user-info">
              <h4>Pizza Palace</h4>
              <p>Restaurant</p>
              <p>Cuisine: Italian</p>
            </div>
            <div class="user-actions">
              <button class="btn btn-sm btn-outline">Edit</button>
              <button class="btn btn-sm btn-primary">Deactivate</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showRestaurantManagement() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Restaurant Management</h2>
      <div class="restaurant-management-section">
        <button class="btn btn-primary" id="addRestaurantBtn">Add New Restaurant</button>
        <div class="restaurant-filters">
          <select id="restaurantStatusFilter">
            <option value="all">All Restaurants</option>
            <option value="active">Active</option>
            <option value="pending">Pending Approval</option>
            <option value="suspended">Suspended</option>
          </select>
          <input type="text" id="restaurantSearch" placeholder="Search restaurants...">
        </div>
        <div class="restaurant-list">
          <div class="restaurant-card">
            <div class="restaurant-info">
              <h4>Pizza Palace</h4>
              <p>Italian • Active</p>
              <p>Owner: John Smith</p>
            </div>
            <div class="restaurant-actions">
              <button class="btn btn-sm btn-outline">Edit</button>
              <button class="btn btn-sm btn-primary">View Menu</button>
            </div>
          </div>
          <div class="restaurant-card">
            <div class="restaurant-info">
              <h4>Burger Barn</h4>
              <p>American • Active</p>
              <p>Owner: Sarah Johnson</p>
            </div>
            <div class="restaurant-actions">
              <button class="btn btn-sm btn-outline">Edit</button>
              <button class="btn btn-sm btn-primary">View Menu</button>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showSystemAnalytics() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">System Analytics</h2>
      <div class="system-analytics-section">
        <div class="analytics-filters">
          <select id="analyticsTimePeriod">
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <div class="analytics-cards">
          <div class="analytics-card">
            <h4>Total Orders</h4>
            <p>1,245</p>
            <small>+12% from last week</small>
          </div>
          <div class="analytics-card">
            <h4>Total Revenue</h4>
            <p>৳${(24567.89 * exchangeRate).toFixed(2)}</p>
            <small>+8% from last week</small>
          </div>
          <div class="analytics-card">
            <h4>Active Users</h4>
            <p>876</p>
            <small>+5% from last week</small>
          </div>
        </div>
        <div class="chart-placeholder">
          <p>System analytics charts would appear here</p>
        </div>
        <div class="popular-restaurants">
          <h4>Top Performing Restaurants</h4>
          <ol>
            <li>Pizza Palace (342 orders)</li>
            <li>Burger Barn (289 orders)</li>
            <li>Sushi World (187 orders)</li>
          </ol>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showTrackOrder() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Track Your Order</h2>
      <div class="track-order-section">
        <div class="order-status-tracker">
          <div class="status-step completed">
            <div class="status-icon"><i class="fas fa-check"></i></div>
            <div class="status-text">Order Placed</div>
            <div class="status-time">Today, 12:30 PM</div>
          </div>
          <div class="status-step completed">
            <div class="status-icon"><i class="fas fa-check"></i></div>
            <div class="status-text">Preparing</div>
            <div class="status-time">Today, 12:35 PM</div>
          </div>
          <div class="status-step active">
            <div class="status-icon"><i class="fas fa-motorcycle"></i></div>
            <div class="status-text">On the Way</div>
            <div class="status-time">Estimated: 1:00 PM</div>
          </div>
          <div class="status-step">
            <div class="status-icon"><i class="fas fa-home"></i></div>
            <div class="status-text">Delivered</div>
            <div class="status-time"></div>
          </div>
        </div>
        <div class="delivery-map-placeholder">
          <p>Delivery map with real-time tracking would appear here</p>
        </div>
        <div class="delivery-details">
          <h4>Delivery Details</h4>
          <p><strong>Order #1002</strong> - Burger Barn</p>
          <p>2x Classic Burger, 1x Fries</p>
          <p>Total: ৳${(18.99 * exchangeRate).toFixed(2)}</p>
          <p>Delivery Person: Raisha Delivery</p>
          <p>Contact: +8801XXXXXXXX</p>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showDeliveryMap() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Delivery Map</h2>
      <div class="delivery-map-section">
        <div class="map-filters">
          <select id="mapView">
            <option value="all">All Deliveries</option>
            <option value="assigned">Assigned</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>
        <div class="map-placeholder">
          <p>Interactive delivery map would appear here</p>
          <p>Showing delivery locations and routes</p>
        </div>
        <div class="delivery-list">
          <div class="delivery-card">
            <h4>Order #1003</h4>
            <p>From: Pizza Palace to 123 Main St</p>
            <p>Status: On the way</p>
            <button class="btn btn-sm btn-primary">Navigate</button>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
    });
  }

  function showDeliveryHistory() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
      <h2 class="dashboard-title">Delivery History</h2>
      <div class="delivery-history-section">
        <div class="history-filters">
          <select id="historyTimeFilter">
            <option value="all">All Time</option>
            <option value="month">This Month</option>
            <option value="week">This Week</option>
            <option value="today">Today</option>
          </select>
        </div>
        <div class="delivery-list">
          <div class="delivery-card">
            <div class="delivery-header">
              <span class="delivery-id">Order #1001</span>
              <span class="delivery-date">Jan 15, 2023</span>
              <span class="delivery-status delivered">Delivered</span>
            </div>
            <div class="delivery-details">
              <p>From: Pizza Palace to 123 Main St</p>
              <p>Earnings: ৳${(50 * exchangeRate).toFixed(2)}</p>
            </div>
          </div>
          <div class="delivery-card">
            <div class="delivery-header">
              <span class="delivery-id">Order #1002</span>
              <span class="delivery-date">Jan 10, 2023</span>
              <span class="delivery-status delivered">Delivered</span>
            </div>
            <div class="delivery-details">
              <p>From: Burger Barn to 456 Business Rd</p>
              <p>Earnings: ৳${(45 * exchangeRate).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="back-to-dashboard">
        <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
      </div>
    `;
    
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
      e.preventDefault();
      showDashboard();
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
          <p>${item.category} • ৳${(item.price * exchangeRate).toFixed(2)}</p>
        </div>
        <div class="menu-item-actions">
          <button class="btn btn-sm btn-outline">Edit</button>
          <button class="btn btn-sm btn-primary">Delete</button>
        </div>
      </div>
    `).join('');
  }
});