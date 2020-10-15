<template>
  <div id="app">
    <UserForm />
  </div>
</template>

<script>
import UserForm from "./components/UserForm";
export default {
  name: "App",
  components: {
    UserForm
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Commissioner&display=swap");
body {
  height: inherit;
  margin: 0;
  font-family: "Commissioner", sans-serif;
  font-size: 18px;
}
form,
label,
h1,
h2 {
  margin: 0;
  padding: 0;
}
button,
input {
  margin: 0;
  padding: 0;
  border: none;
  &:focus {
    outline: none;
  }
}
#app {
  width: 100%;
  height: 100vh;
  padding-top: 10px;
  background: url("./assets/beach.jpg");
  @media (max-width: 775px) {
    height: initial;
    background: url("./assets/mobile_beach.jpg");
    padding-bottom: 20px;
  }
}
</style>
