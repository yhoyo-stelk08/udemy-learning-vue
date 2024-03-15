import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("render prop initial message", () => {
    const msg = "Reaction Timer Project";
    const wrapper = mount(App, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
