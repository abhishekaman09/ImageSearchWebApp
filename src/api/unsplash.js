import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID YBvTNHC3e-d1RMKrqzskc8wBPrvOf5TPPn4l8cBKpBo'
    }
});
