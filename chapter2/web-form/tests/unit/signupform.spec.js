import { mount } from "@vue/test-utils";
import SignUpForm from "@/components/SignUpForm";

describe("SignUpForm.vue", () => {
  it("Render initial form", () => {
    const wrapper = mount(SignUpForm);
    const inputName = wrapper.find('input[type="text"][name="inputName"]');
    const inputPass = wrapper.find('input[type="password"][name="inputPass"]');
    const selectRole = wrapper.find('select[name="selectRole"');
    const checkTerm = wrapper.find('input[type="checkbox"][name="checkTerm"]');
    const inputSkill = wrapper.find('input[type="text"][name="inputSkill"]');
    const submitBtn = wrapper.find("button");

    // test initial form is rendered
    expect(inputName.exists()).toBe(true);
    expect(inputPass.exists()).toBe(true);
    expect(selectRole.exists()).toBe(true);
    expect(checkTerm.exists()).toBe(true);
    expect(inputSkill.exists()).toBe(true);
    expect(submitBtn.exists()).toBe(true);
  });

  it("Check the property declared", () => {
    const wrapper = mount(SignUpForm);

    expect(wrapper.vm.$data).toHaveProperty("name");
    expect(wrapper.vm.$data).toHaveProperty("password");
    expect(wrapper.vm.$data).toHaveProperty("role");
    expect(wrapper.vm.$data).toHaveProperty("term");
    expect(wrapper.vm.$data).toHaveProperty("tempSkill");
    expect(wrapper.vm.$data).toHaveProperty("skills");
    expect(wrapper.vm.$data).toHaveProperty("passwordError");
  });

  it("Check if addSkill function exist", () => {
    const wrapper = mount(SignUpForm);
    const vm = wrapper.vm;

    expect(typeof vm.addSkill).toBe("function");
  });

  it("add skill when alt and comma key is pressed", async () => {
    const wrapper = mount(SignUpForm);

    // initial value in skills array
    wrapper.setData({ skills: ["HTML", "CSS"] });
    // add skill to skills array from tempSkill value
    wrapper.setData({ tempSkill: "Javascript" });
    // input element
    const inputSkill = wrapper.find('[name="inputSkill"]');

    // press alt and comma together
    await inputSkill.trigger("keyup", {
      key: ",",
      altKey: true,
    });
    // assert if javascript is contained in skills array
    expect(wrapper.vm.skills).toContain("Javascript");
    // assert after input the tempSkill value will be empty string
    expect(wrapper.vm.tempSkill).toBe("");
  });

  it("does not add skill if tempSkill is empty", async () => {
    const wrapper = mount(SignUpForm);

    // initial value in skills array
    wrapper.setData({ skills: ["HTML", "CSS"] });
    // simulate empty string for tempSkill
    wrapper.setData({ tempSkill: "" });
    const inputSkill = wrapper.find('[name="inputSkill"]');
    await inputSkill.trigger("keyup", {
      key: ",",
      altKey: true,
    });
    // assert skills array remain same
    expect(wrapper.vm.skills).toEqual(["HTML", "CSS"]);
  });

  it("does not add if skill is duplicate", async () => {
    const wrapper = mount(SignUpForm);

    // initial value in skills array
    wrapper.setData({ skills: ["HTML", "CSS"] });
    // simulate duplicate skill for tempSkill
    wrapper.setData({ tempSkill: "HTML" });

    // find input element
    const inputSkill = wrapper.find('input[name="inputSkill"]');

    await inputSkill.trigger("keyup.alt", {
      key: ",",
    });

    // assert skills array remain same
    expect(wrapper.vm.skills).toEqual(["HTML", "CSS"]);
  });

  it("remove skill if the skill is clicked", () => {
    const wrapper = mount(SignUpForm);

    // initial value in skills array
    wrapper.setData({ skills: ["HTML", "CSS", "javascript"] });
    // simulate function removeSkill trigger to remove CSS
    wrapper.vm.removeSkill("CSS");
    // Assert that the skill is removed from the skills array
    expect(wrapper.vm.skills).not.toContain("CSS");

    // simulate function removeSkill trigger to remove HTML
    wrapper.vm.removeSkill("HTML");
    // Assert that the skill is removed from the skills array
    expect(wrapper.vm.skills).not.toContain("HTML");
    // Assert only 1 value remain which is javascript
    expect(wrapper.vm.skills).toContain("javascript");
  });

  it("check the behaviour of handleSubmit function", async () => {
    const wrapper = mount(SignUpForm);
    /*
     * Simulate password less than 5 chars
     */
    // set initial password to be evaluated as password error
    await wrapper.setData({ password: "test" });
    // find the form
    const form = wrapper.find("form");
    // simulate form submisstion
    await form.trigger("submit");

    expect(wrapper.vm.passwordError).toBe("Password must be at least 5 chars");

    /*
     * Simulate password more than 5 chars
     */

    // set initial password to be evaluated as password error
    await wrapper.setData({ password: "testing" });
    // simulate form submisstion
    await form.trigger("submit");

    expect(wrapper.vm.passwordError).toBe("");
  });

  it("displays error message for short password on form submission", async () => {
    // Mount the component
    const wrapper = mount(SignUpForm);

    // Set a short password (less than 5 characters)
    await wrapper.setData({ password: "1234" });

    // Find the form element
    const form = wrapper.find("form");

    // Simulate form submission
    await form.trigger("submit");

    // Find the error message element
    const errorMessage = wrapper.find(".error");

    // Assert that the error message is displayed
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe("Password must be at least 5 chars");
  });
});
