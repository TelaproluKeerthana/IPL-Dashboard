# IPL Dashboard - Enhanced Version

A comprehensive analytics platform for Indian Premier League cricket data with modern UI/UX and advanced features.

## 🚀 New Features

### ✨ Enhanced User Interface
- **Modern Navigation**: Responsive navigation bar with smooth animations
- **Beautiful Animations**: Framer Motion animations throughout the application
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Loading States**: Skeleton loading components for better UX
- **Interactive Elements**: Hover effects and smooth transitions

### 📊 Advanced Analytics
- **Statistics Dashboard**: Comprehensive team performance metrics
- **Interactive Charts**: Bar charts, pie charts, and line charts using Recharts
- **Team Leaderboard**: Sortable rankings by wins, win rate, and matches
- **Performance Comparison**: Detailed team comparison tables
- **Real-time Data**: Live statistics and metrics

### 🎯 Key Features
- **Team Performance**: Detailed analysis of each team's performance
- **Match History**: Complete match details and results
- **Win/Loss Analysis**: Visual representation of team performance
- **Year-wise Filtering**: Filter data by specific years
- **Mobile-First Design**: Fully responsive across all devices

## 🛠️ Technology Stack

### Frontend
- **React 19**: Latest React with modern hooks
- **SCSS**: Advanced styling with responsive design
- **Framer Motion**: Smooth animations and transitions
- **Recharts**: Interactive data visualizations
- **React Icons**: Beautiful icon library
- **React Router**: Client-side routing

### Backend
- **Spring Boot**: Robust Java framework
- **PostgreSQL**: Reliable database
- **JPA/Hibernate**: Object-relational mapping
- **RESTful APIs**: Clean API design
- **Batch Processing**: Efficient data processing

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 UI Components

### Navigation
- Sticky navigation bar with gradient background
- Mobile hamburger menu
- Active page indicators
- Smooth transitions

### Cards & Tiles
- Modern card design with shadows
- Hover effects and animations
- Responsive grid layouts
- Interactive team tiles

### Charts & Visualizations
- Bar charts for performance comparison
- Pie charts for win/loss distribution
- Responsive chart containers
- Interactive tooltips

## 📊 Data Features

### Team Analytics
- Total matches played
- Win/loss statistics
- Win rate calculations
- Performance trends

### Match Details
- Match results and scores
- Team performance in specific matches
- Historical match data
- Year-wise filtering

### Leaderboards
- Sortable team rankings
- Multiple sorting criteria
- Performance badges
- Achievement indicators

## 🚀 Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 16 or higher
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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
   REACT_APP_DATA_END_YEAR=2020
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
│   │   │   │   └── ...
│   │   │   ├── pages/
│   │   │   │   ├── HomePage.js
│   │   │   │   ├── StatsPage.js
│   │   │   │   ├── LeaderboardPage.js
│   │   │   │   └── AboutPage.js
│   │   │   └── App.js
│   │   └── package.json
│   └── main/
│       ├── java/
│       │   └── com/ipl/dashboard/
│       │       ├── controller/
│       │       ├── model/
│       │       └── repository/
│       └── resources/
└── README.md
```

## 🎯 Key Improvements

### Performance
- Optimized bundle size
- Lazy loading for components
- Efficient data fetching
- Caching strategies

### User Experience
- Intuitive navigation
- Fast loading times
- Smooth animations
- Mobile-friendly interface

### Code Quality
- Modern React patterns
- Clean component structure
- Responsive design principles
- Accessibility features

## 🔧 API Endpoints

### Team Endpoints
- `GET /team` - Get all teams
- `GET /team/{teamName}` - Get specific team details
- `GET /team/{teamName}/matches?year={year}` - Get team matches by year

### Statistics Endpoints
- `GET /stats/overview` - Get overall statistics
- `GET /stats/leaderboard?sortBy={criteria}` - Get team leaderboard

## 🎨 Design System

### Colors
- Primary: `#667eea` to `#764ba2` (Gradient)
- Success: `#4da375`
- Warning: `#f39c12`
- Error: `#e74c3c`

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Consistent spacing

### Components
- Rounded corners (15px)
- Subtle shadows
- Smooth transitions
- Hover effects

## 📈 Future Enhancements

- [ ] Real-time match updates
- [ ] Player statistics
- [ ] Advanced filtering options
- [ ] Export functionality
- [ ] Dark mode theme
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- IPL for providing cricket data
- React and Spring Boot communities
- Open source contributors

---

**Built with ❤️ for cricket analytics** 
