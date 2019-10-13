const axios = require('axios');
const API_URL = 'https://opentdb.com/api.php?amount=10';

(async () => {
    try {
        const quizzes = await axios.get(API_URL);
        console.log('クイズデータ：', quizzes.data.results);
    } catch (error) {
        console.log(error.message);
    }
})();