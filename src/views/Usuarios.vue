<script lang="ts">
export default{
  data() {
    return {
      usu: []
    };
  },
  mounted() {
    fetch('http://127.0.0.1:8000/Todos-los-Usuarios/')
    .then((res) => res.json())
    .then((res) => this.usu = res);
  },
}; 
</script>

<template>
  <h1>TODOS LOS USUARIOS</h1>
  <RouterLink :to="{ name:'data-rifas' }">VER RIFAS</RouterLink>

  <h3>NOMBRE ------------------------------------------ SALDO ------------------------------------------ PREMIOS GANADOS ------------------------------------------ RECARGAS</h3>

  <div v-for="u in usu" :key="usu.id">
    <p>
      ({{ u.id }})-{{ u.nombre }} ------------------------------------------------------------ {{ u.saldo }} ------------------------------------------------------- {{ u.mis_premios }} ----------------------------------------------------------------------- {{ u.recargas }}
    </p>
  </div>

</template>

<style>
</style>
