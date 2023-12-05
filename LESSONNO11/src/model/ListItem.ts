export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "", // in this name property have _id for tell different id in parameter and _id in property class
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  get id(): string {
    // getter
    return this._id;
  }

  set id(id: string) {
    // setter
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}
