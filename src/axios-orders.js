import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-my-burger-a2512.firebaseio.com"
});

export default instance;