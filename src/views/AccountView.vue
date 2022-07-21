<template>
  <div class="container">
    <div class="d-grid">
    <div class="m-5 card text-center">
      <div class="border border-dark card-header text-start">
        Account
    <div class="row">
      <div class="col-12 col-sm-5">
        <form class="d-flex my-4" role="Email search">
          <input class="form-control me-2" type="Email search" placeholder="Email Search" aria-label="Email Search">
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Email</th>
          <th scope="col">Exchange</th>
          <th scope="col">Start Amount</th>
          <th scope="col">Active</th>
          <th scope="col">Start Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>