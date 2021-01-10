<template>
  <main-layout>
    <div>
      <v-container>
        <h1>Login</h1>
        <v-form
          ref="form"
          lazy-validation
          :style="{ maxWidth: '600px' }"
          @submit.prevent="login"
        >
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="identifier"
                :rules="[rules.required]"
                type="text"
                name="identifier"
                label="Username or Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                name="password"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show = !show"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-btn color="primary" elevation="2" type="submit">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout';
import { mapActions } from 'vuex';

export default {
  components: { MainLayout },
  name: 'Login',
  data() {
    return {
      show: false,
      identifier: '',
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
    };
  },
  methods: {
    ...mapActions({
      signin: 'auth/login',
    }),
    login() {
      const valid = this.$refs.form.validate();
      if (valid) {
        const payload = {
          identifier: this.identifier,
          password: this.password,
        };
        this.signin(payload);
      }
    },
  },
};
</script>

<style></style>
