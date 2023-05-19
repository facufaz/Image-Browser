import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4UIekAiCeqO4kVD93gciphtNLoFxZwQXPkGNkDef3Iw'
      }
});