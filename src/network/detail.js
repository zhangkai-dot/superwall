import { request } from "./request";
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
export function getRecommend() {
  return request({
    url: "/recommend"
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
export class GoodsParams {
  constructor(info, rule) {
    this.Image = info.Image ? info.Image[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
