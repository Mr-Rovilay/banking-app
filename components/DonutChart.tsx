"use client"

import { Doughnut } from 'react-chartjs-2';
import{Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);  
const DonutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1200,2000, 3550],
                backgroundColor: ['#0747b6', '#2265d8', '#2791fa'],
                 hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'] 
            }
        ],
        labels: ["Bank A", "Bank B", "Bank C"]
    }
  return <Doughnut data={data} options={{cutout:"60%", plugins:{legend:{display: false}}}} />

}

export default DonutChart