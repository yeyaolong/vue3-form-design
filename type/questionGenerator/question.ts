export namespace QuestionNameSpace {
    /**
     * 问题类型能进行的操作
     */
    type Operation = {
        name: String
    }

    /**
     * 问题类型的子类型
     */
    type QuestionSubType = {
        name: String
    }
    
    export type QuestionType = {
        id: Number,
        name: String,
        icon: String,
        type: String,
        operation: Array<Operation>, // 问题类型能进行的操作
        deletable: Boolean,
        empty: Boolean,
        typeList: Array<QuestionSubType> // 问题类型包含的子类型列表
    }
}