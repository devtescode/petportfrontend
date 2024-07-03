import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Investperformance = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/useranimalinvest/investperform')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);


    const chartData = {
        labels: data.map(item => item.price),
        datasets: [
            {
                label: 'Investment Value',
                data: data.map(item => item.price),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Investment Performance Over Time',
            },
        },
    };
    return (
        <>
            <div>Recent performance</div>
            <Line data={chartData} options={options} />
        </>
    )
}

export default Investperformance