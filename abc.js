// Predefined users (same as before)
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

// Exchange rate (1 USD to BDT)
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
    status: "delivered",
    date: "2023-01-15",
    deliveryPerson: "Raisha Delivery"
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
    status: "in-progress",
    date: "2023-01-10",
    deliveryPerson: "Raisha Delivery"
  }
];

// Food data by category (same as before)
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
// ==================== DASHBOARD FUNCTIONS ====================

// Admin Dashboard Functions
function handleAdminButtonClick(buttonId) {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  
  switch(buttonId) {
    case 'manageUsers':
      showUserManagementForm();
      break;
    case 'manageRestaurants':
      showRestaurantManagementForm();
      break;
    case 'manageDelivery':
      showDeliveryManagementForm();
      break;
    case 'viewOrders':
      showAllOrders();
      break;
    case 'platformStats':
      showPlatformStatistics();
      break;
    case 'managePromotions':
      showPromotionManagementForm();
      break;
    default:
      alert('Feature coming soon!');
  }
}

function showUserManagementForm() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="admin-form">
      <h2>Manage Users</h2>
      <div class="admin-actions">
        <button class="btn btn-primary" id="viewUsersBtn">View All Users</button>
        <button class="btn btn-primary" id="addUserBtn">Add New User</button>
        <button class="btn btn-primary" id="editUserBtn">Edit User</button>
        <button class="btn btn-danger" id="deleteUserBtn">Delete User</button>
      </div>
      <div id="userManagementContent"></div>
    </div>
  `;

  document.getElementById('viewUsersBtn').addEventListener('click', viewAllUsers);
  document.getElementById('addUserBtn').addEventListener('click', showAddUserForm);
  document.getElementById('editUserBtn').addEventListener('click', showEditUserForm);
  document.getElementById('deleteUserBtn').addEventListener('click', showDeleteUserForm);
}

function viewAllUsers() {
  const contentDiv = document.getElementById('userManagementContent');
  contentDiv.innerHTML = `
    <h3>All Users</h3>
    <div class="user-table">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.user.map(user => `
            <tr>
              <td>${user.username}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.joinDate}</td>
              <td>${user.status}</td>
              <td>
                <button class="btn btn-sm btn-outline edit-user-btn" data-username="${user.username}">Edit</button>
                <button class="btn btn-sm btn-danger delete-user-btn" data-username="${user.username}">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Add event listeners to edit and delete buttons
  document.querySelectorAll('.edit-user-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      editUser(username);
    });
  });

  document.querySelectorAll('.delete-user-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      deleteUser(username);
    });
  });
}

function showAddUserForm() {
  const contentDiv = document.getElementById('userManagementContent');
  contentDiv.innerHTML = `
    <h3>Add New User</h3>
    <form id="addUserForm">
      <div class="form-row">
        <div class="form-group">
          <label for="newUsername">Username:</label>
          <input type="text" id="newUsername" required>
        </div>
        <div class="form-group">
          <label for="newPassword">Password:</label>
          <input type="password" id="newPassword" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="newName">Full Name:</label>
          <input type="text" id="newName" required>
        </div>
        <div class="form-group">
          <label for="newEmail">Email:</label>
          <input type="email" id="newEmail" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="newPhone">Phone:</label>
          <input type="tel" id="newPhone" required>
        </div>
        <div class="form-group">
          <label for="newAddress">Address:</label>
          <input type="text" id="newAddress" required>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Add User</button>
    </form>
  `;

  document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUser = {
      username: document.getElementById('newUsername').value,
      password: document.getElementById('newPassword').value,
      name: document.getElementById('newName').value,
      email: document.getElementById('newEmail').value,
      phone: document.getElementById('newPhone').value,
      address: document.getElementById('newAddress').value,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      paymentMethods: [],
      orders: [],
      cart: []
    };
    users.user.push(newUser);
    showToast('User added successfully!');
    viewAllUsers();
  });
}

function showEditUserForm() {
  const contentDiv = document.getElementById('userManagementContent');
  contentDiv.innerHTML = `
    <h3>Edit User</h3>
    <div class="form-group">
      <label for="selectUserToEdit">Select User:</label>
      <select id="selectUserToEdit" class="form-control">
        <option value="">Select a user</option>
        ${users.user.map(user => `<option value="${user.username}">${user.name} (${user.username})</option>`).join('')}
      </select>
    </div>
    <div id="editUserFormContainer"></div>
  `;

  document.getElementById('selectUserToEdit').addEventListener('change', function() {
    const username = this.value;
    if (username) {
      editUser(username);
    } else {
      document.getElementById('editUserFormContainer').innerHTML = '';
    }
  });
}

function editUser(username) {
  const user = users.user.find(u => u.username === username);
  if (!user) return;

  const contentDiv = document.getElementById('editUserFormContainer') || document.getElementById('userManagementContent');
  contentDiv.innerHTML = `
    <h3>Editing: ${user.name}</h3>
    <form id="editUserForm">
      <input type="hidden" id="editUsername" value="${user.username}">
      <div class="form-row">
        <div class="form-group">
          <label for="editName">Full Name:</label>
          <input type="text" id="editName" value="${user.name}" required>
        </div>
        <div class="form-group">
          <label for="editEmail">Email:</label>
          <input type="email" id="editEmail" value="${user.email}" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="editPhone">Phone:</label>
          <input type="tel" id="editPhone" value="${user.phone}" required>
        </div>
        <div class="form-group">
          <label for="editAddress">Address:</label>
          <input type="text" id="editAddress" value="${user.address}" required>
        </div>
      </div>
      <div class="form-group">
        <label for="editStatus">Status:</label>
        <select id="editStatus">
          <option value="active" ${user.status === 'active' ? 'selected' : ''}>Active</option>
          <option value="inactive" ${user.status === 'inactive' ? 'selected' : ''}>Inactive</option>
          <option value="suspended" ${user.status === 'suspended' ? 'selected' : ''}>Suspended</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  `;

  document.getElementById('editUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    user.name = document.getElementById('editName').value;
    user.email = document.getElementById('editEmail').value;
    user.phone = document.getElementById('editPhone').value;
    user.address = document.getElementById('editAddress').value;
    user.status = document.getElementById('editStatus').value;
    
    showToast('User updated successfully!');
    viewAllUsers();
  });
}

function showDeleteUserForm() {
  const contentDiv = document.getElementById('userManagementContent');
  contentDiv.innerHTML = `
    <h3>Delete User</h3>
    <div class="form-group">
      <label for="selectUserToDelete">Select User:</label>
      <select id="selectUserToDelete" class="form-control">
        <option value="">Select a user</option>
        ${users.user.map(user => `<option value="${user.username}">${user.name} (${user.username})</option>`).join('')}
      </select>
    </div>
    <button id="confirmDeleteBtn" class="btn btn-danger" disabled>Delete User</button>
  `;

  document.getElementById('selectUserToDelete').addEventListener('change', function() {
    document.getElementById('confirmDeleteBtn').disabled = !this.value;
  });

  document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
    const username = document.getElementById('selectUserToDelete').value;
    if (username && confirm(`Are you sure you want to delete user ${username}?`)) {
      deleteUser(username);
    }
  });
}

function deleteUser(username) {
  if (username === currentUser.username) {
    alert('You cannot delete your own account!');
    return;
  }
  
  const index = users.user.findIndex(u => u.username === username);
  if (index !== -1) {
    users.user.splice(index, 1);
    showToast('User deleted successfully!');
    viewAllUsers();
  }
}

// Restaurant Management
function showRestaurantManagementForm() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="admin-form">
      <h2>Manage Restaurants</h2>
      <div class="admin-actions">
        <button class="btn btn-primary" id="viewRestaurantsBtn">View All Restaurants</button>
        <button class="btn btn-primary" id="approveRestaurantBtn">Approve Restaurant</button>
        <button class="btn btn-danger" id="suspendRestaurantBtn">Suspend Restaurant</button>
      </div>
      <div id="restaurantManagementContent"></div>
    </div>
  `;

  document.getElementById('viewRestaurantsBtn').addEventListener('click', viewAllRestaurants);
  document.getElementById('approveRestaurantBtn').addEventListener('click', showApproveRestaurantForm);
  document.getElementById('suspendRestaurantBtn').addEventListener('click', showSuspendRestaurantForm);
}

function viewAllRestaurants() {
  const contentDiv = document.getElementById('restaurantManagementContent');
  contentDiv.innerHTML = `
    <h3>All Restaurants</h3>
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
        <tbody>
          ${users.restaurant.filter(r => r.restaurant).map(restaurant => `
            <tr>
              <td>${restaurant.restaurant}</td>
              <td>${restaurant.cuisine}</td>
              <td>${restaurant.name}</td>
              <td>${restaurant.status}</td>
              <td>
                <button class="btn btn-sm btn-outline edit-restaurant-btn" data-username="${restaurant.username}">Edit</button>
                ${restaurant.status === 'pending' ? 
                  `<button class="btn btn-sm btn-success approve-restaurant-btn" data-username="${restaurant.username}">Approve</button>` : ''}
                ${restaurant.status === 'active' ? 
                  `<button class="btn btn-sm btn-warning suspend-restaurant-btn" data-username="${restaurant.username}">Suspend</button>` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Add event listeners to action buttons
  document.querySelectorAll('.edit-restaurant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      editRestaurant(username);
    });
  });

  document.querySelectorAll('.approve-restaurant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      approveRestaurant(username);
    });
  });

  document.querySelectorAll('.suspend-restaurant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      suspendRestaurant(username);
    });
  });
}

function showApproveRestaurantForm() {
  const pendingRestaurants = users.restaurant.filter(r => r.restaurant && r.status === 'pending');
  
  const contentDiv = document.getElementById('restaurantManagementContent');
  contentDiv.innerHTML = `
    <h3>Approve Restaurants</h3>
    ${pendingRestaurants.length === 0 ? 
      '<p>No pending restaurants to approve</p>' : 
      `<div class="restaurant-table">
        <table>
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingRestaurants.map(restaurant => `
              <tr>
                <td>${restaurant.restaurant}</td>
                <td>${restaurant.name}</td>
                <td>
                  <button class="btn btn-sm btn-success approve-restaurant-btn" data-username="${restaurant.username}">Approve</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`}
  `;

  document.querySelectorAll('.approve-restaurant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      approveRestaurant(username);
    });
  });
}

function approveRestaurant(username) {
  const restaurant = users.restaurant.find(r => r.username === username);
  if (restaurant) {
    restaurant.status = 'active';
    showToast(`${restaurant.restaurant} has been approved!`);
    viewAllRestaurants();
  }
}

function showSuspendRestaurantForm() {
  const activeRestaurants = users.restaurant.filter(r => r.restaurant && r.status === 'active');
  
  const contentDiv = document.getElementById('restaurantManagementContent');
  contentDiv.innerHTML = `
    <h3>Suspend Restaurants</h3>
    ${activeRestaurants.length === 0 ? 
      '<p>No active restaurants to suspend</p>' : 
      `<div class="restaurant-table">
        <table>
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${activeRestaurants.map(restaurant => `
              <tr>
                <td>${restaurant.restaurant}</td>
                <td>${restaurant.name}</td>
                <td>
                  <button class="btn btn-sm btn-warning suspend-restaurant-btn" data-username="${restaurant.username}">Suspend</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`}
  `;

  document.querySelectorAll('.suspend-restaurant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      suspendRestaurant(username);
    });
  });
}

function suspendRestaurant(username) {
  const restaurant = users.restaurant.find(r => r.username === username);
  if (restaurant) {
    restaurant.status = 'suspended';
    showToast(`${restaurant.restaurant} has been suspended!`);
    viewAllRestaurants();
  }
}

function editRestaurant(username) {
  const restaurant = users.restaurant.find(r => r.username === username);
  if (!restaurant) return;

  const contentDiv = document.getElementById('restaurantManagementContent');
  contentDiv.innerHTML = `
    <h3>Editing: ${restaurant.restaurant}</h3>
    <form id="editRestaurantForm">
      <input type="hidden" id="editRestaurantUsername" value="${restaurant.username}">
      <div class="form-row">
        <div class="form-group">
          <label for="editRestaurantName">Restaurant Name:</label>
          <input type="text" id="editRestaurantName" value="${restaurant.restaurant}" required>
        </div>
        <div class="form-group">
          <label for="editOwnerName">Owner Name:</label>
          <input type="text" id="editOwnerName" value="${restaurant.name}" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="editCuisine">Cuisine Type:</label>
          <input type="text" id="editCuisine" value="${restaurant.cuisine}" required>
        </div>
        <div class="form-group">
          <label for="editOpeningHours">Opening Hours:</label>
          <input type="text" id="editOpeningHours" value="${restaurant.openingHours}" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="editDeliveryRadius">Delivery Radius (km):</label>
          <input type="text" id="editDeliveryRadius" value="${restaurant.deliveryRadius}" required>
        </div>
        <div class="form-group">
          <label for="editRestaurantStatus">Status:</label>
          <select id="editRestaurantStatus">
            <option value="active" ${restaurant.status === 'active' ? 'selected' : ''}>Active</option>
            <option value="pending" ${restaurant.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="suspended" ${restaurant.status === 'suspended' ? 'selected' : ''}>Suspended</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  `;

  document.getElementById('editRestaurantForm').addEventListener('submit', function(e) {
    e.preventDefault();
    restaurant.restaurant = document.getElementById('editRestaurantName').value;
    restaurant.name = document.getElementById('editOwnerName').value;
    restaurant.cuisine = document.getElementById('editCuisine').value;
    restaurant.openingHours = document.getElementById('editOpeningHours').value;
    restaurant.deliveryRadius = document.getElementById('editDeliveryRadius').value;
    restaurant.status = document.getElementById('editRestaurantStatus').value;
    
    showToast('Restaurant updated successfully!');
    viewAllRestaurants();
  });
}

// Delivery Management
function showDeliveryManagementForm() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="admin-form">
      <h2>Manage Delivery Personnel</h2>
      <div class="admin-actions">
        <button class="btn btn-primary" id="viewDeliveryBtn">View All Delivery</button>
        <button class="btn btn-primary" id="addDeliveryBtn">Add New Delivery</button>
        <button class="btn btn-danger" id="removeDeliveryBtn">Remove Delivery</button>
      </div>
      <div id="deliveryManagementContent"></div>
    </div>
  `;

  document.getElementById('viewDeliveryBtn').addEventListener('click', viewAllDelivery);
  document.getElementById('addDeliveryBtn').addEventListener('click', showAddDeliveryForm);
  document.getElementById('removeDeliveryBtn').addEventListener('click', showRemoveDeliveryForm);
}

function viewAllDelivery() {
  const contentDiv = document.getElementById('deliveryManagementContent');
  contentDiv.innerHTML = `
    <h3>All Delivery Personnel</h3>
    <div class="delivery-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Vehicle Type</th>
            <th>Status</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.delivery.filter(d => d.name).map(delivery => `
            <tr>
              <td>${delivery.name}</td>
              <td>${delivery.vehicleType}</td>
              <td>${delivery.status}</td>
              <td>${delivery.availability}</td>
              <td>
                <button class="btn btn-sm btn-outline edit-delivery-btn" data-username="${delivery.username}">Edit</button>
                <button class="btn btn-sm btn-danger delete-delivery-btn" data-username="${delivery.username}">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.querySelectorAll('.edit-delivery-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      editDelivery(username);
    });
  });

  document.querySelectorAll('.delete-delivery-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const username = this.getAttribute('data-username');
      deleteDelivery(username);
    });
  });
}

function showAddDeliveryForm() {
  const contentDiv = document.getElementById('deliveryManagementContent');
  contentDiv.innerHTML = `
    <h3>Add New Delivery Person</h3>
    <form id="addDeliveryForm">
      <div class="form-row">
        <div class="form-group">
          <label for="newDeliveryName">Full Name:</label>
          <input type="text" id="newDeliveryName" required>
        </div>
        <div class="form-group">
          <label for="newDeliveryUsername">Username:</label>
          <input type="text" id="newDeliveryUsername" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="newDeliveryPassword">Password:</label>
          <input type="password" id="newDeliveryPassword" required>
        </div>
        <div class="form-group">
          <label for="newDeliveryEmail">Email:</label>
          <input type="email" id="newDeliveryEmail" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="newDeliveryPhone">Phone:</label>
          <input type="tel" id="newDeliveryPhone" required>
        </div>
        <div class="form-group">
          <label for="newDeliveryVehicle">Vehicle Type:</label>
          <select id="newDeliveryVehicle" required>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
            <option value="scooter">Scooter</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="newDeliveryLicense">License Number:</label>
        <input type="text" id="newDeliveryLicense" required>
      </div>
      <button type="submit" class="btn btn-primary">Add Delivery</button>
    </form>
  `;

  document.getElementById('addDeliveryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newDelivery = {
      username: document.getElementById('newDeliveryUsername').value,
      password: document.getElementById('newDeliveryPassword').value,
      name: document.getElementById('newDeliveryName').value,
      email: document.getElementById('newDeliveryEmail').value,
      phone: document.getElementById('newDeliveryPhone').value,
      vehicleType: document.getElementById('newDeliveryVehicle').value,
      licenseNumber: document.getElementById('newDeliveryLicense').value,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      availability: 'full-time',
      deliveries: []
    };
    users.delivery.push(newDelivery);
    showToast('Delivery person added successfully!');
    viewAllDelivery();
  });
}

function showRemoveDeliveryForm() {
  const contentDiv = document.getElementById('deliveryManagementContent');
  contentDiv.innerHTML = `
    <h3>Remove Delivery Person</h3>
    <div class="form-group">
      <label for="selectDeliveryToRemove">Select Delivery Person:</label>
      <select id="selectDeliveryToRemove" class="form-control">
        <option value="">Select a delivery person</option>
        ${users.delivery.filter(d => d.name).map(delivery => `
          <option value="${delivery.username}">${delivery.name} (${delivery.vehicleType})</option>
        `).join('')}
      </select>
    </div>
    <button id="confirmRemoveDeliveryBtn" class="btn btn-danger" disabled>Remove Delivery</button>
  `;

  document.getElementById('selectDeliveryToRemove').addEventListener('change', function() {
    document.getElementById('confirmRemoveDeliveryBtn').disabled = !this.value;
  });

  document.getElementById('confirmRemoveDeliveryBtn').addEventListener('click', function() {
    const username = document.getElementById('selectDeliveryToRemove').value;
    if (username && confirm(`Are you sure you want to remove this delivery person?`)) {
      deleteDelivery(username);
    }
  });
}

function editDelivery(username) {
  const delivery = users.delivery.find(d => d.username === username);
  if (!delivery) return;

  const contentDiv = document.getElementById('deliveryManagementContent');
  contentDiv.innerHTML = `
    <h3>Editing: ${delivery.name}</h3>
    <form id="editDeliveryForm">
      <input type="hidden" id="editDeliveryUsername" value="${delivery.username}">
      <div class="form-row">
        <div class="form-group">
          <label for="editDeliveryName">Full Name:</label>
          <input type="text" id="editDeliveryName" value="${delivery.name}" required>
        </div>
        <div class="form-group">
          <label for="editDeliveryEmail">Email:</label>
          <input type="email" id="editDeliveryEmail" value="${delivery.email}" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="editDeliveryPhone">Phone:</label>
          <input type="tel" id="editDeliveryPhone" value="${delivery.phone}" required>
        </div>
        <div class="form-group">
          <label for="editDeliveryVehicle">Vehicle Type:</label>
          <select id="editDeliveryVehicle">
            <option value="bike" ${delivery.vehicleType === 'bike' ? 'selected' : ''}>Bike</option>
            <option value="car" ${delivery.vehicleType === 'car' ? 'selected' : ''}>Car</option>
            <option value="scooter" ${delivery.vehicleType === 'scooter' ? 'selected' : ''}>Scooter</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="editDeliveryLicense">License Number:</label>
          <input type="text" id="editDeliveryLicense" value="${delivery.licenseNumber}" required>
        </div>
        <div class="form-group">
          <label for="editDeliveryStatus">Status:</label>
          <select id="editDeliveryStatus">
            <option value="active" ${delivery.status === 'active' ? 'selected' : ''}>Active</option>
            <option value="inactive" ${delivery.status === 'inactive' ? 'selected' : ''}>Inactive</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="editDeliveryAvailability">Availability:</label>
        <select id="editDeliveryAvailability">
          <option value="full-time" ${delivery.availability === 'full-time' ? 'selected' : ''}>Full-time</option>
          <option value="part-time" ${delivery.availability === 'part-time' ? 'selected' : ''}>Part-time</option>
          <option value="unavailable" ${delivery.availability === 'unavailable' ? 'selected' : ''}>Unavailable</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  `;

  document.getElementById('editDeliveryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    delivery.name = document.getElementById('editDeliveryName').value;
    delivery.email = document.getElementById('editDeliveryEmail').value;
    delivery.phone = document.getElementById('editDeliveryPhone').value;
    delivery.vehicleType = document.getElementById('editDeliveryVehicle').value;
    delivery.licenseNumber = document.getElementById('editDeliveryLicense').value;
    delivery.status = document.getElementById('editDeliveryStatus').value;
    delivery.availability = document.getElementById('editDeliveryAvailability').value;
    
    showToast('Delivery person updated successfully!');
    viewAllDelivery();
  });
}

function deleteDelivery(username) {
  if (username === currentUser.username) {
    alert('You cannot delete your own account!');
    return;
  }
  
  const index = users.delivery.findIndex(d => d.username === username);
  if (index !== -1) {
    users.delivery.splice(index, 1);
    showToast('Delivery person removed successfully!');
    viewAllDelivery();
  }
}

// Order Management
function showAllOrders(filter = 'all') {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="admin-form">
      <h2>All Orders</h2>
      <div class="filter-options">
        <select id="orderFilter" class="form-control">
          <option value="all" ${filter === 'all' ? 'selected' : ''}>All Orders</option>
          <option value="pending" ${filter === 'pending' ? 'selected' : ''}>Pending</option>
          <option value="in-progress" ${filter === 'in-progress' ? 'selected' : ''}>In Progress</option>
          <option value="delivered" ${filter === 'delivered' ? 'selected' : ''}>Delivered</option>
          <option value="canceled" ${filter === 'canceled' ? 'selected' : ''}>Canceled</option>
        </select>
      </div>
      <div id="allOrdersContent"></div>
    </div>
  `;

  loadAllOrders(filter);
  
  document.getElementById('orderFilter').addEventListener('change', function() {
    loadAllOrders(this.value);
  });
}

function loadAllOrders(filter) {
  let filteredOrders = orders;
  if (filter !== 'all') {
    filteredOrders = orders.filter(order => order.status === filter);
  }

  const contentDiv = document.getElementById('allOrdersContent');
  contentDiv.innerHTML = `
    <div class="order-table">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Restaurant</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${filteredOrders.map(order => `
            <tr>
              <td>#${order.id}</td>
              <td>${order.userId}</td>
              <td>${order.restaurantId}</td>
              <td>৳${(order.total * exchangeRate).toFixed(2)}</td>
              <td>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
              </td>
              <td>${order.date}</td>
              <td>
                <button class="btn btn-sm btn-outline view-order-btn" data-id="${order.id}">View</button>
                ${order.status === 'pending' ? 
                  `<button class="btn btn-sm btn-primary assign-order-btn" data-id="${order.id}">Assign</button>` : ''}
                ${order.status === 'in-progress' ? 
                  `<button class="btn btn-sm btn-success complete-order-btn" data-id="${order.id}">Complete</button>` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Add event listeners to action buttons
  document.querySelectorAll('.view-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      viewOrderDetails(orderId);
    });
  });

  document.querySelectorAll('.assign-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      assignOrder(orderId);
    });
  });

  document.querySelectorAll('.complete-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      completeOrder(orderId);
    });
  });
}

function viewOrderDetails(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (!order) return;

  const contentDiv = document.getElementById('allOrdersContent');
  contentDiv.innerHTML = `
    <div class="order-details">
      <button class="btn btn-outline back-to-orders-btn"><i class="fas fa-arrow-left"></i> Back to Orders</button>
      <h3>Order #${order.id}</h3>
      <div class="order-info">
        <p><strong>Customer:</strong> ${order.userId}</p>
        <p><strong>Restaurant:</strong> ${order.restaurantId}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Status:</strong> <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span></p>
        ${order.deliveryPerson ? `<p><strong>Delivery Person:</strong> ${order.deliveryPerson}</p>` : ''}
        <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
      </div>
      <div class="order-items">
        <h4>Items:</h4>
        <ul>
          ${order.items.map(item => `
            <li>${item.name} (x${item.quantity}) - ৳${(item.price * exchangeRate).toFixed(2)}</li>
          `).join('')}
        </ul>
      </div>
      ${order.status === 'pending' ? `
        <div class="order-actions">
          <button class="btn btn-primary assign-order-btn" data-id="${order.id}">Assign Delivery</button>
        </div>
      ` : ''}
      ${order.status === 'in-progress' ? `
        <div class="order-actions">
          <button class="btn btn-success complete-order-btn" data-id="${order.id}">Mark as Delivered</button>
        </div>
      ` : ''}
    </div>
  `;

  document.querySelector('.back-to-orders-btn').addEventListener('click', function() {
    loadAllOrders(document.getElementById('orderFilter').value);
  });

  document.querySelector('.assign-order-btn')?.addEventListener('click', function() {
    const orderId = this.getAttribute('data-id');
    assignOrder(orderId);
  });

  document.querySelector('.complete-order-btn')?.addEventListener('click', function() {
    const orderId = this.getAttribute('data-id');
    completeOrder(orderId);
  });
}

function assignOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (!order) return;

  const availableDelivery = users.delivery.filter(d => d.availability === 'full-time' || d.availability === 'part-time');
  
  const contentDiv = document.getElementById('allOrdersContent');
  contentDiv.innerHTML = `
    <div class="assign-delivery-form">
      <button class="btn btn-outline back-to-orders-btn"><i class="fas fa-arrow-left"></i> Back to Orders</button>
      <h3>Assign Delivery for Order #${orderId}</h3>
      <div class="form-group">
        <label for="selectDeliveryPerson">Select Delivery Person:</label>
        <select id="selectDeliveryPerson" class="form-control">
          <option value="">Select delivery person</option>
          ${availableDelivery.map(delivery => `
            <option value="${delivery.username}">${delivery.name} (${delivery.vehicleType})</option>
          `).join('')}
        </select>
      </div>
      <button id="confirmAssignBtn" class="btn btn-primary" disabled>Assign</button>
    </div>
  `;

  document.querySelector('.back-to-orders-btn').addEventListener('click', function() {
    viewOrderDetails(orderId);
  });

  document.getElementById('selectDeliveryPerson').addEventListener('change', function() {
    document.getElementById('confirmAssignBtn').disabled = !this.value;
  });

  document.getElementById('confirmAssignBtn').addEventListener('click', function() {
    const deliveryUsername = document.getElementById('selectDeliveryPerson').value;
    if (deliveryUsername) {
      const deliveryPerson = users.delivery.find(d => d.username === deliveryUsername);
      if (deliveryPerson) {
        order.status = 'in-progress';
        order.deliveryPerson = deliveryPerson.name;
        deliveryPerson.deliveries.push(orderId);
        showToast(`Order #${orderId} assigned to ${deliveryPerson.name}`);
        viewOrderDetails(orderId);
      }
    }
  });
}

function completeOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = 'delivered';
    showToast(`Order #${orderId} marked as delivered`);
    viewOrderDetails(orderId);
  }
}

// Platform Statistics
function showPlatformStatistics() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="admin-form">
      <h2>Platform Statistics</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Users</h3>
          <p class="stat-value">${users.user.length}</p>
          <p class="stat-change"><i class="fas fa-arrow-up"></i> 12% from last month</p>
        </div>
        <div class="stat-card">
          <h3>Total Restaurants</h3>
          <p class="stat-value">${users.restaurant.filter(r => r.restaurant).length}</p>
          <p class="stat-change"><i class="fas fa-arrow-up"></i> 8% from last month</p>
        </div>
        <div class="stat-card">
          <h3>Total Delivery</h3>
          <p class="stat-value">${users.delivery.filter(d => d.name).length}</p>
          <p class="stat-change"><i class="fas fa-arrow-up"></i> 5% from last month</p>
        </div>
        <div class="stat-card">
          <h3>Total Orders</h3>
          <p class="stat-value">${orders.length}</p>
          <p class="stat-change"><i class="fas fa-arrow-up"></i> 15% from last month</p>
        </div>
      </div>
      <div class="revenue-stats">
        <h3>Revenue</h3>
        <p>Total: ৳${calculateTotalRevenue().toFixed(2)}</p>
        <p>This Month: ৳${(calculateTotalRevenue() * 0.15).toFixed(2)}</p>
        <p>Last Month: ৳${(calculateTotalRevenue() * 0.13).toFixed(2)}</p>
      </div>
      <div class="chart-container">
        <canvas id="platformStatsChart"></canvas>
      </div>
    </div>
  `;

  // Initialize chart (using Chart.js - make sure to include it in your HTML)
  if (typeof Chart !== 'undefined') {
    const ctx = document.getElementById('platformStatsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Users', 'Restaurants', 'Delivery', 'Orders'],
        datasets: [{
          label: 'Platform Statistics',
          data: [users.user.length, users.restaurant.filter(r => r.restaurant).length, 
                 users.delivery.filter(d => d.name).length, orders.length],
          backgroundColor: [
            'rgba(255, 107, 107, 0.7)',
            'rgba(72, 219, 251, 0.7)',
            'rgba(29, 209, 161, 0.7)',
            'rgba(255, 159, 67, 0.7)'
          ],
          borderColor: [
            'rgba(255, 107, 107, 1)',
            'rgba(72, 219, 251, 1)',
            'rgba(29, 209, 161, 1)',
            'rgba(255, 159, 67, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

function calculateTotalRevenue() {
  return orders.reduce((total, order) => total + order.total, 0) * exchangeRate;
}

// Promotion Management
function showPromotionManagementForm() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="admin-form">
      <h2>Manage Promotions</h2>
      <div class="admin-actions">
        <button class="btn btn-primary" id="viewPromotionsBtn">View All Promotions</button>
        <button class="btn btn-primary" id="addPromotionBtn">Add New Promotion</button>
        <button class="btn btn-danger" id="removePromotionBtn">Remove Promotion</button>
      </div>
      <div id="promotionManagementContent"></div>
    </div>
  `;

  document.getElementById('viewPromotionsBtn').addEventListener('click', viewAllPromotions);
  document.getElementById('addPromotionBtn').addEventListener('click', showAddPromotionForm);
  document.getElementById('removePromotionBtn').addEventListener('click', showRemovePromotionForm);
}

function viewAllPromotions() {
  const contentDiv = document.getElementById('promotionManagementContent');
  contentDiv.innerHTML = `
    <h3>Current Promotions</h3>
    <div class="promotion-list">
      <div class="promotion-card">
        <h4>50% OFF First Order</h4>
        <p>Code: QUICKBITE50</p>
        <p>Valid until: 2023-12-31</p>
      </div>
      <div class="promotion-card">
        <h4>Free Delivery Weekend</h4>
        <p>Code: FREEDEL</p>
        <p>Valid: Every weekend</p>
      </div>
    </div>
  `;
}

function showAddPromotionForm() {
  const contentDiv = document.getElementById('promotionManagementContent');
  contentDiv.innerHTML = `
    <h3>Add New Promotion</h3>
    <form id="addPromotionForm">
      <div class="form-group">
        <label for="promoName">Promotion Name:</label>
        <input type="text" id="promoName" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="promoCode">Promo Code:</label>
          <input type="text" id="promoCode" required>
        </div>
        <div class="form-group">
          <label for="promoDiscount">Discount (%):</label>
          <input type="number" id="promoDiscount" min="1" max="100" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="promoStartDate">Start Date:</label>
          <input type="date" id="promoStartDate" required>
        </div>
        <div class="form-group">
          <label for="promoEndDate">End Date:</label>
          <input type="date" id="promoEndDate" required>
        </div>
      </div>
      <div class="form-group">
        <label for="promoDescription">Description:</label>
        <textarea id="promoDescription" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Promotion</button>
    </form>
  `;

  document.getElementById('addPromotionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, you would save the promotion to your database
    showToast('Promotion added successfully!');
    viewAllPromotions();
  });
}

function showRemovePromotionForm() {
  const contentDiv = document.getElementById('promotionManagementContent');
  contentDiv.innerHTML = `
    <h3>Remove Promotion</h3>
    <div class="form-group">
      <label for="selectPromoToRemove">Select Promotion:</label>
      <select id="selectPromoToRemove" class="form-control">
        <option value="">Select a promotion</option>
        <option value="QUICKBITE50">50% OFF First Order (QUICKBITE50)</option>
        <option value="FREEDEL">Free Delivery Weekend (FREEDEL)</option>
      </select>
    </div>
    <button id="confirmRemovePromoBtn" class="btn btn-danger" disabled>Remove Promotion</button>
  `;

  document.getElementById('selectPromoToRemove').addEventListener('change', function() {
    document.getElementById('confirmRemovePromoBtn').disabled = !this.value;
  });

  document.getElementById('confirmRemovePromoBtn').addEventListener('click', function() {
    const promoCode = document.getElementById('selectPromoToRemove').value;
    if (promoCode && confirm(`Are you sure you want to remove promotion ${promoCode}?`)) {
      // In a real app, you would remove the promotion from your database
      showToast('Promotion removed successfully!');
      viewAllPromotions();
    }
  });
}

// ==================== RESTAURANT DASHBOARD FUNCTIONS ====================

function handleRestaurantButtonClick(buttonId) {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  
  switch(buttonId) {
    case 'restaurantOrders':
      showRestaurantOrders();
      break;
    case 'restaurantMenu':
      showMenuManagement();
      break;
    case 'restaurantProfile':
      showRestaurantProfileForm();
      break;
    case 'restaurantStats':
      showRestaurantStatistics();
      break;
    case 'restaurantPromotions':
      showRestaurantPromotions();
      break;
    case 'restaurantReviews':
      showRestaurantReviews();
      break;
    default:
      alert('Feature coming soon!');
  }
}

function showRestaurantOrders() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  const restaurantOrders = orders.filter(o => o.restaurantId === restaurant.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="restaurant-form">
      <h2>Restaurant Orders</h2>
      <div class="filter-options">
        <select id="restaurantOrderFilter" class="form-control">
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <div id="restaurantOrdersContent"></div>
    </div>
  `;

  loadRestaurantOrders('all');
  
  document.getElementById('restaurantOrderFilter').addEventListener('change', function() {
    loadRestaurantOrders(this.value);
  });
}

function loadRestaurantOrders(filter) {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  let filteredOrders = orders.filter(o => o.restaurantId === restaurant.username);
  
  if (filter !== 'all') {
    filteredOrders = filteredOrders.filter(order => order.status === filter);
  }

  const contentDiv = document.getElementById('restaurantOrdersContent');
  contentDiv.innerHTML = `
    <div class="order-table">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${filteredOrders.map(order => `
            <tr>
              <td>#${order.id}</td>
              <td>${order.userId}</td>
              <td>৳${(order.total * exchangeRate).toFixed(2)}</td>
              <td>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
              </td>
              <td>${order.date}</td>
              <td>
                <button class="btn btn-sm btn-outline view-order-btn" data-id="${order.id}">View</button>
                ${order.status === 'pending' ? 
                  `<button class="btn btn-sm btn-primary accept-order-btn" data-id="${order.id}">Accept</button>` : ''}
                ${order.status === 'in-progress' ? 
                  `<button class="btn btn-sm btn-success ready-order-btn" data-id="${order.id}">Ready</button>` : ''}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.querySelectorAll('.view-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      viewRestaurantOrderDetails(orderId);
    });
  });

  document.querySelectorAll('.accept-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      acceptOrder(orderId);
    });
  });

  document.querySelectorAll('.ready-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      markOrderAsReady(orderId);
    });
  });
}

function viewRestaurantOrderDetails(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (!order) return;

  const contentDiv = document.getElementById('restaurantOrdersContent');
  contentDiv.innerHTML = `
    <div class="order-details">
      <button class="btn btn-outline back-to-orders-btn"><i class="fas fa-arrow-left"></i> Back to Orders</button>
      <h3>Order #${order.id}</h3>
      <div class="order-info">
        <p><strong>Customer:</strong> ${order.userId}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Status:</strong> <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span></p>
        ${order.deliveryPerson ? `<p><strong>Delivery Person:</strong> ${order.deliveryPerson}</p>` : ''}
        <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
      </div>
      <div class="order-items">
        <h4>Items:</h4>
        <ul>
          ${order.items.map(item => `
            <li>${item.name} (x${item.quantity}) - ৳${(item.price * exchangeRate).toFixed(2)}</li>
          `).join('')}
        </ul>
      </div>
      ${order.status === 'pending' ? `
        <div class="order-actions">
          <button class="btn btn-primary accept-order-btn" data-id="${order.id}">Accept Order</button>
        </div>
      ` : ''}
      ${order.status === 'in-progress' ? `
        <div class="order-actions">
          <button class="btn btn-success ready-order-btn" data-id="${order.id}">Mark as Ready</button>
        </div>
      ` : ''}
    </div>
  `;

  document.querySelector('.back-to-orders-btn').addEventListener('click', function() {
    loadRestaurantOrders(document.getElementById('restaurantOrderFilter').value);
  });

  document.querySelector('.accept-order-btn')?.addEventListener('click', function() {
    const orderId = this.getAttribute('data-id');
    acceptOrder(orderId);
  });

  document.querySelector('.ready-order-btn')?.addEventListener('click', function() {
    const orderId = this.getAttribute('data-id');
    markOrderAsReady(orderId);
  });
}

function acceptOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = 'in-progress';
    showToast(`Order #${orderId} has been accepted`);
    viewRestaurantOrderDetails(orderId);
  }
}

function markOrderAsReady(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = 'ready-for-pickup';
    showToast(`Order #${orderId} is ready for pickup`);
    viewRestaurantOrderDetails(orderId);
  }
}

function showMenuManagement() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="restaurant-form">
      <h2>Menu Management</h2>
      <div class="admin-actions">
        <button class="btn btn-primary" id="viewMenuBtn">View Menu</button>
        <button class="btn btn-primary" id="addMenuItemBtn">Add Menu Item</button>
        <button class="btn btn-primary" id="editMenuItemBtn">Edit Menu Item</button>
        <button class="btn btn-danger" id="removeMenuItemBtn">Remove Menu Item</button>
      </div>
      <div id="menuManagementContent"></div>
    </div>
  `;

  document.getElementById('viewMenuBtn').addEventListener('click', viewRestaurantMenu);
  document.getElementById('addMenuItemBtn').addEventListener('click', showAddMenuItemForm);
  document.getElementById('editMenuItemBtn').addEventListener('click', showEditMenuItemForm);
  document.getElementById('removeMenuItemBtn').addEventListener('click', showRemoveMenuItemForm);
}

function viewRestaurantMenu() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  
  const contentDiv = document.getElementById('menuManagementContent');
  contentDiv.innerHTML = `
    <h3>Current Menu</h3>
    <div class="menu-items-grid">
      ${restaurant.menu.map(item => `
        <div class="menu-item-card">
          <div class="menu-item-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="menu-item-info">
            <h4>${item.name}</h4>
            <p class="menu-item-price">৳${(item.price * exchangeRate).toFixed(2)}</p>
            <p class="menu-item-desc">${item.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function showAddMenuItemForm() {
  const contentDiv = document.getElementById('menuManagementContent');
  contentDiv.innerHTML = `
    <h3>Add New Menu Item</h3>
    <form id="addMenuItemForm">
      <div class="form-group">
        <label for="itemName">Item Name:</label>
        <input type="text" id="itemName" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="itemPrice">Price (USD):</label>
          <input type="number" id="itemPrice" min="0" step="0.01" required>
        </div>
        <div class="form-group">
          <label for="itemImage">Image URL:</label>
          <input type="url" id="itemImage" required>
        </div>
      </div>
      <div class="form-group">
        <label for="itemDescription">Description:</label>
        <textarea id="itemDescription" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Item</button>
    </form>
  `;

  document.getElementById('addMenuItemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const restaurant = users.restaurant.find(r => r.username === currentUser.username);
    if (restaurant) {
      const newItem = {
        id: restaurant.menu.length > 0 ? Math.max(...restaurant.menu.map(i => i.id)) + 1 : 1,
        name: document.getElementById('itemName').value,
        price: parseFloat(document.getElementById('itemPrice').value),
        description: document.getElementById('itemDescription').value,
        image: document.getElementById('itemImage').value
      };
      restaurant.menu.push(newItem);
      showToast('Menu item added successfully!');
      viewRestaurantMenu();
    }
  });
}

function showEditMenuItemForm() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  
  const contentDiv = document.getElementById('menuManagementContent');
  contentDiv.innerHTML = `
    <h3>Edit Menu Item</h3>
    <div class="form-group">
      <label for="selectMenuItemToEdit">Select Item:</label>
      <select id="selectMenuItemToEdit" class="form-control">
        <option value="">Select a menu item</option>
        ${restaurant.menu.map(item => `
          <option value="${item.id}">${item.name} (৳${(item.price * exchangeRate).toFixed(2)})</option>
        `).join('')}
      </select>
    </div>
    <div id="editMenuItemFormContainer"></div>
  `;

  document.getElementById('selectMenuItemToEdit').addEventListener('change', function() {
    const itemId = parseInt(this.value);
    if (itemId) {
      editMenuItem(itemId);
    } else {
      document.getElementById('editMenuItemFormContainer').innerHTML = '';
    }
  });
}

function editMenuItem(itemId) {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  const item = restaurant.menu.find(i => i.id === itemId);
  if (!item) return;

  const contentDiv = document.getElementById('editMenuItemFormContainer');
  contentDiv.innerHTML = `
    <form id="editMenuItemForm">
      <input type="hidden" id="editItemId" value="${item.id}">
      <div class="form-group">
        <label for="editItemName">Item Name:</label>
        <input type="text" id="editItemName" value="${item.name}" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="editItemPrice">Price (USD):</label>
          <input type="number" id="editItemPrice" value="${item.price}" min="0" step="0.01" required>
        </div>
        <div class="form-group">
          <label for="editItemImage">Image URL:</label>
          <input type="url" id="editItemImage" value="${item.image}" required>
        </div>
      </div>
      <div class="form-group">
        <label for="editItemDescription">Description:</label>
        <textarea id="editItemDescription" rows="3" required>${item.description}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  `;

  document.getElementById('editMenuItemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    item.name = document.getElementById('editItemName').value;
    item.price = parseFloat(document.getElementById('editItemPrice').value);
    item.image = document.getElementById('editItemImage').value;
    item.description = document.getElementById('editItemDescription').value;
    
    showToast('Menu item updated successfully!');
    viewRestaurantMenu();
  });
}

function showRemoveMenuItemForm() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  
  const contentDiv = document.getElementById('menuManagementContent');
  contentDiv.innerHTML = `
    <h3>Remove Menu Item</h3>
    <div class="form-group">
      <label for="selectMenuItemToRemove">Select Item:</label>
      <select id="selectMenuItemToRemove" class="form-control">
        <option value="">Select a menu item</option>
        ${restaurant.menu.map(item => `
          <option value="${item.id}">${item.name} (৳${(item.price * exchangeRate).toFixed(2)})</option>
        `).join('')}
      </select>
    </div>
    <button id="confirmRemoveItemBtn" class="btn btn-danger" disabled>Remove Item</button>
  `;

  document.getElementById('selectMenuItemToRemove').addEventListener('change', function() {
    document.getElementById('confirmRemoveItemBtn').disabled = !this.value;
  });

  document.getElementById('confirmRemoveItemBtn').addEventListener('click', function() {
    const itemId = parseInt(document.getElementById('selectMenuItemToRemove').value);
    if (itemId && confirm('Are you sure you want to remove this menu item?')) {
      removeMenuItem(itemId);
    }
  });
}

function removeMenuItem(itemId) {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  if (restaurant) {
    const index = restaurant.menu.findIndex(i => i.id === itemId);
    if (index !== -1) {
      restaurant.menu.splice(index, 1);
      showToast('Menu item removed successfully!');
      viewRestaurantMenu();
    }
  }
}

function showRestaurantProfileForm() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="restaurant-form">
      <h2>Restaurant Profile</h2>
      <form id="restaurantProfileForm">
        <div class="form-group">
          <label for="profileRestaurantName">Restaurant Name:</label>
          <input type="text" id="profileRestaurantName" value="${restaurant.restaurant}" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="profileCuisine">Cuisine Type:</label>
            <input type="text" id="profileCuisine" value="${restaurant.cuisine}" required>
          </div>
          <div class="form-group">
            <label for="profileOpeningHours">Opening Hours:</label>
            <input type="text" id="profileOpeningHours" value="${restaurant.openingHours}" required>
          </div>
        </div>
        <div class="form-group">
          <label for="profileDeliveryRadius">Delivery Radius (km):</label>
          <input type="text" id="profileDeliveryRadius" value="${restaurant.deliveryRadius}" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="profileEmail">Email:</label>
            <input type="email" id="profileEmail" value="${restaurant.email}" required>
          </div>
          <div class="form-group">
            <label for="profilePhone">Phone:</label>
            <input type="tel" id="profilePhone" value="${restaurant.phone}" required>
          </div>
        </div>
        <div class="form-group">
          <label for="profileAddress">Address:</label>
          <textarea id="profileAddress" rows="3" required>${restaurant.address}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  `;

  document.getElementById('restaurantProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    restaurant.restaurant = document.getElementById('profileRestaurantName').value;
    restaurant.cuisine = document.getElementById('profileCuisine').value;
    restaurant.openingHours = document.getElementById('profileOpeningHours').value;
    restaurant.deliveryRadius = document.getElementById('profileDeliveryRadius').value;
    restaurant.email = document.getElementById('profileEmail').value;
    restaurant.phone = document.getElementById('profilePhone').value;
    restaurant.address = document.getElementById('profileAddress').value;
    
    showToast('Restaurant profile updated successfully!');
  });
}

function showRestaurantStatistics() {
  const restaurant = users.restaurant.find(r => r.username === currentUser.username);
  const restaurantOrders = orders.filter(o => o.restaurantId === restaurant.username);
  const totalRevenue = restaurantOrders.reduce((sum, order) => sum + order.total, 0) * exchangeRate;
  const totalItemsSold = restaurantOrders.reduce((sum, order) => {
    return sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
  }, 0);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="restaurant-form">
      <h2>Restaurant Statistics</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Orders</h3>
          <p class="stat-value">${restaurantOrders.length}</p>
        </div>
        <div class="stat-card">
          <h3>Total Revenue</h3>
          <p class="stat-value">৳${totalRevenue.toFixed(2)}</p>
        </div>
        <div class="stat-card">
          <h3>Items Sold</h3>
          <p class="stat-value">${totalItemsSold}</p>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="restaurantStatsChart"></canvas>
      </div>
    </div>
  `;

  // Initialize chart (using Chart.js)
  if (typeof Chart !== 'undefined') {
    const ctx = document.getElementById('restaurantStatsChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [{
          data: [
            restaurantOrders.filter(o => o.status === 'delivered').length,
            restaurantOrders.filter(o => o.status === 'in-progress').length,
            restaurantOrders.filter(o => o.status === 'pending').length
          ],
          backgroundColor: [
            'rgba(29, 209, 161, 0.7)',
            'rgba(72, 219, 251, 0.7)',
            'rgba(255, 159, 67, 0.7)'
          ],
          borderColor: [
            'rgba(29, 209, 161, 1)',
            'rgba(72, 219, 251, 1)',
            'rgba(255, 159, 67, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}

function showRestaurantPromotions() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="restaurant-form">
      <h2>Restaurant Promotions</h2>
      <div class="admin-actions">
        <button class="btn btn-primary" id="addRestaurantPromoBtn">Create Promotion</button>
      </div>
      <div id="restaurantPromotionsContent">
        <p>No active promotions. Create one to attract more customers!</p>
      </div>
    </div>
  `;

  document.getElementById('addRestaurantPromoBtn').addEventListener('click', showAddRestaurantPromotionForm);
}

function showAddRestaurantPromotionForm() {
  const contentDiv = document.getElementById('restaurantPromotionsContent');
  contentDiv.innerHTML = `
    <h3>Create New Promotion</h3>
    <form id="addRestaurantPromoForm">
      <div class="form-group">
        <label for="restaurantPromoName">Promotion Name:</label>
        <input type="text" id="restaurantPromoName" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="restaurantPromoDiscount">Discount (%):</label>
          <input type="number" id="restaurantPromoDiscount" min="5" max="50" required>
        </div>
        <div class="form-group">
          <label for="restaurantPromoDuration">Duration (days):</label>
          <input type="number" id="restaurantPromoDuration" min="1" max="30" required>
        </div>
      </div>
      <div class="form-group">
        <label for="restaurantPromoDescription">Description:</label>
        <textarea id="restaurantPromoDescription" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create Promotion</button>
    </form>
  `;

  document.getElementById('addRestaurantPromoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, you would save the promotion
    showToast('Promotion created successfully!');
    showRestaurantPromotions();
  });
}

function showRestaurantReviews() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="restaurant-form">
      <h2>Customer Reviews</h2>
      <div id="restaurantReviewsContent">
        <div class="review-card">
          <div class="review-header">
            <div class="reviewer">User1</div>
            <div class="review-rating">★★★★★</div>
          </div>
          <div class="review-date">2023-06-15</div>
          <div class="review-text">
            The pizza was amazing! Will definitely order again.
          </div>
        </div>
        <div class="review-card">
          <div class="review-header">
            <div class="reviewer">User2</div>
            <div class="review-rating">★★★★☆</div>
          </div>
          <div class="review-date">2023-06-10</div>
          <div class="review-text">
            Good food but delivery was a bit late.
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== DELIVERY DASHBOARD FUNCTIONS ====================

function handleDeliveryButtonClick(buttonId) {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  const delivery = users.delivery.find(d => d.username === currentUser.username);
  
  switch(buttonId) {
    case 'deliveryAssignments':
      showDeliveryAssignments();
      break;
    case 'deliveryHistory':
      showDeliveryHistory();
      break;
    case 'deliveryProfile':
      showDeliveryProfileForm();
      break;
    case 'deliveryAvailability':
      showDeliveryAvailabilityForm();
      break;
    case 'deliveryEarnings':
      showDeliveryEarnings();
      break;
    case 'deliveryRatings':
      showDeliveryRatings();
      break;
    default:
      alert('Feature coming soon!');
  }
}

function showDeliveryAssignments() {
  const delivery = users.delivery.find(d => d.username === currentUser.username);
  const assignedOrders = orders.filter(o => o.deliveryPerson === delivery.name && o.status !== 'delivered');
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="delivery-form">
      <h2>Current Assignments</h2>
      <div id="deliveryAssignmentsContent">
        ${assignedOrders.length === 0 ? 
          '<p>No current assignments</p>' : 
          assignedOrders.map(order => `
            <div class="assignment-card">
              <div class="assignment-header">
                <h3>Order #${order.id}</h3>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
              </div>
              <div class="assignment-details">
                <p><strong>Restaurant:</strong> ${order.restaurantId}</p>
                <p><strong>Customer:</strong> ${order.userId}</p>
                <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
              </div>
              <div class="assignment-items">
                <h4>Items:</h4>
                <ul>
                  ${order.items.map(item => `
                    <li>${item.name} (x${item.quantity})</li>
                  `).join('')}
                </ul>
              </div>
              <div class="assignment-actions">
                ${order.status === 'ready-for-pickup' ? 
                  `<button class="btn btn-primary pickup-order-btn" data-id="${order.id}">Pick Up Order</button>` : ''}
                ${order.status === 'in-progress' ? 
                  `<button class="btn btn-success deliver-order-btn" data-id="${order.id}">Mark as Delivered</button>` : ''}
              </div>
            </div>
          `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.pickup-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      pickupOrder(orderId);
    });
  });

  document.querySelectorAll('.deliver-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      deliverOrder(orderId);
    });
  });
}

function pickupOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = 'in-progress';
    showToast(`Order #${orderId} picked up successfully`);
    showDeliveryAssignments();
  }
}

function deliverOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order) {
    order.status = 'delivered';
    showToast(`Order #${orderId} marked as delivered`);
    showDeliveryAssignments();
  }
}

function showDeliveryHistory() {
  const delivery = users.delivery.find(d => d.username === currentUser.username);
  const deliveredOrders = orders.filter(o => o.deliveryPerson === delivery.name && o.status === 'delivered');
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="delivery-form">
      <h2>Delivery History</h2>
      <div id="deliveryHistoryContent">
        ${deliveredOrders.length === 0 ? 
          '<p>No delivery history yet</p>' : 
          `<div class="history-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Restaurant</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Earnings</th>
                </tr>
              </thead>
              <tbody>
                ${deliveredOrders.map(order => `
                  <tr>
                    <td>#${order.id}</td>
                    <td>${order.restaurantId}</td>
                    <td>${order.userId}</td>
                    <td>${order.date}</td>
                    <td>৳${(order.total * 0.1 * exchangeRate).toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>`}
      </div>
    </div>
  `;
}

function showDeliveryProfileForm() {
  const delivery = users.delivery.find(d => d.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="delivery-form">
      <h2>Delivery Profile</h2>
      <form id="deliveryProfileForm">
        <div class="form-group">
          <label for="deliveryProfileName">Full Name:</label>
          <input type="text" id="deliveryProfileName" value="${delivery.name}" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="deliveryProfileEmail">Email:</label>
            <input type="email" id="deliveryProfileEmail" value="${delivery.email}" required>
          </div>
          <div class="form-group">
            <label for="deliveryProfilePhone">Phone:</label>
            <input type="tel" id="deliveryProfilePhone" value="${delivery.phone}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="deliveryProfileVehicle">Vehicle Type:</label>
            <select id="deliveryProfileVehicle">
              <option value="bike" ${delivery.vehicleType === 'bike' ? 'selected' : ''}>Bike</option>
              <option value="car" ${delivery.vehicleType === 'car' ? 'selected' : ''}>Car</option>
              <option value="scooter" ${delivery.vehicleType === 'scooter' ? 'selected' : ''}>Scooter</option>
            </select>
          </div>
          <div class="form-group">
            <label for="deliveryProfileLicense">License Number:</label>
            <input type="text" id="deliveryProfileLicense" value="${delivery.licenseNumber}" required>
          </div>
        </div>
        <div class="form-group">
          <label for="deliveryProfileAddress">Address:</label>
          <textarea id="deliveryProfileAddress" rows="3" required>${delivery.address}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  `;

  document.getElementById('deliveryProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    delivery.name = document.getElementById('deliveryProfileName').value;
    delivery.email = document.getElementById('deliveryProfileEmail').value;
    delivery.phone = document.getElementById('deliveryProfilePhone').value;
    delivery.vehicleType = document.getElementById('deliveryProfileVehicle').value;
    delivery.licenseNumber = document.getElementById('deliveryProfileLicense').value;
    delivery.address = document.getElementById('deliveryProfileAddress').value;
    
    showToast('Profile updated successfully!');
  });
}

function showDeliveryAvailabilityForm() {
  const delivery = users.delivery.find(d => d.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="delivery-form">
      <h2>Availability Settings</h2>
      <form id="deliveryAvailabilityForm">
        <div class="form-group">
          <label for="deliveryAvailability">Availability:</label>
          <select id="deliveryAvailability">
            <option value="full-time" ${delivery.availability === 'full-time' ? 'selected' : ''}>Full-time</option>
            <option value="part-time" ${delivery.availability === 'part-time' ? 'selected' : ''}>Part-time</option>
            <option value="unavailable" ${delivery.availability === 'unavailable' ? 'selected' : ''}>Unavailable</option>
          </select>
        </div>
        <div class="form-group">
          <label for="deliveryWorkingHours">Preferred Working Hours:</label>
          <input type="text" id="deliveryWorkingHours" value="9:00 AM - 5:00 PM">
        </div>
        <button type="submit" class="btn btn-primary">Save Settings</button>
      </form>
    </div>
  `;

  document.getElementById('deliveryAvailabilityForm').addEventListener('submit', function(e) {
    e.preventDefault();
    delivery.availability = document.getElementById('deliveryAvailability').value;
    showToast('Availability settings updated successfully!');
  });
}

function showDeliveryEarnings() {
  const delivery = users.delivery.find(d => d.username === currentUser.username);
  const deliveredOrders = orders.filter(o => o.deliveryPerson === delivery.name && o.status === 'delivered');
  const totalEarnings = deliveredOrders.reduce((sum, order) => sum + (order.total * 0.1 * exchangeRate), 0);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="delivery-form">
      <h2>Earnings</h2>
      <div class="earnings-summary">
        <div class="earnings-card">
          <h3>Total Earnings</h3>
          <p class="earnings-amount">৳${totalEarnings.toFixed(2)}</p>
        </div>
        <div class="earnings-card">
          <h3>Completed Deliveries</h3>
          <p class="earnings-amount">${deliveredOrders.length}</p>
        </div>
      </div>
      <div class="earnings-breakdown">
        <h3>Earnings Breakdown</h3>
        <div class="earnings-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${deliveredOrders.map(order => `
                <tr>
                  <td>${order.date}</td>
                  <td>#${order.id}</td>
                  <td>৳${(order.total * 0.1 * exchangeRate).toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function showDeliveryRatings() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="delivery-form">
      <h2>Customer Ratings</h2>
      <div class="ratings-summary">
        <div class="rating-card">
          <div class="rating-stars">★★★★☆</div>
          <div class="rating-average">4.2/5</div>
          <div class="rating-count">(12 reviews)</div>
        </div>
      </div>
      <div class="ratings-list">
        <div class="rating-item">
          <div class="rating-header">
            <div class="rating-user">User1</div>
            <div class="rating-stars">★★★★★</div>
          </div>
          <div class="rating-date">2023-06-15</div>
          <div class="rating-comment">
            Fast and friendly delivery!
          </div>
        </div>
        <div class="rating-item">
          <div class="rating-header">
            <div class="rating-user">User2</div>
            <div class="rating-stars">★★★☆☆</div>
          </div>
          <div class="rating-date">2023-06-10</div>
          <div class="rating-comment">
            Food was a bit cold when arrived
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== USER DASHBOARD FUNCTIONS ====================

function handleUserButtonClick(buttonId) {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  const user = users.user.find(u => u.username === currentUser.username);
  
  switch(buttonId) {
    case 'userOrders':
      showUserOrders();
      break;
    case 'userFavorites':
      showUserFavorites();
      break;
    case 'userProfile':
      showUserProfileForm();
      break;
    case 'userAddresses':
      showUserAddresses();
      break;
    case 'userPayments':
      showUserPaymentMethods();
      break;
    case 'userReviews':
      showUserReviews();
      break;
    default:
      alert('Feature coming soon!');
  }
}

function showUserOrders() {
  const user = users.user.find(u => u.username === currentUser.username);
  const userOrders = orders.filter(o => o.userId === user.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="user-form">
      <h2>My Orders</h2>
      <div class="filter-options">
        <select id="userOrderFilter" class="form-control">
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <div id="userOrdersContent">
        ${userOrders.length === 0 ? 
          '<p>No orders yet. Start ordering from our delicious menu!</p>' : 
          `<div class="order-list">
            ${userOrders.map(order => `
              <div class="order-card">
                <div class="order-header">
                  <span class="order-id">Order #${order.id}</span>
                  <span class="order-date">${order.date}</span>
                  <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
                </div>
                <div class="order-details">
                  <p><strong>Restaurant:</strong> ${order.restaurantId}</p>
                  <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
                  <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
                </div>
                <div class="order-actions">
                  <button class="btn btn-sm btn-outline view-order-btn" data-id="${order.id}">View Details</button>
                  ${order.status === 'pending' ? 
                    `<button class="btn btn-sm btn-danger cancel-order-btn" data-id="${order.id}">Cancel Order</button>` : ''}
                  ${order.status === 'delivered' ? 
                    `<button class="btn btn-sm btn-primary rate-order-btn" data-id="${order.id}">Rate Order</button>` : ''}
                </div>
              </div>
            `).join('')}
          </div>`}
      </div>
    </div>
  `;

  document.getElementById('userOrderFilter').addEventListener('change', function() {
    filterUserOrders(this.value);
  });

  document.querySelectorAll('.view-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      viewUserOrderDetails(orderId);
    });
  });

  document.querySelectorAll('.cancel-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      cancelUserOrder(orderId);
    });
  });

  document.querySelectorAll('.rate-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      rateUserOrder(orderId);
    });
  });
}

function filterUserOrders(filter) {
  const user = users.user.find(u => u.username === currentUser.username);
  let filteredOrders = orders.filter(o => o.userId === user.username);
  
  if (filter !== 'all') {
    filteredOrders = filteredOrders.filter(order => order.status === filter);
  }

  const contentDiv = document.getElementById('userOrdersContent');
  contentDiv.innerHTML = `
    <div class="order-list">
      ${filteredOrders.length === 0 ? 
        '<p>No orders match your filter</p>' : 
        filteredOrders.map(order => `
          <div class="order-card">
            <div class="order-header">
              <span class="order-id">Order #${order.id}</span>
              <span class="order-date">${order.date}</span>
              <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
            </div>
            <div class="order-details">
              <p><strong>Restaurant:</strong> ${order.restaurantId}</p>
              <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
              <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
            </div>
            <div class="order-actions">
              <button class="btn btn-sm btn-outline view-order-btn" data-id="${order.id}">View Details</button>
              ${order.status === 'pending' ? 
                `<button class="btn btn-sm btn-danger cancel-order-btn" data-id="${order.id}">Cancel Order</button>` : ''}
              ${order.status === 'delivered' ? 
                `<button class="btn btn-sm btn-primary rate-order-btn" data-id="${order.id}">Rate Order</button>` : ''}
            </div>
          </div>
        `).join('')}
    </div>
  `;

  document.querySelectorAll('.view-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      viewUserOrderDetails(orderId);
    });
  });

  document.querySelectorAll('.cancel-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      cancelUserOrder(orderId);
    });
  });

  document.querySelectorAll('.rate-order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orderId = this.getAttribute('data-id');
      rateUserOrder(orderId);
    });
  });
}

function viewUserOrderDetails(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (!order) return;

  const contentDiv = document.getElementById('userOrdersContent');
  contentDiv.innerHTML = `
    <div class="order-details">
      <button class="btn btn-outline back-to-orders-btn"><i class="fas fa-arrow-left"></i> Back to Orders</button>
      <h3>Order #${order.id}</h3>
      <div class="order-info">
        <p><strong>Restaurant:</strong> ${order.restaurantId}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Status:</strong> <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span></p>
        ${order.deliveryPerson ? `<p><strong>Delivery Person:</strong> ${order.deliveryPerson}</p>` : ''}
        <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
      </div>
      <div class="order-items">
        <h4>Items:</h4>
        <ul>
          ${order.items.map(item => `
            <li>${item.name} (x${item.quantity}) - ৳${(item.price * exchangeRate).toFixed(2)}</li>
          `).join('')}
        </ul>
      </div>
      ${order.status === 'pending' ? `
        <div class="order-actions">
          <button class="btn btn-danger cancel-order-btn" data-id="${order.id}">Cancel Order</button>
        </div>
      ` : ''}
      ${order.status === 'delivered' ? `
        <div class="order-actions">
          <button class="btn btn-primary rate-order-btn" data-id="${order.id}">Rate This Order</button>
        </div>
      ` : ''}
    </div>
  `;

  document.querySelector('.back-to-orders-btn').addEventListener('click', function() {
    filterUserOrders(document.getElementById('userOrderFilter').value);
  });

  document.querySelector('.cancel-order-btn')?.addEventListener('click', function() {
    const orderId = this.getAttribute('data-id');
    cancelUserOrder(orderId);
  });

  document.querySelector('.rate-order-btn')?.addEventListener('click', function() {
    const orderId = this.getAttribute('data-id');
    rateUserOrder(orderId);
  });
}

function cancelUserOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (order && confirm('Are you sure you want to cancel this order?')) {
    order.status = 'canceled';
    showToast(`Order #${orderId} has been canceled`);
    filterUserOrders(document.getElementById('userOrderFilter').value);
  }
}

function rateUserOrder(orderId) {
  const order = orders.find(o => o.id == orderId);
  if (!order) return;

  const contentDiv = document.getElementById('userOrdersContent');
  contentDiv.innerHTML = `
    <div class="rating-form">
      <button class="btn btn-outline back-to-orders-btn"><i class="fas fa-arrow-left"></i> Back to Order</button>
      <h3>Rate Your Order #${orderId}</h3>
      <form id="orderRatingForm">
        <div class="form-group">
          <label>Rating:</label>
          <div class="rating-stars">
            <i class="far fa-star" data-rating="1"></i>
            <i class="far fa-star" data-rating="2"></i>
            <i class="far fa-star" data-rating="3"></i>
            <i class="far fa-star" data-rating="4"></i>
            <i class="far fa-star" data-rating="5"></i>
          </div>
          <input type="hidden" id="orderRating" value="0">
        </div>
        <div class="form-group">
          <label for="orderReview">Review:</label>
          <textarea id="orderReview" rows="4" placeholder="Tell us about your experience..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit Review</button>
      </form>
    </div>
  `;

  // Star rating interaction
  const stars = document.querySelectorAll('.rating-stars i');
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      document.getElementById('orderRating').value = rating;
      
      stars.forEach((s, index) => {
        if (index < rating) {
          s.classList.remove('far');
          s.classList.add('fas');
        } else {
          s.classList.remove('fas');
          s.classList.add('far');
        }
      });
    });
  });

  document.querySelector('.back-to-orders-btn').addEventListener('click', function() {
    viewUserOrderDetails(orderId);
  });

  document.getElementById('orderRatingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const rating = document.getElementById('orderRating').value;
    const review = document.getElementById('orderReview').value;
    
    if (rating === '0') {
      alert('Please select a rating');
      return;
    }
    
    // In a real app, you would save the rating and review
    showToast('Thank you for your review!');
    viewUserOrderDetails(orderId);
  });
}

function showUserFavorites() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="user-form">
      <h2>Favorite Restaurants</h2>
      <div id="userFavoritesContent">
        <div class="favorites-grid">
          <div class="favorite-card">
            <div class="favorite-img">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Pizza Palace">
            </div>
            <div class="favorite-info">
              <h3>Pizza Palace</h3>
              <div class="rating">★★★★★ (245)</div>
              <button class="btn btn-sm btn-outline">View Menu</button>
              <button class="btn btn-sm btn-danger">Remove</button>
            </div>
          </div>
          <div class="favorite-card">
            <div class="favorite-img">
              <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="Burger Barn">
            </div>
            <div class="favorite-info">
              <h3>Burger Barn</h3>
              <div class="rating">★★★★☆ (189)</div>
              <button class="btn btn-sm btn-outline">View Menu</button>
              <button class="btn btn-sm btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showUserProfileForm() {
  const user = users.user.find(u => u.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="user-form">
      <h2>Profile Settings</h2>
      <form id="userProfileForm">
        <div class="form-group">
          <label for="userProfileName">Full Name:</label>
          <input type="text" id="userProfileName" value="${user.name}" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="userProfileEmail">Email:</label>
            <input type="email" id="userProfileEmail" value="${user.email}" required>
          </div>
          <div class="form-group">
            <label for="userProfilePhone">Phone:</label>
            <input type="tel" id="userProfilePhone" value="${user.phone}" required>
          </div>
        </div>
        <div class="form-group">
          <label for="userProfileAddress">Address:</label>
          <textarea id="userProfileAddress" rows="3" required>${user.address}</textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="userProfileCity">City:</label>
            <input type="text" id="userProfileCity" value="${user.city}" required>
          </div>
          <div class="form-group">
            <label for="userProfilePostalCode">Postal Code:</label>
            <input type="text" id="userProfilePostalCode" value="${user.postalCode}" required>
          </div>
        </div>
        <div class="form-group">
          <label for="userProfileCountry">Country:</label>
          <input type="text" id="userProfileCountry" value="${user.country}" required>
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  `;

  document.getElementById('userProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    user.name = document.getElementById('userProfileName').value;
    user.email = document.getElementById('userProfileEmail').value;
    user.phone = document.getElementById('userProfilePhone').value;
    user.address = document.getElementById('userProfileAddress').value;
    user.city = document.getElementById('userProfileCity').value;
    user.postalCode = document.getElementById('userProfilePostalCode').value;
    user.country = document.getElementById('userProfileCountry').value;
    
    showToast('Profile updated successfully!');
  });
}

function showUserAddresses() {
  const user = users.user.find(u => u.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="user-form">
      <h2>Saved Addresses</h2>
      <div id="userAddressesContent">
        <div class="address-card">
          <div class="address-details">
            <h4>Primary Address</h4>
            <p>${user.address}</p>
            <p>${user.city}, ${user.postalCode}</p>
            <p>${user.country}</p>
          </div>
          <div class="address-actions">
            <button class="btn btn-sm btn-outline">Edit</button>
          </div>
        </div>
        <button class="btn btn-primary" id="addNewAddressBtn">Add New Address</button>
      </div>
    </div>
  `;

  document.getElementById('addNewAddressBtn').addEventListener('click', function() {
    showAddAddressForm();
  });
}

function showAddAddressForm() {
  const contentDiv = document.getElementById('userAddressesContent');
  contentDiv.innerHTML = `
    <h3>Add New Address</h3>
    <form id="addAddressForm">
      <div class="form-group">
        <label for="newAddressLabel">Address Label (e.g., Home, Work):</label>
        <input type="text" id="newAddressLabel" required>
      </div>
      <div class="form-group">
        <label for="newAddressStreet">Street Address:</label>
        <textarea id="newAddressStreet" rows="3" required></textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="newAddressCity">City:</label>
          <input type="text" id="newAddressCity" required>
        </div>
        <div class="form-group">
          <label for="newAddressPostal">Postal Code:</label>
          <input type="text" id="newAddressPostal" required>
        </div>
      </div>
      <div class="form-group">
        <label for="newAddressCountry">Country:</label>
        <input type="text" id="newAddressCountry" required>
      </div>
      <div class="form-group">
        <label for="newAddressDefault">
          <input type="checkbox" id="newAddressDefault">
          Set as default address
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Save Address</button>
      <button type="button" class="btn btn-outline" id="cancelAddAddressBtn">Cancel</button>
    </form>
  `;

  document.getElementById('addAddressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, you would save the new address
    showToast('New address added successfully!');
    showUserAddresses();
  });

  document.getElementById('cancelAddAddressBtn').addEventListener('click', function() {
    showUserAddresses();
  });
}
function showUserPaymentMethods() {
  const user = users.user.find(u => u.username === currentUser.username);
  
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="user-form">
      <h2>Payment Methods</h2>
      <div id="userPaymentsContent">
        <div class="payment-methods-list">
          ${user.paymentMethods.map((method, index) => `
            <div class="payment-method-card">
              <div class="payment-method-icon">
                ${method.type === 'credit' ? '<i class="far fa-credit-card"></i>' : ''}
                ${method.type === 'debit' ? '<i class="far fa-credit-card"></i>' : ''}
                ${method.type === 'mobile' ? '<i class="fas fa-mobile-alt"></i>' : ''}
              </div>
              <div class="payment-method-details">
                <h4>${method.type === 'mobile' ? method.provider : method.type.charAt(0).toUpperCase() + method.type.slice(1)}</h4>
                ${method.last4 ? `<p>•••• •••• •••• ${method.last4}</p>` : ''}
              </div>
              <div class="payment-method-actions">
                <button class="btn btn-sm btn-outline edit-payment-btn" data-index="${index}">Edit</button>
                <button class="btn btn-sm btn-danger remove-payment-btn" data-index="${index}">Remove</button>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-primary" id="addPaymentMethodBtn">Add Payment Method</button>
      </div>
    </div>
  `;

  document.getElementById('addPaymentMethodBtn').addEventListener('click', showAddPaymentMethodForm);
  
  document.querySelectorAll('.edit-payment-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      showEditPaymentMethodForm(index);
    });
  });

  document.querySelectorAll('.remove-payment-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      removePaymentMethod(index);
    });
  });
}

function showAddPaymentMethodForm() {
  const contentDiv = document.getElementById('userPaymentsContent');
  contentDiv.innerHTML = `
    <h3>Add Payment Method</h3>
    <form id="addPaymentMethodForm">
      <div class="form-group">
        <label for="paymentType">Payment Type:</label>
        <select id="paymentType" class="form-control">
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="mobile">Mobile Payment</option>
        </select>
      </div>
      <div id="paymentMethodFields">
        <!-- Fields will be dynamically populated based on payment type -->
      </div>
      <button type="submit" class="btn btn-primary">Add Payment Method</button>
      <button type="button" class="btn btn-outline" id="cancelAddPaymentBtn">Cancel</button>
    </form>
  `;

  // Show appropriate fields based on payment type
  document.getElementById('paymentType').addEventListener('change', function() {
    updatePaymentMethodFields(this.value);
  });

  // Initialize fields
  updatePaymentMethodFields(document.getElementById('paymentType').value);

  document.getElementById('addPaymentMethodForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = users.user.find(u => u.username === currentUser.username);
    const paymentType = document.getElementById('paymentType').value;
    
    let newPaymentMethod;
    if (paymentType === 'credit' || paymentType === 'debit') {
      newPaymentMethod = {
        type: paymentType,
        last4: document.getElementById('cardNumber').value.slice(-4),
        expiry: document.getElementById('cardExpiry').value,
        name: document.getElementById('cardName').value
      };
    } else {
      newPaymentMethod = {
        type: 'mobile',
        provider: document.getElementById('mobileProvider').value,
        phone: document.getElementById('mobileNumber').value
      };
    }
    
    user.paymentMethods.push(newPaymentMethod);
    showToast('Payment method added successfully!');
    showUserPaymentMethods();
  });

  document.getElementById('cancelAddPaymentBtn').addEventListener('click', function() {
    showUserPaymentMethods();
  });
}

function updatePaymentMethodFields(paymentType) {
  const fieldsDiv = document.getElementById('paymentMethodFields');
  
  if (paymentType === 'credit' || paymentType === 'debit') {
    fieldsDiv.innerHTML = `
      <div class="form-group">
        <label for="cardName">Cardholder Name:</label>
        <input type="text" id="cardName" required>
      </div>
      <div class="form-group">
        <label for="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" pattern="[0-9]{16}" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="cardExpiry">Expiry Date:</label>
          <input type="text" id="cardExpiry" placeholder="MM/YY" required>
        </div>
        <div class="form-group">
          <label for="cardCvv">CVV:</label>
          <input type="text" id="cardCvv" pattern="[0-9]{3}" required>
        </div>
      </div>
    `;
  } else {
    fieldsDiv.innerHTML = `
      <div class="form-group">
        <label for="mobileProvider">Provider:</label>
        <select id="mobileProvider" class="form-control">
          <option value="bKash">bKash</option>
          <option value="Nagad">Nagad</option>
          <option value="Rocket">Rocket</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mobileNumber">Mobile Number:</label>
        <input type="tel" id="mobileNumber" required>
      </div>
    `;
  }
}

function showEditPaymentMethodForm(index) {
  const user = users.user.find(u => u.username === currentUser.username);
  const method = user.paymentMethods[index];
  
  const contentDiv = document.getElementById('userPaymentsContent');
  contentDiv.innerHTML = `
    <h3>Edit Payment Method</h3>
    <form id="editPaymentMethodForm">
      <input type="hidden" id="paymentIndex" value="${index}">
      <div class="form-group">
        <label>Payment Type:</label>
        <p>${method.type === 'mobile' ? method.provider : method.type.charAt(0).toUpperCase() + method.type.slice(1)}</p>
      </div>
      ${method.type === 'credit' || method.type === 'debit' ? `
        <div class="form-group">
          <label for="editCardName">Cardholder Name:</label>
          <input type="text" id="editCardName" value="${method.name}" required>
        </div>
        <div class="form-group">
          <label>Card Number:</label>
          <p>•••• •••• •••• ${method.last4}</p>
        </div>
        <div class="form-group">
          <label for="editCardExpiry">Expiry Date:</label>
          <input type="text" id="editCardExpiry" value="${method.expiry}" required>
        </div>
      ` : `
        <div class="form-group">
          <label>Mobile Number:</label>
          <p>${method.phone}</p>
        </div>
      `}
      <button type="submit" class="btn btn-primary">Save Changes</button>
      <button type="button" class="btn btn-outline" id="cancelEditPaymentBtn">Cancel</button>
    </form>
  `;

  document.getElementById('editPaymentMethodForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const index = document.getElementById('paymentIndex').value;
    
    if (method.type === 'credit' || method.type === 'debit') {
      method.name = document.getElementById('editCardName').value;
      method.expiry = document.getElementById('editCardExpiry').value;
    }
    
    showToast('Payment method updated successfully!');
    showUserPaymentMethods();
  });

  document.getElementById('cancelEditPaymentBtn').addEventListener('click', function() {
    showUserPaymentMethods();
  });
}

function removePaymentMethod(index) {
  const user = users.user.find(u => u.username === currentUser.username);
  if (confirm('Are you sure you want to remove this payment method?')) {
    user.paymentMethods.splice(index, 1);
    showToast('Payment method removed successfully!');
    showUserPaymentMethods();
  }
}

function showUserReviews() {
  const dashboardMain = document.querySelector('.dashboard-main .container');
  dashboardMain.innerHTML = `
    <div class="user-form">
      <h2>My Reviews</h2>
      <div id="userReviewsContent">
        <div class="review-card">
          <div class="review-header">
            <div class="review-restaurant">Pizza Palace</div>
            <div class="review-rating">★★★★★</div>
          </div>
          <div class="review-date">2023-06-15</div>
          <div class="review-text">
            The pizza was amazing! Will definitely order again.
          </div>
          <div class="review-actions">
            <button class="btn btn-sm btn-outline">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
        <div class="review-card">
          <div class="review-header">
            <div class="review-restaurant">Burger Barn</div>
            <div class="review-rating">★★★★☆</div>
          </div>
          <div class="review-date">2023-06-10</div>
          <div class="review-text">
            Good food but delivery was a bit late.
          </div>
          <div class="review-actions">
            <button class="btn btn-sm btn-outline">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== UTILITY FUNCTIONS ====================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Initialize dashboard based on user type
function initializeDashboard() {
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }

  // Set user info in sidebar
  document.querySelector('.user-info .name').textContent = currentUser.name;
  document.querySelector('.user-info .email').textContent = currentUser.email;
  
  // Show appropriate dashboard based on user type
  const dashboardMain = document.querySelector('.dashboard-main .container');
  
  if (currentUser.username === 'admin') {
    // Admin dashboard
    showPlatformStatistics();
  } else if (users.restaurant.some(r => r.username === currentUser.username)) {
    // Restaurant dashboard
    showRestaurantOrders();
  } else if (users.delivery.some(d => d.username === currentUser.username)) {
    // Delivery dashboard
    showDeliveryAssignments();
  } else {
    // Regular user dashboard
    showUserOrders();
  }
}

// Event listeners for sidebar navigation
document.addEventListener('DOMContentLoaded', function() {
  // Admin buttons
  document.querySelectorAll('.admin-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      handleAdminButtonClick(this.id);
    });
  });
  
  // Restaurant buttons
  document.querySelectorAll('.restaurant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      handleRestaurantButtonClick(this.id);
    });
  });
  
  // Delivery buttons
  document.querySelectorAll('.delivery-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      handleDeliveryButtonClick(this.id);
    });
  });
  
  // User buttons
  document.querySelectorAll('.user-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      handleUserButtonClick(this.id);
    });
  });
  
  // Logout button
  document.getElementById('logoutBtn').addEventListener('click', function() {
    currentUser = null;
    window.location.href = 'login.html';
  });
  
  // Initialize dashboard
  initializeDashboard();
});












// Dashboard form management functions
function showAdminForm() {
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="dashboard-form">
            <h2 class="dashboard-title">Admin Management</h2>
            
            <div class="form-tabs">
                <button class="tab-btn active" data-tab="userManagement">User Management</button>
                <button class="tab-btn" data-tab="restaurantManagement">Restaurant Management</button>
                <button class="tab-btn" data-tab="deliveryManagement">Delivery Management</button>
                <button class="tab-btn" data-tab="promotionManagement">Promotions</button>
            </div>
            
            <div class="tab-content active" id="userManagement">
                <div class="form-section">
                    <h3>User Accounts</h3>
                    <div class="search-filter">
                        <input type="text" id="userSearch" placeholder="Search users...">
                        <button class="btn btn-sm btn-primary">Search</button>
                    </div>
                    <div class="user-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.user.map(user => `
                                    <tr>
                                        <td>${user.username}</td>
                                        <td>${user.name}</td>
                                        <td>${user.email}</td>
                                        <td><span class="status-badge ${user.status}">${user.status}</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-outline edit-user" data-username="${user.username}">Edit</button>
                                            <button class="btn btn-sm btn-danger delete-user" data-username="${user.username}">Delete</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="restaurantManagement">
                <div class="form-section">
                    <h3>Restaurant Accounts</h3>
                    <div class="search-filter">
                        <input type="text" id="restaurantSearch" placeholder="Search restaurants...">
                        <button class="btn btn-sm btn-primary">Search</button>
                    </div>
                    <div class="restaurant-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Restaurant</th>
                                    <th>Owner</th>
                                    <th>Cuisine</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.restaurant.map(restaurant => `
                                    <tr>
                                        <td>${restaurant.restaurant}</td>
                                        <td>${restaurant.name}</td>
                                        <td>${restaurant.cuisine}</td>
                                        <td><span class="status-badge ${restaurant.status}">${restaurant.status}</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-outline edit-restaurant" data-username="${restaurant.username}">Edit</button>
                                            <button class="btn btn-sm btn-danger delete-restaurant" data-username="${restaurant.username}">Delete</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="deliveryManagement">
                <div class="form-section">
                    <h3>Delivery Personnel</h3>
                    <div class="search-filter">
                        <input type="text" id="deliverySearch" placeholder="Search delivery personnel...">
                        <button class="btn btn-sm btn-primary">Search</button>
                    </div>
                    <div class="delivery-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Vehicle</th>
                                    <th>Status</th>
                                    <th>Availability</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.delivery.map(delivery => `
                                    <tr>
                                        <td>${delivery.name}</td>
                                        <td>${delivery.vehicleType}</td>
                                        <td><span class="status-badge ${delivery.status}">${delivery.status}</span></td>
                                        <td>${delivery.availability}</td>
                                        <td>
                                            <button class="btn btn-sm btn-outline edit-delivery" data-username="${delivery.username}">Edit</button>
                                            <button class="btn btn-sm btn-danger delete-delivery" data-username="${delivery.username}">Delete</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="promotionManagement">
                <div class="form-section">
                    <h3>Promotions & Offers</h3>
                    <button class="btn btn-primary" id="addPromotionBtn">Add New Promotion</button>
                    <div class="promotions-list">
                        <div class="promotion-card">
                            <h4>50% OFF First Order</h4>
                            <p>Code: QUICKBITE50</p>
                            <p>Valid until: 2023-12-31</p>
                            <div class="promotion-actions">
                                <button class="btn btn-sm btn-outline">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                        <div class="promotion-card">
                            <h4>Free Delivery Weekend</h4>
                            <p>Code: FREEDEL</p>
                            <p>Valid on weekends</p>
                            <div class="promotion-actions">
                                <button class="btn btn-sm btn-outline">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="back-to-dashboard">
                <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
            </div>
        </div>
    `;
    
    // Add event listeners for tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Add event listeners for back button
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
        e.preventDefault();
        showDashboard();
    });
    
    // Add event listeners for edit/delete buttons
    addAdminFormEventListeners();
}

function showRestaurantForm() {
    const user = getUserData();
    if (!user) return;
    
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="dashboard-form">
            <h2 class="dashboard-title">Restaurant Management</h2>
            
            <div class="form-tabs">
                <button class="tab-btn active" data-tab="restaurantInfo">Restaurant Info</button>
                <button class="tab-btn" data-tab="menuManagement">Menu Management</button>
                <button class="tab-btn" data-tab="restaurantOrders">Orders</button>
                <button class="tab-btn" data-tab="restaurantPromotions">Promotions</button>
            </div>
            
            <div class="tab-content active" id="restaurantInfo">
                <form id="restaurantInfoForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantName">Restaurant Name</label>
                            <input type="text" id="restaurantName" value="${user.restaurant || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="restaurantCuisine">Cuisine Type</label>
                            <input type="text" id="restaurantCuisine" value="${user.cuisine || ''}" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantOwner">Owner Name</label>
                            <input type="text" id="restaurantOwner" value="${user.name || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="restaurantEmail">Email</label>
                            <input type="email" id="restaurantEmail" value="${user.email || ''}" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="restaurantPhone">Phone</label>
                            <input type="tel" id="restaurantPhone" value="${user.phone || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="restaurantHours">Opening Hours</label>
                            <input type="text" id="restaurantHours" value="${user.openingHours || ''}" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="restaurantAddress">Address</label>
                        <textarea id="restaurantAddress" rows="3" required>${user.address || ''}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="restaurantRadius">Delivery Radius (km)</label>
                        <input type="number" id="restaurantRadius" value="${user.deliveryRadius || ''}" min="1" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="restaurantDescription">Description</label>
                        <textarea id="restaurantDescription" rows="3">${user.description || ''}</textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                        <button type="button" class="btn btn-outline" id="cancelRestaurantChanges">Cancel</button>
                    </div>
                </form>
            </div>
            
            <div class="tab-content" id="menuManagement">
                <div class="menu-management">
                    <div class="menu-header">
                        <h3>Menu Items</h3>
                        <button class="btn btn-primary" id="addMenuItemBtn">Add New Item</button>
                    </div>
                    
                    <div class="menu-items">
                        ${user.menu.length > 0 ? 
                            user.menu.map(item => `
                                <div class="menu-item-card" data-id="${item.id}">
                                    <div class="menu-item-img">
                                        <img src="${item.image}" alt="${item.name}">
                                    </div>
                                    <div class="menu-item-info">
                                        <h4>${item.name}</h4>
                                        <p class="menu-item-price">৳${(item.price * exchangeRate).toFixed(2)}</p>
                                        <p class="menu-item-desc">${item.description}</p>
                                    </div>
                                    <div class="menu-item-actions">
                                        <button class="btn btn-sm btn-outline edit-menu-item">Edit</button>
                                        <button class="btn btn-sm btn-danger delete-menu-item">Delete</button>
                                    </div>
                                </div>
                            `).join('') : 
                            '<p>No menu items added yet</p>'}
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="restaurantOrders">
                <div class="orders-management">
                    <div class="orders-header">
                        <h3>Recent Orders</h3>
                        <div class="orders-filter">
                            <select id="ordersFilter">
                                <option value="all">All Orders</option>
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="ready">Ready</option>
                                <option value="delivered">Delivered</option>
                                <option value="canceled">Canceled</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="orders-list">
                        ${orders.filter(o => o.restaurantId === user.username).length > 0 ? 
                            orders.filter(o => o.restaurantId === user.username)
                                .map(order => renderOrderCard(order)).join('') : 
                            '<p>No orders yet</p>'}
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="restaurantPromotions">
                <div class="promotions-management">
                    <div class="promotions-header">
                        <h3>Current Promotions</h3>
                        <button class="btn btn-primary" id="addPromotionBtn">Add New Promotion</button>
                    </div>
                    
                    <div class="promotions-list">
                        ${user.promotions && user.promotions.length > 0 ? 
                            user.promotions.map(promo => `
                                <div class="promotion-card">
                                    <h4>${promo.name}</h4>
                                    <p>${promo.description}</p>
                                    <p>Discount: ${promo.discount}%</p>
                                    <p>Valid until: ${promo.validUntil}</p>
                                    <div class="promotion-actions">
                                        <button class="btn btn-sm btn-outline edit-promotion">Edit</button>
                                        <button class="btn btn-sm btn-danger delete-promotion">Delete</button>
                                    </div>
                                </div>
                            `).join('') : 
                            '<p>No promotions added yet</p>'}
                    </div>
                </div>
            </div>
            
            <div class="back-to-dashboard">
                <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
            </div>
        </div>
    `;
    
    // Add event listeners for tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Add event listeners for back button
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
        e.preventDefault();
        showDashboard();
    });
    
    // Add event listeners for form submission
    document.getElementById('restaurantInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveRestaurantInfo();
    });
    
    // Add event listeners for menu management
    document.getElementById('addMenuItemBtn').addEventListener('click', showMenuItemForm);
    document.querySelectorAll('.edit-menu-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.closest('.menu-item-card').getAttribute('data-id');
            showMenuItemForm(itemId);
        });
    });
    
    document.querySelectorAll('.delete-menu-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.closest('.menu-item-card').getAttribute('data-id');
            deleteMenuItem(itemId);
        });
    });
    
    // Add event listener for orders filter
    document.getElementById('ordersFilter').addEventListener('change', function() {
        filterRestaurantOrders(this.value);
    });
}

function showDeliveryForm() {
    const user = getUserData();
    if (!user) return;
    
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="dashboard-form">
            <h2 class="dashboard-title">Delivery Dashboard</h2>
            
            <div class="form-tabs">
                <button class="tab-btn active" data-tab="deliveryProfile">Profile</button>
                <button class="tab-btn" data-tab="deliveryAssignments">Current Assignments</button>
                <button class="tab-btn" data-tab="deliveryHistory">Delivery History</button>
                <button class="tab-btn" data-tab="deliveryAvailability">Availability</button>
            </div>
            
            <div class="tab-content active" id="deliveryProfile">
                <form id="deliveryProfileForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="deliveryName">Full Name</label>
                            <input type="text" id="deliveryName" value="${user.name || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="deliveryEmail">Email</label>
                            <input type="email" id="deliveryEmail" value="${user.email || ''}" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="deliveryPhone">Phone</label>
                            <input type="tel" id="deliveryPhone" value="${user.phone || ''}" required>
                        </div>
                        <div class="form-group">
                            <label for="deliveryVehicle">Vehicle Type</label>
                            <select id="deliveryVehicle" required>
                                <option value="bike" ${user.vehicleType === 'bike' ? 'selected' : ''}>Bike</option>
                                <option value="car" ${user.vehicleType === 'car' ? 'selected' : ''}>Car</option>
                                <option value="scooter" ${user.vehicleType === 'scooter' ? 'selected' : ''}>Scooter</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="deliveryLicense">License Number</label>
                        <input type="text" id="deliveryLicense" value="${user.licenseNumber || ''}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="deliveryAddress">Address</label>
                        <textarea id="deliveryAddress" rows="3" required>${user.address || ''}</textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                        <button type="button" class="btn btn-outline" id="cancelDeliveryChanges">Cancel</button>
                    </div>
                </form>
            </div>
            
            <div class="tab-content" id="deliveryAssignments">
                <div class="assignments-list">
                    <h3>Current Delivery Assignments</h3>
                    ${orders.filter(o => o.deliveryPerson === user.name && o.status === 'in-progress').length > 0 ? 
                        orders.filter(o => o.deliveryPerson === user.name && o.status === 'in-progress')
                            .map(order => renderDeliveryOrderCard(order)).join('') : 
                        '<p>No current delivery assignments</p>'}
                </div>
            </div>
            
            <div class="tab-content" id="deliveryHistory">
                <div class="history-list">
                    <h3>Delivery History</h3>
                    <div class="history-filter">
                        <select id="historyFilter">
                            <option value="all">All Deliveries</option>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                        </select>
                    </div>
                    
                    ${orders.filter(o => o.deliveryPerson === user.name && o.status === 'delivered').length > 0 ? 
                        orders.filter(o => o.deliveryPerson === user.name && o.status === 'delivered')
                            .map(order => renderDeliveryOrderCard(order)).join('') : 
                        '<p>No delivery history yet</p>'}
                </div>
            </div>
            
            <div class="tab-content" id="deliveryAvailability">
                <form id="availabilityForm">
                    <div class="form-group">
                        <label>Availability Status</label>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="availability" value="available" ${user.availability === 'available' ? 'checked' : ''}>
                                Available
                            </label>
                            <label>
                                <input type="radio" name="availability" value="unavailable" ${user.availability === 'unavailable' ? 'checked' : ''}>
                                Unavailable
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="workingHours">Working Hours</label>
                        <div class="working-hours">
                            <div class="day-hours">
                                <label>Monday</label>
                                <input type="time" id="mondayStart" value="09:00">
                                <span>to</span>
                                <input type="time" id="mondayEnd" value="17:00">
                            </div>
                            <div class="day-hours">
                                <label>Tuesday</label>
                                <input type="time" id="tuesdayStart" value="09:00">
                                <span>to</span>
                                <input type="time" id="tuesdayEnd" value="17:00">
                            </div>
                            <div class="day-hours">
                                <label>Wednesday</label>
                                <input type="time" id="wednesdayStart" value="09:00">
                                <span>to</span>
                                <input type="time" id="wednesdayEnd" value="17:00">
                            </div>
                            <div class="day-hours">
                                <label>Thursday</label>
                                <input type="time" id="thursdayStart" value="09:00">
                                <span>to</span>
                                <input type="time" id="thursdayEnd" value="17:00">
                            </div>
                            <div class="day-hours">
                                <label>Friday</label>
                                <input type="time" id="fridayStart" value="09:00">
                                <span>to</span>
                                <input type="time" id="fridayEnd" value="17:00">
                            </div>
                            <div class="day-hours">
                                <label>Saturday</label>
                                <input type="time" id="saturdayStart" value="10:00">
                                <span>to</span>
                                <input type="time" id="saturdayEnd" value="15:00">
                            </div>
                            <div class="day-hours">
                                <label>Sunday</label>
                                <input type="time" id="sundayStart" value="10:00">
                                <span>to</span>
                                <input type="time" id="sundayEnd" value="15:00">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                        <button type="button" class="btn btn-outline" id="cancelAvailabilityChanges">Cancel</button>
                    </div>
                </form>
            </div>
            
            <div class="back-to-dashboard">
                <a href="#" id="backToDashboard"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
            </div>
        </div>
    `;
    
    // Add event listeners for tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Add event listeners for back button
    document.getElementById('backToDashboard').addEventListener('click', function(e) {
        e.preventDefault();
        showDashboard();
    });
    
    // Add event listeners for form submission
    document.getElementById('deliveryProfileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveDeliveryProfile();
    });
    
    document.getElementById('availabilityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveAvailability();
    });
    
    // Add event listener for history filter
    document.getElementById('historyFilter').addEventListener('change', function() {
        filterDeliveryHistory(this.value);
    });
}

// Helper functions for forms
function renderDeliveryOrderCard(order) {
    return `
        <div class="delivery-order-card">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${order.date}</span>
                <span class="order-status ${order.status}">${order.status.replace('-', ' ')}</span>
            </div>
            <div class="order-details">
                <p><strong>Restaurant:</strong> ${order.restaurantId}</p>
                <p><strong>Customer:</strong> ${order.userId}</p>
                <p><strong>Items:</strong> ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
                <p><strong>Total:</strong> ৳${(order.total * exchangeRate).toFixed(2)}</p>
                <p><strong>Address:</strong> ${users.user.find(u => u.username === order.userId)?.address || 'N/A'}</p>
            </div>
            <div class="order-actions">
                ${order.status === 'in-progress' ? 
                    '<button class="btn btn-sm btn-primary mark-delivered">Mark as Delivered</button>' : 
                    ''}
                <button class="btn btn-sm btn-outline view-details">View Details</button>
            </div>
        </div>
    `;
}

function saveRestaurantInfo() {
    const user = getUserData();
    if (!user || currentUser.type !== 'restaurant') return;
    
    // Update user data
    user.restaurant = document.getElementById('restaurantName').value;
    user.cuisine = document.getElementById('restaurantCuisine').value;
    user.name = document.getElementById('restaurantOwner').value;
    user.email = document.getElementById('restaurantEmail').value;
    user.phone = document.getElementById('restaurantPhone').value;
    user.openingHours = document.getElementById('restaurantHours').value;
    user.address = document.getElementById('restaurantAddress').value;
    user.deliveryRadius = document.getElementById('restaurantRadius').value;
    user.description = document.getElementById('restaurantDescription').value;
    
    showToast('Restaurant information updated successfully!');
    showRestaurantForm(); // Refresh the form
}

function showMenuItemForm(itemId = null) {
    const user = getUserData();
    if (!user || currentUser.type !== 'restaurant') return;
    
    let item = null;
    if (itemId) {
        item = user.menu.find(i => i.id == itemId);
    }
    
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="menu-item-form">
            <h2 class="dashboard-title">${item ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
            
            <form id="menuItemForm">
                <div class="form-group">
                    <label for="itemName">Item Name</label>
                    <input type="text" id="itemName" value="${item ? item.name : ''}" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="itemPrice">Price (USD)</label>
                        <input type="number" id="itemPrice" min="0.01" step="0.01" value="${item ? item.price : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="itemCategory">Category</label>
                        <input type="text" id="itemCategory" value="${item ? item.category : ''}" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="itemDescription">Description</label>
                    <textarea id="itemDescription" rows="3" required>${item ? item.description : ''}</textarea>
                </div>
                
                <div class="form-group">
                    <label for="itemImage">Image URL</label>
                    <input type="text" id="itemImage" value="${item ? item.image : ''}" required>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">${item ? 'Update Item' : 'Add Item'}</button>
                    <button type="button" class="btn btn-outline" id="cancelMenuItem">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('menuItemForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveMenuItem(itemId);
    });
    
    document.getElementById('cancelMenuItem').addEventListener('click', function() {
        showRestaurantForm();
    });
}

function saveMenuItem(itemId) {
    const user = getUserData();
    if (!user || currentUser.type !== 'restaurant') return;
    
    const newItem = {
        id: itemId || Date.now(), // Use existing ID or create new one
        name: document.getElementById('itemName').value,
        price: parseFloat(document.getElementById('itemPrice').value),
        category: document.getElementById('itemCategory').value,
        description: document.getElementById('itemDescription').value,
        image: document.getElementById('itemImage').value
    };
    
    if (itemId) {
        // Update existing item
        const index = user.menu.findIndex(i => i.id == itemId);
        if (index !== -1) {
            user.menu[index] = newItem;
        }
    } else {
        // Add new item
        user.menu.push(newItem);
    }
    
    showToast(`Menu item ${itemId ? 'updated' : 'added'} successfully!`);
    showRestaurantForm(); // Return to menu management
}

function deleteMenuItem(itemId) {
    if (!confirm('Are you sure you want to delete this menu item?')) return;
    
    const user = getUserData();
    if (!user || currentUser.type !== 'restaurant') return;
    
    user.menu = user.menu.filter(item => item.id != itemId);
    showToast('Menu item deleted successfully!');
    showRestaurantForm(); // Refresh the menu
}

function filterRestaurantOrders(filter) {
    const user = getUserData();
    if (!user || currentUser.type !== 'restaurant') return;
    
    let filteredOrders = orders.filter(o => o.restaurantId === user.username);
    
    if (filter !== 'all') {
        filteredOrders = filteredOrders.filter(o => o.status === filter);
    }
    
    document.querySelector('.orders-list').innerHTML = filteredOrders.length > 0 ? 
        filteredOrders.map(order => renderOrderCard(order)).join('') : 
        '<p>No orders match the selected filter</p>';
    
    // Reattach event listeners to order action buttons
    document.querySelectorAll('.order-actions button').forEach(button => {
        button.addEventListener('click', function() {
            const orderId = this.closest('.order-card').querySelector('.order-id').textContent.replace('Order #', '');
            const action = this.textContent.trim().toLowerCase();
            handleOrderAction(orderId, action);
        });
    });
}

function saveDeliveryProfile() {
    const user = getUserData();
    if (!user || currentUser.type !== 'delivery') return;
    
    // Update user data
    user.name = document.getElementById('deliveryName').value;
    user.email = document.getElementById('deliveryEmail').value;
    user.phone = document.getElementById('deliveryPhone').value;
    user.vehicleType = document.getElementById('deliveryVehicle').value;
    user.licenseNumber = document.getElementById('deliveryLicense').value;
    user.address = document.getElementById('deliveryAddress').value;
    
    showToast('Delivery profile updated successfully!');
    showDeliveryForm(); // Refresh the form
}

function saveAvailability() {
    const user = getUserData();
    if (!user || currentUser.type !== 'delivery') return;
    
    // Update user availability
    user.availability = document.querySelector('input[name="availability"]:checked').value;
    // In a real app, you would save the working hours too
    
    showToast('Availability settings updated successfully!');
    showDeliveryForm(); // Refresh the form
}

function filterDeliveryHistory(filter) {
    const user = getUserData();
    if (!user || currentUser.type !== 'delivery') return;
    
    let filteredOrders = orders.filter(o => o.deliveryPerson === user.name && o.status === 'delivered');
    
    // In a real app, you would implement date filtering based on the filter value
    
    document.querySelector('.history-list').innerHTML = `
        <h3>Delivery History</h3>
        <div class="history-filter">
            <select id="historyFilter">
                <option value="all">All Deliveries</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
            </select>
        </div>
        
        ${filteredOrders.length > 0 ? 
            filteredOrders.map(order => renderDeliveryOrderCard(order)).join('') : 
            '<p>No delivery history matches the selected filter</p>'}
    `;
    
    // Reattach event listener for filter
    document.getElementById('historyFilter').addEventListener('change', function() {
        filterDeliveryHistory(this.value);
    });
    
    // Reattach event listeners to order action buttons
    document.querySelectorAll('.mark-delivered').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.closest('.delivery-order-card').querySelector('.order-id').textContent.replace('Order #', '');
            const order = orders.find(o => o.id == orderId);
            if (order) {
                order.status = 'delivered';
                showToast(`Order #${orderId} marked as delivered!`);
                showDeliveryForm(); // Refresh the view
            }
        });
    });
}

function addAdminFormEventListeners() {
    // Edit user buttons
    document.querySelectorAll('.edit-user').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            editUser(username);
        });
    });
    
    // Delete user buttons
    document.querySelectorAll('.delete-user').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            deleteUser(username);
        });
    });
    
    // Edit restaurant buttons
    document.querySelectorAll('.edit-restaurant').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            editRestaurant(username);
        });
    });
    
    // Delete restaurant buttons
    document.querySelectorAll('.delete-restaurant').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            deleteRestaurant(username);
        });
    });
    
    // Edit delivery buttons
    document.querySelectorAll('.edit-delivery').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            editDelivery(username);
        });
    });
    
    // Delete delivery buttons
    document.querySelectorAll('.delete-delivery').forEach(btn => {
        btn.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            deleteDelivery(username);
        });
    });
}

function editUser(username) {
    const user = users.user.find(u => u.username === username);
    if (!user) return;
    
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="user-edit-form">
            <h2 class="dashboard-title">Edit User: ${user.username}</h2>
            
            <form id="editUserForm">
                <div class="form-group">
                    <label for="editUserName">Full Name</label>
                    <input type="text" id="editUserName" value="${user.name}" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editUserEmail">Email</label>
                        <input type="email" id="editUserEmail" value="${user.email}" required>
                    </div>
                    <div class="form-group">
                        <label for="editUserPhone">Phone</label>
                        <input type="tel" id="editUserPhone" value="${user.phone}" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="editUserAddress">Address</label>
                    <textarea id="editUserAddress" rows="3" required>${user.address}</textarea>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editUserStatus">Status</label>
                        <select id="editUserStatus" required>
                            <option value="active" ${user.status === 'active' ? 'selected' : ''}>Active</option>
                            <option value="suspended" ${user.status === 'suspended' ? 'selected' : ''}>Suspended</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editUserPassword">Reset Password</label>
                        <input type="password" id="editUserPassword" placeholder="Leave blank to keep current">
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-outline" id="cancelEditUser">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('editUserForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveUserChanges(username);
    });
    
    document.getElementById('cancelEditUser').addEventListener('click', function() {
        showAdminForm();
    });
}

function saveUserChanges(username) {
    const user = users.user.find(u => u.username === username);
    if (!user) return;
    
    // Update user data
    user.name = document.getElementById('editUserName').value;
    user.email = document.getElementById('editUserEmail').value;
    user.phone = document.getElementById('editUserPhone').value;
    user.address = document.getElementById('editUserAddress').value;
    user.status = document.getElementById('editUserStatus').value;
    
    const newPassword = document.getElementById('editUserPassword').value;
    if (newPassword) {
        user.password = newPassword;
    }
    
    showToast('User changes saved successfully!');
    showAdminForm(); // Return to user management
}

function deleteUser(username) {
    if (!confirm(`Are you sure you want to delete user ${username}? This action cannot be undone.`)) return;
    
    users.user = users.user.filter(u => u.username !== username);
    showToast('User deleted successfully!');
    showAdminForm(); // Refresh the user list
}

function editRestaurant(username) {
    const restaurant = users.restaurant.find(r => r.username === username);
    if (!restaurant) return;
    
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="restaurant-edit-form">
            <h2 class="dashboard-title">Edit Restaurant: ${restaurant.restaurant}</h2>
            
            <form id="editRestaurantForm">
                <div class="form-group">
                    <label for="editRestaurantName">Restaurant Name</label>
                    <input type="text" id="editRestaurantName" value="${restaurant.restaurant}" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editRestaurantOwner">Owner Name</label>
                        <input type="text" id="editRestaurantOwner" value="${restaurant.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="editRestaurantCuisine">Cuisine</label>
                        <input type="text" id="editRestaurantCuisine" value="${restaurant.cuisine}" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editRestaurantEmail">Email</label>
                        <input type="email" id="editRestaurantEmail" value="${restaurant.email}" required>
                    </div>
                    <div class="form-group">
                        <label for="editRestaurantPhone">Phone</label>
                        <input type="tel" id="editRestaurantPhone" value="${restaurant.phone}" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="editRestaurantAddress">Address</label>
                    <textarea id="editRestaurantAddress" rows="3" required>${restaurant.address}</textarea>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editRestaurantStatus">Status</label>
                        <select id="editRestaurantStatus" required>
                            <option value="active" ${restaurant.status === 'active' ? 'selected' : ''}>Active</option>
                            <option value="pending" ${restaurant.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="suspended" ${restaurant.status === 'suspended' ? 'selected' : ''}>Suspended</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editRestaurantPassword">Reset Password</label>
                        <input type="password" id="editRestaurantPassword" placeholder="Leave blank to keep current">
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-outline" id="cancelEditRestaurant">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('editRestaurantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveRestaurantChanges(username);
    });
    
    document.getElementById('cancelEditRestaurant').addEventListener('click', function() {
        showAdminForm();
    });
}

function saveRestaurantChanges(username) {
    const restaurant = users.restaurant.find(r => r.username === username);
    if (!restaurant) return;
    
    // Update restaurant data
    restaurant.restaurant = document.getElementById('editRestaurantName').value;
    restaurant.name = document.getElementById('editRestaurantOwner').value;
    restaurant.cuisine = document.getElementById('editRestaurantCuisine').value;
    restaurant.email = document.getElementById('editRestaurantEmail').value;
    restaurant.phone = document.getElementById('editRestaurantPhone').value;
    restaurant.address = document.getElementById('editRestaurantAddress').value;
    restaurant.status = document.getElementById('editRestaurantStatus').value;
    
    const newPassword = document.getElementById('editRestaurantPassword').value;
    if (newPassword) {
        restaurant.password = newPassword;
    }
    
    showToast('Restaurant changes saved successfully!');
    showAdminForm(); // Return to restaurant management
}

function deleteRestaurant(username) {
    if (!confirm(`Are you sure you want to delete this restaurant? This action cannot be undone.`)) return;
    
    users.restaurant = users.restaurant.filter(r => r.username !== username);
    showToast('Restaurant deleted successfully!');
    showAdminForm(); // Refresh the restaurant list
}

function editDelivery(username) {
    const delivery = users.delivery.find(d => d.username === username);
    if (!delivery) return;
    
    const dashboardMain = document.querySelector('.dashboard-main .container');
    dashboardMain.innerHTML = `
        <div class="delivery-edit-form">
            <h2 class="dashboard-title">Edit Delivery: ${delivery.name}</h2>
            
            <form id="editDeliveryForm">
                <div class="form-group">
                    <label for="editDeliveryName">Full Name</label>
                    <input type="text" id="editDeliveryName" value="${delivery.name}" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editDeliveryEmail">Email</label>
                        <input type="email" id="editDeliveryEmail" value="${delivery.email}" required>
                    </div>
                    <div class="form-group">
                        <label for="editDeliveryPhone">Phone</label>
                        <input type="tel" id="editDeliveryPhone" value="${delivery.phone}" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editDeliveryVehicle">Vehicle Type</label>
                        <select id="editDeliveryVehicle" required>
                            <option value="bike" ${delivery.vehicleType === 'bike' ? 'selected' : ''}>Bike</option>
                            <option value="car" ${delivery.vehicleType === 'car' ? 'selected' : ''}>Car</option>
                            <option value="scooter" ${delivery.vehicleType === 'scooter' ? 'selected' : ''}>Scooter</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editDeliveryLicense">License Number</label>
                        <input type="text" id="editDeliveryLicense" value="${delivery.licenseNumber}" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="editDeliveryAddress">Address</label>
                    <textarea id="editDeliveryAddress" rows="3" required>${delivery.address}</textarea>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="editDeliveryStatus">Status</label>
                        <select id="editDeliveryStatus" required>
                            <option value="active" ${delivery.status === 'active' ? 'selected' : ''}>Active</option>
                            <option value="inactive" ${delivery.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="editDeliveryPassword">Reset Password</label>
                        <input type="password" id="editDeliveryPassword" placeholder="Leave blank to keep current">
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                    <button type="button" class="btn btn-outline" id="cancelEditDelivery">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('editDeliveryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveDeliveryChanges(username);
    });
    
    document.getElementById('cancelEditDelivery').addEventListener('click', function() {
        showAdminForm();
    });
}

function saveDeliveryChanges(username) {
    const delivery = users.delivery.find(d => d.username === username);
    if (!delivery) return;
    
    // Update delivery data
    delivery.name = document.getElementById('editDeliveryName').value;
    delivery.email = document.getElementById('editDeliveryEmail').value;
    delivery.phone = document.getElementById('editDeliveryPhone').value;
    delivery.vehicleType = document.getElementById('editDeliveryVehicle').value;
    delivery.licenseNumber = document.getElementById('editDeliveryLicense').value;
    delivery.address = document.getElementById('editDeliveryAddress').value;
    delivery.status = document.getElementById('editDeliveryStatus').value;
    
    const newPassword = document.getElementById('editDeliveryPassword').value;
    if (newPassword) {
        delivery.password = newPassword;
    }
    
    showToast('Delivery changes saved successfully!');
    showAdminForm(); // Return to delivery management
}

function deleteDelivery(username) {
    if (!confirm(`Are you sure you want to delete this delivery person? This action cannot be undone.`)) return;
    
    users.delivery = users.delivery.filter(d => d.username !== username);
    showToast('Delivery person deleted successfully!');
    showAdminForm(); // Refresh the delivery list
}

// Update the showDashboard function to include these forms
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
    
    // Add click handlers for dashboard cards based on user type
    if (currentUser.type === 'admin') {
        document.getElementById('manageUsers').addEventListener('click', showAdminForm);
        document.getElementById('manageRestaurants').addEventListener('click', showAdminForm);
        document.getElementById('manageDelivery').addEventListener('click', showAdminForm);
    } else if (currentUser.type === 'restaurant') {
        document.getElementById('restaurantMenu').addEventListener('click', showRestaurantForm);
        document.getElementById('restaurantProfile').addEventListener('click', showRestaurantForm);
    } else if (currentUser.type === 'delivery') {
        document.getElementById('deliveryProfile').addEventListener('click', showDeliveryForm);
        document.getElementById('deliveryAvailability').addEventListener('click', showDeliveryForm);
    }
}

// Add these CSS styles to your styles.css file
/*

*/
