<template>
  <h1>My Weight tracking app</h1>
  <h4>Weight data (date - weight)</h4>
  <p v-for="(record, idx) in records" :key="idx">
    <b>{{ record.date }} - </b>{{ record.weight }}
  </p>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const records = computed(() => store.getters['getRecords'])

</script>

