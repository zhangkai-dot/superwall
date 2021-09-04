import { request } from "./request";
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.cFans = shopInfo.cFans;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}
