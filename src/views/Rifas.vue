<script lang="ts">
export default{
  data() {
    return {
      rifas:[]
    };
  },
  mounted() {
    fetch('http://127.0.0.1:8000/Todas-las-Rifas/')
    .then((res) => res.json())
    .then((res) => this.rifas = res);
  },
};
</script>

<template>
  <h1>RIFAS</h1>
  <RouterLink to="/">USUARIOS</RouterLink>
  <p></p>
  <p></p>
  <p></p>
  <h3>ESTADO ------------------- CANTIDAD ------------------- PRECIO ------------------- PREMIOS</h3>
  
  <div v-for="p in rifas" :key="p.id">
    <p>
      ({{ p.id }})-{{ p.estado }} ----------------------------------- {{ p.cantidad }} ---------------------------------- {{ p.precio }} ------------------------------ {{ p.premios }}
    </p>
  </div>
    
    

</template>

<style>
</style>
