import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
    const maxDataPointValue = Math.max(...dataPointsValues);
    return (
        <div className='chart'>
            {dataPoints.map((dataPoint, idx) => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maxDataPointValue}
                label={dataPoint.label}
            />)}
        </div>
    )
}

export default Chart;