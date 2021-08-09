interface NameValue {
    name: string,
    value: any
}

declare var NameValue: {
    prototype: NameValue;
    new(): NameValue;
}


// 下拉列表内容
interface SelectItem extends NameValue {

}

declare var SelectItem: {
    prototype: SelectItem;
    new(): SelectItem;
}
