<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

#app {
  box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
  padding: 0 20px 20px;
}

hr {
  overflow: visible;
  box-sizing: content-box;
  height: 0;
}

a {
  font-weight: 600;
  color: #39b982;
  background-color: transparent;
}

img {
  width: 100%;
  border-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 50px;
  font-weight: 700;
}

h2 {
  font-size: 38px;
  font-weight: 700;
}

h3 {
  font-size: 28px;
  font-weight: 700;
}

h4 {
  font-size: 21px;
  font-weight: 700;
}

h5 {
  font-size: 16px;
  font-weight: 700;
}

h6 {
  font-size: 15px;
  font-weight: 700;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

.eyebrow {
  font-size: 20px;
}

.-text-primary {
  color: #39b982;
}

.-text-base {
  color: #000;
}

.-text-error {
  color: tomato;
}

.-text-gray {
  color: rgba(0, 0, 0, 0.5);
}

.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}

.badge {
  font-size: 13px;
  font-weight: 400;
  line-height: 26px;
  display: inline-flex;
  width: auto;
  height: 26px;
  margin: 0 5px;
  padding: 0 7px;
  border-radius: 13px;
  background: transparent;
}

.badge.-fill-gradient {
  color: #fff;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}

button,
label,
input,
optgroup,
select,
textarea {
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  display: inline-flex;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: none;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}

label {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
}

input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}

textarea {
  font-size: 20px;
  overflow: auto;
  width: 100%;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  appearance: none;
}

[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  font-size: 20px;
  width: 100%;
  height: 52px;
  padding: 0 10px;
}

[type="text"]:focus,
[type="number"]:focus,
[type="search"]:focus,
[type="password"]:focus {
  border-color: #39b982;
}

::-webkit-file-upload-button {
  appearance: button;
  font: inherit;
}

[hidden] {
  display: none;
}

select {
  vertical-align: middle;
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  appearance: none;
  appearance: none;
  appearance: none;
}

select:focus {
  border-color: #39b982;
  outline: 0;
}

select:focus::ms-value {
  color: #000;
  background: #fff;
}

select::ms-expand {
  opacity: 0;
}
</style>
