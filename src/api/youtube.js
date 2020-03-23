import axios from 'axios';

const KEY = 'AIzaSyB95HzEj-iVNqCxUJ9DtKYCFRrYDQvtLJU';

const constApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

export default constApi;