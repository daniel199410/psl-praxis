import axios from 'axios';

export default {
    getEnemies: function () {
        return axios.get('https://jdtorregrosasapi.herokuapp.com/enemies');
    }
};