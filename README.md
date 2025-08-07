# CareAfrica - Wildlife Conservation Education Platform

A full-stack web application for wildlife conservation education, featuring online courses, community forums, and payment processing. Built with Django REST API and React frontend, using Cloud Firestore as the database.

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn
- Google Cloud Project with Firestore enabled

### Environment Setup

1. **Create a `.env` file** in the project root with the following variables:

```bash
# Django Settings
DJANGO_SECRET_KEY=your-secret-key-here-change-this-in-production
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# Database Settings
USE_FIRESTORE=True
FIRESTORE_PROJECT_ID=your-firebase-project-id
FIREBASE_SERVICE_ACCOUNT_PATH=path/to/serviceAccountKey.json

# Email Settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# JWT Settings
JWT_ACCESS_TOKEN_LIFETIME=60
JWT_REFRESH_TOKEN_LIFETIME=1440
```

### Firebase/Firestore Setup

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Enable Firestore Database

2. **Get Service Account Key:**
   - Go to Project Settings → Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Place it in your project (e.g., `backend/serviceAccountKey.json`)
   - Update `FIREBASE_SERVICE_ACCOUNT_PATH` in your `.env` file

3. **Enable Firestore:**
   - Go to Firestore Database in Firebase Console
   - Click "Create database"
   - Choose "Start in test mode" for development

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

3. **Run database migrations (if using SQLite fallback):**
```bash
python manage.py migrate
```

4. **Create a superuser:**
```bash
python manage.py createsuperuser
```

5. **Start the Django server:**
```bash
python manage.py runserver
```

The backend will be available at: http://localhost:8000

### Frontend Setup

1. **Install Node.js dependencies:**
```bash
npm install
```

2. **Start the React development server:**
```bash
npm start
```

The frontend will be available at: http://localhost:3000

## 📁 Project Structure

```
WildlifEDU-Website-main/
├── backend/                 # Django backend
│   ├── careafrica/         # Main Django project
│   │   ├── firebase_config.py  # Firebase configuration
│   │   ├── firestore_db.py     # Firestore database backend
│   │   └── settings.py         # Django settings
│   ├── users/              # User management app
│   ├── courses/            # Course management app
│   ├── forum/              # Community forum app
│   ├── payments/           # Payment processing app
│   ├── requirements.txt    # Python dependencies
│   └── manage.py          # Django management script
├── frontend/               # React frontend
│   ├── build/             # Built React application
│   └── node_modules/      # Node.js dependencies
├── .env                   # Environment variables (create this)
├── package.json           # Node.js dependencies
└── README.md             # This file
```

## 🔧 Features

### Backend (Django + Firestore)
- **User Management:** Registration, authentication, profiles
- **Course System:** Wildlife conservation courses with enrollment
- **Forum:** Community discussions and comments
- **Payment Processing:** Stripe integration for course purchases
- **API Documentation:** Swagger/OpenAPI documentation
- **Cloud Database:** Firestore for scalable data storage

### Frontend (React)
- **Modern UI:** Responsive design with wildlife theme
- **Course Browsing:** View and enroll in courses
- **Community Forum:** Participate in discussions
- **Payment Integration:** Secure payment processing
- **User Dashboard:** Manage profile and enrollments

## 🌐 API Endpoints

### Authentication
- `POST /api/v1/users/register/` - User registration
- `POST /api/v1/users/login/` - User login (JWT)
- `GET /api/v1/users/profile/` - Get user profile
- `PUT /api/v1/users/profile/update/` - Update user profile

### Courses
- `GET /api/v1/courses/` - List all courses
- `GET /api/v1/courses/{id}/` - Get course details
- `POST /api/v1/courses/enroll/{course_id}/` - Enroll in course
- `GET /api/v1/courses/my-courses/` - Get user's enrolled courses

### Forum
- `GET /api/v1/forum/posts/` - List forum posts
- `GET /api/v1/forum/posts/{id}/` - Get post details
- `POST /api/v1/forum/posts/create/` - Create new post
- `POST /api/v1/forum/comments/create/` - Add comment

### Payments
- `POST /api/v1/payments/create-payment-intent/` - Create payment intent
- `PUT /api/v1/payments/confirm-payment/` - Confirm payment
- `GET /api/v1/payments/payment-history/` - Get payment history

## 🔐 Security

- JWT-based authentication
- CORS configuration for frontend-backend communication
- Environment variable management for sensitive data
- Stripe secure payment processing
- Firestore security rules

## 🚀 Deployment

### Production Considerations
1. Set `DJANGO_DEBUG=False` in production
2. Configure Firestore security rules
3. Use production Stripe keys
4. Set up proper email settings
5. Configure HTTPS
6. Set up proper CORS settings
7. Use production Firebase project

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email: contact@careafrica.com
