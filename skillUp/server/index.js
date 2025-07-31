const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const API_KEY = 'd3f7979e37e23e15ef8795672f0b7e6aca7207cc'; // Replace with your Findwork API key

app.use(cors());

app.get('/api/jobs', async (req, res) => {
  const { search, location } = req.query;

  try {
    const response = await axios.get('https://findwork.dev/api/jobs/', {
      headers: {
        Authorization: `Token ${API_KEY}`,
      },
      params: {
        search,
        location,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching from Findwork API:', err.message);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
