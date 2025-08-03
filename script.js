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
let exchangeRate = 117.50;

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
    // Check for order updates every 3 seconds
    setInterval(() => {
        if (currentUser) {
            updateOrderDisplays();
            checkForNewOrders();
        }
    }, 3000);
    
    // Initialize real-time updates when the page loads
    updateOrderDisplays();
}

// Add this function to update order displays
function updateOrderDisplays() {
    if (document.getElementById('dashboardContainer').style.display === 'block') {
        showDashboard();
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
            // Delivery person sees their assigned orders
            const deliveryOrders = orders.filter(o => o.deliveryPerson === user.name && 
                (o.status === ORDER_STATUS.ON_THE_WAY || o.status === ORDER_STATUS.PENDING)).slice(0, 5);
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
            alert(`Navigating to ${id.replace(/([A-Z])/g, ' $1').trim()}`);
            // In a real app, this would load the appropriate section
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
            order.deliveryPerson = delivery.name;
            order.status = ORDER_STATUS.ACCEPTED;
            delivery.deliveries.push({
                orderId: order.id,
                restaurant: order.restaurantId,
                date: new Date().toISOString().split('T')[0],
                status: 'assigned'
            });
            
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
