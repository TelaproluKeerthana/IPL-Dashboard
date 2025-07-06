import './App.scss';
import {Routes, Route} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';
import { StatsPage } from './pages/StatsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />}/>
          <Route path="/teams/:teamName" element={<TeamPage />}/>
          <Route path="/stats" element={<StatsPage />}/>
          <Route path="/leaderboard" element={<LeaderboardPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;