# Personal AI Wealth Manager (PAWM)

![Project Status](https://img.shields.io/badge/status-active%20development-blue)
![Sprint](https://img.shields.io/badge/current%20sprint-Sprint%201-success)
![Backend](https://img.shields.io/badge/backend-Azure%20Functions-blue)
![Database](https://img.shields.io/badge/database-Supabase-green)
![Node](https://img.shields.io/badge/node-20.x-brightgreen)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

AI-assisted financial intelligence platform built through structured development sprints.

# Quick Demo

Upload transaction CSV:

```bash
curl -X POST http://localhost:7071/api/uploadCsv \
-H "Content-Type: text/csv" \
--data-binary @data/sample-transactions.csv
```

Preview transactions:
curl http://localhost:7071/api/previewTransactions

Example Response:
{
  "count": 3,
  "rows": [
    {
      "merchant": "Starbucks",
      "amount": -5.45
    }
  ]
}

---

# 3. Add Architecture Diagram (Visual)

GitHub projects with diagrams get **much higher engagement**.

Add this section.

# System Architecture

CSV Upload
     │
     ▼
Azure Functions API
     │
     ▼
Service Layer
(csvParser → normalizer → repository)
     │
     ▼
Supabase Database
     │
     ▼
Preview Transactions API

# Project Goals

PAWM aims to evolve into a full financial intelligence system capable of:

- ingesting financial transaction data
- categorizing spending behavior
- detecting anomalies in spending
- forecasting future expenses
- generating AI-powered financial insights


# Development Workflow

The project follows a structured sprint-based development model.

Each sprint focuses on building a specific capability.

Workflow:

1. Design architecture
2. Implement services
3. Expose API endpoints
4. Validate pipeline
5. Document sprint outcome


# Sprint Timeline

| Sprint | Focus | Status |
|------|------|------|
| Sprint 0 | Project foundation | Complete |
| Sprint 1 | CSV ingestion pipeline | Complete |
| Sprint 2 | Transaction categorization | Planned |
| Sprint 3 | Spending analytics | Planned |
| Sprint 4 | AI financial insights | Planned |

# Contributing

Contributions, ideas, and feedback are welcome.

If you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request






# Personal AI Wealth Manager (PAWM)

Personal AI Wealth Manager (PAWM) is a web application designed to help users analyze financial transactions, forecast spending patterns, and detect unusual financial behavior using data-driven models.

The goal of the project is to combine **data engineering, forecasting, and anomaly detection** into a practical personal finance tool.

---

# Live Demo

Frontend is deployed using GitHub Pages.

**Live site**

https://sikharavish.github.io/pawm-ai-wealth-manager/

---

# Current Project Status

**Sprint 0 and Sprint 1 is complete.**

Sprint 0 focused on building the foundational infrastructure required for the project:

- repository structure
- frontend scaffold
- backend scaffold
- database setup
- public deployment
- environment configuration
- project documentation

The system is now ready for feature development starting with **transaction categorization in Sprint 2**.

---

# Core Features (Planned)

### Transaction ingestion
Users upload financial statements (CSV).

### Transaction normalization
Clean and normalize merchant names, dates, and categories.

### Expense forecasting
Forecast future expenses using time-series models.

### Anomaly detection
Detect abnormal spending behavior.

### AI insights (future)
Explain financial trends and anomalies.

---

# Tech Stack

## Frontend
- React
- GitHub Pages (deployment)

## Backend
- Local Node.js API scaffold
- Planned deployment: **Render**

## Database
- Supabase (PostgreSQL)

## Development tools
- Node.js
- GitHub
- npm

---

# Project Structure

```
pawm-ai-wealth-manager
│
├── apps
│   └── frontend-swa
│       └── React frontend
│
├── apis
│   └── functions
│       └── Local backend API scaffold
│
├── docs
│   └── Architecture and documentation
│
├── infra
│   └── Infrastructure notes
│
├── ReleaseNotes.md
├── README.md
└── .env.example
```

---

# Architecture

Current architecture during development:

```
User Browser
     |
     v
GitHub Pages (React frontend)
     |
     v
Local Node.js API
     |
     v
Supabase (PostgreSQL database)
```

The frontend is publicly deployed while the backend currently runs locally.

Backend hosting will be added later using **Render**.

---

# Database Schema

The Supabase database currently contains three core tables.

### transactions
Stores normalized financial transactions.

Columns include:

- id
- user_id
- tx_date
- merchant
- amount
- category
- account_id
- source
- created_at

### forecasts
Stores time-series predictions for future expenses.

Columns include:

- id
- user_id
- category
- forecast_month
- yhat
- yhat_lower
- yhat_upper
- model_version
- created_at

### anomalies
Tracks unusual spending behavior detected by models.

Columns include:

- id
- user_id
- anomaly_date
- merchant
- category
- amount
- anomaly_score
- direction
- reason
- created_at

---

# Local Development

## Run frontend

```bash
cd apps/frontend-swa
npm install
npm start
```

The frontend will start on:

```
http://localhost:3000
```

---

## Run backend

```bash
cd apis/functions
npm install
func start --port 7072
```

Backend endpoint example:

```
http://localhost:7072/api/health
```

---

# Environment Variables

Create a `.env` file in the project root.

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_public_key
NODE_ENV=development
```

`.env` is ignored by git.

Use `.env.example` as a template.

---

# Deployment

## Frontend

Frontend is deployed using GitHub Pages.

Deployment command:

```bash
npm run deploy
```

Live site:

```
https://sikharavish.github.io/pawm-ai-wealth-manager/
```

---

# Sprint Roadmap

## Sprint 0
Infrastructure setup.

Completed:
- repo setup
- frontend scaffold
- backend scaffold
- Supabase database
- GitHub Pages deployment
- environment configuration
- documentation

---

## Sprint 1
Transaction ingestion pipeline.

Completed:
- CSV upload endpoint
- transaction parsing
- normalization
- preview uploaded transactions

---

## Sprint 2
Persistence layer.

Planned:
- store normalized transactions in Supabase
- query transaction history
- basic transaction dashboard

---

## Sprint 3
Forecasting.

Planned:
- build time-series forecasting
- monthly expense prediction
- category level predictions

---

## Sprint 4
Anomaly detection.

Planned:
- detect unusual spending behavior
- anomaly scoring
- alert system

---

## Sprint 5+
AI insights.

Planned:
- explain anomalies
- financial trend summaries
- natural language insights

---

# Security Notes

- `.env` is excluded from Git
- Supabase credentials stored as environment variables
- Row Level Security (RLS) enabled in Supabase

---

# Author

Ravish Sikha

Product leader with 18+ years of experience in digital platforms, AI/ML products, and fintech systems.

---

# License

This project is for learning, experimentation, and portfolio demonstration.
