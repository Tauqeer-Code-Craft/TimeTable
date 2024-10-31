# Timetable Generator

## Overview
The Timetable Generator is a web application designed to help users create and manage their weekly schedules efficiently. It allows users to input their classes, appointments, and other commitments, generating a clear and organized timetable.

## Features
- User registration and login
- Create, edit, and delete timetable entries
- Responsive design for desktop and mobile
- Email notifications for important events
- User-friendly interface

## Technologies Used
- React
- Supabase (for authentication and database)
- Tailwind CSS (for styling)
- Resend (for email notifications)

## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm (Node package manager)
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/timetable-generator.git
Navigate to the project directory:


cd timetable-generator
Install the dependencies:

npm install
Set up your environment variables: Create a .env file in the root of the project and add your Supabase and Resend credentials:


VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RESEND_API_KEY=your_resend_api_key
Start the development server:


npm run dev
Open your browser and go to http://localhost:5173.

Usage
Register for a new account or log in with your existing credentials.
Add your classes and appointments to generate your timetable.
Customize your timetable as needed, and receive email notifications for important events.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Supabase for the backend services.
Resend for email notifications.
Tailwind CSS for styling.
