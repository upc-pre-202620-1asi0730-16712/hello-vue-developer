<script setup>

import {ref} from "vue";
import {Developer} from "@/greetings/domain/model/developer.entity.js";

const firstName = ref("");
const lastName = ref("");
const errorMessage = ref("");

const emit = defineEmits(['developer-registered', 'registration-deferred']);

function submitRegistrationRequest() {
  const developer = new Developer(firstName.value, lastName.value);
  if (developer.isRegisterable()) {
    emit("developer-registered", { developer });
    clearFields();
    errorMessage.value = "";
  } else {
    errorMessage.value = "Please provide both first name and last name.";
  }
}

function deferRegistration() {
  emit("registration-deferred", { developer: null });
  clearFields();
  errorMessage.value = "";
}

function clearFields() {
  firstName.value = "";
  lastName.value = "";
  errorMessage.value = "";
}
</script>

<template>

  <div>
    <h2>New Developer</h2>
    <div>
      <form @submit.prevent="submitRegistrationRequest">
        <div class="field">
          <label for="firstName">First Name</label>
          <input id="first-name" v-model="firstName" type="text" />
        </div>
        <div class="field">
          <label for="lastName">Last Name</label>
          <input id="last-name" v-model="lastName" type="text" />
        </div>
        <div class="actions">
          <button type="submit">Register</button>
          <button type="button" @click="deferRegistration">Later</button>
          <button type="button" @click="clearFields">Clear Fields</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error" role="alert">{{ errorMessage }}</p>
    </div>
  </div>

</template>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
button {
  cursor: pointer;
}
</style>