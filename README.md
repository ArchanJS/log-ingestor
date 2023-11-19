# Logger Ingestor and Query Interface

A web application for ingesting logs and querying log data. The project consists of a backend built with Node.js, Express.js, and MongoDB, and a frontend built with React.js.

# Screenshot

[![Log Ingestor and Query Interface](https://i.postimg.cc/MKF8Djfm/Screenshot-2023-11-19-at-12-59-09-PM.png)](https://www.youtube.com/watch?v=C1XdaQWdm-M)

# Click [here](https://youtu.be/C1XdaQWdm-M) to watch the demo video

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dyte-submissions/november-2023-hiring-ArchanJS.git
2. **Navigate to the project directory:**
   ```bash
   cd november-2023-hiring-ArchanJS
3. **Install dependencies for the frontend and backend:**
   ```bash
   # Navigate to the frontend directory

   cd client
   npm install

   # Navigate to the backend directory

   cd backend
   npm install
2. **Start the backend server:**
   ```bash
   # Inside the backend directory

   cd backend
   npm run dev
2. **Start the frontend server:**
   ```bash
   # Inside the frontend directory
   
   cd client
   npm start

## Open your browser:

### Navigate to `http://localhost:5000` to access the application.

## Features

1. Users can create logs by sending a POST request to `http://localhost:3000`. See cURL example below for reference:

   ```bash
   curl --location 'http://localhost:3000' \
   --header 'Content-Type: application/json' \
   --data '{
     "level": "error",
     "message": "Database corruption detected",
     "resourceId": "server-0123",
     "timestamp": "2023-09-16T00:45:00Z",
     "traceId": "xyz-abc-345",
     "spanId": "span-678",
     "commit": "2g4h6j8",
     "parentResourceId": "server-9012"
   }'
2. Frontend runs on port 5000

3. Users can select multiple fields and enter values for querying

4. Users can hit the search button to query logs based on selected fields and values

5. Users can see results even if they only enter a partial value in the query field. Searching with just one or two characters is sufficient

6. Users can deselect any selected fields by clicking the cross button

7. Log results are displayed in a table format