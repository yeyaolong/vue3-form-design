// export namespace QuestionNameSpace {
declare namespace QuestionNameSpace { // 直接放到全局，省的每次都要引用
    /**
     * 问题类型能进行的操作
     */
    type Operation = {
        name: string,
        value: string
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
        deletable: Boolean,
        empty: Boolean,
        subtypeList: Array<QuestionSubType> // 问题类型包含的子类型列表
    }
    /**
     * 问卷问题
     */
    export interface Question {
        typeName: string;
        type: string;
        subtype: string // 子类型
        subtypeName: string, // 子类型名称
        title: string;
        deletable: boolean, // 是否可删除
        empty: boolean, // false 必填 true 非必填
        
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

