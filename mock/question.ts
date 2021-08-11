import { MockMethod } from 'vite-plugin-mock';
// 图片icon
// import inputQuestionImg from '@/assets/icon/填空题.png';
// import radioQuestionImg from '@/assets/icon/单选题.png';

// const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
// console.log(VITE_BASE_URL + '/api/getQuestionTypeList');
export default [
    {
        url: '/api/getQuestionTypeList',
        method: 'get',
        response: () => {
          return {
            code: 0,
            data: {
              'input': {
                  id: 1,
                  name: '填空题',
                  icon: '',
                  type: 'input',
                  empty: false, // false 必填 true 非必填
                  subtypeList: [
                      {
                          name: '单行填空',
                          value: '1'
                      },
                      {
                          name: '多行填空',
                          value: '2'
                      },
                      {
                          name: '电子签名',
                          value: '3'
                      },
                      {
                          name: '手机号',
                          value: '4'
                      },
                      {
                          name: '数字',
                          value: '5'
                      },
                      {
                          name: '地址',
                          value: '6'
                      },
                      {
                          name: '日期',
                          value: '7'
                      },
                      {
                          name: '时间',
                          value: '8'
                      },
                      {
                          name: '扫码输入',
                          value: '9'
                      }
                  ], // 二级类型列表
              },
              'radio': {
                  id: 2,
                  name: '单选题',
                  icon: '',
                  type: 'radio',
                  empty: false, // false 必填 true 非必填
                  subtypeList: [
                      {
                          name: '单选题',
                          value: '1'
                      },
                      {
                          name: '多选题',
                          value: '2'
                      },
                      {
                          name: '下拉框',
                          value: '3'
                      },
                      {
                          name: '多段选择',
                          value: '4'
                      }
                  ], // 二级类型列表
              }
            }
          };
        },
    }
] as MockMethod[];