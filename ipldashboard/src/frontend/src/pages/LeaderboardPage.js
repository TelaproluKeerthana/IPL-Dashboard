import React, { useEffect, useState } from 'react';
import { FaTrophy, FaMedal, FaCrown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './LeaderboardPage.scss';

export const LeaderboardPage = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('wins');

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await response.json();
                setTeams(data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTeams();
    }, []);

    const getSortedTeams = () => {
        return [...teams].sort((a, b) => {
            switch (sortBy) {
                case 'wins':
                    return b.totalWins - a.totalWins;
                case 'winRate':
                    return (b.totalWins / b.totalMatches) - (a.totalWins / a.totalMatches);
                case 'matches':
                    return b.totalMatches - a.totalMatches;
                default:
                    return b.totalWins - a.totalWins;
            }
        });
    };

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1:
                return <FaCrown style={{ color: '#FFD700' }} />;
            case 2:
                return <FaMedal style={{ color: '#C0C0C0' }} />;
            case 3:
                return <FaMedal style={{ color: '#CD7F32' }} />;
            default:
                return <span className="rank-number">{rank}</span>;
        }
    };

    const getWinRateColor = (winRate) => {
        if (winRate >= 60) return '#4da375';
        if (winRate >= 50) return '#f39c12';
        return '#e74c3c';
    };

    if (loading) {
        return (
            <div className="LeaderboardPage">
                <div className="leaderboard-header">
                    <h1>IPL Leaderboard</h1>
                </div>
                <div className="sort-controls">
                    <Skeleton height={40} />
                </div>
                <div className="leaderboard-table">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="team-row">
                            <Skeleton height={60} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const sortedTeams = getSortedTeams();

    return (
        <div className="LeaderboardPage">
            <motion.div 
                className="leaderboard-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>IPL Team Leaderboard</h1>
                <p>Rank teams by different performance metrics</p>
            </motion.div>

            <motion.div 
                className="sort-controls"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <label>Sort by:</label>
                <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                >
                    <option value="wins">Most Wins</option>
                    <option value="winRate">Win Rate</option>
                    <option value="matches">Total Matches</option>
                </select>
            </motion.div>

            <motion.div 
                className="leaderboard-table"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="table-header">
                    <div className="rank-col">Rank</div>
                    <div className="team-col">Team</div>
                    <div className="stats-col">Matches</div>
                    <div className="stats-col">Wins</div>
                    <div className="stats-col">Losses</div>
                    <div className="stats-col">Win Rate</div>
                </div>

                {sortedTeams.map((team, index) => {
                    const rank = index + 1;
                    const winRate = ((team.totalWins / team.totalMatches) * 100).toFixed(1);
                    const isTopThree = rank <= 3;

                    return (
                        <motion.div
                            key={team.id}
                            className={`team-row ${isTopThree ? 'top-three' : ''}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="rank-col">
                                <div className="rank-display">
                                    {getRankIcon(rank)}
                                </div>
                            </div>
                            <div className="team-col">
                                <div className="team-info">
                                    <h3>{team.teamName}</h3>
                                    {isTopThree && (
                                        <div className="achievement-badge">
                                            <FaTrophy />
                                            Top Performer
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="stats-col">
                                <span className="stat-value">{team.totalMatches}</span>
                            </div>
                            <div className="stats-col">
                                <span className="stat-value wins">{team.totalWins}</span>
                            </div>
                            <div className="stats-col">
                                <span className="stat-value losses">{team.totalMatches - team.totalWins}</span>
                            </div>
                            <div className="stats-col">
                                <span 
                                    className="stat-value win-rate"
                                    style={{ color: getWinRateColor(parseFloat(winRate)) }}
                                >
                                    {winRate}%
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div 
                className="leaderboard-summary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="summary-card">
                    <h3>Leaderboard Summary</h3>
                    <div className="summary-stats">
                        <div className="summary-stat">
                            <span className="stat-label">Total Teams:</span>
                            <span className="stat-value">{teams.length}</span>
                        </div>
                        <div className="summary-stat">
                            <span className="stat-label">Best Win Rate:</span>
                            <span className="stat-value">
                                {Math.max(...teams.map(team => (team.totalWins / team.totalMatches) * 100)).toFixed(1)}%
                            </span>
                        </div>
                        <div className="summary-stat">
                            <span className="stat-label">Most Wins:</span>
                            <span className="stat-value">
                                {Math.max(...teams.map(team => team.totalWins))}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}; 