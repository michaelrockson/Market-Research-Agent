# Reddit-Mine

A​‍​‌‍​‍‌ complete software application that helps users find, confirm and monitor problems that can be solved by software and which regularly arise in different areas of life, through Reddit.

The backend is responsible for gathering Reddit discussions, analyzing the sentiments of the posts, validating the opportunities with Gemini and finally, creating structured problem briefs. It also exposes API endpoints via FastAPI.

It is possible to save the results in a database and also export them to other services like Notion if ​‍​‌‍​‍‌desired.

# Getting Started

These instructions will give you a copy of the project up and running on your local machine for development purposes.

# Prerequisites

Requirements for the software and other tools to build and run the project:

* Python 3.11+ (Backend)
* Reddit Developer Application (Client ID and Secret)
* Gemini API Key
* Infisical Project (recommended)
* Email Credentials

Optional:

* Notion Integration

# Installing

Clone the repository:

```bash
git clone https://github.com/michaelrockson/Reddit-Mine.git
cd Reddit-Mine
```

The project currently consists of:

* **Agent_Backend** – Reddit ingestion, sentiment analysis, AI curation, data persistence, and API endpoints.

For detailed setup instructions, refer to the component README:

### Backend

```text
Agent_Backend/README.md
```

This README contains installation, configuration, development and operational instructions specific to the backend component.

# Built With

* FastAPI (expected)
* SQLAlchemy
* PRAW (Reddit API)
* Google Gemini
* Infisical
* APScheduler

# Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

**Versioning**

We use Semantic Versioning for versioning. For the versions available, see the tags on this repository.

# Authors

* **Michael Coffie Rockson** - Project Owner and Lead Developer

# Acknowledgments

* Reddit API ecosystem
* Google Gemini
* Open-source Python and React communities
* Inspiration from AI Agentic Workflows and Agents
