# DreamDrop Backend

This is the backend for the DreamDrop AI mixtape generator. It handles POST requests to `/generate` and returns a song title, 4-bar chorus, and beat suggestion using OpenAI.

## Setup

1. Create a `.env` file and add your OpenAI key:

```
OPENAI_API_KEY=your_key_here
```

2. Install dependencies:

```
npm install
```

3. Run the server:

```
node server.js
```

## Deployment

You can deploy this to [Render](https://render.com) by:

- Connecting to your GitHub repo
- Adding the `.env` key in your Render dashboard
- Setting the build and start commands:
  - Build Command: `npm install`
  - Start Command: `node server.js`
