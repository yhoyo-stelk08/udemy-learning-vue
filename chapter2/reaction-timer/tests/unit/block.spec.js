import { mount } from "@vue/test-utils";
import Block from "@/components/Block.vue";

describe("Block.vue", () => {
  it("render div with Click Me text", () => {
    const wrapper = mount(Block);
    expect(wrapper.get("div").text()).toMatch("Click Me");
  });

  it("check the div have props named delay", () => {
    const wrapper = mount(Block);

    expect(wrapper.props()).toHaveProperty("delay");
  });
});
