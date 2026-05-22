# Relion

> An AI-powered networking CRM for early-career professionals.

Relion helps users at the 0–3 year career stage build meaningful professional connections — not just collect them. It combines a relationship tracker with an AI advisor that guides users on who to reach out to, what to say, and how to sustain conversations that lead to real opportunities.

---

## The Problem

~80% of jobs are filled through networking, yet most early-career professionals struggle with:

- Not knowing **who** to prioritise for outreach
- Not knowing **how** to start or continue conversations
- Losing track of connections and missing follow-up windows
- Feeling overwhelmed by oversaturated platforms like LinkedIn

Relion is built to close that gap.

---

## Features

### Relationship & Follow-up Manager
- Track connection status: `contacted → replied → follow-up → active`
- Smart reminders to follow up before relationships go cold
- Notes field per connection to maintain context over time

### AI Networking Advisor
- Input your career goal, target industry, and role — or describe your current situation
- Get AI guidance on *which types* of professionals to prioritise (e.g. "mid-size fintech PMs, not senior directors")
- Generate personalised outreach message drafts based on the target's profile
- Receive coaching on what to say next as the relationship develops

> Relion does **not** require LinkedIn API access. All connection data is entered manually by the user. AI features run entirely on user-provided context.

---

## Target Users

**Primary**
- Early-career professionals (0–3 years experience) seeking mentors and opportunities
- Final-year university / polytechnic students actively job hunting

**Secondary**
- Career switchers re-entering a new industry

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend | React Native | Cross-platform mobile-first experience |
| Backend | Node.js + Express.js | Lightweight REST API layer |
| Database | MongoDB Atlas | Flexible document model for connection data |
| Hosting | Render | Simple deployment for Node/Express services |
| AI | OpenAI API | Message generation and networking coaching |

**Data flow:** Users enter connection details in the app → stored via Express API to MongoDB → when AI features are triggered, the backend constructs a structured prompt (user goal + target profile + conversation history) and sends it to OpenAI → response returned to the frontend. No external data sources required.

---

## User Stories

- As a user, I want guidance on what types of professionals to connect with based on my career goals, so I can focus my networking efforts
- As a user, I want AI-generated outreach messages so I can confidently initiate conversations
- As a user, I want coaching on how to continue conversations so I can build meaningful relationships
- As a user, I want to track and manage my connections so I can maintain long-term professional networks
- As a user, I want insights into my networking effectiveness so I can continuously improve

---

## Team

Built for **.Hack HEAP 2026**

| Name | Email |
|---|---|
| Bernard Lo | bernard.lo.2025@computing.smu.edu.sg |
| Marvel Nathanael | marvel.t.2025@computing.smu.edu.sg |
| Dewa Bratanusa | dbe.satya.2025@computing.smu.edu.sg |
| **Matthew Tjandera** *(Team Lead)* | m.tjandera.2025@computing.smu.edu.sg |

---

## Getting Started

> Setup instructions will be added as the project develops.

```bash
# Clone the repo
git clone https://github.com/your-org/relion.git
cd relion

# Install dependencies (backend)
cd backend && npm install

# Install dependencies (frontend)
cd ../frontend && npm install
```

---

## License

[MIT](LICENSE)
