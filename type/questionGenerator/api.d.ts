/// <reference path="./question.d.ts" />

declare namespace ApiNameSpace {
    interface ApiStructure {
        code: 0 | -1;
        data: any;
        message: string
    }

    interface QuestionListApi extends ApiStructure {
        data: {
            questionTitle: string,
            description: string,
            questionList: Array<QuestionNameSpace.Question>
        }
    }
}