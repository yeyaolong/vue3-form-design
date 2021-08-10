import Http from '../axios/http';
import qs from 'qs';

const getQuestionList = (param) => Http.get('/api/getQuestionList', qs.stringify(param));
const getQuestionTypeList = (param) => Http.get('/api/getQuestionTypeList', qs.stringify(param));

export {
    getQuestionTypeList, // 获取题目类型列表
    getQuestionList
}