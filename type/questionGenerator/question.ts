export namespace QuestionNameSpace {
    /**
     * 问题类型能进行的操作
     */
    type Operation = {
        name: string
    }

    /**
     * 问题类型的子类型
     */
    type QuestionSubType = {
        name: string,
        value: string
    }
    
    export type QuestionType = {
        id: Number,
        name: string,
        icon: string,
        type: string,
        operation: Array<Operation>, // 问题类型能进行的操作
        deletable: Boolean,
        empty: Boolean,
        typeList: Array<QuestionSubType> // 问题类型包含的子类型列表
    }
    /**
     * 问卷问题
     */
    export interface Question {
        typeName: string;
        type: string;
        title: string;
        operation: Array<SelectItem>, // 更多操作
        deletable: boolean, // 是否可删除
        empty: boolean, // false 必填 true 非必填
        typeList: Array<SelectItem>

    }
    /**
     * 问卷问题-单选题
     */
    export interface RadioQuestion extends Question {
        selectList: Array<SelectItem>;
    }
    /**
     * 问卷问题-填空题
     */
    export interface InputQuestion extends Question {

    }
}