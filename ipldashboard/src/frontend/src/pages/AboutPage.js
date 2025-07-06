import React from 'react';
import { FaGithub, FaReact, FaJava, FaDatabase, FaChartBar, FaMobile, FaDesktop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './AboutPage.scss';

export const AboutPage = () => {
    const features = [
        {
            icon: <FaChartBar />,
            title: 'Advanced Analytics',
            description: 'Comprehensive statistics and performance metrics for all IPL teams'
        },
        {
            icon: <FaMobile />,
            title: 'Responsive Design',
            description: 'Optimized for all devices - mobile, tablet, and desktop'
        },
        {
            icon: <FaDatabase />,
            title: 'Real-time Data',
            description: 'Live match data and team statistics from IPL database'
        },
        {
            icon: <FaDesktop />,
            title: 'Interactive Charts',
            description: 'Beautiful visualizations using modern charting libraries'
        }
    ];

    const techStack = [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Java Spring Boot', icon: <FaJava />, color: '#ED8B00' },
        { name: 'PostgreSQL', icon: <FaDatabase />, color: '#336791' },
        { name: 'Recharts', icon: <FaChartBar />, color: '#FF6B6B' }
    ];

    return (
        <div className="AboutPage">
            <motion.div 
                className="about-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>About IPL Dashboard</h1>
                <p>A comprehensive analytics platform for Indian Premier League cricket data</p>
            </motion.div>

            <div className="about-content">
                <motion.div 
                    className="project-description"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2>Project Overview</h2>
                    <p>
                        The IPL Dashboard is a modern web application that provides comprehensive analytics 
                        and insights for Indian Premier League cricket teams. Built with cutting-edge 
                        technologies, it offers an intuitive interface for exploring team performance, 
                        match statistics, and historical data.
                    </p>
                    <p>
                        This project demonstrates full-stack development capabilities, featuring a 
                        responsive React frontend with beautiful visualizations and a robust Spring Boot 
                        backend with efficient data processing.
                    </p>
                </motion.div>

                <motion.div 
                    className="features-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="feature-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="tech-stack"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2>Technology Stack</h2>
                    <div className="tech-grid">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="tech-card"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="tech-icon" style={{ color: tech.color }}>
                                    {tech.icon}
                                </div>
                                <span className="tech-name">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="project-info"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2>Project Information</h2>
                    <div className="info-grid">
                        <div className="info-card">
                            <h3>Frontend</h3>
                            <ul>
                                <li>React 19 with modern hooks</li>
                                <li>Responsive design with SCSS</li>
                                <li>Interactive charts with Recharts</li>
                                <li>Animations with Framer Motion</li>
                                <li>React Router for navigation</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Backend</h3>
                            <ul>
                                <li>Spring Boot framework</li>
                                <li>RESTful API design</li>
                                <li>PostgreSQL database</li>
                                <li>JPA/Hibernate ORM</li>
                                <li>Batch processing for data</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Features</h3>
                            <ul>
                                <li>Team performance analytics</li>
                                <li>Match history and details</li>
                                <li>Interactive leaderboards</li>
                                <li>Statistical visualizations</li>
                                <li>Responsive mobile design</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="contact-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                >
                    <h2>Get in Touch</h2>
                    <p>
                        This project is open source and contributions are welcome! 
                        Feel free to explore the codebase and submit issues or pull requests.
                    </p>
                    <div className="contact-links">
                        <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <FaGithub />
                            View on GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}; 