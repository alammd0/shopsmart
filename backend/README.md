
# Frontend UI Prompt for ShopSmart E-commerce Platform

This document outlines the requirements for the frontend UI of the ShopSmart E-commerce Platform, based on the existing backend API.

## 1. Core Concepts

The platform supports two main user roles: **Buyer** and **Seller**. There is also an **Admin** role for managing categories and potentially other site-wide settings.

- **Buyers** can browse products, add them to a cart, checkout, manage their address, view order history, and rate/review products.
- **Sellers** can create, update, and delete their own products.
- **Admins** can create and manage product categories.

## 2. Required Pages and Components

### 2.1. Global Components

- **Navbar:** 
  - Should display the logo/brand name.
  - Navigation links: Home, Products.
  - A search bar for products.
  - Conditional UI:
    - If logged out: "Login" and "Register" buttons.
    - If logged in: "Cart" icon (with item count), "Profile" dropdown (with links to Profile and Order History), and a "Logout" button.
- **Footer:** Should contain basic information, links, and copyright details.

### 2.2. Pages

1.  **Home Page (`/`):**
    - Should display a selection of featured products or new arrivals.
    - Could have promotional banners.
    - Should be visually appealing to attract customers.

2.  **Product Listing Page (`/products`):
    - Displays all products in a grid or list format.
    - **Filtering:** Users should be able to filter products by:
        - `category`
        - `maxPrice` / `minPrice`
    - **Sorting:** Users should be able to sort products (`sortBy`).
    - **Searching:** The search bar in the navbar should trigger a search on this page (`search` query param).
    - Each product card should display the product image, `name`, `prices`, and a button to "View Details" or "Add to Cart".

3.  **Product Detail Page (`/products/:id`):
    - Displays all details for a single product: `name`, `description`, `prices`, `imageUrl` (carousel for multiple images), `stock`.
    - "Add to Cart" button.
    - **Ratings and Reviews Section:**
        - Display average rating and all `reviews` for the product.
        - A form for logged-in users to submit a `rating` and `review`.

4.  **Login Page (`/login`):
    - A form with `email` and `password` fields.
    - On successful login, the user should be redirected (e.g., to the home page or their profile) and the auth token stored securely (e.g., in localStorage or cookies).

5.  **Registration Page (`/register`):
    - A form with `name`, `email`, `password`, and a selector for `role` ("Buyer" or "Seller").

6.  **Shopping Cart Page (`/cart`):
    - Lists all products in the user's cart.
    - For each item, display product details (image, name, price) and a "Remove from Cart" button.
    - Display the `totalPrice`.
    - "Proceed to Checkout" button.

7.  **Checkout Page (`/checkout`):
    - A multi-step form for order placement.
    - **Shipping Address:** A form to collect/update the user's address (`street`, `city`, `state`, `zip`, `country`).
    - **Order Summary:** Display items to be purchased and total price.
    - **Payment:** A mock payment section (as there is no payment gateway integration in the backend).
    - "Place Order" button.

8.  **User Profile Page (`/profile`):
    - Display user information: `name`, `email`, `phone`.
    - A form to update this information.
    - A section to manage the user's shipping `address`.

9.  **Order History Page (`/orders`):
    - Lists all orders placed by the user.
    - Each order should show the `status` ("Pending", "Delivered", "Cancelled"), `totalPrice`, and items.
    - A link to view the `getSingleOrder` details.

10. **Seller Dashboard (`/dashboard`):
    - Only accessible to users with the "Seller" role.
    - A section to "Create New Product" with a form for `name`, `description`, `prices`, `category`, `stock`, `discount`, and `images` upload.
    - A list of products created by the seller, with options to "Edit" or "Delete" each product.

11. **Admin Dashboard (`/admin`):
    - Only accessible to users with the "Admin" role.
    - A form to create a new `categoryName`.
    - A list of all existing categories.
    - A view of all orders in the system, with the ability to update order `status`.

## 3. API Integration Details

- **Authentication:** All protected routes require an `Authorization` header with the JWT token.
- **Base URL:** Assume all API calls are prefixed (e.g., `/api`).

### Endpoints to Use:

- **Auth & Users:**
  - `POST /auth/register` (for new user/seller registration)
  - `POST /auth/login` (for user/seller/admin login)
  - `GET /auth/profile` (to fetch logged-in user data)
  - `PUT /auth/profile` (to update user data)
  - `PUT /auth/update-address` (to update user address)

- **Products:**
  - `GET /products` (to fetch all products with filtering/sorting/pagination)
  - `GET /products/:id` (to fetch a single product)
  - `POST /products` (for sellers to create products, requires multipart/form-data for images)
  - `PUT /products/:id` (for sellers to update their products)
  - `DELETE /products/:id` (for sellers to delete their products)

- **Categories:**
  - `GET /category` (to fetch all categories for filtering)
  - `POST /category` (for admins to create new categories)

- **Cart:**
  - `GET /cart` (to get the user's cart)
  - `POST /cart/add` (to add a product to the cart, body: `{ "productId": "..." }`)
  - `DELETE /cart/remove` (to remove a product, body: `{ "productId": "..." }`)

- **Orders:**
  - `POST /orders` (to create an order, body: `{ "product": [...] }`)
  - `GET /orders` (for users to see their order history, for admins to see all orders)
  - `GET /orders/:id` (to see a single order's details)
  - `PUT /orders/:id` (for sellers/admins to update order status, body: `{ "status": "..." }`)
  - `DELETE /orders/:id` (to cancel an order)

- **Ratings & Reviews:**
  - `POST /ratingAndReview` (to submit a review, body: `{ "productId": "...", "rating": "...", "review": "..." }`)
  - `GET /ratingAndReview` (to get all reviews, can be filtered by product on the frontend)

- **Admin:**
  - `POST /admin/register`
  - `POST /admin/login`
  - `GET /admin/profile`
