# Jersify - No.1 Jersey Shop
A modern e-commerce platform for football/soccer jersey enthusiasts. Browse, search, and purchase authentic club and national team jerseys with an intuitive shopping experience.

## Getting Started
Instructions on how to get a copy of the project up and running on your local machine.

### Prerequisites
This project requires the following to run:
 - **Node.js** (v14 or higher) - JavaScript runtime environment
 - **npm** (v6 or higher) - Node package manager
 - **Modern Web Browser** - Chrome, Firefox, Safari, or Edge for viewing the application
 - **Git** - For version control and cloning the repository

### Installing
A step-by-step guide on how to install the project:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jeruelrichard/Jersify.git
   cd Jersify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase configuration**
   - Create a `jsFiles/firebase-config.js` file with your Firebase project credentials
   - Configure your Firebase authentication settings

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```
   This generates an optimized production build in the `dist` folder.

## Usage
Jersify is an e-commerce platform with the following features:

### Key Features
- **Browse Jerseys**: Explore our catalog of club and national team jerseys
- **Product Search**: Use the search bar to find specific jerseys by team name or type
- **Filter by Category**: Filter jerseys by type (Club, National, Player)
- **Product Details**: View detailed information about each jersey including price, description, and images
- **Shopping Cart**: Add items to cart and manage quantities with different size options (Male/Female)
- **Responsive Design**: Optimized for desktop and mobile devices

### Pages
- **Landing Page** (`index.html`) - Featured products and main entry point
- **All Products** (`htmlFiles/allProducts.html`) - Complete product catalog with pagination
- **Product Detail** (`htmlFiles/product.html`) - Detailed view of individual jerseys
- **Shopping Cart** (`htmlFiles/cart.html`) - Review and manage cart items
- **User Account** (`htmlFiles/user.html`) - User profile and authentication
- **Contact** (`htmlFiles/contact.html`) - Contact form and customer support

## Project Structure
```
Jersify/
├── index.html                 # Landing page
├── htmlFiles/                 # Additional page templates
│   ├── allProducts.html
│   ├── cart.html
│   ├── contact.html
│   ├── product.html
│   └── user.html
├── jsFiles/                   # Core JavaScript functionality
│   ├── firebase-config.js     # Firebase authentication setup
│   ├── productsData.js        # Product catalog database
│   ├── cart.js                # Shopping cart logic
│   ├── search.js              # Search functionality
│   ├── productPages.js        # Product page rendering
│   ├── productsDetail.js      # Product detail page logic
│   ├── script.js              # General utilities and theme
│   └── index.js               # Landing page logic
├── jsFiles2/
│   └── user.js                # User authentication logic
├── public/
│   ├── fonts/                 # Font files
│   ├── cssFiles/              # Stylesheets
│   │   ├── base.css           # Base styles
│   │   ├── landing-page.css
│   │   ├── allProducts.css
│   │   ├── product.css
│   │   ├── cart.css
│   │   ├── user.css
│   │   └── variables.css      # CSS variables and themes
│   └── images/                # Product and asset images
├── vite.config.js             # Vite build configuration
├── firebase.json              # Firebase configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Technology Stack
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Build Tool**: Vite 7.3.1
- **Authentication**: Firebase Authentication (Google OAuth)
- **State Management**: Browser localStorage for cart and preferences
- **Styling**: CSS with custom variables and responsive design
- **Icons**: Font Awesome 6.x

## Features in Detail

### Product Catalog
- 40+ jerseys from top clubs (PSG, Barcelona, Inter Miami) and national teams (Nigeria, etc.)
- Organized by type: Club, National, Player jerseys
- Paginated product display (4 items per page)
- Product filtering and sorting

### Shopping Cart
- Add/remove items with size selection
- Quantity adjustment
- Real-time total calculation
- Persistent cart using localStorage
- Cart summary on dedicated page

### Search & Discovery
- Real-time search suggestions
- Filter by team and jersey type
- Related products display on product pages

### User Experience
- Responsive design for mobile and desktop
- Dark/Light theme toggle
- Clean, intuitive navigation
- Fast loading with Vite optimization

## Contributing
Contributions are welcome! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request with a clear description of changes

Please ensure your code follows the existing style and includes appropriate comments.

## License
This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- Font Awesome for the icon library
- Firebase for authentication infrastructure
- Vite for the blazing-fast build tool
- All jersey manufacturers and clubs for inspiring this project
