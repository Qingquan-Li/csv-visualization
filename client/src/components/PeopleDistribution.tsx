import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RootAPIURL } from './RootAPIURL';

// Register everything from Chart.js
Chart.register(...registerables);

// Define the type of the data object returned from the API
type PeopleData = {
    [key: string]: number;
};

export default function PeopleDistribution() {
  // const [data, setData] = useState(null);
  // `<PeopleData | null>(null)` means that the type of the state is either
  // `PeopleData` or `null`. It is `null` initially, and will be set to
  // `PeopleData` when the data is fetched from the API.
  const [data, setData] = useState<PeopleData | null>(null);

  useEffect(() => {
    axios.get<PeopleData>(RootAPIURL + '/num-of-people-per-state')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });

  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // const stateNames = Object.keys(data);
  // const peopleCounts = Object.values(data);

  // Get the state names and sort them
  const sortedStateNames = Object.keys(data).sort();
  // Re-map the peopleCounts to match the sorted order of stateNames
  const peopleCounts = sortedStateNames.map(state => data[state]);

  const chartData = {
    labels: sortedStateNames,
    datasets: [
      {
        label: 'Number of People',
        data: peopleCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    // maintainAspectRatio: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className='p-5'>
      <div style={{ width: '80%', margin: '0 auto' }}>
      <h2 className='pb-1'>People Distribution Visualization of US Data 500</h2>
        <Bar data={chartData} options={chartOptions} style={{ maxHeight: '400px' }} />
      </div>
    </div>
  );
}
