import axios from 'axios';

const KEY = 'AIzaSyBDLqSFl6ZZxEbkUO5v13fca3ljp6BJg2k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

