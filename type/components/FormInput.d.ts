/// <reference path="./component.ts" />
export namespace ComponentNameSpace {
    export type FormInputState = {
        valueInput: string,
        showTitleBorder: Boolean,
        textAreaStyle: {
            maxHeight: string,
            height: string
        }
    }
    
    export type FormInputProps = {
        disabled: Boolean,
        value: string,
        editable: Boolean,
        type: string,
        placeholder: string
    }
}
