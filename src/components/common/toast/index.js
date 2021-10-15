import Toast from "./toast.vue";
const obj = {};
obj.install = function(Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //2.new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastConstructor();
  //3.将组件对象挂载到某个元素上
  toast.$mount(document.createElement("div"));
  //4.toast.$el就已经挂载到上面创建的div了,然后将div挂载到body上即可
  document.body.appendChild(toast.$el);
  //最后将toast挂载到vue的原型上
  Vue.prototype.$toast = toast;
};

export default obj;
