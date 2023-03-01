import { ItemData } from "./models/app.models";

export abstract class Item {
  item: ItemData;

  constructor(itemData:ItemData) {
    this.item = itemData;
  }

}
