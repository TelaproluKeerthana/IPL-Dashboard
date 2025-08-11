# IPL Dashboard - Enhanced Version

A comprehensive analytics platform for Indian Premier League cricket data with modern UI/UX and advanced features.

## 🚀 New Features

### ✨ Enhanced User Interface

* **Modern Navigation**: Responsive navigation bar with smooth animations and theme toggle
* **Beautiful Animations**: Framer Motion animations throughout the application
* **Responsive Design**: Optimized for mobile, tablet, and desktop devices
* **Loading States**: Skeleton loading components for better UX
* **Interactive Elements**: Hover effects and smooth transitions
* **Dark/Light Theme**: Complete theme support with CSS variables

### 📊 Advanced Analytics

* **Statistics Dashboard**: Comprehensive team performance metrics with interactive charts
* **Interactive Charts**: Bar charts, pie charts using Recharts and react-minimal-pie-chart
* **Team Leaderboard**: Sortable rankings by wins, win rate, and matches
* **Performance Comparison**: Detailed team comparison tables
* **Real-time Data**: Live statistics and metrics from IPL database

### 🎯 Key Features

* **Team Performance**: Detailed analysis of each team's performance
* **Match History**: Complete match details and results
* **Win/Loss Analysis**: Visual representation of team performance
* **Year-wise Filtering**: Filter data by specific years
* **Mobile-First Design**: Fully responsive across all devices
* **Theme Support**: Dark and light theme with automatic switching

## 🛠️ Technology Stack

### Frontend

* **React 19**: Latest React with modern hooks
* **SCSS**: Advanced styling with responsive design and CSS variables
* **Framer Motion**: Smooth animations and transitions
* **Recharts**: Interactive data visualizations (Bar charts, Pie charts)
* **react-minimal-pie-chart**: Additional pie chart functionality
* **React Icons**: Beautiful icon library
* **React Router**: Client-side routing
* **Context API**: Theme management and state management
* **react-loading-skeleton**: Loading state components

### Backend

* **Spring Boot**: Robust Java framework
* **HSQLDB**: In-memory Java database
* **JPA/Hibernate**: Object-relational mapping
* **RESTful APIs**: Clean API design
* **Batch Processing**: Efficient data processing for match data

## 📱 Responsive Design

The application is fully responsive and optimized for:

* **Mobile**: 320px - 768px
* **Tablet**: 768px - 1024px
* **Desktop**: 1024px+

## 🎨 UI Components

### Navigation

* Sticky navigation bar with gradient background
* Mobile hamburger menu
* Active page indicators
* Smooth transitions
* Theme toggle button

### Cards & Tiles

* Modern card design with shadows
* Hover effects and animations
* Responsive grid layouts
* Interactive team tiles
* Theme-aware styling

### Charts & Visualizations

* Bar charts for performance comparison
* Pie charts for win/loss distribution
* Responsive chart containers
* Interactive tooltips
* Theme-compatible colors

## 📊 Data Features

### Team Analytics

* Total matches played
* Win/loss statistics
* Win rate calculations
* Performance trends
* Historical data analysis

### Match Details

* Match results and scores
* Team performance in specific matches
* Historical match data
* Year-wise filtering
* Detailed match cards

### Leaderboards

* Sortable team rankings
* Multiple sorting criteria (wins, win rate, matches)
* Performance badges
* Achievement indicators
* Top performer highlights

## 🚀 Getting Started

### Prerequisites

* Java 17 or higher
* Node.js 16 or higher
* Maven (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TelaproluKeerthana/IPL-Dashboard.git
   cd ipldashboard
   ```

2. **Backend Setup**
   ```bash
   # Navigate to project root
   cd src/main/java/com/ipl/dashboard/ipldashboard
   
   # Run with Maven
   mvn spring-boot:run
   ```

3. **Frontend Setup**
   ```bash
   # Navigate to frontend directory
   cd src/frontend
   
   # Install dependencies
   npm install
   
   # Start development server
   npm start
   ```

4. **Environment Configuration**
   Create `.env` file in `src/frontend/`:
   ```
   REACT_APP_API_ROOT_URL=http://localhost:8080
   REACT_APP_DATA_END_YEAR=2024
   ```

## 📁 Project Structure

```
ipldashboard/
├── src/
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Navigation.js
│   │   │   │   ├── TeamTile.js
│   │   │   │   ├── MatchDetailCard.js
│   │   │   │   ├── MatchSmallCard.js
│   │   │   │   ├── ThemeToggle.js
│   │   │   │   └── YearSelector.js
│   │   │   ├── pages/
│   │   │   │   ├── HomePage.js
│   │   │   │   ├── StatsPage.js
│   │   │   │   ├── LeaderboardPage.js
│   │   │   │   ├── TeamPage.js
│   │   │   │   ├── MatchPage.js
│   │   │   │   └── AboutPage.js
│   │   │   ├── context/
│   │   │   │   └── ThemeContext.js
│   │   │   └── App.js
│   │   └── package.json
│   └── main/
│       ├── java/
│       │   └── com/ipl/dashboard/
│       │       ├── controller/
│       │       │   ├── TeamController.java
│       │       │   └── ReactAppController.java
│       │       ├── model/
│       │       │   ├── Team.java
│       │       │   └── Match.java
│       │       ├── repository/
│       │       │   ├── TeamRepository.java
│       │       │   └── MatchRepository.java
│       │       └── data/
│       │           ├── MatchDataProcessor.java
│       │           └── BatchConfig.java
│       └── resources/
│           ├── matches.csv
│           └── application.properties
└── README.md
```

## 🎯 Key Improvements

### Performance

* Optimized bundle size
* Lazy loading for components
* Efficient data fetching
* Caching strategies
* Code splitting

### User Experience

* Intuitive navigation
* Fast loading times
* Smooth animations
* Mobile-friendly interface
* Theme switching
* Loading skeletons

### Code Quality

* Modern React patterns
* Clean component structure
* Responsive design principles
* Accessibility features
* Type-safe development
* Consistent styling

## 🔧 API Endpoints

### Team Endpoints

* `GET /team` - Get all teams
* `GET /team/{teamName}` - Get specific team details
* `GET /team/{teamName}/matches?year={year}` - Get team matches by year

### Statistics Endpoints

* `GET /stats/overview` - Get overall statistics
* `GET /stats/leaderboard?sortBy={criteria}` - Get team leaderboard

## 🎨 Design System

### Colors

* **Primary**: `#667eea` to `#764ba2` (Gradient)
* **Success**: `#4da375`
* **Warning**: `#f39c12`
* **Error**: `#e74c3c`
* **Theme Variables**: CSS custom properties for dark/light themes

### Typography

* **Font Family**: 'Rubik', sans-serif
* **Responsive font sizes**
* **Consistent spacing**
* **Theme-aware text colors**

### Components

* **Rounded corners** (15px)
* **Subtle shadows**
* **Smooth transitions**
* **Hover effects**
* **Theme-aware styling**

## 🌙 Theme Support

### Dark Theme Features

* Dark backgrounds with light text
* Consistent color scheme
* Proper contrast ratios
* Smooth theme transitions
* All components theme-aware

### Light Theme Features

* Light backgrounds with dark text
* Gradient accents
* Clean, modern appearance
* Optimized readability

## 📈 Future Enhancements

* Real-time match updates
* Player statistics
* Advanced filtering options
* Export functionality
* PWA capabilities
* User authentication
* Personalized dashboards
* Match predictions
* Social features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

* IPL for providing cricket data
* React and Spring Boot communities
* Open source contributors
* Framer Motion for animations
* Recharts for data visualization

---

**Built with ❤️ for cricket analytics**

## 🔗 Links

* **Repository**: [https://github.com/TelaproluKeerthana/IPL-Dashboard](https://github.com/TelaproluKeerthana/IPL-Dashboard)
* **Live Demo**: http://ipl-dashboard-env.eba-qmv3zmji.us-east-1.elasticbeanstalk.com/
