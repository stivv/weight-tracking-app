<template>
  <h1>My Weight tracking app</h1>

  <make-form v-if="showForm" @close="showForm = false" />
  
  <div v-else>
    <h4>Weight data (date - weight)</h4>

    <button type="button" @click="showForm = true">Add new record</button>


    <p v-for="(record, idx) in records" :key="idx">
      <b>{{ record.date }} - </b>{{ record.weight }}
    </p>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed, ref } from 'vue'
  import MakeForm from './components/MakeForm.vue'

  const store = useStore()
  const showForm = ref(false)
  const records = computed(() => store.getters['getRecords'])  
</script>

