# RideGo : Ride Management App

## Project Overview

**RideGo** is a full-stack ride booking platform built for **Riders**, **Drivers**, and **Admins**, offering a seamless and secure experience similar to **Uber** or **Pathao**. 

### Key Features:
- **Riders** can:
  - Request rides and track them in real-time.
  - View ride history and receive invoices via email.
  - Access a detailed ride summary with expenses.
  - Send SOS alerts with real-time location during rides.
- **Drivers** can:
  - Manage availability and accept/reject ride requests.
  - Update ride statuses and monitor earnings.
  - View detailed earnings reports and analytics.
- **Admins** have full oversight:
  - Manage users, rides, and view analytics.
  - Control ride management, including blocking/suspending users.

### Tech Stack:
**Frontend**:
- **Framework & Language**: React, TypeScript
- **State Management**: Redux Toolkit, RTK Query
- **Styling & UI**: Tailwind CSS, Radix UI, ShadCN/UI, clsx
- **Maps & Geolocation**: React-Leaflet, Leaflet, Leaflet Routing Machine
- **Forms & Validation**: React Hook Form, Zod
- **Charts & Data Visualization**: Recharts, react-countup
- **Other Utilities**: Axios, date-fns, Lucide React icons

**Backend**:
- **Framework & Runtime**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs, passport




**Dev Tools & Build**:
- **Module Bundler**: Vite
- **Linting**: ESLint
- **Testing**: Built-in Node.js debugging

**Deployment**:
- **Frontend**: Vercel
- **Backend**: Vercel
- **Database**: MongoDB Atlas


## Project Features

### 1. Public Pages:
- **Homepage**: Includes hero section, how-it-works, service highlights, reviews, etc.
- **About Us**: Company background and team profiles.
- **Features Page**: Highlighting features for Riders and Drivers.
- **Contact Page**: Includes validated form for inquiries.
- **FAQ**: Searchable list of common questions.

### 2. Authentication:
- **JWT-based login**: Secure login and registration for Riders, Drivers, and Admins.
- **Role-based UI**: Different UI layouts based on user roles.
- **Suspended Drivers**: Dedicated page for suspended drivers with instructions.

### 3. Rider Features:
- **Request a Ride**: Riders can request rides by selecting from the map.
- **Cancel Ride**: Riders can cancel up to 3 rides per day before the ride starts.
- **Live Ride Tracking**: Real-time tracking of drivers with map updates.
- **SOS Button**: Sends real-time location for emergencies.
- **Analytics & Ride History**: Riders can see detailed reports, view invoices, and manage their profile.
- **Payment**: Options for SSLCommerz (online) and offline payments.
- **Rating & Feedback**: Riders can rate drivers after the ride.

### 4. Driver Features:
- **Go Online/Offline**: Drivers can toggle their availability.
- **Accept/Reject Ride Requests**: Manage incoming ride requests.
- **Ride Status Updates**: Update ride status (pickup, started, completed).
- **Earnings Report**: View detailed earnings (daily, weekly, monthly).
- **Profile Management**: Drivers can update their profile (name, vehicle details, etc.).
- **Ride History**: View past rides, invoices, and payment details.

### 5. Admin Features:
- **Manage Users**: Block/unblock users, with pagination, sorting, and filtering.
- **Driver Management**: Suspend/approve drivers, with detailed reports.
- **Ride Management**: View ride history, invoices, and all transactions.
- **Analytics Dashboard**: Monitor platform performance with charts and detailed income/expense reports.

## Special Notes:
- **Real-time Location**: Please enable location services on your device to use real-time tracking.
- **Third-party Cookies**: Ensure third-party cookies are allowed in your browser for token storage.
- **Driver Approval**: If you're registering as a driver, wait for approval before logging in to access driver features.

## Logical Cores:
- **1 km radius filter**: Drivers only see rides within a 1 km radius of their location. Riders see only drivers within 1 km.
- **Base Fare**: 100 Taka per km. 80% of the fare goes to the driver, and 10% is added to the admin’s account.

## Credentials:
### Admin Login:
- **Email**: super@gmail.com  
- **Password**: 12345678

### Rider Login:
- **Email**: demo@gmail.com  
- **Password**: Demo12345@


