# Post-Disaster Community Health and Medical Supply Chain Platform



### Live Link
[Post-Disaster Community Health and Medical Supply Chain Platform](https://aid-connect.netlify.app)

### Technology Stack
- **React**
- **Redux**
- **RTK Query**
- **React Router DOM**

### Project Overview
The project aims to develop a comprehensive Post-Disaster Community Health and Medical Supply Chain Platform using React, Redux for state management, RTK Query for efficient data fetching, and React Router DOM for navigation. This platform will serve as a vital hub for coordinating and managing health and medical supplies in post-disaster scenarios, ensuring efficient distribution and accessibility.

### Key Features

#### Home / Landing Page / Root Page [Public]
- **Header / Navbar:**
  - **Unauthenticated:**
    - **Brand Logo:** A visually appealing logo representing the platform's identity.
    - **All Supplies:** A navigation link to view all supply posts.
    - **Login Button:** Allows users to log in to their accounts.
  - **Authenticated:**
    - **Brand Logo:** Consistent branding element linking back to the home page.
    - **All Supplies:** Access to view all supply posts.
    - **Dashboard:** Access to the user's dashboard for managing supplies.
    - **Logout Button:** Enables users to log out of their accounts.
- **Banner / Hero Section:** A visually striking section showcasing key information about the platform's mission and goals.
- **Supply Posts:** 6 Supply Posts displayed in card format, providing a snapshot of each supply.
  - **Each Card will show:**
    - **Image:** Visual representation of the supply.
    - **Title:** Concise title summarizing the supply post.
    - **Category:** Categorization of the supply (e.g., Medical Supplies, First Aid Kits, Medications).
    - **Amount:** The quantity or monetary value of the supply.
    - **View Detail Button:** Allows users to explore more details about the supply.
- **View All Button:** Allows users to access the All Supplies Page (/supplies), displaying a comprehensive list of supply posts related to health and medical supplies. (at least 9-12 posts)
- **Top 6 Provider Testimonials:** Engaging section featuring static data of provider testimonials with animations and sliders for enhanced user experience.
- **Gallery / Carousel:** Dynamic carousel showcasing photos of health and medical supplies donations and humanitarian works, fostering transparency and trust among users.
- **Summary / About Us / Who are we / What we do:** An informative section providing users with detailed insights into the platform's mission, objectives, and impact, focusing on post-disaster community health and medical supply chain management.
- **2 More Unique Sections:** Addition of two unique sections relevant to the post-disaster health and medical supply chain niche, such as emergency response protocols, healthcare provider testimonials, or disaster preparedness resources.
- **Footer:** Inclusive footer section featuring contact information, social media links, and relevant resources for further engagement and support.

#### All Supplies Page (/supplies) [Public Route]
- **Grid of Card View of the Supply posts:** Organized grid layout presenting supply posts related to health and medical supplies in a visually appealing format.
  - **Each Card will show:**
    - **Image:** Visual representation of the supply.
    - **Title:** Concise title summarizing the supply post.
    - **Category:** Categorization of the supply (e.g., Medical Supplies, First Aid Kits, Medications).
    - **Amount:** The quantity or monetary value of the supply.
    - **View Detail button:** Enables users to navigate to the supply details page (/supplies/:id).

#### Supply Detail Page (/supplies/:id) [Public Route]
- **Standardized Supply Detail Format:** Detailed presentation of a supply post related to health and medical supplies, adhering to a standardized format.
  - **The information displayed includes:**
    - **Image:** Visual representation of the supply.
    - **Title:** Concise title summarizing the supply.
    - **Category:** Categorization of the supply (e.g., Medical Supplies, First Aid Kits, Medications).
    - **Amount:** The quantity or monetary value of the supply.
    - **Description:** A comprehensive description providing additional context and details about the supply.
    - **Donate Now Button:** Initiates the donation process, opening a confirmation modal with relevant user information and supply data. Upon confirmation, redirects users to the dashboard homepage to display the pie chart statistics.

#### Login / Register Page [Public Routes]
- **Register Page (/register):** User-friendly registration form enabling users to create new accounts with essential information such as:
  - User Name
  - Email
  - Password
- **Login Page (/login):** Secure login interface allowing users to access their accounts by providing valid credentials (email and password).

#### Dashboard [Private Routes]
- **Dashboard Home Page (/dashboard):** Dynamic dashboard interface featuring essential elements for managing user supplies and accessing statistical insights.
  - **PieChart on Supplies Calculations:** Visual representation of supply statistics with dynamic data retrieved from the backend, facilitating informed decision-making and strategic planning.
- **All Supply Posts Page (Nested) (/dashboard/supplies):** A comprehensive view of all supply posts in a table format, displaying key details such as:
  - Title
  - Category
  - Amount
  - **Action Buttons:**
    - **Edit:** Opens a modal containing the details of the supply in an editable form for updates.
    - **Delete:** Triggers a confirmation modal for deleting the supply post upon user confirmation. Upon confirmation, the supply post will be permanently removed from the platform.
  - **Add Supply Post Button:** Directs users to the Create Supply Post Page (/dashboard/create-supply). Enables users to contribute new supply posts related to health and medical supplies.
- **Create Supply Post Page (/dashboard/create-supply):** Interactive form allowing users to create new supply posts with the following data structure:
  - Image
  - Category
  - Title
  - Amount
  - Description

### Animations
- Implementation of 3-4 animations using the Framer Motion library to enhance the visual appeal and interactivity of the platform.

### Detailed Implementation Guidelines
- **React:** Used for building the user interface.
- **Redux:** Used for state management.
- **RTK Query:** Used for efficient data fetching.
- **React Router DOM:** Used for navigation between different pages.

### How to Run the Project
1. **Clone the repository:**
   ```bash
   git clone https://github.com/jobayermannan/AC-7-Aid-Connect-Client.git
   cd your-repo-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build the project for production:**
   ```bash
   npm run build
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

### Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contact
For any inquiries or feedback, please contact [oxobayer777@gmail.com](mailto:your-email@example.com).

---

This README provides a comprehensive overview of the Post-Disaster Community Health and Medical Supply Chain Platform, including its key features, technology stack, and detailed implementation guidelines.