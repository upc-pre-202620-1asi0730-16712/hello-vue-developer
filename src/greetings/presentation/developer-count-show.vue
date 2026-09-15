<script setup>

//<developer-count-show :developer-count="5" />

const { developerCount } = defineProps({
  developerCount: {
    type: Number,
    required: true,
  }
});

</script>

<template>
  <div>
    <p>Developers registered: {{ developerCount }}</p>
    <p><b>Note:</b> Unknown developers are not considered.</p>
  </div>
</template>

<style scoped>
</style>