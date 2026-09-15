<script setup>

import {Developer} from "@/greetings/domain/model/developer.entity.js";
import {computed} from "vue";

const { developer } = defineProps({
  developer: {
    type: Developer,
    required: true
  },
});

const greeting = computed(() => {
  return (developer && developer.isRegisterable())
      ? `Congrats ${developer.fullName}!, identified by ID: ${developer.id}`
      : 'Welcome Anonymous Developer!';
});

</script>

<template>
<p>{{ greeting }}</p>
</template>

<style scoped>

</style>