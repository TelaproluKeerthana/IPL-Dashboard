import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FaTrophy, FaChartLine, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './StatsPage.scss';

export const StatsPage = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF6B6B'];

    const statsCards = [
        {
            title: 'Total Teams',
            value: teams.length,
            icon: <FaUsers />,
            color: '#667eea'
        },
        {
            title: 'Total Matches',
            value: teams.reduce((sum, team) => sum + team.totalMatches, 0),
            icon: <FaCalendarAlt />,
            color: '#764ba2'
        },
        {
            title: 'Most Wins',
            value: teams.length > 0 ? Math.max(...teams.map(team => team.totalWins)) : 0,
            icon: <FaTrophy />,
            color: '#f093fb'
        },
        {
            title: 'Win Rate',
            value: teams.length > 0 ? 
                Math.round((teams.reduce((sum, team) => sum + team.totalWins, 0) / 
                teams.reduce((sum, team) => sum + team.totalMatches, 0)) * 100) : 0,
            icon: <FaChartLine />,
            color: '#4facfe'
        }
    ];

    const winLossData = teams.map(team => ({
        name: team.teamName,
        wins: team.totalWins,
        losses: team.totalMatches - team.totalWins,
        total: team.totalMatches
    }));

    const pieData = teams.map(team => ({
        name: team.teamName,
        value: team.totalWins
    }));

    if (loading) {
        return (
            <div className="StatsPage">
                <div className="stats-header">
                    <h1>IPL Statistics</h1>
                </div>
                <div className="stats-grid">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="stat-card">
                            <Skeleton height={100} />
                        </div>
                    ))}
                </div>
                <div className="charts-container">
                    <Skeleton height={400} />
                </div>
            </div>
        );
    }

    return (
        <div className="StatsPage">
            <motion.div 
                className="stats-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>IPL Statistics Dashboard</h1>
                <p>Comprehensive analytics and insights for IPL teams</p>
            </motion.div>

            <div className="stats-grid">
                {statsCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="card-icon" style={{ color: card.color }}>
                            {card.icon}
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p className="card-value">{card.value}{card.title === 'Win Rate' ? '%' : ''}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="charts-container">
                <motion.div 
                    className="chart-section"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2>Team Performance Overview</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={winLossData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="wins" fill="#4da375" name="Wins" />
                            <Bar dataKey="losses" fill="#a34d5d" name="Losses" />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                <motion.div 
                    className="chart-section"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2>Win Distribution</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            <motion.div 
                className="team-comparison"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2>Team Comparison Table</h2>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Total Matches</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map(team => (
                                <tr key={team.id}>
                                    <td>{team.teamName}</td>
                                    <td>{team.totalMatches}</td>
                                    <td>{team.totalWins}</td>
                                    <td>{team.totalMatches - team.totalWins}</td>
                                    <td>{((team.totalWins / team.totalMatches) * 100).toFixed(1)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}; 