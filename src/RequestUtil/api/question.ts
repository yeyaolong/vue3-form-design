import Http from '../axios/http';
import qs from 'qs';

const getQuestionList = (param) => Http.get('/api/getQuestionList', qs.stringify(param));