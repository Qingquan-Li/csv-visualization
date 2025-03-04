# CSV Visualization

## 1. About the Project

Given: a dataset that contains the name, company, address and contact information of 500 people in the US (randomly generated).
Dataset: `us-500.csv` source from [Free Sample Data - BrianDunning.com](https://www.briandunning.com/sample-data/)

Task:

1. Create a web interface that retrieves and displays the dataset in the table.

2. Search people based on two given inputs: search field and target value
- For example, if the search field is state and the target value is NY, the result table should contain all people in the dataset who live in NY state.
- If searched by first_name (e.g., Valentine) with a single result, display the user icon (user.png) with information about that person instead of the table.
- If searched by company_name (e.g., Printing Dimensions) with a single result, display the video (example.mp4) along with other information like company name and address.

3. Show summary statistics, such as the number of people per state

4. Create a visualization to show the distribution of the people across the US, which can depend on the state or zip code.


## 2. Tech Stack

- Frontend (client):
  - TypeScript
  - React.js
  - Tailwind CSS
- Backend (server):
  - TypeScript
  - Express.js
- Deployment:
    - Docker
    - Linux
- CI/CD:
    - GitHub Actions

## 3. Running the Project

### Prerequisites:

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Build and run the Docker containers (client and server):

```bash
cd /path/to/csv-visualization
docker-compose up --build
```

The client will be running at http://localhost:5173
