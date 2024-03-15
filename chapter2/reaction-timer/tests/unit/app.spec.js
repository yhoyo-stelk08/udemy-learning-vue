import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import Block from "@/components/Block.vue";

describe("App.vue", () => {
  it("render title and play button", () => {
    const wrapper = mount(App);
    expect(wrapper.get("h1").text()).toBe("Reaction Timer Project");
    expect(wrapper.get("button").text()).toBe("Play");
  });

  it("start the game when play button is clicked", async () => {
    const wrapper = mount(App);
    const button = wrapper.find("button");

    await button.trigger("click");

    // Assert that isPlaying is true
    expect(wrapper.vm.isPlaying).toBe(true);

    // Assert that delay is updated
    expect(wrapper.vm.delay).toBeGreaterThanOrEqual(1000);
    expect(wrapper.vm.delay).toBeLessThan(8000);


  });

  it("renders Block component when isPlaying is true", async () => {
    const wrapper = mount(App);

    // click to play button
    await wrapper.find("button").trigger("click");

    // Assert that the Block component is rendered
    expect(wrapper.findComponent(Block).exists()).toBe(true);

    // Assert that the delay prop is passed correctly
    expect(wrapper.findComponent(Block).props("delay")).toBe(wrapper.vm.delay);
  });
});
