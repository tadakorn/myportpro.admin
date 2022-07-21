<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  email: null,
  password: null,
})

function login() {
  axios({
    method: 'post',
    url: 'https://api.myport.pro/v1/auth/token',
    data: {
      email: state.email,
      password: state.password,
    }
  }).then((response) => {
    console.log(response.data)
  })
}
</script>

<template>
  <main>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">Myport.Pro Admin</h5>
              <div class="card-text mt-4">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="state.email" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="state.password">
                </div>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary" type="button" @click="login">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
