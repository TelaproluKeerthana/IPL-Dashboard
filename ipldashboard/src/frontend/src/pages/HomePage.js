import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartBar, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';

export const HomePage = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllTeams = async () => {
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
        fetchAllTeams();
    }, []);

    const statsCards = [
        {
            icon: <FaUsers />,
            title: 'Total Teams',
            value: teams.length,
            color: '#667eea'
        },
        {
            icon: <FaCalendarAlt />,
            title: 'Total Matches',
            value: teams.reduce((sum, team) => sum + team.totalMatches, 0),
            color: '#764ba2'
        },
        {
            icon: <FaTrophy />,
            title: 'Most Wins',
            value: teams.length > 0 ? Math.max(...teams.map(team => team.totalWins)) : 0,
            color: '#f093fb'
        },
        {
            icon: <FaChartBar />,
            title: 'Best Win Rate',
            value: teams.length > 0 ? 
                Math.round(Math.max(...teams.map(team => (team.totalWins / team.totalMatches) * 100))) : 0,
            color: '#4facfe'
        }
    ];

    if (loading) {
        return (
            <div className="HomePage">
                <div className="header-section">
                    <Skeleton height={60} />
                </div>
                <div className="stats-section">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="stat-card">
                            <Skeleton height={100} />
                        </div>
                    ))}
                </div>
                <div className="team-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="team-tile">
                            <Skeleton height={120} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="HomePage">
            <motion.div 
                className="header-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="app-name">IPL Dashboard</h1>
                <p className="app-subtitle">Comprehensive analytics and insights for Indian Premier League</p>
            </motion.div>

            <motion.div 
                className="stats-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {statsCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="card-icon" style={{ color: card.color }}>
                            {card.icon}
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p className="card-value">{card.value}{card.title === 'Best Win Rate' ? '%' : ''}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="team-grid"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {teams.map((team, index) => (
                    <motion.div
                        key={team.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <TeamTile teamName={team.teamName} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}