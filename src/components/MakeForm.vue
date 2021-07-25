<template>
  <form @submit.prevent="submit">
    <label for="weight">Enter your weight here:</label>
    <br/>
    <input type="number" v-model="form.weight" id="weight">

    <div style="margin-top: 5px">
      <button type="submit">Submit</button>
      <button type="button" @click="$emit('close')">Cancel</button>
    </div>
  </form>
</template>

<script setup>
  import { reactive } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const emit = defineEmits(['close'])

  const form = reactive({weight: ''})
  const submit = () => {
    if(!form.weight){
      alert('Please enter your weight.')
      return
    }
    store.dispatch('addWeightRecord', form)
    emit('close')
  }
</script>
