# Mini Business Intelligence Tool

## Overview

**Objective:**  
Creation of a fully functional and visually appealing Business Intelligence (BI) tool featuring user authentication, data visualization, and a dashboard displaying meaningful business metrics.

This project demonstrates my skills in:
- Frontend development using Next.js
- UI/UX design with Tailwind CSS
- State management using React hooks or Context API
- Deployment and integration of interactive data visualizations

---

## Features

### 1. User Authentication
- **Login Page:**
  - Users log in with email and password.
  - "Keep me logged in" option included.
  - Auto-logout after 1 minute of inactivity if "Keep me logged in" is not selected.
Test Credentials for Dashboard Access

In the live environment, to ensure that the dashboard remains accessible without a full backend implementation, we have hardcoded four test user credentials. These credentials are used to force authentication so that users can access the dashboard without having to register first. In production, if a user logs in using one of the following credentials, they will be automatically granted access and their corresponding name will be displayed in the dashboard:

    Test User
    Email: test@gmail.com
    Password: 1234567890

    Mano
    Email: mano@gmail.com
    Password: 1234567890

    Beatrice Omor
    Email: beatriceomor@gmail.com
    Password: 1234567890

    BrandDrive Admin
    Email: admin@gmail.com
    Password: 1234567890

    Note:
    In the local development environment, you can register and use any credentials of your choice. Registered users will be stored in the local JSON database (db.json) and authenticated using the standard API flow. The hardcoded credentials are only applied in production (or when the API is not available).


- **Registration Page:**
  - Allows users to sign up using email, password, and full name.
  - Implements form validation and error handling.
- **Protected Routes:**
  - Dashboard access is restricted to authenticated users only.

### 2. Dashboard Page
- **Metrics Summary:**
  - Cards displaying key metrics like Total Users, Active Sessions, and Sales Revenue.
- **Charts:**
  - **Line Chart:** For sales trends.
  - **Bar Chart:** For user growth.
  - **Pie/Donut Chart:** For category distribution.
- **Data Table:**
  - Displays sample data (user or sales data).
  - Supports sorting and filtering.
- **Auto Logout:**
  - Logs out the user after 1 minute of inactivity if "Keep me logged in" is not selected.

### 3. Technical Details
- **Frontend Framework:** Next.js
- **Styling:** Tailwind CSS
- **Data Visualizations:** Implemented using Recharts.
- **Route Protection:** Using Next.js middleware.
- **State Management:** Using React hooks.
- **API Mocking:** API calls are mocked Json server requests.

### 4. Bonus Features (Optional)
- Dark mode support.
- Figma design/wireframes for UI.
- UI animations and transitions.

---

## Project Setup

### Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/gloriousnetworker/my-bi-tool.git
   cd my-bi-tool

    Install dependencies:

npm install

Run the development server:

    npm run dev

    Visit http://localhost:3000 to see the application.

Deployment

The project is deployed on Vercel.
Live Link: https://my-bi-tool.vercel.app/

Design Considerations
    UI/UX:
    The design emphasizes a sleek and modern aesthetic with professional typography, intuitive layouts, and responsive components.
    Animation:
    GSAP and CSS animations are used to create engaging and dynamic interactions.
    State Management & Security:
    Proper state management ensures a seamless user experience, while protected routes and auto-logout enhance security.

Repository & Deployment

    GitHub Repository: https://github.com/gloriousnetworker/my-bi-tool
    Deployed Application: https://my-bi-tool.vercel.app/

Conclusion

This mini BI tool is a demonstration of advanced frontend development techniques, combining powerful data visualizations with modern design and robust user authentication. Feedback and contributions are welcome!