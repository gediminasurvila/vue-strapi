<template>
  <div>
    <v-app>
      <!-- Must have the app property -->
      <v-app-bar app>
              <navigation />
      </v-app-bar>
      <v-main>
        Hello World
      </v-main>
    </v-app>
    <header>

      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <aside>
      <slot name="aside"></slot>
    </aside>
    <footer>
      <slot name="footer"></slot>
    </footer>
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
