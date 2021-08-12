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
            },
            message: '操作成功'
          };
        },
    },
    {
        url: '/api/getQuestionList',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: {
                    questionTitle: '中高风险地区旅居情况摸排', // 问卷标题
                    description: '1. 紧急摸排自6月起停留、途径南京禄口机场、湖南省张家界景区的居民；\r\n2. 请各单位与x月x日前完成填写；\r\n3. 有旅居记录人员如出现发热、腹泻、嗅觉丧失等情况，请联系网格员吴xx  13799099000', // 问卷描述
                    questionList: [
                        {
                            typeName: '单选题',
                            type: 'radio', // 一级类型
                            subtype: 'radio',
                            subtypeName: '单选题',// 二级类型
                            title: '',
                            selectList: [
                                {
                                    name: '男',
                                    value: 'male'
                                },
                                {
                                    name: '女',
                                    value: 'female'
                                }
                            ],
                            empty: false
                        }
                    ]
                },
                message: '操作成功'
            }
        }
    }
] as MockMethod[];