import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import csv from 'csv-parser';
import fs from 'fs';

// Define an interface for the data structure based on the CSV content
interface Customer {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zip: number;
  phone1: string;
  phone2: string;
  email: string;
  web: string;
}

const app = express();
app.use(cors());
app.use(express.json());

const us_500_csv_path = path.join(__dirname, '..', '..', 'app', 'data', 'us-500.csv');
let data: Customer[] = [];

// Read the CSV file and load the data
fs.createReadStream(us_500_csv_path)
  .pipe(csv())
  .on('data', (row: Customer) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/api/data', (req: Request, res: Response) => {
  res.json(data);
});

app.post('/api/search', (req: Request, res: Response) => {
  // Define a union type for search values, allowing `string` or `number`
  type SearchFieldValue = string | number;
  const { searchField, targetValue }: { searchField: keyof Customer; targetValue: SearchFieldValue } = req.body;
  // Convert `targetValue` to a number if `searchField` is 'zip'
  const adjustedTargetValue = searchField === 'zip' ? Number(targetValue) : targetValue;
  // Filter the data based on the search field and value
  const filteredData = data.filter((row) => row[searchField] === adjustedTargetValue);
  res.json(filteredData);
});

app.get('/api/num-of-people-per-state', (req: Request, res: Response) => {
  const counts = data.reduce((accumulator: Record<string, number>, row: Customer) => {
    accumulator[row.state] = (accumulator[row.state] || 0) + 1;
    return accumulator;
  }, {});

  res.json(counts);
});

// Start the server
const port = process.env.PORT || 5006;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
