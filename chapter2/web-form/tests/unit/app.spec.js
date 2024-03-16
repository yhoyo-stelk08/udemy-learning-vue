import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import SignUpForm from "@/components/SignUpForm.vue";


describe("App.vue", () => {
  it("Import, Include and Render Child Component", () => {
    // mount the parent component
    const wrapper = mount(App);

    // Assert that ChildComponent is imported by checking if it's registered as a component in ParentComponent
    expect(wrapper.findComponent(SignUpForm).exists()).toBe(true);
  });
});
