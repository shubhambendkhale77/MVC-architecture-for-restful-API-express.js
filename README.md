# MVC-architecture-for-restful-API-express.js

This project is a simple Node.js and Express-based API for managing course data. It provides endpoints to fetch course details by ID, search for courses by availability, or retrieve all courses.

## Features

- Retrieve course details by ID.
- Search for courses by their availability status.
- Return all courses when no search parameters are provided.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

---

## API Endpoints

### Base URL

```
http://localhost:3030/courseData
```

### 1. Get Course by ID

Retrieve details for a specific course based on its ID.

**Endpoint:**

```
GET /courseData/courses/:id
```

**Example Request:**

```bash
curl http://localhost:3030/courseData/courses/3
```

**Example Response:**

```json
{
  "id": 3,
  "title": "Cybersecurity Analyst",
  "description": "Protects computer systems.",
  "available": "true"
}
```

**Status Codes:**

- `200 OK`: Course found.
- `404 Not Found`: No course matches the provided ID.

---

### 2. Search Courses by Availability

Search for courses based on their availability status.

**Endpoint:**

```
GET /courseData/courses?search={true|false}
```

**Example Request:**

```bash
curl "http://localhost:3030/courseData/courses?search=true"
```

**Example Response:**

```json
[
  {
    "id": 3,
    "title": "Cybersecurity Analyst",
    "description": "Protects computer systems.",
    "available": "true"
  },
  {
    "id": 4,
    "title": "Software Developer",
    "description": "Develops and maintains software applications.",
    "available": "true"
  }
]
```

**Status Codes:**

- `200 OK`: Courses found matching the query.
- `404 Not Found`: No courses match the query.

---

### 3. Get All Courses

Retrieve all available courses if no ID or search query is provided.

**Endpoint:**

```
GET /courseData/courses
```

**Example Request:**

```bash
curl http://localhost:3030/courseData/courses
```

**Example Response:**

```json
[
  {
    "id": 1,
    "title": "Project Engg",
    "description": "Plans and closes projects.",
    "available": "false"
  },
  ...
]
```

---

## Project Structure

```
.
├── src
│   ├── controllers
│   │   └── courses.controller.js   # API controllers
│   ├── routes
│   │   └── courses.routes.js       # API routes
├── courses.json                    # Course data file
├── index.js                        # Entry point
└── README.md                       # Documentation
```

---

## Notes

- Data is stored in a JSON file (`courses.json`) for simplicity.
- Ensure the `courses.json` file is in the root directory of the project.
- The server listens on port `3030`.

---


