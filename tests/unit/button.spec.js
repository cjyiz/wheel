import { expect } from 'chai'
import Vue from 'vue'
// import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button'


describe("Button", () => {
    it("存在.", () => {
      expect(Button).to.be.ok;
    });
    // 测试用例名字叫'可以是设置icon',后面函数是测试用例代码
    it("可以设置icon.", () => {
      const Constructor = Vue.extend(Button);
      const vm = new Constructor({
        propsData: {
          icon: "shezhi"
        }
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.equal("#i-shezhi");
      vm.$destroy();
    });
    it("可以设置loading.", () => {
      const Constructor = Vue.extend(Button);
      const vm = new Constructor({
        propsData: {
          icon: "shezhi",
          loading: true
        }
      }).$mount();
      const useElements = vm.$el.querySelectorAll("use");
      expect(useElements.length).to.equal(1);
      expect(useElements[0].getAttribute("xlink:href")).to.equal("#i-loading");
      vm.$destroy();
    });
    it("icon 默认的 order 是 1", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Button);
      const vm = new Constructor({
        propsData: {
          icon: "shezhi"
        }
      }).$mount(div);
      const icon = vm.$el.querySelector("svg");
      expect(getComputedStyle(icon).order).to.eq("1");
      vm.$el.remove();
      vm.$destroy();
    });
    it("设置 iconPosition 可以改变 order", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Button);
      const vm = new Constructor({
        propsData: {
          icon: "shezhi",
          iconPosition: "right"
        }
      }).$mount(div);
      const icon = vm.$el.querySelector("svg");
      expect(getComputedStyle(icon).order).to.eq("2");
      vm.$el.remove();
      vm.$destroy();
    });
    it("点击 button 触发 click 事件", () => {
      const Constructor = Vue.extend(Button);
      const vm = new Constructor({
        propsData: {
          icon: "shezhi"
        }
      }).$mount();
  // 用别人的库，可以监测函数是否被调用
      const callback = sinon.fake();
      vm.$on("click", callback);
      vm.$el.click();
      expect(callback).to.have.been.called;
    });
})