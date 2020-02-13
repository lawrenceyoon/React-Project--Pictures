import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 75068bb46a637ea5e0ce385d5a5c0f8237f59c6e11df77508ce84496112d51de"
  }
});