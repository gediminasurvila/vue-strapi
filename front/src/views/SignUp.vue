<template>
  <main-layout>
    <div>
      <v-container>
        <h1>Sign up</h1>
        <v-form
          ref="form"
          lazy-validation
          :style="{ maxWidth: '600px' }"
          @submit.prevent="signup"
        >
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="username"
                :rules="[rules.required]"
                type="text"
                name="username"
                label="Username"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                type="email"
                name="email"
                label="Email"
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
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="passwordConfirm"
                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, rules.passwordMatch]"
                :type="showConfirm ? 'text' : 'password'"
                name="passwordConfirm"
                label="Confirm Password"
                hint="At least 8 characters"
                counter
                @click:append="showConfirm = !showConfirm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-btn type="submit" color="primary" elevation="2">Sign up</v-btn>
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
  name: 'SignUp',
  data() {
    return {
      show: false,
      showConfirm: false,
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        passwordMatch: () => {
          if (this.password !== this.passwordConfirm) {
            return `The passwords you entered don't match`;
          } else return true;
        },
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },
  methods: {
    ...mapActions({
      register: 'auth/register',
    }),
    signup() {
      const valid = this.$refs.form.validate();
      if (valid) {
        const payload = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        this.register(payload);
      }
    },
  },
};
</script>

<style></style>
