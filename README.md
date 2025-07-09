# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# News Reader - React Web Application

A modern React web application that displays news posts with pagination, view toggle, and feedback form functionality. Built according to the provided wireframe specifications.

## Features

✅ **API Integration**: Fetches posts from JSONPlaceholder API  
✅ **Pagination**: Shows 6 cards per page with navigation controls  
✅ **Card Removal**: Click red X to remove cards with automatic pagination adjustment  
✅ **View Toggle**: Switch between Card and List view modes  
✅ **Loading Screen**: 5-second loading animation on startup  
✅ **Feedback Form**: Modal form with validation and reset functionality  
✅ **State Management**: Redux Toolkit for application state  
✅ **Responsive Design**: Works on desktop and mobile devices  

## Technology Stack

- **React 19** - Frontend framework
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client
- **Vite** - Build tool

## Installation & Setup

1. **Install Dependencies**
   ```bash
   cd news-app
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm run dev
   ```

3. **Build for Production**
   ```bash
   pnpm run build
   ```

## Project Structure

```
news-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # App header with user greeting
│   │   ├── ViewToggle.jsx   # Card/List view toggle
│   │   ├── FeedbackSection.jsx # Feedback button
│   │   ├── PostCard.jsx     # Individual post card
│   │   ├── Pagination.jsx   # Pagination controls
│   │   ├── FeedbackForm.jsx # Modal feedback form
│   │   └── LoadingScreen.jsx # Loading animation
│   ├── store/               # Redux store
│   │   ├── store.js         # Store configuration
│   │   └── postsSlice.js    # Posts state slice
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Key Functionality

### 1. Data Fetching
- Fetches 100 posts from `https://jsonplaceholder.typicode.com/posts`
- Displays loading screen for 5 seconds on startup
- Error handling with retry functionality

### 2. Pagination
- Shows 6 posts per page
- Navigation with Previous/Next buttons
- Direct page number selection
- Automatic page adjustment when posts are removed

### 3. Card Removal
- Red X button on each card
- Removes card from current view
- Automatically shows next available post
- Maintains 6 cards per page when possible

### 4. View Toggle
- Card view: Grid layout with images
- List view: Horizontal layout with smaller images
- Smooth transitions between views

### 5. Feedback Form
- Modal overlay with form fields
- Validation for all required fields
- Form reset on successful submission
- Email and phone number validation

## State Management

The application uses Redux Toolkit with the following state structure:

```javascript
{
  posts: [],              // Original posts from API
  filteredPosts: [],      // Posts after removals
  currentPage: 1,         // Current pagination page
  postsPerPage: 6,        // Posts displayed per page
  loading: false,         // Loading state
  error: null,            // Error messages
  viewMode: 'card',       // 'card' or 'list'
  showFeedbackForm: false // Feedback modal visibility
}
```

## API Endpoints

- **GET** `https://jsonplaceholder.typicode.com/posts` - Fetch all posts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

