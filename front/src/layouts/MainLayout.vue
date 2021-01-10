<template>
  <div>
    <v-app>
      <!-- Must have the app property -->
      <v-app-bar app>
        <navigation />
        <slot name="header"></slot>
      </v-app-bar>
      <v-container>
        <v-main>
          <slot></slot>
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Navigation from '../components/Navigation';

export default {
  components: {
    Navigation,
  },
  name: 'main-layout',
};
</script>
