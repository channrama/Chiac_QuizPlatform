# Online Quiz & Assessment Platform

## Setup

1. Copy this repo and open in terminal.
2. Create `.env` in the project root with:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=supersecret
```

3. Install:

```bash
npm install
```

4. Run development server:

```bash
npm run dev
```

## Notes
- Teacher-only routes are protected server-side via JWT and role checks.
- Correct answers are never sent to students; scoring happens server-side.

