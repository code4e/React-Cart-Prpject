import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
    const { value, maxValue, label } = props;
    let barHeightFill = '0%';
    if(maxValue > 0){
        barHeightFill = `${Math.round((value / maxValue) * 100)}%`;
    }
    return (
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barHeightFill}}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    )
}

export default ChartBar;