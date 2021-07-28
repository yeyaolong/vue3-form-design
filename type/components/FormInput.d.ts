/// <reference path="./component.ts" />
export namespace ComponentNameSpace {
    export type FormInputState = {
        valueInput: String,
        showTitleBorder: Boolean,
        textAreaStyle: {
            maxHeight: String,
            height: String
        }
    }
    
    export type FormInputProps = {
        disabled: Boolean,
        value: String,
        editable: Boolean,
        type: String,
        placeholder: String
    }
}
