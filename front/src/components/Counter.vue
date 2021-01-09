<template>
  <div>
    <div>Count: {{ count }}</div>
    <div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'counter',
  computed: {
    count() {
      return this.$store.getters['counter/count'];
    },
  },
  methods: {
    ...mapActions({
      increment: 'counter/increase',
      decrement: 'counter/decrease',
    }),
  },
};
</script>

<style></style>
