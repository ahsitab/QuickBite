// Order Status Constants
const ORDER_STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    PREPARING: 'preparing',
    READY: 'ready',
    PICKED_UP: 'picked-up',
    ON_THE_WAY: 'on-the-way',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

// Predefined users
const users = {
  admin: [
    { 
      username: "admin", 
      password: "admin123", 
      name: "Admin User",
      email: "admin@quickbite.com",
      phone: "+8801712345678",
      address: "123 Admin Street, Dhaka",
      joinDate: "2023-01-01",
      status: "active"
    }
  ],
  restaurant: [
       { 
      username: "admin", 
      password: "admin123", 
      name: "Admin User",
      email: "admin@quickbite.com",
      phone: "+8801712345678",
      address: "123 Admin Street, Dhaka",
      joinDate: "2023-01-01",
      status: "active"
    },
    { 
      username: "pizzapalace", 
      password: "resto123", 
      name: "Simia Restaurant", 
      restaurant: "Pizza Palace",
      email: "simia@pizzapalace.com",
      phone: "+8801812345678",
      address: "456 Pizza Road, Dhaka",
      cuisine: "Italian",
      openingHours: "10:00 AM - 10:00 PM",
      deliveryRadius: "5 km",
      joinDate: "2023-02-15",
      status: "active",
      menu: [
        { id: 1, name: "Margherita Pizza", price: 12.99, description: "Classic pizza with tomato sauce, mozzarella, and basil", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
        { id: 2, name: "Pepperoni Pizza", price: 14.99, description: "Traditional pizza with spicy pepperoni", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e" }
      ],
      orders: []
    },
    { 
      username: "burgerbarn", 
      password: "resto123", 
      name: "Maisha Restaurant", 
      restaurant: "Burger Barn",
      email: "maisha@burgerbarn.com",
      phone: "+8801912345678",
      address: "789 Burger Lane, Dhaka",
      cuisine: "American",
      openingHours: "11:00 AM - 11:00 PM",
      deliveryRadius: "7 km",
      joinDate: "2023-03-10",
      status: "active",
      menu: [
        { id: 1, name: "Classic Burger", price: 8.99, description: "Beef patty with lettuce and special sauce", image: "https://images.unsplash.com/photo-1559847844-5315695dadae" },
        { id: 2, name: "Cheeseburger", price: 9.99, description: "Classic with melted cheese", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330" }
      ],
      orders: []
    }
  ],
  delivery: [
       { 
      username: "admin", 
      password: "admin123", 
      name: "Admin User",
      email: "admin@quickbite.com",
      phone: "+8801712345678",
      address: "123 Admin Street, Dhaka",
      joinDate: "2023-01-01",
      status: "active"
    },
    { 
      username: "raisha", 
      password: "delivery123", 
      name: "Raisha Delivery",
      email: "raisha@quickbite.com",
      phone: "+8801612345678",
      address: "101 Delivery Street, Dhaka",
      vehicleType: "bike",
      licenseNumber: "DL123456",
      joinDate: "2023-04-05",
      status: "active",
      availability: "full-time",
      deliveries: []
    }
  ],
  user: [
       { 
      username: "admin", 
      password: "admin123", 
      name: "Admin User",
      email: "admin@quickbite.com",
      phone: "+8801712345678",
      address: "123 Admin Street, Dhaka",
      joinDate: "2023-01-01",
      status: "active"
    },
    { 
      username: "user1", 
      password: "user123", 
      name: "Regular User",
      email: "user1@example.com",
      phone: "+8801512345678",
      address: "202 User Avenue, Dhaka",
      city: "Dhaka",
      postalCode: "1207",
      country: "Bangladesh",
      joinDate: "2023-05-20",
      status: "active",
      paymentMethods: [
        { type: "credit", last4: "1234" },
        { type: "mobile", provider: "bKash" }
      ],
      orders: [],
      cart: []
    },
    { 
      username: "user2", 
      password: "user123", 
      name: "Another User",
      email: "user2@example.com",
      phone: "+8801312345678",
      address: "303 Customer Road, Dhaka",
      city: "Dhaka",
      postalCode: "1212",
      country: "Bangladesh",
      joinDate: "2023-06-15",
      status: "active",
      paymentMethods: [
        { type: "debit", last4: "5678" }
      ],
      orders: [],
      cart: []
    }
  ]
};

// Current user
let currentUser = null;

// Exchange rate (1 USD to BDT) - would normally fetch this from an API
let exchangeRate = 80.50;

// Orders data
let orders = [
  {
    id: 1001,
    userId: "user1",
    restaurantId: "pizzapalace",
    items: [
      { id: 1, name: "Margherita Pizza", price: 12.99, quantity: 1, restaurant: "Pizza Palace" },
      { id: 3, name: "Garlic Bread", price: 4.99, quantity: 1, restaurant: "Pizza Palace" }
    ],
    total: 17.98,
    status: ORDER_STATUS.DELIVERED,
    date: "2023-01-15",
    deliveryPerson: "Raisha Delivery",
    timestamp: new Date("2023-01-15").getTime()
  },
  {
    id: 1002,
    userId: "user1",
    restaurantId: "burgerbarn",
    items: [
      { id: 1, name: "Classic Burger", price: 8.99, quantity: 2, restaurant: "Burger Barn" },
      { id: 2, name: "Fries", price: 3.99, quantity: 1, restaurant: "Burger Barn" }
    ],
    total: 21.97,
    status: ORDER_STATUS.ON_THE_WAY,
    date: "2023-01-10",
    deliveryPerson: "Raisha Delivery",
    timestamp: new Date("2023-01-10").getTime()
  }
];

// Add this function to simulate real-time updates
function setupRealTimeUpdates() {
    // This code block was causing the automatic refresh and should be removed or commented out.

    /*
    setInterval(() => {
        if (currentUser) {
            // Only update if dashboard is visible
            if (document.getElementById('dashboardContainer').style.display === 'block') {
                // Only refresh if we're not in the middle of an admin action
                const isAdminView = currentUser.type === 'admin' &&
                    document.querySelector('.dashboard-form') !== null;

                if (!isAdminView) {
                    updateOrderDisplays();
                }
            }
            // Always check for new orders (shows toast notifications)
            checkForNewOrders();
        }
    }, 3000);
    */

    // Initialize real-time updates when the page loads
    updateOrderDisplays();
}

// Add this function to handle admin dashboard button clicks
function handleAdminDashboardActions(action) {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  
  switch(action) {
    case 'manageUsers':
      dashboardMain.innerHTML = `
        <h1 class="dashboard-title">Manage Users</h1>
        <div class="dashboard-form">
          <div class="search-filter">
            <input type="text" placeholder="Search users..." id="userSearch">
            <button class="btn btn-primary" id="searchUsersBtn">Search</button>
          </div>
          <div class="user-table">
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="usersTableBody">
                ${renderAllUsers()}
              </tbody>
            </table>
          </div>
          <div class="form-actions">
            <button class="btn btn-primary" id="addNewUserBtn">Add New User</button>
            <button class="btn btn-outline" id="backToDashboardBtn">Back to Dashboard</button>
          </div>
        </div>
      `;
      
      document.getElementById('backToDashboardBtn').addEventListener('click', showDashboard);
      document.getElementById('addNewUserBtn').addEventListener('click', showAddUserForm);
      document.getElementById('searchUsersBtn').addEventListener('click', searchUsers);
      break;
      
    case 'manageRestaurants':
      dashboardMain.innerHTML = `
        <h1 class="dashboard-title">Manage Restaurants</h1>
        <div class="dashboard-form">
          <div class="search-filter">
            <input type="text" placeholder="Search restaurants..." id="restaurantSearch">
            <button class="btn btn-primary" id="searchRestaurantsBtn">Search</button>
          </div>
          <div class="restaurant-table">
            <table>
              <thead>
                <tr>
                  <th>Restaurant</th>
                  <th>Cuisine</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="restaurantsTableBody">
                ${renderAllRestaurants()}
              </tbody>
            </table>
          </div>
          <div class="form-actions">
            <button class="btn btn-primary" id="addNewRestaurantBtn">Add New Restaurant</button>
            <button class="btn btn-outline" id="backToDashboardBtn">Back to Dashboard</button>
          </div>
        </div>
      `;
      
      document.getElementById('backToDashboardBtn').addEventListener('click', showDashboard);
      document.getElementById('addNewRestaurantBtn').addEventListener('click', showAddRestaurantForm);
      document.getElementById('searchRestaurantsBtn').addEventListener('click', searchRestaurants);
      break;
      
    case 'manageDelivery':
      dashboardMain.innerHTML = `
        <h1 class="dashboard-title">Manage Delivery Personnel</h1>
        <div class="dashboard-form">
          <div class="search-filter">
            <input type="text" placeholder="Search delivery..." id="deliverySearch">
            <button class="btn btn-primary" id="searchDeliveryBtn">Search</button>
          </div>
          <div class="delivery-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vehicle</th>
                  <th>Status</th>
                  <th>Deliveries</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="deliveryTableBody">
                ${renderAllDelivery()}
              </tbody>
            </table>
          </div>
          <div class="form-actions">
            <button class="btn btn-primary" id="addNewDeliveryBtn">Add New Delivery</button>
            <button class="btn btn-outline" id="backToDashboardBtn">Back to Dashboard</button>
          </div>
        </div>
      `;
      
      document.getElementById('backToDashboardBtn').addEventListener('click', showDashboard);
      document.getElementById('addNewDeliveryBtn').addEventListener('click', showAddDeliveryForm);
      document.getElementById('searchDeliveryBtn').addEventListener('click', searchDelivery);
      break;
      
    case 'viewOrders':
      dashboardMain.innerHTML = `
        <h1 class="dashboard-title">All Orders</h1>
        <div class="dashboard-form">
          <div class="search-filter">
            <input type="text" placeholder="Search orders..." id="orderSearch">
            <button class="btn btn-primary" id="searchOrdersBtn">Search</button>
            <select id="orderStatusFilter">
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="on-the-way">On the Way</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div class="orders-management">
            <div class="orders-list">
              ${renderAllOrders()}
            </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-outline" id="backToDashboardBtn">Back to Dashboard</button>
          </div>
        </div>
      `;
      
      document.getElementById('backToDashboardBtn').addEventListener('click', showDashboard);
      document.getElementById('searchOrdersBtn').addEventListener('click', filterOrders);
      document.getElementById('orderStatusFilter').addEventListener('change', filterOrders);
      break;
      
    case 'platformStats':
      dashboardMain.innerHTML = `
        <h1 class="dashboard-title">Platform Statistics</h1>
        <div class="dashboard-form">
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Users</h3>
              <p class="stat-value">${users.user.length}</p>
            </div>
            <div class="stat-card">
              <h3>Total Restaurants</h3>
              <p class="stat-value">${users.restaurant.length}</p>
            </div>
            <div class="stat-card">
              <h3>Total Delivery</h3>
              <p class="stat-value">${users.delivery.length}</p>
            </div>
            <div class="stat-card">
              <h3>Total Orders</h3>
              <p class="stat-value">${orders.length}</p>
            </div>
          </div>
          <div class="chart-placeholder" style="height: 300px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; margin: 20px 0; border-radius: 8px;">
            <p>Order Volume Chart (would be implemented with a charting library)</p>
          </div>
          <div class="recent-activity">
            <h3>Recent Activity</h3>
            <div class="activity-list">
              ${renderRecentActivity()}
            </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-outline" id="backToDashboardBtn">Back to Dashboard</button>
          </div>
        </div>
      `;
      
      document.getElementById('backToDashboardBtn').addEventListener('click', showDashboard);
      break;
      
    case 'managePromotions':
      dashboardMain.innerHTML = `
        <h1 class="dashboard-title">Manage Promotions</h1>
        <div class="dashboard-form">
          <div class="promotions-management">
            <div class="promotions-header">
              <h3>Current Promotions</h3>
              <button class="btn btn-primary" id="addPromotionBtn">Add Promotion</button>
            </div>
            <div class="promotions-list">
              ${renderPromotions()}
            </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-outline" id="backToDashboardBtn">Back to Dashboard</button>
          </div>
        </div>
      `;
      
      document.getElementById('backToDashboardBtn').addEventListener('click', showDashboard);
      document.getElementById('addPromotionBtn').addEventListener('click', showAddPromotionForm);
      break;
  }
}

// Helper functions for admin dashboard
function renderAllUsers() {
  let html = '';
  
  // Add admin users
  users.admin.forEach(user => {
    if (user.username !== 'admin') { // Skip the main admin account
      html += `
        <tr>
          <td>${user.username}</td>
          <td>${user.name}</td>
          <td>Admin</td>
          <td><span class="status-badge active">Active</span></td>
          <td>
            <button class="btn btn-sm btn-outline edit-user" data-username="${user.username}" data-type="admin">Edit</button>
            <button class="btn btn-sm btn-danger delete-user" data-username="${user.username}" data-type="admin">Delete</button>
          </td>
        </tr>
      `;
    }
  });
  
  // Add restaurant users
  users.restaurant.forEach(user => {
    if (user.username !== 'admin') { // Skip the admin account in restaurants
      html += `
        <tr>
          <td>${user.username}</td>
          <td>${user.name}</td>
          <td>Restaurant (${user.restaurant})</td>
          <td><span class="status-badge ${user.status === 'active' ? 'active' : 'pending'}">${user.status}</span></td>
          <td>
            <button class="btn btn-sm btn-outline edit-user" data-username="${user.username}" data-type="restaurant">Edit</button>
            <button class="btn btn-sm btn-danger delete-user" data-username="${user.username}" data-type="restaurant">Delete</button>
            <button class="btn btn-sm ${user.status === 'active' ? 'btn-warning' : 'btn-primary'} toggle-status" data-username="${user.username}" data-type="restaurant">
              ${user.status === 'active' ? 'Suspend' : 'Activate'}
            </button>
          </td>
        </tr>
      `;
    }
  });
  
  // Add delivery users
  users.delivery.forEach(user => {
    if (user.username !== 'admin') { // Skip the admin account in delivery
      html += `
        <tr>
          <td>${user.username}</td>
          <td>${user.name}</td>
          <td>Delivery</td>
          <td><span class="status-badge ${user.status === 'active' ? 'active' : 'pending'}">${user.status}</span></td>
          <td>
            <button class="btn btn-sm btn-outline edit-user" data-username="${user.username}" data-type="delivery">Edit</button>
            <button class="btn btn-sm btn-danger delete-user" data-username="${user.username}" data-type="delivery">Delete</button>
            <button class="btn btn-sm ${user.status === 'active' ? 'btn-warning' : 'btn-primary'} toggle-status" data-username="${user.username}" data-type="delivery">
              ${user.status === 'active' ? 'Deactivate' : 'Activate'}
            </button>
          </td>
        </tr>
      `;
    }
  });
  
  // Add regular users
  users.user.forEach(user => {
    if (user.username !== 'admin') { // Skip the admin account in users
      html += `
        <tr>
          <td>${user.username}</td>
          <td>${user.name}</td>
          <td>User</td>
          <td><span class="status-badge active">Active</span></td>
          <td>
            <button class="btn btn-sm btn-outline edit-user" data-username="${user.username}" data-type="user">Edit</button>
            <button class="btn btn-sm btn-danger delete-user" data-username="${user.username}" data-type="user">Delete</button>
            <button class="btn btn-sm btn-warning toggle-status" data-username="${user.username}" data-type="user">Suspend</button>
          </td>
        </tr>
      `;
    }
  });
  
  return html;
}

function renderAllRestaurants() {
  let html = '';
  
  users.restaurant.forEach(restaurant => {
    if (restaurant.username !== 'admin') { // Skip the admin account
      html += `
        <tr>
          <td>${restaurant.restaurant}</td>
          <td>${restaurant.cuisine}</td>
          <td>${restaurant.name}</td>
          <td><span class="status-badge ${restaurant.status === 'active' ? 'active' : 'pending'}">${restaurant.status}</span></td>
          <td>
            <button class="btn btn-sm btn-outline edit-restaurant" data-username="${restaurant.username}">Edit</button>
            <button class="btn btn-sm btn-danger delete-restaurant" data-username="${restaurant.username}">Delete</button>
            <button class="btn btn-sm ${restaurant.status === 'active' ? 'btn-warning' : 'btn-primary'} toggle-restaurant" data-username="${restaurant.username}">
              ${restaurant.status === 'active' ? 'Suspend' : 'Approve'}
            </button>
          </td>
        </tr>
      `;
    }
  });
  
  return html;
}

function renderAllDelivery() {
  let html = '';
  
  users.delivery.forEach(delivery => {
    if (delivery.username !== 'admin') { // Skip the admin account
      html += `
        <tr>
          <td>${delivery.name}</td>
          <td>${delivery.vehicleType}</td>
          <td><span class="status-badge ${delivery.status === 'active' ? 'active' : 'pending'}">${delivery.status}</span></td>
          <td>${delivery.deliveries.length}</td>
          <td>
            <button class="btn btn-sm btn-outline edit-delivery" data-username="${delivery.username}">Edit</button>
            <button class="btn btn-sm btn-danger delete-delivery" data-username="${delivery.username}">Delete</button>
            <button class="btn btn-sm ${delivery.status === 'active' ? 'btn-warning' : 'btn-primary'} toggle-delivery" data-username="${delivery.username}">
              ${delivery.status === 'active' ? 'Deactivate' : 'Activate'}
            </button>
          </td>
        </tr>
      `;
    }
  });
  
  return html;
}

function renderAllOrders() {
  let html = '';
  
  // Sort orders by date (newest first)
  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  sortedOrders.forEach(order => {
    const user = users.user.find(u => u.username === order.userId);
    const restaurant = users.restaurant.find(r => r.username === order.restaurantId);
    
    html += `
      <div class="order-card">
        <div class="order-header">
          <span class="order-id">Order #${order.id}</span>
          <span class="order-date">${order.date}</span>
          <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
        </div>
        <div class="order-details">
          <p><strong>Customer:</strong> ${user ? user.name : order.userId}</p>
          <p><strong>Restaurant:</strong> ${restaurant ? restaurant.restaurant : order.restaurantId}</p>
          <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
          <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
          ${order.deliveryPerson ? `<p><strong>Delivery:</strong> ${order.deliveryPerson}</p>` : ''}
        </div>
        <div class="order-actions">
          <button class="btn btn-sm btn-primary view-order" data-id="${order.id}">View Details</button>
          ${order.status === 'pending' ? `<button class="btn btn-sm btn-outline assign-delivery" data-id="${order.id}">Assign Delivery</button>` : ''}
          ${order.status !== 'cancelled' && order.status !== 'delivered' ? `<button class="btn btn-sm btn-danger cancel-order" data-id="${order.id}">Cancel Order</button>` : ''}
        </div>
      </div>
    `;
  });
  
  return html;
}

function renderRecentActivity() {
  // Combine all possible activities
  const activities = [];
  
  // Add user registrations
  users.user.forEach(user => {
    if (user.username !== 'admin') {
      activities.push({
        type: 'user',
        action: 'registered',
        name: user.name,
        date: user.joinDate,
        timestamp: new Date(user.joinDate).getTime()
      });
    }
  });
  
  // Add restaurant registrations
  users.restaurant.forEach(restaurant => {
    if (restaurant.username !== 'admin') {
      activities.push({
        type: 'restaurant',
        action: 'registered',
        name: restaurant.restaurant,
        date: restaurant.joinDate,
        timestamp: new Date(restaurant.joinDate).getTime()
      });
    }
  });
  
  // Add delivery registrations
  users.delivery.forEach(delivery => {
    if (delivery.username !== 'admin') {
      activities.push({
        type: 'delivery',
        action: 'registered',
        name: delivery.name,
        date: delivery.joinDate,
        timestamp: new Date(delivery.joinDate).getTime()
      });
    }
  });
  
  // Add orders
  orders.forEach(order => {
    activities.push({
      type: 'order',
      action: 'placed',
      id: order.id,
      date: order.date,
      timestamp: order.timestamp,
      total: order.total
    });
  });
  
  // Sort by timestamp (newest first)
  activities.sort((a, b) => b.timestamp - a.timestamp);
  
  // Take only the 5 most recent
  const recentActivities = activities.slice(0, 5);
  
  // Generate HTML
  let html = '';
  recentActivities.forEach(activity => {
    if (activity.type === 'order') {
      html += `
        <div class="activity-item">
          <i class="fas fa-shopping-bag"></i>
          <div class="activity-info">
            <p>Order #${activity.id} placed</p>
            <small>${activity.date} • ৳${(activity.total * exchangeRate).toFixed(2)}</small>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="activity-item">
          <i class="fas fa-user${activity.type === 'restaurant' ? '-tie' : (activity.type === 'delivery' ? '-shirt' : '')}"></i>
          <div class="activity-info">
            <p>${activity.name} ${activity.action} as ${activity.type}</p>
            <small>${activity.date}</small>
          </div>
        </div>
      `;
    }
  });
  
  return html;
}

function renderPromotions() {
  // In a real app, this would come from a database
  // For our demo, we'll use some sample promotions
  const promotions = [
    {
      id: 1,
      name: "New User Discount",
      code: "WELCOME20",
      discount: "20%",
      validUntil: "2023-12-31",
      status: "active"
    },
    {
      id: 2,
      name: "Free Delivery Weekend",
      code: "FREEDEL",
      discount: "Free Delivery",
      validUntil: "2023-11-30",
      status: "active"
    },
    {
      id: 3,
      name: "Holiday Special",
      code: "HOLIDAY25",
      discount: "25%",
      validUntil: "2023-12-25",
      status: "upcoming"
    }
  ];
  
  let html = '';
  
  promotions.forEach(promo => {
    html += `
      <div class="promotion-card">
        <h4>${promo.name}</h4>
        <p><strong>Code:</strong> ${promo.code}</p>
        <p><strong>Discount:</strong> ${promo.discount}</p>
        <p><strong>Valid Until:</strong> ${promo.validUntil}</p>
        <p><strong>Status:</strong> <span class="status-badge ${promo.status === 'active' ? 'active' : 'pending'}">${promo.status}</span></p>
        <div class="promotion-actions">
          <button class="btn btn-sm btn-outline edit-promo" data-id="${promo.id}">Edit</button>
          <button class="btn btn-sm ${promo.status === 'active' ? 'btn-warning' : 'btn-primary'} toggle-promo" data-id="${promo.id}">
            ${promo.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
          <button class="btn btn-sm btn-danger delete-promo" data-id="${promo.id}">Delete</button>
        </div>
      </div>
    `;
  });
  
  return html;
}

// Add these functions to the existing addDashboardEventListeners function
function addDashboardEventListeners() {
  // Dashboard card click handlers
  document.querySelectorAll('.dashboard-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = this.id;
      if (currentUser && currentUser.type === 'admin') {
        handleAdminDashboardActions(id);
      } else {
        alert(`Navigating to ${id.replace(/([A-Z])/g, ' $1').trim()}`);
      }
    });
  });
  
  // ... rest of the existing function ...
}

// Add these helper functions for admin actions
function showAddUserForm() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  
  dashboardMain.innerHTML = `
    <h1 class="dashboard-title">Add New User</h1>
    <div class="dashboard-form">
      <form id="addUserForm">
        <div class="form-group">
          <label for="userType">User Type:</label>
          <select id="userType" required>
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="restaurant">Restaurant</option>
            <option value="delivery">Delivery</option>
            <option value="user">Regular User</option>
          </select>
        </div>
        
        <div id="userFormFields"></div>
        
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Save User</button>
          <button type="button" class="btn btn-outline" id="cancelAddUser">Cancel</button>
        </div>
      </form>
    </div>
  `;
  
  document.getElementById('userType').addEventListener('change', function() {
    const userType = this.value;
    const userFormFields = document.getElementById('userFormFields');
    
    if (!userType) {
      userFormFields.innerHTML = '';
      return;
    }
    
    let fields = `
      <div class="form-group">
        <label for="newUsername">Username:</label>
        <input type="text" id="newUsername" required>
      </div>
      <div class="form-group">
        <label for="newPassword">Password:</label>
        <input type="password" id="newPassword" required minlength="6">
      </div>
      <div class="form-group">
        <label for="newName">Full Name:</label>
        <input type="text" id="newName" required>
      </div>
      <div class="form-group">
        <label for="newEmail">Email:</label>
        <input type="email" id="newEmail" required>
      </div>
      <div class="form-group">
        <label for="newPhone">Phone:</label>
        <input type="tel" id="newPhone" required>
      </div>
    `;
    
    if (userType === 'restaurant') {
      fields += `
        <div class="form-group">
          <label for="restaurantName">Restaurant Name:</label>
          <input type="text" id="restaurantName" required>
        </div>
        <div class="form-group">
          <label for="restaurantCuisine">Cuisine Type:</label>
          <input type="text" id="restaurantCuisine" required>
        </div>
      `;
    } else if (userType === 'delivery') {
      fields += `
        <div class="form-group">
          <label for="deliveryVehicle">Vehicle Type:</label>
          <select id="deliveryVehicle" required>
            <option value="">Select Vehicle</option>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
            <option value="scooter">Scooter</option>
          </select>
        </div>
        <div class="form-group">
          <label for="deliveryLicense">License Number:</label>
          <input type="text" id="deliveryLicense" required>
        </div>
      `;
    }
    
    userFormFields.innerHTML = fields;
  });
  
  document.getElementById('cancelAddUser').addEventListener('click', function() {
    handleAdminDashboardActions('manageUsers');
  });
  
  document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addNewUser();
  });
}

function addNewUser() {
  const userType = document.getElementById('userType').value;
  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();
  const name = document.getElementById('newName').value.trim();
  const email = document.getElementById('newEmail').value.trim();
  const phone = document.getElementById('newPhone').value.trim();
  
  if (!userType || !username || !password || !name || !email || !phone) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Check if username already exists
  if (users[userType].some(u => u.username === username)) {
    alert('Username already exists');
    return;
  }
  
  const newUser = {
    username,
    password,
    name,
    email,
    phone,
    joinDate: new Date().toISOString().split('T')[0],
    status: 'active'
  };
  
  if (userType === 'restaurant') {
    newUser.restaurant = document.getElementById('restaurantName').value.trim();
    newUser.cuisine = document.getElementById('restaurantCuisine').value.trim();
    newUser.menu = [];
    newUser.orders = [];
  } else if (userType === 'delivery') {
    newUser.vehicleType = document.getElementById('deliveryVehicle').value;
    newUser.licenseNumber = document.getElementById('deliveryLicense').value.trim();
    newUser.deliveries = [];
    newUser.availability = 'full-time';
  } else if (userType === 'user') {
    newUser.paymentMethods = [];
    newUser.orders = [];
    newUser.cart = [];
  }
  
  users[userType].push(newUser);
  showToast(`${userType.charAt(0).toUpperCase() + userType.slice(1)} user ${username} created successfully`);
  handleAdminDashboardActions('manageUsers');
}

// Similar functions would be needed for restaurants, delivery, promotions, etc.
// For brevity, I'm showing the pattern but not implementing all of them

function showAddRestaurantForm() {
  // Similar to showAddUserForm but for restaurants
  alert('Add Restaurant form would be implemented here');
}

function showAddDeliveryForm() {
  // Similar to showAddUserForm but for delivery personnel
  alert('Add Delivery form would be implemented here');
}

function showAddPromotionForm() {
  // Implementation for adding promotions
  alert('Add Promotion form would be implemented here');
}

function searchUsers() {
  const searchTerm = document.getElementById('userSearch').value.trim().toLowerCase();
  const rows = document.querySelectorAll('#usersTableBody tr');
  
  rows.forEach(row => {
    const username = row.cells[0].textContent.toLowerCase();
    const name = row.cells[1].textContent.toLowerCase();
    const type = row.cells[2].textContent.toLowerCase();
    
    if (username.includes(searchTerm) || name.includes(searchTerm) || type.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function searchRestaurants() {
  const searchTerm = document.getElementById('restaurantSearch').value.trim().toLowerCase();
  const rows = document.querySelectorAll('#restaurantsTableBody tr');
  
  rows.forEach(row => {
    const restaurant = row.cells[0].textContent.toLowerCase();
    const cuisine = row.cells[1].textContent.toLowerCase();
    const owner = row.cells[2].textContent.toLowerCase();
    
    if (restaurant.includes(searchTerm) || cuisine.includes(searchTerm) || owner.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function searchDelivery() {
  const searchTerm = document.getElementById('deliverySearch').value.trim().toLowerCase();
  const rows = document.querySelectorAll('#deliveryTableBody tr');
  
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const vehicle = row.cells[1].textContent.toLowerCase();
    
    if (name.includes(searchTerm) || vehicle.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function filterOrders() {
  const searchTerm = document.getElementById('orderSearch').value.trim().toLowerCase();
  const statusFilter = document.getElementById('orderStatusFilter').value;
  const orderCards = document.querySelectorAll('.orders-list .order-card');
  
  orderCards.forEach(card => {
    const orderId = card.querySelector('.order-id').textContent.toLowerCase();
    const status = card.querySelector('.order-status').textContent.toLowerCase().replace(' ', '-');
    const customer = card.querySelector('.order-details p:nth-child(1)').textContent.toLowerCase();
    const restaurant = card.querySelector('.order-details p:nth-child(2)').textContent.toLowerCase();
    
    const matchesSearch = orderId.includes(searchTerm) || customer.includes(searchTerm) || restaurant.includes(searchTerm);
    const matchesStatus = !statusFilter || status === statusFilter;
    
    if (matchesSearch && matchesStatus) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add this function to update order displays
function updateOrderDisplays() {
    // Only update if we're on a page that needs updating
    if (document.getElementById('dashboardContainer').style.display === 'block') {
        const user = getUserData();
        if (!user) return;
        
        // Don't refresh if we're in the middle of admin management
        const isManaging = document.querySelector('.dashboard-form') !== null;
        if (isManaging && currentUser.type === 'admin') return;
        
        showDashboard(); // Refresh dashboard view
    }
    
    if (document.getElementById('cartModal').style.display === 'block') {
        showCartModal();
    }
}

// Add this function to check for new orders
function checkForNewOrders() {
    const user = getUserData();
    if (!user) return;

    let newOrders = [];
    
    if (currentUser.type === 'restaurant') {
        newOrders = orders.filter(o => 
            o.restaurantId === user.username && 
            o.status === ORDER_STATUS.PENDING
        );
    } else if (currentUser.type === 'delivery') {
        newOrders = orders.filter(o => 
            o.deliveryPerson === user.name && 
            (o.status === ORDER_STATUS.READY || o.status === ORDER_STATUS.ON_THE_WAY)
        );
    } else if (currentUser.type === 'user') {
        newOrders = orders.filter(o => 
            o.userId === user.username && 
            o.status !== ORDER_STATUS.DELIVERED && 
            o.status !== ORDER_STATUS.CANCELLED
        );
    }

    if (newOrders.length > 0) {
        showToast(`You have ${newOrders.length} new order update(s)`);
    }
}

// Add this function to show real-time order status
function showRealTimeOrderStatus(order) {
    const statusContainer = document.getElementById('realTimeOrderStatus');
    const updatesContainer = document.getElementById('orderStatusUpdates');
    
    if (!statusContainer || !updatesContainer) return;
    
    statusContainer.style.display = 'block';
    updatesContainer.innerHTML = `
        <div class="order-status-card">
            <h4>Order #${order.id}</h4>
            <p>Status: <span class="status-badge ${order.status}">${order.status.replace('-', ' ')}</span></p>
            <div class="status-timeline">
                <div class="timeline-step ${order.status === ORDER_STATUS.PENDING ? 'active' : ''}">
                    <div class="timeline-dot"></div>
                    <p>Order Placed</p>
                </div>
                <div class="timeline-step ${order.status === ORDER_STATUS.ACCEPTED || order.status === ORDER_STATUS.PREPARING ? 'active' : ''}">
                    <div class="timeline-dot"></div>
                    <p>Restaurant Preparing</p>
                </div>
                <div class="timeline-step ${order.status === ORDER_STATUS.READY ? 'active' : ''}">
                    <div class="timeline-dot"></div>
                    <p>Ready for Pickup</p>
                </div>
                <div class="timeline-step ${order.status === ORDER_STATUS.ON_THE_WAY ? 'active' : ''}">
                    <div class="timeline-dot"></div>
                    <p>On the Way</p>
                </div>
                <div class="timeline-step ${order.status === ORDER_STATUS.DELIVERED ? 'active' : ''}">
                    <div class="timeline-dot"></div>
                    <p>Delivered</p>
                </div>
            </div>
        </div>
    `;
}

// Add this function to update order status
function updateOrderStatus(order) {
    // In a real app, this would update the backend
    // For our demo, we'll just update the local orders array
    const index = orders.findIndex(o => o.id === order.id);
    if (index !== -1) {
        orders[index] = order;
    }
    
    // Update the display
    updateOrderDisplays();
    
    // Show real-time update
    if (currentUser && currentUser.type === 'user') {
        showRealTimeOrderStatus(order);
    }
}

// Food data by category
const foodData = {
  pizza: [
    { name: "Margherita Pizza", price: 12.99, restaurant: "Pizza Palace", description: "Classic pizza with tomato sauce, mozzarella, and basil", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
    { name: "Pepperoni Pizza", price: 14.99, restaurant: "Pizza Palace", description: "Traditional pizza with spicy pepperoni", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e" },
    { name: "Vegetarian Pizza", price: 13.99, restaurant: "Pizza Palace", description: "Loaded with fresh vegetables", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c" },
    { name: "BBQ Chicken Pizza", price: 15.99, restaurant: "Pizza Palace", description: "Tangy BBQ sauce with grilled chicken", image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94" },
    { name: "Hawaiian Pizza", price: 14.99, restaurant: "Pizza Palace", description: "Ham and pineapple combo", image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796" },
    { name: "Four Cheese Pizza", price: 16.99, restaurant: "Pizza Palace", description: "Mozzarella, gorgonzola, parmesan, and ricotta", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9" },
    { name: "Mushroom Truffle Pizza", price: 18.99, restaurant: "Pizza Palace", description: "Gourmet pizza with truffle oil", image: "https://images.unsplash.com/photo-1593504049359-74330189a345" },
    { name: "Meat Lovers Pizza", price: 17.99, restaurant: "Pizza Palace", description: "Pepperoni, sausage, bacon, and ham", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212" },
    { name: "Buffalo Chicken Pizza", price: 16.99, restaurant: "Pizza Palace", description: "Spicy buffalo sauce with blue cheese", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9" },
    { name: "White Pizza", price: 15.99, restaurant: "Pizza Palace", description: "No tomato sauce, just cheese and garlic", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
    { name: "Calzone", price: 14.99, restaurant: "Pizza Palace", description: "Folded pizza with ricotta filling", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9" },
    { name: "Neapolitan Pizza", price: 16.99, restaurant: "Pizza Palace", description: "Authentic Italian thin crust pizza", image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326" }
  ],
  biryani: [
    { name: "Chicken Biryani", price: 10.99, restaurant: "Spice Garden", description: "Fragrant rice with tender chicken pieces", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" },
    { name: "Vegetable Biryani", price: 8.99, restaurant: "Spice Garden", description: "Flavorful rice with mixed vegetables", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc" },
    { name: "Mutton Biryani", price: 14.99, restaurant: "Spice Garden", description: "Rich and spicy mutton biryani", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
    { name: "Egg Biryani", price: 9.99, restaurant: "Spice Garden", description: "Biryani with boiled eggs", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b" },
    { name: "Prawn Biryani", price: 16.99, restaurant: "Spice Garden", description: "Seafood delight with prawns", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
    { name: "Hyderabadi Biryani", price: 15.99, restaurant: "Spice Garden", description: "Authentic Hyderabadi dum biryani", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" },
    { name: "Kolkata Biryani", price: 14.99, restaurant: "Spice Garden", description: "With potato and boiled egg", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" },
    { name: "Paneer Biryani", price: 12.99, restaurant: "Spice Garden", description: "Vegetarian delight with cottage cheese", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" },
    { name: "Sindhi Biryani", price: 13.99, restaurant: "Spice Garden", description: "With yogurt and dried plums", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" },
    { name: "Kashmiri Biryani", price: 16.99, restaurant: "Spice Garden", description: "With dried fruits and nuts", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" },
    { name: "Thalassery Biryani", price: 15.99, restaurant: "Spice Garden", description: "Malabar specialty with small grain rice", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" },
    { name: "Afghani Biryani", price: 17.99, restaurant: "Spice Garden", description: "Rich and meaty with distinct flavors", image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b1" }
  ],
  burgers: [
    { name: "Classic Burger", price: 8.99, restaurant: "Burger Barn", description: "Beef patty with lettuce and special sauce", image: "https://images.unsplash.com/photo-1559847844-5315695dadae" },
    { name: "Cheeseburger", price: 9.99, restaurant: "Burger Barn", description: "Classic with melted cheese", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330" },
    { name: "Bacon Burger", price: 11.99, restaurant: "Burger Barn", description: "With crispy bacon strips", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b" },
    { name: "Veggie Burger", price: 8.99, restaurant: "Burger Barn", description: "Plant-based patty with fresh veggies", image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7" },
    { name: "Double Patty Burger", price: 12.99, restaurant: "Burger Barn", description: "For those with a big appetite", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { name: "Mushroom Swiss Burger", price: 13.99, restaurant: "Burger Barn", description: "Sautéed mushrooms and Swiss cheese", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9" },
    { name: "BBQ Burger", price: 12.99, restaurant: "Burger Barn", description: "Smoky BBQ sauce and onion rings", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9" },
    { name: "Turkey Burger", price: 11.99, restaurant: "Burger Barn", description: "Lean turkey patty with cranberry sauce", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9" },
    { name: "Chicken Burger", price: 10.99, restaurant: "Burger Barn", description: "Grilled chicken breast with avocado", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9" },
    { name: "Breakfast Burger", price: 12.99, restaurant: "Burger Barn", description: "With fried egg and hash brown", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9" },
    { name: "Jalapeño Burger", price: 13.99, restaurant: "Burger Barn", description: "Spicy jalapeños and pepper jack cheese", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9" },
    { name: "Black Bean Burger", price: 11.99, restaurant: "Burger Barn", description: "Vegan option with black bean patty", image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7" }
  ],
  cakes: [
    { name: "Chocolate Cake", price: 19.99, restaurant: "Sweet Delights", description: "Rich chocolate cake with fudge icing", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Red Velvet Cake", price: 22.99, restaurant: "Sweet Delights", description: "Classic red velvet with cream cheese frosting", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
    { name: "Cheesecake", price: 16.99, restaurant: "Sweet Delights", description: "New York style cheesecake", image: "https://images.unsplash.com/photo-1543745800-9aee9a042745" },
    { name: "Black Forest", price: 21.99, restaurant: "Sweet Delights", description: "Chocolate cake with cherries and cream", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e" },
    { name: "Tiramisu", price: 18.99, restaurant: "Sweet Delights", description: "Italian coffee-flavored dessert", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" },
    { name: "Carrot Cake", price: 20.99, restaurant: "Sweet Delights", description: "With cream cheese frosting and walnuts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Lemon Drizzle Cake", price: 17.99, restaurant: "Sweet Delights", description: "Tangy lemon glaze on moist cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Victoria Sponge", price: 18.99, restaurant: "Sweet Delights", description: "Classic British cake with jam and cream", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Opera Cake", price: 24.99, restaurant: "Sweet Delights", description: "French layered coffee and chocolate cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Chiffon Cake", price: 19.99, restaurant: "Sweet Delights", description: "Light and airy sponge cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Fruit Cake", price: 22.99, restaurant: "Sweet Delights", description: "Dense cake with dried fruits and nuts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { name: "Angel Food Cake", price: 17.99, restaurant: "Sweet Delights", description: "Light sponge cake with whipped cream", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" }
  ],
  chicken: [
    { name: "Fried Chicken", price: 9.99, restaurant: "Chicken Lovers", description: "Crispy fried chicken pieces", image: "https://images.unsplash.com/photo-1562967914-608f82629710" },
    { name: "Grilled Chicken", price: 11.99, restaurant: "Chicken Lovers", description: "Healthy grilled chicken with herbs", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
    { name: "Chicken Wings", price: 8.99, restaurant: "Chicken Lovers", description: "Spicy or BBQ flavored wings", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f" },
    { name: "Chicken Curry", price: 10.99, restaurant: "Chicken Lovers", description: "Traditional chicken curry with rice", image: "https://images.unsplash.com/photo-1546069901-2c6d3a5a5c5a" },
    { name: "Chicken Sandwich", price: 7.99, restaurant: "Chicken Lovers", description: "Grilled chicken sandwich with veggies", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b" },
    { name: "Chicken Parmesan", price: 13.99, restaurant: "Chicken Lovers", description: "Breaded chicken with marinara and cheese", image: "https://images.unsplash.com/photo-1562967914-608f82629710" },
    { name: "Chicken Tikka Masala", price: 12.99, restaurant: "Chicken Lovers", description: "Creamy Indian chicken dish", image: "https://images.unsplash.com/photo-1546069901-2c6d3a5a5c5a" },
    { name: "Chicken Shawarma", price: 10.99, restaurant: "Chicken Lovers", description: "Middle Eastern spiced chicken wrap", image: "https://images.unsplash.com/photo-1630450202872-e1d1f6a5b2c5" },
    { name: "Chicken Fajitas", price: 14.99, restaurant: "Chicken Lovers", description: "Sizzling chicken with peppers and onions", image: "https://images.unsplash.com/photo-1562967914-608f82629710" },
    { name: "Chicken Nuggets", price: 8.99, restaurant: "Chicken Lovers", description: "Bite-sized breaded chicken pieces", image: "https://images.unsplash.com/photo-1562967914-608f82629710" },
    { name: "Chicken Pot Pie", price: 11.99, restaurant: "Chicken Lovers", description: "Creamy chicken and vegetable pie", image: "https://images.unsplash.com/photo-1562967914-608f82629710" },
    { name: "Chicken Satay", price: 9.99, restaurant: "Chicken Lovers", description: "Skewered chicken with peanut sauce", image: "https://images.unsplash.com/photo-1562967914-608f82629710" }
  ],
  cafe: [
    { name: "Cappuccino", price: 4.99, restaurant: "Urban Cafe", description: "Espresso with steamed milk foam", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Latte", price: 5.49, restaurant: "Urban Cafe", description: "Espresso with a lot of steamed milk", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Americano", price: 3.99, restaurant: "Urban Cafe", description: "Espresso with hot water", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Espresso", price: 3.49, restaurant: "Urban Cafe", description: "Strong black coffee", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Mocha", price: 5.99, restaurant: "Urban Cafe", description: "Chocolate-flavored latte", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Flat White", price: 5.49, restaurant: "Urban Cafe", description: "Similar to latte but with microfoam", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Macchiato", price: 4.49, restaurant: "Urban Cafe", description: "Espresso with a dollop of foam", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Cold Brew", price: 5.99, restaurant: "Urban Cafe", description: "Slow-steeped cold coffee", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Iced Coffee", price: 4.99, restaurant: "Urban Cafe", description: "Chilled coffee with ice", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Chai Latte", price: 4.99, restaurant: "Urban Cafe", description: "Spiced Indian tea with milk", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9" },
    { name: "Hot Chocolate", price: 4.99, restaurant: "Urban Cafe", description: "Rich chocolate drink", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" },
    { name: "Matcha Latte", price: 5.99, restaurant: "Urban Cafe", description: "Green tea powder with milk", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86" }
  ],
  pasta: [
    { name: "Spaghetti Carbonara", price: 14.99, restaurant: "Pasta Paradise", description: "Classic pasta with egg, cheese, and pancetta", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Fettuccine Alfredo", price: 15.99, restaurant: "Pasta Paradise", description: "Creamy sauce with parmesan cheese", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Penne Arrabiata", price: 13.99, restaurant: "Pasta Paradise", description: "Spicy tomato sauce with garlic", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Lasagna", price: 16.99, restaurant: "Pasta Paradise", description: "Layered pasta with meat and cheese", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Ravioli", price: 15.99, restaurant: "Pasta Paradise", description: "Stuffed pasta with various fillings", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Pasta Primavera", price: 14.99, restaurant: "Pasta Paradise", description: "With fresh spring vegetables", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Bolognese", price: 15.99, restaurant: "Pasta Paradise", description: "Meat sauce with tomatoes", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Pesto Pasta", price: 14.99, restaurant: "Pasta Paradise", description: "Basil pesto with pine nuts", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Mac and Cheese", price: 12.99, restaurant: "Pasta Paradise", description: "Classic comfort food", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Seafood Pasta", price: 18.99, restaurant: "Pasta Paradise", description: "With shrimp, mussels, and clams", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Mushroom Risotto", price: 16.99, restaurant: "Pasta Paradise", description: "Creamy rice dish with mushrooms", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { name: "Tortellini", price: 15.99, restaurant: "Pasta Paradise", description: "Ring-shaped pasta with meat filling", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" }
  ],
  snacks: [
    { name: "French Fries", price: 4.99, restaurant: "Snack Shack", description: "Crispy golden fries", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Onion Rings", price: 5.99, restaurant: "Snack Shack", description: "Breaded and deep-fried onions", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Mozzarella Sticks", price: 6.99, restaurant: "Snack Shack", description: "Fried cheese sticks with marinara", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Nachos", price: 8.99, restaurant: "Snack Shack", description: "Tortilla chips with cheese and toppings", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Potato Wedges", price: 5.99, restaurant: "Snack Shack", description: "Seasoned potato wedges", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Garlic Bread", price: 4.99, restaurant: "Snack Shack", description: "Toasted bread with garlic butter", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Chicken Quesadilla", price: 7.99, restaurant: "Snack Shack", description: "Grilled tortilla with chicken and cheese", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Samosa", price: 5.99, restaurant: "Snack Shack", description: "Spiced potato filled pastry", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Spring Rolls", price: 6.99, restaurant: "Snack Shack", description: "Crispy vegetable rolls", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Chicken Tenders", price: 7.99, restaurant: "Snack Shack", description: "Breaded chicken strips", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Pretzel", price: 4.99, restaurant: "Snack Shack", description: "Soft baked pretzel with mustard", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" },
    { name: "Popcorn Chicken", price: 6.99, restaurant: "Snack Shack", description: "Bite-sized fried chicken pieces", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Theme toggle functionality
  document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  // Load initial food items
  loadFoodItems('pizza');

  // Modal elements
  const registerModal = document.getElementById('registerModal');
  const loginModal = document.getElementById('loginModal');
  const cartModal = document.getElementById('cartModal');
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
      cartModal.style.display = 'none';
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
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
  
  // Login form submission
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userType = document.getElementById('loginType').value;
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!userType || !username || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    authenticateUser(userType, username, password);
  });
  
  // Food category click handlers
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.querySelector('h3').textContent.toLowerCase();
      loadFoodItems(category);
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

  // Cart button (initially hidden)
  document.getElementById('cartBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showCartModal();
  });

  // Initialize account dropdown (hidden by default)
  const accountBtn = document.getElementById('accountBtn');
  const accountDropdown = document.getElementById('accountDropdown');
  
  if (accountBtn) {
    accountBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      accountDropdown.style.display = accountDropdown.style.display === 'block' ? 'none' : 'block';
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.auth-dropdown')) {
      if (accountDropdown) accountDropdown.style.display = 'none';
    }
  });
  
  // Initialize real-time updates
  setupRealTimeUpdates();
});

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('#themeToggle i');
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Load food items function
function loadFoodItems(category) {
    const items = foodData[category];
    if (!items) {
        alert(`No items found for category: ${category}`);
        return;
    }
    
    const foodGrid = document.getElementById('foodGrid');
    foodGrid.innerHTML = items.map(item => `
        <div class="food-card">
            <div class="food-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="food-info">
                <h3>${item.name}</h3>
                <p>${item.restaurant}</p>
                <p class="food-description">${item.description}</p>
                <div class="food-footer">
                    <span class="price">৳${(item.price * exchangeRate).toFixed(2)}</span>
                    <button class="btn btn-sm btn-primary add-to-cart" 
                            data-id="${item.id}" 
                            data-name="${item.name}" 
                            data-price="${item.price}" 
                            data-restaurant="${item.restaurant}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update section title to show the category name
    document.querySelector('.recommended .section-title').textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Items`;
    
    // Only scroll if this is not the initial load
    if (window.hasLoaded) {
        document.querySelector('.recommended').scrollIntoView({ behavior: 'smooth' });
    } else {
        window.hasLoaded = true;
    }
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const restaurant = this.getAttribute('data-restaurant');
            
            addToCart(id, name, price, restaurant);
        });
    });
}
  
// Add item to cart
function addToCart(id, name, price, restaurant) {
    if (!currentUser || currentUser.type !== 'user') {
        alert('Please login as a user to add items to cart');
        showLoginModal();
        return;
    }
    
    const user = users.user.find(u => u.username === currentUser.username);
    if (!user) return;
    
    // Check if item already exists in cart
    const existingItem = user.cart.find(item => item.id == id && item.restaurant === restaurant);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        user.cart.push({
            id,
            name,
            price,
            restaurant,
            quantity: 1
        });
    }
    
    updateCartCount();
    showToast(`${name} added to cart!`);
}

// Show cart modal
function showCartModal() {
    if (!currentUser || currentUser.type !== 'user') {
        alert('Please login as a user to view cart');
        showLoginModal();
        return;
    }
    
    const user = users.user.find(u => u.username === currentUser.username);
    if (!user) return;
    
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (user.cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '৳0.00';
    } else {
        cartItems.innerHTML = user.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.restaurant} • ৳${(item.price * exchangeRate).toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="btn btn-sm btn-outline decrease-quantity" data-id="${item.id}" data-restaurant="${item.restaurant}">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline increase-quantity" data-id="${item.id}" data-restaurant="${item.restaurant}">+</button>
                    </div>
                    <button class="btn btn-sm btn-danger remove-item" data-id="${item.id}" data-restaurant="${item.restaurant}">Remove</button>
                </div>
            </div>
        `).join('');
        
        const total = user.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `৳${(total * exchangeRate).toFixed(2)}`;
        
        // Add event listeners for quantity buttons
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const restaurant = this.getAttribute('data-restaurant');
                const item = user.cart.find(item => item.id == id && item.restaurant === restaurant);
                if (item) {
                    item.quantity += 1;
                    showCartModal();
                }
            });
        });
        
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const restaurant = this.getAttribute('data-restaurant');
                const item = user.cart.find(item => item.id == id && item.restaurant === restaurant);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        user.cart = user.cart.filter(item => !(item.id == id && item.restaurant === restaurant));
                    }
                    showCartModal();
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const restaurant = this.getAttribute('data-restaurant');
                user.cart = user.cart.filter(item => !(item.id == id && item.restaurant === restaurant));
                showCartModal();
                updateCartCount();
            });
        });
    }
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        checkout(user);
    });
    
    // Clear cart button
    document.getElementById('clearCartBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your cart?')) {
            user.cart = [];
            showCartModal();
            updateCartCount();
            showToast('Cart cleared successfully!');
        }
    });
    
    cartModal.style.display = 'block';
}
  
// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
  
// Update cart count in header
function updateCartCount() {
    if (!currentUser || currentUser.type !== 'user') return;
    
    const user = users.user.find(u => u.username === currentUser.username);
    if (!user) return;
    
    const cartCount = user.cart.reduce((total, item) => total + item.quantity, 0);
    const cartBtn = document.getElementById('cartBtn');
    
    if (cartBtn) {
        if (cartCount > 0) {
            cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cartCount})`;
        } else {
            cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart`;
        }
    }
}
  
// Checkout process
function checkout(user) {
    if (user.cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    // Create new order
    const newOrder = {
        id: generateOrderId(),
        userId: user.username,
        restaurantId: user.cart[0].restaurant,
        items: [...user.cart],
        total: user.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: ORDER_STATUS.PENDING,
        date: new Date().toISOString().split('T')[0],
        deliveryPerson: "",
        timestamp: Date.now()
    };
    
    // Add order to user's order history
    user.orders.push(newOrder);
    
    // Add order to restaurant's order list
    const restaurant = users.restaurant.find(r => r.restaurant === user.cart[0].restaurant);
    if (restaurant) {
        restaurant.orders.push(newOrder);
    }
    
    // Add order to global orders list
    orders.push(newOrder);
    
    // Clear cart
    user.cart = [];
    
    // Close cart modal
    document.getElementById('cartModal').style.display = 'none';
    
    // Update cart count
    updateCartCount();
    
    showToast(`Order #${newOrder.id} placed successfully! Total: ৳${(newOrder.total * exchangeRate).toFixed(2)}`);
    
    // Show real-time order status
    showRealTimeOrderStatus(newOrder);
    
    // If user is on dashboard, refresh orders
    if (document.getElementById('dashboardContainer').style.display === 'block') {
        showDashboard();
    }
}
  
// Generate unique order ID
function generateOrderId() {
    return Math.floor(1000 + Math.random() * 9000);
}
  
// Show register modal
function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
    document.getElementById('registerForms').innerHTML = '<p>Please select a user type from the register dropdown menu.</p>';
}
  
// Show specific register form
function showRegisterForm(userType) {
    const registerModal = document.getElementById('registerModal');
    registerModal.style.display = 'block';
    
    let formHTML = '';
    const formId = `${userType}RegisterForm`;
    
    switch(userType) {
        case 'restaurant':
            formHTML = `
                <form id="${formId}">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantName">Restaurant Name:</label>
                            <input type="text" id="restaurantName" required>
                        </div>
                        <div class="form-group">
                            <label for="restaurantUsername">Username:</label>
                            <input type="text" id="restaurantUsername" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantPassword">Password:</label>
                            <input type="password" id="restaurantPassword" required minlength="6">
                        </div>
                        <div class="form-group">
                            <label for="restaurantConfirmPassword">Confirm Password:</label>
                            <input type="password" id="restaurantConfirmPassword" required minlength="6">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="restaurantOwnerName">Owner Name:</label>
                        <input type="text" id="restaurantOwnerName" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantEmail">Email:</label>
                            <input type="email" id="restaurantEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="restaurantPhone">Phone:</label>
                            <input type="tel" id="restaurantPhone" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="restaurantAddress">Address:</label>
                        <textarea id="restaurantAddress" rows="3" required></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantCuisine">Cuisine Type:</label>
                            <input type="text" id="restaurantCuisine" required>
                        </div>
                        <div class="form-group">
                            <label for="restaurantOpeningHours">Opening Hours:</label>
                            <input type="text" id="restaurantOpeningHours" placeholder="e.g. 10:00 AM - 10:00 PM" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="restaurantDeliveryRadius">Delivery Radius (km):</label>
                        <input type="number" id="restaurantDeliveryRadius" min="1" required>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Register Restaurant</button>
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
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="deliveryUsername">Username:</label>
                            <input type="text" id="deliveryUsername" required>
                        </div>
                        <div class="form-group">
                            <label for="deliveryPassword">Password:</label>
                            <input type="password" id="deliveryPassword" required minlength="6">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="deliveryConfirmPassword">Confirm Password:</label>
                            <input type="password" id="deliveryConfirmPassword" required minlength="6">
                        </div>
                        <div class="form-group">
                            <label for="deliveryEmail">Email:</label>
                            <input type="email" id="deliveryEmail" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="deliveryPhone">Phone:</label>
                            <input type="tel" id="deliveryPhone" required>
                        </div>
                        <div class="form-group">
                            <label for="deliveryVehicleType">Vehicle Type:</label>
                            <select id="deliveryVehicleType" required>
                                <option value="">Select Vehicle</option>
                                <option value="bike">Bike</option>
                                <option value="car">Car</option>
                                <option value="scooter">Scooter</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="deliveryLicense">License Number:</label>
                        <input type="text" id="deliveryLicense" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="deliveryAddress">Address:</label>
                        <textarea id="deliveryAddress" rows="3" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Register as Delivery</button>
                </form>
            `;
            break;
            
        case 'user':
        default:
            formHTML = `
                <form id="${formId}">
                    <div class="form-group">
                        <label for="userName">Full Name:</label>
                        <input type="text" id="userName" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="userUsername">Username:</label>
                            <input type="text" id="userUsername" required>
                        </div>
                        <div class="form-group">
                            <label for="userPassword">Password:</label>
                            <input type="password" id="userPassword" required minlength="6">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="userConfirmPassword">Confirm Password:</label>
                            <input type="password" id="userConfirmPassword" required minlength="6">
                        </div>
                        <div class="form-group">
                            <label for="userEmail">Email:</label>
                            <input type="email" id="userEmail" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="userPhone">Phone:</label>
                            <input type="tel" id="userPhone" required>
                        </div>
                        <div class="form-group">
                            <label for="userCity">City:</label>
                            <input type="text" id="userCity" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="userAddress">Address:</label>
                        <textarea id="userAddress" rows="3" required></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="userPostalCode">Postal Code:</label>
                            <input type="text" id="userPostalCode" required>
                        </div>
                        <div class="form-group">
                            <label for="userCountry">Country:</label>
                            <input type="text" id="userCountry" required>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Register as User</button>
                </form>
            `;
    }
    
    document.getElementById('registerForms').innerHTML = formHTML;
    
    // Add form submission handler
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            registerUser(userType);
        });
    }
}
  
// Register new user
function registerUser(userType) {
    let userData = {};
    let username, password, confirmPassword;
    
    switch(userType) {
        case 'restaurant':
            username = document.getElementById('restaurantUsername').value.trim();
            password = document.getElementById('restaurantPassword').value.trim();
            confirmPassword = document.getElementById('restaurantConfirmPassword').value.trim();
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if username already exists
            if (users.restaurant.some(u => u.username === username)) {
                alert('Username already exists');
                return;
            }
            
            userData = {
                username,
                password,
                name: document.getElementById('restaurantOwnerName').value.trim(),
                restaurant: document.getElementById('restaurantName').value.trim(),
                email: document.getElementById('restaurantEmail').value.trim(),
                phone: document.getElementById('restaurantPhone').value.trim(),
                address: document.getElementById('restaurantAddress').value.trim(),
                cuisine: document.getElementById('restaurantCuisine').value.trim(),
                openingHours: document.getElementById('restaurantOpeningHours').value.trim(),
                deliveryRadius: document.getElementById('restaurantDeliveryRadius').value.trim(),
                joinDate: new Date().toISOString().split('T')[0],
                status: 'pending',
                menu: [],
                orders: []
            };
            
            users.restaurant.push(userData);
            break;
            
        case 'delivery':
            username = document.getElementById('deliveryUsername').value.trim();
            password = document.getElementById('deliveryPassword').value.trim();
            confirmPassword = document.getElementById('deliveryConfirmPassword').value.trim();
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if username already exists
            if (users.delivery.some(u => u.username === username)) {
                alert('Username already exists');
                return;
            }
            
            userData = {
                username,
                password,
                name: document.getElementById('deliveryName').value.trim(),
                email: document.getElementById('deliveryEmail').value.trim(),
                phone: document.getElementById('deliveryPhone').value.trim(),
                vehicleType: document.getElementById('deliveryVehicleType').value,
                licenseNumber: document.getElementById('deliveryLicense').value.trim(),
                address: document.getElementById('deliveryAddress').value.trim(),
                joinDate: new Date().toISOString().split('T')[0],
                status: 'pending',
                availability: 'full-time',
                deliveries: []
            };
            
            users.delivery.push(userData);
            break;
            
        case 'user':
        default:
            username = document.getElementById('userUsername').value.trim();
            password = document.getElementById('userPassword').value.trim();
            confirmPassword = document.getElementById('userConfirmPassword').value.trim();
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if username already exists
            if (users.user.some(u => u.username === username)) {
                alert('Username already exists');
                return;
            }
            
            userData = {
                username,
                password,
                name: document.getElementById('userName').value.trim(),
                email: document.getElementById('userEmail').value.trim(),
                phone: document.getElementById('userPhone').value.trim(),
                address: document.getElementById('userAddress').value.trim(),
                city: document.getElementById('userCity').value.trim(),
                postalCode: document.getElementById('userPostalCode').value.trim(),
                country: document.getElementById('userCountry').value.trim(),
                joinDate: new Date().toISOString().split('T')[0],
                status: 'active',
                paymentMethods: [],
                orders: [],
                cart: []
            };
            
            users.user.push(userData);
    }
    
    document.getElementById('registerModal').style.display = 'none';
    showToast(`Registration successful! Welcome ${userData.name || userData.restaurant || userData.username}`);
    
    // Auto-login for users
    if (userType === 'user') {
        currentUser = {
            type: 'user',
            username: userData.username
        };
        updateUIAfterLogin();
    }
}
  
// Show login modal
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('loginType').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
  
// Authenticate user
function authenticateUser(userType, username, password) {
    let user;
    
    switch(userType) {
        case 'admin':
            user = users.admin.find(u => u.username === username && u.password === password);
            break;
        case 'restaurant':
            user = users.restaurant.find(u => u.username === username && u.password === password);
            break;
        case 'delivery':
            user = users.delivery.find(u => u.username === username && u.password === password);
            break;
        case 'user':
            user = users.user.find(u => u.username === username && u.password === password);
            break;
        default:
            alert('Invalid user type');
            return;
    }
    
    if (user) {
        currentUser = {
            type: userType,
            username: user.username
        };
        
        document.getElementById('loginModal').style.display = 'none';
        updateUIAfterLogin();
        showToast(`Welcome back, ${user.name || user.restaurant || user.username}!`);
        
        // Show dashboard if not a regular user
        if (userType !== 'user') {
            showDashboard();
        }
    } else {
        alert('Invalid username or password');
    }
}
  
// Update UI after login
function updateUIAfterLogin() {
    // Hide login/register buttons
    document.getElementById('registerBtn').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'none';
    
    // Show account dropdown and cart button
    document.getElementById('accountDropdownContainer').style.display = 'block';
    document.getElementById('cartBtn').style.display = 'inline-block';
    
    // Update account button text
    const user = getUserData();
    if (user) {
        const displayName = user.name || user.restaurant || user.username;
        document.getElementById('accountBtn').innerHTML = `<i class="fas fa-user-circle"></i> ${displayName}`;
    }
    
    // Update cart count
    updateCartCount();
    
    // Clear previous event listeners to avoid duplicates
    const dashboardBtn = document.getElementById('dashboardBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    dashboardBtn.replaceWith(dashboardBtn.cloneNode(true));
    logoutBtn.replaceWith(logoutBtn.cloneNode(true));
    
    // Add dashboard and logout functionality
    document.getElementById('dashboardBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showDashboard();
    });
    
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        logout();
    });
}
  
// Get current user's data
function getUserData() {
    if (!currentUser) return null;
    
    switch(currentUser.type) {
        case 'admin':
            return users.admin.find(u => u.username === currentUser.username);
        case 'restaurant':
            return users.restaurant.find(u => u.username === currentUser.username);
        case 'delivery':
            return users.delivery.find(u => u.username === currentUser.username);
        case 'user':
            return users.user.find(u => u.username === currentUser.username);
        default:
            return null;
    }
}
  
// Show dashboard based on user type
function showDashboard() {
    const dashboardContainer = document.getElementById('dashboardContainer');
    const mainContent = document.querySelector('main');
    const mainFooter = document.querySelector('.footer');
    
    // Hide main content and footer
    mainContent.style.display = 'none';
    mainFooter.style.display = 'none';
    
    // Show dashboard
    dashboardContainer.style.display = 'block';
    
    // Get user data
    const user = getUserData();
    if (!user) return;
    
    // Get dashboard container elements
    const dashboardMain = dashboardContainer.querySelector('.dashboard-main .container');
    
    // Clear previous content
    dashboardMain.innerHTML = '';
    
    // Create dashboard content
    let dashboardHTML = `
        <h1 class="dashboard-title">${getDashboardTitle()}</h1>
        <div class="welcome-message">
            <p>${getWelcomeMessage(user)}</p>
        </div>
    `;
    
    // Add user profile section for regular users
    if (currentUser.type === 'user') {
        dashboardHTML += `
            <div class="profile-section">
                <div class="profile-header">
                    <div class="profile-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="profile-info">
                        <h2>${user.name}</h2>
                        <p>Member since ${user.joinDate}</p>
                    </div>
                </div>
                <div class="profile-details">
                    <div class="profile-detail-card">
                        <h3>Contact Information</h3>
                        <p><i class="fas fa-envelope"></i> ${user.email}</p>
                        <p><i class="fas fa-phone"></i> ${user.phone}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${user.address}</p>
                    </div>
                    <div class="profile-detail-card">
                        <h3>Account Details</h3>
                        <p><i class="fas fa-user"></i> ${user.username}</p>
                        <p><i class="fas fa-calendar"></i> Joined: ${user.joinDate}</p>
                        <p><i class="fas fa-circle" style="color: #1dd1a1;"></i> Status: ${user.status}</p>
                    </div>
                    <div class="profile-detail-card">
                        <h3>Payment Methods</h3>
                        ${user.paymentMethods.length > 0 ? 
                            user.paymentMethods.map(method => `
                                <p><i class="fas fa-${method.type === 'credit' ? 'credit-card' : 'mobile'}"></i> 
                                ${method.type} ending in ${method.last4}</p>
                            `).join('') : 
                            '<p>No payment methods saved</p>'}
                    </div>
                </div>
            </div>
        `;
    }
    
    dashboardHTML += `
        <div class="dashboard-sections">
            ${getDashboardCards(user)}
        </div>
        ${getRecentOrdersSection(user)}
    `;
    
    // Add back to main button for users
    if (currentUser.type === 'user') {
        dashboardHTML += `
            <div class="back-to-dashboard">
                <a href="#" id="backToMain"><i class="fas fa-arrow-left"></i> Back to Main Site</a>
            </div>
        `;
    }
    
    dashboardMain.innerHTML = dashboardHTML;
    
    // Add event listeners
    addDashboardEventListeners();
    
    // Update user menu button text
    const userMenuBtn = document.getElementById('userMenuBtn');
    if (userMenuBtn) {
        userMenuBtn.innerHTML = `
            <i class="fas fa-user-circle"></i> ${user.name || user.restaurant || user.username}
            <i class="fas fa-caret-down"></i>
        `;
    }
    
    // Add back to main button for admin
    if (currentUser.type === 'admin') {
        const backButtonHTML = `
            <div class="back-to-dashboard">
                <a href="#" id="backToMain"><i class="fas fa-arrow-left"></i> Back to Main Site</a>
            </div>
        `;
        dashboardMain.insertAdjacentHTML('beforeend', backButtonHTML);
        
        // Add event listener for the back button
        const backToMainBtn = document.getElementById('backToMain');
        if (backToMainBtn) {
            backToMainBtn.addEventListener('click', function(e) {
                e.preventDefault();
                hideDashboard();
            });
        }
    }
}

function getDashboardTitle() {
    switch(currentUser.type) {
        case 'admin': return 'Admin Dashboard';
        case 'restaurant': return 'Restaurant Dashboard';
        case 'delivery': return 'Delivery Dashboard';
        case 'user': return 'My Account';
        default: return 'Dashboard';
    }
}

function getWelcomeMessage(user) {
    switch(currentUser.type) {
        case 'admin': 
            return 'Welcome to the Admin Dashboard. You can manage all aspects of the QuickBite platform from here.';
        case 'restaurant': 
            return `Welcome back, ${user.restaurant}! Here you can manage your menu, orders, and restaurant profile.`;
        case 'delivery': 
            return `Welcome back, ${user.name}! Here you can view your delivery assignments and update your status.`;
        case 'user': 
            return `Welcome back, ${user.name}! Here you can view your orders, update your profile, and more.`;
        default: 
            return 'Welcome to your dashboard!';
    }
}

function getDashboardCards(user) {
    let cardsHTML = '';
    
    switch(currentUser.type) {
        case 'admin':
            cardsHTML = `
                <div class="dashboard-card" id="manageUsers">
                    <i class="fas fa-users"></i>
                    <h3>Manage Users</h3>
                    <p>View, edit, and manage all user accounts</p>
                </div>
                <div class="dashboard-card" id="manageRestaurants">
                    <i class="fas fa-utensils"></i>
                    <h3>Manage Restaurants</h3>
                    <p>Approve, suspend, or remove restaurants</p>
                </div>
                <div class="dashboard-card" id="manageDelivery">
                    <i class="fas fa-motorcycle"></i>
                    <h3>Manage Delivery</h3>
                    <p>Manage delivery personnel and assignments</p>
                </div>
                <div class="dashboard-card" id="viewOrders">
                    <i class="fas fa-clipboard-list"></i>
                    <h3>View All Orders</h3>
                    <p>Monitor all orders across the platform</p>
                </div>
                <div class="dashboard-card" id="platformStats">
                    <i class="fas fa-chart-line"></i>
                    <h3>Platform Statistics</h3>
                    <p>View analytics and performance metrics</p>
                </div>
                <div class="dashboard-card" id="managePromotions">
                    <i class="fas fa-percentage"></i>
                    <h3>Manage Promotions</h3>
                    <p>Create and manage promotional offers</p>
                </div>
            `;
            break;
            
        case 'restaurant':
            cardsHTML = `
                <div class="dashboard-card" id="restaurantOrders">
                    <i class="fas fa-clipboard-list"></i>
                    <h3>Orders</h3>
                    <p>View and manage incoming orders</p>
                </div>
                <div class="dashboard-card" id="restaurantMenu">
                    <i class="fas fa-book-open"></i>
                    <h3>Menu Management</h3>
                    <p>Add, edit, or remove menu items</p>
                </div>
                <div class="dashboard-card" id="restaurantProfile">
                    <i class="fas fa-store"></i>
                    <h3>Restaurant Profile</h3>
                    <p>Update your restaurant information</p>
                </div>
                <div class="dashboard-card" id="restaurantStats">
                    <i class="fas fa-chart-pie"></i>
                    <h3>Statistics</h3>
                    <p>View sales and performance data</p>
                </div>
                <div class="dashboard-card" id="restaurantPromotions">
                    <i class="fas fa-bullhorn"></i>
                    <h3>Promotions</h3>
                    <p>Create special offers and discounts</p>
                </div>
                <div class="dashboard-card" id="restaurantReviews">
                    <i class="fas fa-star"></i>
                    <h3>Customer Reviews</h3>
                    <p>View and respond to customer feedback</p>
                </div>
            `;
            break;
            
        case 'delivery':
            cardsHTML = `
                <div class="dashboard-card" id="deliveryAssignments">
                    <i class="fas fa-clipboard-list"></i>
                    <h3>Current Assignments</h3>
                    <p>View your current delivery orders</p>
                </div>
                <div class="dashboard-card" id="deliveryHistory">
                    <i class="fas fa-history"></i>
                    <h3>Delivery History</h3>
                    <p>View your past deliveries</p>
                </div>
                <div class="dashboard-card" id="deliveryProfile">
                    <i class="fas fa-user"></i>
                    <h3>Profile</h3>
                    <p>Update your personal information</p>
                </div>
                <div class="dashboard-card" id="deliveryAvailability">
                    <i class="fas fa-calendar-check"></i>
                    <h3>Availability</h3>
                    <p>Set your working hours</p>
                </div>
                <div class="dashboard-card" id="deliveryEarnings">
                    <i class="fas fa-money-bill-wave"></i>
                    <h3>Earnings</h3>
                    <p>View your payments and earnings</p>
                </div>
                <div class="dashboard-card" id="deliveryRatings">
                    <i class="fas fa-star"></i>
                    <h3>Ratings</h3>
                    <p>View customer ratings and feedback</p>
                </div>
            `;
            break;
            
        case 'user':
        default:
            cardsHTML = `
                <div class="dashboard-card" id="userOrders">
                    <i class="fas fa-clipboard-list"></i>
                    <h3>My Orders</h3>
                    <p>View your order history</p>
                </div>
                <div class="dashboard-card" id="userFavorites">
                    <i class="fas fa-heart"></i>
                    <h3>Favorites</h3>
                    <p>View your favorite restaurants</p>
                </div>
                <div class="dashboard-card" id="userProfile">
                    <i class="fas fa-user"></i>
                    <h3>Profile</h3>
                    <p>Update your personal information</p>
                </div>
                <div class="dashboard-card" id="userAddresses">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Addresses</h3>
                    <p>Manage your delivery addresses</p>
                </div>
                <div class="dashboard-card" id="userPayments">
                    <i class="fas fa-credit-card"></i>
                    <h3>Payment Methods</h3>
                    <p>Manage your saved payment options</p>
                </div>
                <div class="dashboard-card" id="userReviews">
                    <i class="fas fa-star"></i>
                    <h3>My Reviews</h3>
                    <p>View and edit your restaurant reviews</p>
                </div>
            `;
    }
    
    return cardsHTML;
}

function getRecentOrdersSection(user) {
    let ordersHTML = '<div class="order-list"><h3>Recent Orders</h3>';
    
    switch(currentUser.type) {
        case 'admin':
            // Admin sees all orders
            const allOrders = orders.slice(0, 5);
            if (allOrders.length === 0) {
                ordersHTML += '<p>No recent orders</p>';
            } else {
                ordersHTML += allOrders.map(order => renderOrderCard(order)).join('');
            }
            break;
            
        case 'restaurant':
            // Restaurant sees their own orders
            const restaurantOrders = orders.filter(o => o.restaurantId === user.username).slice(0, 5);
            if (restaurantOrders.length === 0) {
                ordersHTML += '<p>No recent orders</p>';
            } else {
                ordersHTML += restaurantOrders.map(order => renderOrderCard(order)).join('');
            }
            break;
            
        case 'delivery':
            // Delivery person sees their assigned orders (both assigned and in-progress)
            const deliveryOrders = orders.filter(o => 
                o.deliveryPerson === user.name && 
                (o.status === ORDER_STATUS.ACCEPTED || 
                 o.status === ORDER_STATUS.PREPARING || 
                 o.status === ORDER_STATUS.READY || 
                 o.status === ORDER_STATUS.ON_THE_WAY)
            ).slice(0, 5);
            
            if (deliveryOrders.length === 0) {
                ordersHTML += '<p>No current delivery assignments</p>';
            } else {
                ordersHTML += deliveryOrders.map(order => renderOrderCard(order)).join('');
            }
            break;
            
        case 'user':
            // User sees their own orders
            const userOrders = orders.filter(o => o.userId === user.username).slice(0, 5);
            if (userOrders.length === 0) {
                ordersHTML += '<p>No recent orders</p>';
            } else {
                ordersHTML += userOrders.map(order => renderOrderCard(order)).join('');
            }
            break;
    }
    
    ordersHTML += '</div>';
    return ordersHTML;
}

function renderOrderCard(order) {
    let actionsHTML = '';
    
    switch(currentUser.type) {
        case 'admin':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === ORDER_STATUS.PENDING ? '<button class="btn btn-sm btn-outline" data-action="assign delivery">Assign Delivery</button>' : ''}
            `;
            break;
            
        case 'restaurant':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === ORDER_STATUS.PENDING ? '<button class="btn btn-sm btn-outline" data-action="accept order">Accept Order</button>' : ''}
                ${order.status === ORDER_STATUS.ACCEPTED ? '<button class="btn btn-sm btn-outline" data-action="start preparing">Start Preparing</button>' : ''}
                ${order.status === ORDER_STATUS.PREPARING ? '<button class="btn btn-sm btn-outline" data-action="mark as ready">Mark as Ready</button>' : ''}
            `;
            break;
            
        case 'delivery':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === ORDER_STATUS.READY ? '<button class="btn btn-sm btn-outline" data-action="pick up order">Pick Up Order</button>' : ''}
                ${order.status === ORDER_STATUS.ON_THE_WAY ? '<button class="btn btn-sm btn-outline" data-action="mark as delivered">Mark as Delivered</button>' : ''}
                ${order.status === ORDER_STATUS.ACCEPTED ? '<button class="btn btn-sm btn-outline" data-action="acknowledge assignment">Acknowledge</button>' : ''}
            `;
            break;
            
        case 'user':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === ORDER_STATUS.DELIVERED ? '<button class="btn btn-sm btn-outline" data-action="rate order">Rate Order</button>' : ''}
                ${[ORDER_STATUS.PENDING, ORDER_STATUS.ACCEPTED, ORDER_STATUS.PREPARING].includes(order.status) ? 
                  '<button class="btn btn-sm btn-danger" data-action="cancel order">Cancel Order</button>' : ''}
            `;
            break;
    }
    
    return `
        <div class="order-card">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${order.date}</span>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
            </div>
            <div class="order-details">
                ${currentUser.type !== 'user' ? `<p><strong>Customer:</strong> ${order.userId}</p>` : ''}
                ${currentUser.type !== 'restaurant' ? `<p><strong>Restaurant:</strong> ${order.restaurantId}</p>` : ''}
                <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
                <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
                ${order.deliveryPerson && currentUser.type === 'delivery' ? `<p><strong>Assigned To:</strong> You</p>` : ''}
            </div>
            <div class="order-actions">
                ${actionsHTML}
            </div>
        </div>
    `;
}

function addDashboardEventListeners() {
  // Dashboard card click handlers
  document.querySelectorAll('.dashboard-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = this.id;
      if (currentUser && currentUser.type === 'admin') {
        handleAdminDashboardActions(id);
      } else {
        // Handle other user types (restaurant, delivery, user)
        alert(`Navigating to ${id.replace(/([A-Z])/g, ' $1').trim()}`);
      }
    });
  });

    
    // User dropdown menu
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (userDropdown) userDropdown.style.display = 'none';
    });
    
    // Profile link
    const profileBtn = document.getElementById('dashboardProfile');
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.preventDefault();
                       alert('Loading profile settings...');
        });
    }
    
    // Settings link
    const settingsBtn = document.getElementById('dashboardSettings');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Loading account settings...');
        });
    }
    
    // Logout link
    const logoutBtn = document.getElementById('dashboardLogout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
    
    // Back to main site button
    const backToMainBtn = document.getElementById('backToMain');
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', function(e) {
            e.preventDefault();
            hideDashboard();
        });
    }
    
    // Order action buttons
    document.querySelectorAll('.order-actions button').forEach(button => {
        button.addEventListener('click', function() {
            const orderId = this.closest('.order-card').querySelector('.order-id').textContent.replace('Order #', '');
            const action = this.textContent.trim().toLowerCase();
            
            handleOrderAction(orderId, action);
        });
    });
}

function handleOrderAction(orderId, action) {
    const order = orders.find(o => o.id == orderId);
    if (!order) return;
    
    switch(action) {
        case 'view details':
            alert(`Showing details for order #${orderId}`);
            break;
        case 'accept order':
            order.status = ORDER_STATUS.ACCEPTED;
            showToast(`Order #${orderId} has been accepted`);
            updateOrderStatus(order);
            break;
        case 'start preparing':
            order.status = ORDER_STATUS.PREPARING;
            showToast(`Order #${orderId} is now being prepared`);
            updateOrderStatus(order);
            break;
        case 'mark as ready':
            order.status = ORDER_STATUS.READY;
            showToast(`Order #${orderId} is ready for pickup`);
            updateOrderStatus(order);
            break;
        case 'pick up order':
            order.status = ORDER_STATUS.ON_THE_WAY;
            order.deliveryPerson = currentUser.username;
            showToast(`You have picked up order #${orderId}`);
            updateOrderStatus(order);
            break;
        case 'mark as delivered':
            order.status = ORDER_STATUS.DELIVERED;
            showToast(`Order #${orderId} has been delivered`);
            updateOrderStatus(order);
            break;
        case 'rate order':
            alert(`Opening rating dialog for order #${orderId}`);
            break;
        case 'cancel order':
            if (confirm('Are you sure you want to cancel this order?')) {
                order.status = ORDER_STATUS.CANCELLED;
                showToast(`Order #${orderId} has been canceled`);
                updateOrderStatus(order);
            }
            break;
        case 'assign delivery':
            assignDeliveryPartner(order);
            break;
        default:
            alert(`Action "${action}" not implemented yet`);
    }
}

function hideDashboard() {
    const dashboardContainer = document.getElementById('dashboardContainer');
    const mainContent = document.querySelector('main');
    const mainFooter = document.querySelector('.footer');
    
    // Hide dashboard
    dashboardContainer.style.display = 'none';
    
    // Show main content and footer
    mainContent.style.display = 'block';
    mainFooter.style.display = 'block';
    
    // Reset the food grid to default view
    loadFoodItems('pizza');
}

// Logout function
function logout() {
    currentUser = null;
    
    // Show login/register buttons
    document.getElementById('registerBtn').style.display = 'inline-block';
    document.getElementById('loginBtn').style.display = 'inline-block';
    
    // Hide account dropdown and cart button
    document.getElementById('accountDropdownContainer').style.display = 'none';
    document.getElementById('cartBtn').style.display = 'none';
    
    // Hide dashboard if visible
    hideDashboard();
    
    showToast('Logged out successfully');
}

// Search food items
function searchFoodItems(term) {
    const results = [];
    
    // Search in all categories
    for (const category in foodData) {
        const categoryItems = foodData[category];
        const matches = categoryItems.filter(item => 
            item.name.toLowerCase().includes(term) || 
            item.restaurant.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term)
        );
        
        results.push(...matches);
    }
    
    return results;
}

// Delivery Dashboard Functions
function showDeliveryDashboard() {
    const user = getUserData();
    if (!user || currentUser.type !== 'delivery') return;

    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <h1 class="dashboard-title">Delivery Dashboard</h1>
        <div class="welcome-message">
            <p>Welcome back, ${user.name}! Here you can view your delivery assignments and update your status.</p>
        </div>
        
        <div class="dashboard-sections">
            <div class="dashboard-card" id="deliveryAssignments">
                <i class="fas fa-clipboard-list"></i>
                <h3>Current Assignments</h3>
                <p>View your current delivery orders</p>
            </div>
            <div class="dashboard-card" id="deliveryHistory">
                <i class="fas fa-history"></i>
                <h3>Delivery History</h3>
                <p>View your past deliveries</p>
            </div>
            <div class="dashboard-card" id="deliveryProfile">
                <i class="fas fa-user"></i>
                <h3>Profile</h3>
                <p>Update your personal information</p>
            </div>
            <div class="dashboard-card" id="deliveryAvailability">
                <i class="fas fa-calendar-check"></i>
                <h3>Availability</h3>
                <p>Set your working hours</p>
            </div>
            <div class="dashboard-card" id="deliveryEarnings">
                <i class="fas fa-money-bill-wave"></i>
                <h3>Earnings</h3>
                <p>View your payments and earnings</p>
            </div>
            <div class="dashboard-card" id="deliveryRatings">
                <i class="fas fa-star"></i>
                <h3>Ratings</h3>
                <p>View customer ratings and feedback</p>
            </div>
        </div>
        
        <div class="delivery-content-section">
            ${renderDeliveryAssignments(user)}
        </div>
        
        <div class="back-to-dashboard">
            <a href="#" id="backToMain"><i class="fas fa-arrow-left"></i> Back to Main Site</a>
        </div>
    `;

    // Add event listeners
    addDeliveryDashboardEventListeners();
}

function renderDeliveryAssignments(user) {
    // Get current assignments (orders that are ready, on the way, or assigned)
    const currentAssignments = orders.filter(o => 
        o.deliveryPerson === user.name && 
        (o.status === ORDER_STATUS.ACCEPTED || 
         o.status === ORDER_STATUS.READY || 
         o.status === ORDER_STATUS.ON_THE_WAY)
    );

    // Get past deliveries (delivered or cancelled)
    const pastDeliveries = orders.filter(o => 
        o.deliveryPerson === user.name && 
        (o.status === ORDER_STATUS.DELIVERED || 
         o.status === ORDER_STATUS.CANCELLED)
    );

    return `
        <div class="delivery-assignments-section">
            <h3>Current Assignments</h3>
            ${currentAssignments.length > 0 ? 
                currentAssignments.map(order => renderDeliveryOrderCard(order)).join('') : 
                '<p>No current assignments</p>'}
        </div>
    `;
}

function renderDeliveryOrderCard(order) {
    const restaurant = users.restaurant.find(r => r.username === order.restaurantId);
    const customer = users.user.find(u => u.username === order.userId);
    
    let actions = '';
    
    if (order.status === ORDER_STATUS.ACCEPTED) {
        actions = `
            <button class="btn btn-sm btn-primary" data-action="acknowledge">Acknowledge</button>
        `;
    } else if (order.status === ORDER_STATUS.READY) {
        actions = `
            <button class="btn btn-sm btn-primary" data-action="pickup">Pick Up Order</button>
            <button class="btn btn-sm btn-outline" data-action="directions">Get Directions</button>
        `;
    } else if (order.status === ORDER_STATUS.ON_THE_WAY) {
        actions = `
            <button class="btn btn-sm btn-primary" data-action="delivered">Mark as Delivered</button>
            <button class="btn btn-sm btn-outline" data-action="contact">Contact Customer</button>
        `;
    }
    
    return `
        <div class="delivery-order-card" data-order-id="${order.id}">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
            </div>
            <div class="order-details">
                <p><strong>Restaurant:</strong> ${restaurant ? restaurant.restaurant : order.restaurantId}</p>
                <p><strong>Customer:</strong> ${customer ? customer.name : order.userId}</p>
                <p><strong>Address:</strong> ${customer ? customer.address : 'Address not available'}</p>
                <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
                <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
            </div>
            <div class="order-actions">
                ${actions}
            </div>
        </div>
    `;
}

function addDeliveryDashboardEventListeners() {
    // Card click handlers
    document.getElementById('deliveryAssignments').addEventListener('click', showDeliveryAssignments);
    document.getElementById('deliveryHistory').addEventListener('click', showDeliveryHistory);
    document.getElementById('deliveryProfile').addEventListener('click', showDeliveryProfile);
    document.getElementById('deliveryAvailability').addEventListener('click', showDeliveryAvailability);
    document.getElementById('deliveryEarnings').addEventListener('click', showDeliveryEarnings);
    document.getElementById('deliveryRatings').addEventListener('click', showDeliveryRatings);
    
    // Order action buttons
    document.querySelectorAll('.delivery-order-card .order-actions button').forEach(button => {
        button.addEventListener('click', function() {
            const orderId = this.closest('.delivery-order-card').getAttribute('data-order-id');
            const action = this.getAttribute('data-action');
            handleDeliveryAction(orderId, action);
        });
    });
    
    // Back button
    document.getElementById('backToMain').addEventListener('click', function(e) {
        e.preventDefault();
        hideDashboard();
    });
}

function showDeliveryAssignments() {
    const user = getUserData();
    if (!user) return;
    
    const currentAssignments = orders.filter(o => 
        o.deliveryPerson === user.name && 
        (o.status === ORDER_STATUS.ACCEPTED || 
         o.status === ORDER_STATUS.READY || 
         o.status === ORDER_STATUS.ON_THE_WAY)
    );
    
    const contentSection = document.querySelector('.delivery-content-section');
    contentSection.innerHTML = `
        <h3>Current Assignments</h3>
        ${currentAssignments.length > 0 ? 
            currentAssignments.map(order => renderDeliveryOrderCard(order)).join('') : 
            '<p>No current assignments</p>'}
    `;
    
    // Re-add event listeners
    document.querySelectorAll('.delivery-order-card .order-actions button').forEach(button => {
        button.addEventListener('click', function() {
            const orderId = this.closest('.delivery-order-card').getAttribute('data-order-id');
            const action = this.getAttribute('data-action');
            handleDeliveryAction(orderId, action);
        });
    });
}

function showDeliveryHistory() {
    const user = getUserData();
    if (!user) return;
    
    const pastDeliveries = orders.filter(o => 
        o.deliveryPerson === user.name && 
        (o.status === ORDER_STATUS.DELIVERED || 
         o.status === ORDER_STATUS.CANCELLED)
    ).sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const contentSection = document.querySelector('.delivery-content-section');
    contentSection.innerHTML = `
        <h3>Delivery History</h3>
        ${pastDeliveries.length > 0 ? 
            pastDeliveries.map(order => renderDeliveryHistoryCard(order)).join('') : 
            '<p>No delivery history yet</p>'}
    `;
}

function renderDeliveryHistoryCard(order) {
    const restaurant = users.restaurant.find(r => r.username === order.restaurantId);
    const customer = users.user.find(u => u.username === order.userId);
    
    return `
        <div class="delivery-history-card">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${order.date}</span>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
            </div>
            <div class="order-details">
                <p><strong>Restaurant:</strong> ${restaurant ? restaurant.restaurant : order.restaurantId}</p>
                <p><strong>Customer:</strong> ${customer ? customer.name : order.userId}</p>
                <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
                <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
                ${order.status === ORDER_STATUS.DELIVERED ? `
                <div class="delivery-rating">
                    <span class="stars">★★★★★</span>
                    <p>"Great delivery service!"</p>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

function showDeliveryProfile() {
    const user = getUserData();
    if (!user) return;
    
    const contentSection = document.querySelector('.delivery-content-section');
    contentSection.innerHTML = `
        <div class="delivery-profile-form">
            <h3>Profile Information</h3>
            <form id="deliveryProfileForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="deliveryProfileName">Full Name</label>
                        <input type="text" id="deliveryProfileName" value="${user.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="deliveryProfileEmail">Email</label>
                        <input type="email" id="deliveryProfileEmail" value="${user.email}" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="deliveryProfilePhone">Phone</label>
                        <input type="tel" id="deliveryProfilePhone" value="${user.phone}" required>
                    </div>
                    <div class="form-group">
                        <label for="deliveryProfileVehicle">Vehicle Type</label>
                        <select id="deliveryProfileVehicle" required>
                            <option value="bike" ${user.vehicleType === 'bike' ? 'selected' : ''}>Bike</option>
                            <option value="car" ${user.vehicleType === 'car' ? 'selected' : ''}>Car</option>
                            <option value="scooter" ${user.vehicleType === 'scooter' ? 'selected' : ''}>Scooter</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="deliveryProfileLicense">License Number</label>
                    <input type="text" id="deliveryProfileLicense" value="${user.licenseNumber}" required>
                </div>
                
                <div class="form-group">
                    <label for="deliveryProfileAddress">Address</label>
                    <textarea id="deliveryProfileAddress" rows="3" required>${user.address}</textarea>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-outline" id="cancelProfileChanges">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.getElementById('deliveryProfileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveDeliveryProfile();
    });
    
    document.getElementById('cancelProfileChanges').addEventListener('click', function() {
        showDeliveryDashboard();
    });
}

function saveDeliveryProfile() {
    const user = getUserData();
    if (!user) return;
    
    user.name = document.getElementById('deliveryProfileName').value.trim();
    user.email = document.getElementById('deliveryProfileEmail').value.trim();
    user.phone = document.getElementById('deliveryProfilePhone').value.trim();
    user.vehicleType = document.getElementById('deliveryProfileVehicle').value;
    user.licenseNumber = document.getElementById('deliveryProfileLicense').value.trim();
    user.address = document.getElementById('deliveryProfileAddress').value.trim();
    
    showToast('Profile updated successfully!');
    showDeliveryDashboard();
}

function showDeliveryAvailability() {
    const user = getUserData();
    if (!user) return;
    
    const contentSection = document.querySelector('.delivery-content-section');
    contentSection.innerHTML = `
        <div class="delivery-availability-form">
            <h3>Set Your Availability</h3>
            <form id="deliveryAvailabilityForm">
                <div class="form-group">
                    <label>Availability Status</label>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="availability" value="full-time" ${user.availability === 'full-time' ? 'checked' : ''}>
                            Full-time
                        </label>
                        <label>
                            <input type="radio" name="availability" value="part-time" ${user.availability === 'part-time' ? 'checked' : ''}>
                            Part-time
                        </label>
                        <label>
                            <input type="radio" name="availability" value="unavailable" ${user.availability === 'unavailable' ? 'checked' : ''}>
                            Currently unavailable
                        </label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Working Days</label>
                    <div class="checkbox-group">
                        <label><input type="checkbox" name="workingDays" value="monday" checked> Monday</label>
                        <label><input type="checkbox" name="workingDays" value="tuesday" checked> Tuesday</label>
                        <label><input type="checkbox" name="workingDays" value="wednesday" checked> Wednesday</label>
                        <label><input type="checkbox" name="workingDays" value="thursday" checked> Thursday</label>
                        <label><input type="checkbox" name="workingDays" value="friday" checked> Friday</label>
                        <label><input type="checkbox" name="workingDays" value="saturday" checked> Saturday</label>
                        <label><input type="checkbox" name="workingDays" value="sunday" checked> Sunday</label>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="startTime">Start Time</label>
                        <input type="time" id="startTime" value="09:00">
                    </div>
                    <div class="form-group">
                        <label for="endTime">End Time</label>
                        <input type="time" id="endTime" value="17:00">
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save Availability</button>
                    <button type="button" class="btn btn-outline" id="cancelAvailabilityChanges">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.getElementById('deliveryAvailabilityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveDeliveryAvailability();
    });
    
    document.getElementById('cancelAvailabilityChanges').addEventListener('click', function() {
        showDeliveryDashboard();
    });
}

function saveDeliveryAvailability() {
    const user = getUserData();
    if (!user) return;
    
    const availability = document.querySelector('input[name="availability"]:checked').value;
    const workingDays = Array.from(document.querySelectorAll('input[name="workingDays"]:checked')).map(cb => cb.value);
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    
    user.availability = availability;
    user.workingDays = workingDays;
    user.workingHours = { start: startTime, end: endTime };
    
    showToast('Availability updated successfully!');
    showDeliveryDashboard();
}

function showDeliveryEarnings() {
    const user = getUserData();
    if (!user) return;
    
    // Calculate earnings (in a real app, this would come from a database)
    const completedDeliveries = orders.filter(o => 
        o.deliveryPerson === user.name && 
        o.status === ORDER_STATUS.DELIVERED
    );
    
    const totalEarnings = completedDeliveries.reduce((sum, order) => sum + (order.total * 0.1), 0); // 10% of order total
    
    const contentSection = document.querySelector('.delivery-content-section');
    contentSection.innerHTML = `
        <div class="delivery-earnings">
            <h3>Your Earnings</h3>
            
            <div class="earnings-summary">
                <div class="earnings-card">
                    <h4>Total Earnings</h4>
                    <p class="earnings-amount">৳${(totalEarnings * exchangeRate).toFixed(2)}</p>
                </div>
                <div class="earnings-card">
                    <h4>Completed Deliveries</h4>
                    <p class="deliveries-count">${completedDeliveries.length}</p>
                </div>
                <div class="earnings-card">
                    <h4>Average Rating</h4>
                    <p class="rating">4.8 <span class="stars">★★★★★</span></p>
                </div>
            </div>
            
            <div class="earnings-breakdown">
                <h4>Recent Earnings</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Order #</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${completedDeliveries.slice(0, 10).map(order => `
                            <tr>
                                <td>${order.date}</td>
                                <td>#${order.id}</td>
                                <td>৳${(order.total * 0.1 * exchangeRate).toFixed(2)}</td>
                                <td><span class="status-badge delivered">Paid</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="withdrawal-section">
                <h4>Withdraw Earnings</h4>
                <p>Available balance: ৳${(totalEarnings * exchangeRate).toFixed(2)}</p>
                <div class="withdrawal-form">
                    <div class="form-group">
                        <label for="withdrawalAmount">Amount (৳)</label>
                        <input type="number" id="withdrawalAmount" min="100" max="${Math.floor(totalEarnings * exchangeRate)}" value="${Math.floor(totalEarnings * exchangeRate)}">
                    </div>
                    <div class="form-group">
                        <label for="withdrawalMethod">Payment Method</label>
                        <select id="withdrawalMethod">
                            <option value="bKash">bKash</option>
                            <option value="bank">Bank Transfer</option>
                            <option value="cash">Cash Pickup</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" id="requestWithdrawal">Request Withdrawal</button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('requestWithdrawal').addEventListener('click', function() {
        const amount = parseFloat(document.getElementById('withdrawalAmount').value);
        const method = document.getElementById('withdrawalMethod').value;
        
        if (amount > 0 && amount <= (totalEarnings * exchangeRate)) {
            showToast(`Withdrawal request for ৳${amount.toFixed(2)} via ${method} submitted successfully!`);
        } else {
            alert('Invalid withdrawal amount');
        }
    });
}

function showDeliveryRatings() {
    const user = getUserData();
    if (!user) return;
    
    // Get delivered orders with ratings (in a real app, this would come from a database)
    const ratedDeliveries = orders.filter(o => 
        o.deliveryPerson === user.name && 
        o.status === ORDER_STATUS.DELIVERED
    ).map(order => ({
        ...order,
        rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4-5 for demo
        review: ["Great service!", "Fast delivery", "Polite driver", "Food arrived hot", "Excellent service"][Math.floor(Math.random() * 5)]
    }));
    
    const averageRating = ratedDeliveries.reduce((sum, order) => sum + order.rating, 0) / ratedDeliveries.length || 0;
    
    const contentSection = document.querySelector('.delivery-content-section');
    contentSection.innerHTML = `
        <div class="delivery-ratings">
            <h3>Your Ratings</h3>
            
            <div class="ratings-summary">
                <div class="rating-card">
                    <div class="rating-score">${averageRating.toFixed(1)}</div>
                    <div class="rating-stars">
                        ${'★'.repeat(Math.floor(averageRating))}${'☆'.repeat(5 - Math.floor(averageRating))}
                    </div>
                    <p>${ratedDeliveries.length} ratings</p>
                </div>
                
                <div class="rating-distribution">
                    <div class="rating-bar">
                        <span>5 ★</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${(ratedDeliveries.filter(o => o.rating === 5).length / ratedDeliveries.length * 100) || 0}%"></div>
                        </div>
                        <span>${ratedDeliveries.filter(o => o.rating === 5).length}</span>
                    </div>
                    <div class="rating-bar">
                        <span>4 ★</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${(ratedDeliveries.filter(o => o.rating === 4).length / ratedDeliveries.length * 100) || 0}%"></div>
                        </div>
                        <span>${ratedDeliveries.filter(o => o.rating === 4).length}</span>
                    </div>
                    <div class="rating-bar">
                        <span>3 ★</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${(ratedDeliveries.filter(o => o.rating === 3).length / ratedDeliveries.length * 100) || 0}%"></div>
                        </div>
                        <span>${ratedDeliveries.filter(o => o.rating === 3).length}</span>
                    </div>
                    <div class="rating-bar">
                        <span>2 ★</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${(ratedDeliveries.filter(o => o.rating === 2).length / ratedDeliveries.length * 100) || 0}%"></div>
                        </div>
                        <span>${ratedDeliveries.filter(o => o.rating === 2).length}</span>
                    </div>
                    <div class="rating-bar">
                        <span>1 ★</span>
                        <div class="bar-container">
                            <div class="bar" style="width: ${(ratedDeliveries.filter(o => o.rating === 1).length / ratedDeliveries.length * 100) || 0}%"></div>
                        </div>
                        <span>${ratedDeliveries.filter(o => o.rating === 1).length}</span>
                    </div>
                </div>
            </div>
            
            <div class="customer-reviews">
                <h4>Customer Reviews</h4>
                ${ratedDeliveries.length > 0 ? 
                    ratedDeliveries.map(order => `
                        <div class="review-card">
                            <div class="review-header">
                                <span class="order-id">Order #${order.id}</span>
                                <span class="review-date">${order.date}</span>
                                <span class="review-rating">${'★'.repeat(order.rating)}${'☆'.repeat(5 - order.rating)}</span>
                            </div>
                            <div class="review-content">
                                <p>"${order.review}"</p>
                            </div>
                        </div>
                    `).join('') : 
                    '<p>No customer reviews yet</p>'}
            </div>
        </div>
    `;
}     

function handleDeliveryAction(orderId, action) {
    const order = orders.find(o => o.id == orderId);
    if (!order) return;
    
    const user = getUserData();
    if (!user) return;
    
    switch(action) {
        case 'acknowledge':
            showToast(`Order #${orderId} acknowledged`);
            break;
            
        case 'pickup':
            order.status = ORDER_STATUS.ON_THE_WAY;
            showToast(`Order #${orderId} picked up and on the way`);
            updateOrderStatus(order);
            showDeliveryAssignments();
            break;
            
        case 'directions':
            // In a real app, this would open Google Maps with the restaurant's address
            const restaurant = users.restaurant.find(r => r.username === order.restaurantId);
            alert(`Opening directions to ${restaurant ? restaurant.restaurant : 'restaurant'}`);
            break;
            
        case 'delivered':
            order.status = ORDER_STATUS.DELIVERED;
            showToast(`Order #${orderId} marked as delivered`);
            updateOrderStatus(order);
            showDeliveryAssignments();
            break;
            
        case 'contact':
            // In a real app, this would initiate a call or chat
            const customer = users.user.find(u => u.username === order.userId);
            alert(`Contacting customer: ${customer ? customer.phone : 'phone number not available'}`);
            break;
            
        default:
            alert(`Action "${action}" not implemented yet`);
    }
}

function showDashboard() {
    const dashboardContainer = document.getElementById('dashboardContainer');
    const mainContent = document.querySelector('main');
    const mainFooter = document.querySelector('.footer');
    
    // Hide main content and footer
    mainContent.style.display = 'none';
    mainFooter.style.display = 'none';
    
    // Show dashboard
    dashboardContainer.style.display = 'block';
    
    // Get user data
    const user = getUserData();
    if (!user) return;
    
    // Get dashboard container elements
    const dashboardMain = dashboardContainer.querySelector('.dashboard-main .container');
    
    // Clear previous content
    dashboardMain.innerHTML = '';
    
    // Create dashboard content
    let dashboardHTML = `
        <h1 class="dashboard-title">${getDashboardTitle()}</h1>
        <div class="welcome-message">
            <p>${getWelcomeMessage(user)}</p>
        </div>
    `;
    
    // Add user profile section for regular users
    if (currentUser.type === 'user') {
        dashboardHTML += `
            <div class="profile-section">
                <div class="profile-header">
                    <div class="profile-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="profile-info">
                        <h2>${user.name}</h2>
                        <p>Member since ${user.joinDate}</p>
                    </div>
                </div>
                <div class="profile-details">
                    <div class="profile-detail-card">
                        <h3>Contact Information</h3>
                        <p><i class="fas fa-envelope"></i> ${user.email}</p>
                        <p><i class="fas fa-phone"></i> ${user.phone}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${user.address}</p>
                    </div>
                    <div class="profile-detail-card">
                        <h3>Account Details</h3>
                        <p><i class="fas fa-user"></i> ${user.username}</p>
                        <p><i class="fas fa-calendar"></i> Joined: ${user.joinDate}</p>
                        <p><i class="fas fa-circle" style="color: #1dd1a1;"></i> Status: ${user.status}</p>
                    </div>
                    <div class="profile-detail-card">
                        <h3>Payment Methods</h3>
                        ${user.paymentMethods.length > 0 ? 
                            user.paymentMethods.map(method => `
                                <p><i class="fas fa-${method.type === 'credit' ? 'credit-card' : 'mobile'}"></i> 
                                ${method.type} ending in ${method.last4}</p>
                            `).join('') : 
                            '<p>No payment methods saved</p>'}
                    </div>
                </div>
            </div>
        `;
    }
    
    if (currentUser.type === 'delivery') {
        // Use the delivery dashboard content
        showDeliveryDashboard();
        return;
    }
    
    dashboardHTML += `
        <div class="dashboard-sections">
            ${getDashboardCards(user)}
        </div>
        ${getRecentOrdersSection(user)}
    `;
    
    // Add back to main button for users
    if (currentUser.type === 'user') {
        dashboardHTML += `
            <div class="back-to-dashboard">
                <a href="#" id="backToMain"><i class="fas fa-arrow-left"></i> Back to Main Site</a>
            </div>
        `;
    }
    
    dashboardMain.innerHTML = dashboardHTML;
    
    // Add event listeners
    addDashboardEventListeners();
    
    // Update user menu button text
    const userMenuBtn = document.getElementById('userMenuBtn');
    if (userMenuBtn) {
        userMenuBtn.innerHTML = `
            <i class="fas fa-user-circle"></i> ${user.name || user.restaurant || user.username}
            <i class="fas fa-caret-down"></i>
        `;
    }
    
    // Add back to main button for admin
    if (currentUser.type === 'admin') {
        const backButtonHTML = `
            <div class="back-to-dashboard">
                <a href="#" id="backToMain"><i class="fas fa-arrow-left"></i> Back to Main Site</a>
            </div>
        `;
        dashboardMain.insertAdjacentHTML('beforeend', backButtonHTML);
        
        // Add event listener for the back button
        const backToMainBtn = document.getElementById('backToMain');
        if (backToMainBtn) {
            backToMainBtn.addEventListener('click', function(e) {
                e.preventDefault();
                hideDashboard();
            });
        }
    }
}

// Assign delivery partner function
function assignDeliveryPartner(order) {
    // Get available delivery partners
    const availableDelivery = users.delivery.filter(d => 
        d.status === 'active' && 
        d.username !== 'admin' // Exclude admin account
    );
    
    if (availableDelivery.length === 0) {
        alert('No available delivery partners');
        return;
    }
    
    // Create modal for delivery selection
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.backgroundColor = 'var(--white-color)';
    modalContent.style.margin = '10% auto';
    modalContent.style.padding = '20px';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '500px';
    modalContent.style.borderRadius = '8px';
    
    // Add close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    closeBtn.style.float = 'right';
    closeBtn.style.fontSize = '28px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = `Assign Delivery for Order #${order.id}`;
    
    // Create delivery list
    const deliveryList = document.createElement('div');
    deliveryList.style.maxHeight = '300px';
    deliveryList.style.overflowY = 'auto';
    deliveryList.style.margin = '20px 0';
    
    availableDelivery.forEach(delivery => {
        const deliveryItem = document.createElement('div');
        deliveryItem.className = 'delivery-item';
        deliveryItem.style.padding = '10px';
        deliveryItem.style.borderBottom = '1px solid var(--light-color)';
        deliveryItem.style.cursor = 'pointer';
        deliveryItem.style.display = 'flex';
        deliveryItem.style.justifyContent = 'space-between';
        deliveryItem.style.alignItems = 'center';
        
        deliveryItem.innerHTML = `
            <div>
                <strong>${delivery.name}</strong>
                <div style="font-size: 0.8em; color: var(--gray-color)">
                    ${delivery.vehicleType} • ${delivery.availability}
                </div>
            </div>
            <div>
                <span class="badge">${delivery.deliveries.length} deliveries</span>
            </div>
        `;
        
        deliveryItem.addEventListener('click', () => {
            // Update the order
            order.deliveryPerson = delivery.name;
            order.status = ORDER_STATUS.ACCEPTED;
            
            // Find the delivery user in the users.delivery array
            const deliveryUser = users.delivery.find(d => d.username === delivery.username);
            if (deliveryUser) {
                // Add the delivery assignment
                deliveryUser.deliveries.push({
                    orderId: order.id,
                    restaurant: order.restaurantId,
                    customer: order.userId,
                    items: order.items,
                    total: order.total,
                    date: new Date().toISOString().split('T')[0],
                    status: 'assigned'
                });
            }
            
            showToast(`Assigned ${delivery.name} to Order #${order.id}`);
            updateOrderStatus(order);
            modal.style.display = 'none';
            document.body.removeChild(modal);
            
            // If we're viewing as the assigned delivery partner, navigate to assignments
            if (currentUser && currentUser.username === delivery.username) {
                navigateToDeliveryAssignments();
            }
        });
        
        deliveryList.appendChild(deliveryItem);
    });
    
    // Add cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn btn-outline';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.marginTop = '20px';
    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });
    
    // Assemble modal
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(deliveryList);
    modalContent.appendChild(cancelBtn);
    modal.appendChild(modalContent);
    
    // Add to DOM
    document.body.appendChild(modal);
    
    // Close modal when clicking X or outside
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    });
}

// Navigate to delivery assignments function
function navigateToDeliveryAssignments() {
    // Show dashboard if not already visible
    if (document.getElementById('dashboardContainer').style.display !== 'block') {
        showDashboard();
    }
    
    // Simulate clicking the Delivery Assignments card
    const assignmentsCard = document.getElementById('deliveryAssignments');
    if (assignmentsCard) {
        // Add temporary highlight effect
        assignmentsCard.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
        assignmentsCard.style.border = '2px solid var(--primary-color)';
        
        // Scroll to the card
        assignmentsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
            assignmentsCard.style.backgroundColor = '';
            assignmentsCard.style.border = '';
        }, 3000);
        
        // Show the assignments section (in a real app, this would load the content)
        alert('Showing delivery assignments for the newly assigned order');
    }
}

// Show search results
function showSearchResults(results, searchTerm) {
    if (results.length === 0) {
        alert(`No results found for "${searchTerm}"`);
        return;
    }
    
    const foodGrid = document.getElementById('foodGrid');
    foodGrid.innerHTML = results.map(item => `
        <div class="food-card">
            <div class="food-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="food-info">
                <h3>${item.name}</h3>
                <p>${item.restaurant}</p>
                <p class="food-description">${item.description}</p>
                <div class="food-footer">
                    <span class="price">৳${(item.price * exchangeRate).toFixed(2)}</span>
                    <button class="btn btn-sm btn-primary add-to-cart" 
                            data-id="${item.id}" 
                            data-name="${item.name}" 
                            data-price="${item.price}" 
                            data-restaurant="${item.restaurant}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update section title
    document.querySelector('.recommended .section-title').textContent = `Search Results for "${searchTerm}"`;
    
    // Scroll to results
    document.querySelector('.recommended').scrollIntoView({ behavior: 'smooth' });
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const restaurant = this.getAttribute('data-restaurant');
            
            addToCart(id, name, price, restaurant);
        });
    });
}