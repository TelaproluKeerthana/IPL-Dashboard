import { React } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import './TeamTile.scss';

export const TeamTile = ({ teamName }) => {
    return (
        <motion.div 
            className="TeamTile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={`/teams/${teamName}`} className="team-link">
                <div className="team-icon">
                    <FaTrophy />
                </div>
                <h2 className="team-name">{teamName}</h2>
            </Link>
        </motion.div>
    );
};