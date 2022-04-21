<template>
  <div>
    <button @click="increase">
      Click count: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { someOtherFunc } from '$src/other';

someOtherFunc();

const count = ref(0);

function increase() {
  count.value++;
}
</script>
