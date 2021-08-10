let Mock = require('mockjs');
// const Mock = require('mockjs');
const useMock = function() {
    Mock.setup({
        timeout: '200-600'
    });
    
    Mock.mock('/\/api\/questoinListlist\.json/', 'GET', function(options) {
        console.log('options');
        return {
            code: 0,
            message: '',
            data: {
                questionList: [
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '您的性别?',
                      selectList: [
                        {
                          name: '男',
                          value: ''
                        },
                        {
                          name: '女',
                          value: ''
                        }
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '您的年龄是?',
                      selectList: [
                        {
                          name: '18岁以下',
                          value: ''
                        },
                        {
                          name: '18-30岁',
                          value: ''
                        },
                        {
                          name: '31~50岁',
                          value: ''
                        },
                        {
                          name: '50岁以上',
                          value: ''
                        }
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '您的受教育程度?',
                      selectList: [
                        {
                          name: '初中及以下',
                          value: ''
                        },
                        {
                          name: '高中',
                          value: ''
                        },
                        {
                          name: '中专，大专',
                          value: ''
                        },
                        {
                          name: '本科及本科以上',
                          value: ''
                        }
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '您是通过什么渠道了解垃圾分类信息的?',
                      selectList: [
                        {
                          name: '电视，广播',
                          value: ''
                        },
                        {
                          name: '政府宣传',
                          value: ''
                        },
                        {
                          name: '网络',
                          value: ''
                        },
                        {
                          name: '其他人那里听说',
                          value: ''
                        },
                        {
                          name: '报纸，期刊',
                          value: ''
                        },
                        {
                          name: '其它',
                          value: ''
                        },
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '对于垃圾分类，您认为有没有必要?',
                      selectList: [
                        {
                          name: '有，觉得挺有意义',
                          value: ''
                        },
                        {
                          name: '有，但觉得有点麻烦',
                          value: ''
                        },
                        {
                          name: '没有，觉得没有意义',
                          value: ''
                        },
                        {
                          name: '没有，觉得太麻烦',
                          value: ''
                        }            
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '您在日常生活中会进行垃圾分类吗？',
                      selectList: [
                        {
                          name: '经常',
                          value: ''
                        },
                        {
                          name: '偶尔',
                          value: ''
                        },
                        {
                          name: '从不',
                          value: ''
                        }            
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '您对您所在地区垃圾的运输处理方式满意吗？',
                      selectList: [
                        {
                          name: '非常满意',
                          value: ''
                        },
                        {
                          name: '满意',
                          value: ''
                        },
                        {
                          name: '不满意',
                          value: ''
                        },
                        {
                          name: '很不满意',
                          value: ''
                        },
                        {
                          name: '没意见',
                          value: ''
                        },
                      ]
                    },
                    {
                      typeName: '单选题',
                      type: 'radio',
                      title: '如果在你的社区附近建立统一的垃圾存放点，您是否可以接受？',
                      selectList: [
                        {
                          name: '可以',
                          value: ''
                        },
                        {
                          name: '不可以',
                          value: ''
                        },
                        {
                          name: '无所谓',
                          value: ''
                        }
                      ]
                    },
                    {
                      typeName: '填空题',
                      type: 'input',
                      title: '除了上述问卷提及的方面，您认为目前生活垃圾分类及处理急需解决的问题还有什么？',
                      result: {
                        value: ''
                      },
                      operation: [
                        {
                          name: '添加文件/图片(标题)'
                        },
                        {
                          name: '添加题目说明'
                        },
                        {
                          name: '将此标题添加为常用题'
                        },
                        {
                          name: '复制题目'
                        }
                      ], // 更多操作
                      empty: true, // false 必填 true 非必填
                      typeList: [
                        {
                          name: '单行填空'
                        },
                        {
                          name: '多行填空'
                        },
                        {
                          name: '电子签名'
                        },
                        {
                          name: '手机号'
                        },
                        {
                          name: '数字'
                        },
                        {
                          name: '地址'
                        },
                        {
                          name: '日期'
                        },
                        {
                          name: '时间'
                        },
                        {
                          name: '扫码输入'
                        }
                      ], // 类型列表
                    },
                    {
                      typeName: '填空题',
                      type: 'input',
                      title: '对于垃圾分类、垃圾运输和垃圾处理，您还有什么宝贵的意见和建议呢？',
                      result: {
                        value: ''
                      },
                      operation: [
                        {
                          name: '添加文件/图片(标题)'
                        },
                        {
                          name: '添加题目说明'
                        },
                        {
                          name: '将此标题添加为常用题'
                        },
                        {
                          name: '复制题目'
                        }
                      ], // 更多操作
                      empty: true, // false 必填 true 非必填
                      typeList: [
                        {
                          name: '单行填空'
                        },
                        {
                          name: '多行填空'
                        },
                        {
                          name: '电子签名'
                        },
                        {
                          name: '手机号'
                        },
                        {
                          name: '数字'
                        },
                        {
                          name: '地址'
                        },
                        {
                          name: '日期'
                        },
                        {
                          name: '时间'
                        },
                        {
                          name: '扫码输入'
                        }
                      ], // 类型列表
                    }
                ],
                description: '杭州市住建局近期展开“生活垃圾分类调查问卷”。欢迎您的参与。请将问卷反馈至数瀚科技有限公司。感谢您支持我们的工作,完成此份调查问卷!'
            }
        }
    });
}

export {
    useMock
}

