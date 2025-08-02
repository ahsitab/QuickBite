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
        status: "pending",
        date: new Date().toISOString().split('T')[0],
        deliveryPerson: ""
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
                (o.status === 'in-progress' || o.status === 'pending')).slice(0, 5);
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
                ${order.status === 'pending' ? '<button class="btn btn-sm btn-outline">Assign Delivery</button>' : ''}
            `;
            break;
            
        case 'restaurant':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === 'pending' ? '<button class="btn btn-sm btn-outline">Accept Order</button>' : ''}
                ${order.status === 'in-progress' ? '<button class="btn btn-sm btn-outline">Mark as Ready</button>' : ''}
            `;
            break;
            
        case 'delivery':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === 'pending' ? '<button class="btn btn-sm btn-outline">Pick Up Order</button>' : ''}
                ${order.status === 'in-progress' ? '<button class="btn btn-sm btn-outline">Mark as Delivered</button>' : ''}
            `;
            break;
            
        case 'user':
            actionsHTML = `
                <button class="btn btn-sm btn-primary">View Details</button>
                ${order.status === 'delivered' ? '<button class="btn btn-sm btn-outline">Rate Order</button>' : ''}
                ${order.status === 'pending' ? '<button class="btn btn-sm btn-danger">Cancel Order</button>' : ''}
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
            order.status = 'in-progress';
            showToast(`Order #${orderId} has been accepted`);
            showDashboard();
            break;
        case 'mark as ready':
            order.status = 'ready-for-pickup';
            showToast(`Order #${orderId} is ready for pickup`);
            showDashboard();
            break;
        case 'pick up order':
            order.status = 'in-progress';
            order.deliveryPerson = currentUser.username;
            showToast(`You have picked up order #${orderId}`);
            showDashboard();
            break;
        case 'mark as delivered':
            order.status = 'delivered';
            showToast(`Order #${orderId} has been delivered`);
            showDashboard();
            break;
        case 'rate order':
            alert(`Opening rating dialog for order #${orderId}`);
            break;
        case 'cancel order':
            if (confirm('Are you sure you want to cancel this order?')) {
                order.status = 'canceled';
                showToast(`Order #${orderId} has been canceled`);
                showDashboard();
            }
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

// Add this code to your existing script.js file, preferably at the end

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

