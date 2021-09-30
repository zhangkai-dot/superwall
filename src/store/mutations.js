import { ADD_COUNTER, ADD_TO_CART } from "./mutaton-type";
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  }
  // addCart(state, payload) {
  //   // let oldProduct = null;
  //   // for (let item of state.cartList) {
  //   //   if (item.iid === payload.iid) {
  //   //     oldProduct = item;
  //   //   }
  //   // }
  //   let oldProduct = state.cartList.find(item => item.iid === payload.iid);
  //   if (oldProduct) {
  //     oldProduct.count += 1;
  //   } else {
  //     payload.count = 1;
  //     state.cartList.push(payload);
  //   }
  // }
};
