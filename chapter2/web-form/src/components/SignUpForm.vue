<template>
  <form @submit.prevent="handleSubmit">
    <label for="inputName">Name </label>
    <input type="text" name="inputName" v-model="name" />

    <label for="inputPass">Password </label>
    <input type="password" name="inputPass" v-model="password" />
    <div class="error" v-if="passwordError">{{ passwordError }}</div>

    <label for="selectRole">Role </label>
    <select name="selectRole" v-model="role">
      <option value="designer">Web Designer</option>
      <option value="developer">Web Developer</option>
    </select>

    <label for="inputSkill">Skill</label>
    <input
      type="text"
      name="inputSkill"
      v-model="tempSkill"
      @keyup.alt="addSkill" />
    <div v-for="skill in skills" class="pill">
      <span @click="removeSkill(skill)" class="skillSpan">{{ skill }}</span>
    </div>
    <div>
      <input type="checkbox" name="checkTerm" v-model="term" />
      <label for="checkTerm">Accept Term and Condition</label>
    </div>

    <div class="submit">
      <button>Register</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: "SignUpForm",
    data() {
      return {
        name: "",
        password: "",
        role: "",
        term: false,
        tempSkill: "",
        skills: [],
        passwordError: "",
      };
    },
    methods: {
      addSkill(e) {
        if (e.key === "," && this.tempSkill) {
          if (!this.skills.includes(this.tempSkill)) {
            this.skills.push(this.tempSkill);
          }
          this.tempSkill = "";
        }
      },
      removeSkill(skill) {
        // console.log(skill);
        this.skills = this.skills.filter((skillToRemove) => {
          return skill !== skillToRemove;
        });
      },
      handleSubmit() {
        this.passwordError =
          this.password.length > 5 ? "" : "Password must be at least 5 chars";
        this.password = "";

        if (!this.passwordError) {
          // display all submited info
          console.log("name: ", this.name);
          console.log("password: ", this.password);
          console.log("role: ", this.role);
          console.log("skills: ", this.skills);
          console.log("terms accepted: ", this.terms);
        }
      },
    },
  };
</script>
<style>
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }

  form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(215, 233, 205);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  input,
  select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }

  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }

  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }

  .submit {
    text-align: center;
  }
</style>
