<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="email"
          label="E-mail"
          required
          maxlength="30"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :type="'password'"
          label="Password"
          required
          maxlength="30"
        ></v-text-field>
        <br>
          <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          :disabled="!valid"
          @click="login"
        >
        Login
        </v-btn>
      </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
