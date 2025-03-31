import React from 'react'; // Importing React library
import './TrendCard.css'; // Importing the CSS for styling
import { TrendData } from '../../Data/TrendData.js'; // Importing the trend data

// Defining the TrendCard component
const TrendCard = () => {
    return (
        <div className="TrendCard"> {/* Main wrapper for the TrendCard component */}
            <h3>Trends for you</h3>

            {/* Loop through the TrendData array to display each trend */}
            {TrendData.map((trend) => {
                return (
                    <div className="Trend" key={trend.name}> {/* Display each trend */}
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard; 
