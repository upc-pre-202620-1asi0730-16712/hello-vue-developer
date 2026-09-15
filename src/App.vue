<script lang="js" setup>
import DeveloperRegistration from "@/greetings/presentation/developer-registration.vue";
import DeveloperGreeting from "@/greetings/presentation/developer-greeting.vue";
import DeveloperCountShow from "@/greetings/presentation/developer-count-show.vue";
import {ref} from "vue";


const registeredDeveloper = ref(null);
const developerCount = ref(0);
const hasRegistered = ref(false);

function updateRegisteredDeveloperInfo(payload) {
  registeredDeveloper.value = payload;
  hasRegistered.value = true;
  updateDeveloperCount(payload);
}

function updateDeveloperCount(developer) {
  if (developer.isRegisterable()) {
    developerCount.value++;
  }
}

function resetRegisteredDeveloperInfo() {
  registeredDeveloper.value = null;
  hasRegistered.value = false;
}


</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <developer-registration
      @developer-registered="updateRegisteredDeveloperInfo"
      @registration-deferred="resetRegisteredDeveloperInfo"
  />
  <developer-greeting v-if="hasRegistered" :developer="registeredDeveloper" />
  <developer-count-show :developer-count="developerCount" />
</template>

<style scoped>
</style>
