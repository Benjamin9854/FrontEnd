<template>
    <h1>FORMULARIO</h1>

    <form @submit="sendForm">

        <input type="submit" value="Iniciar">

    </form>

</template>

<script lang="ts">
export default {
    data() {
        return {

        }
    },
    methods: {
        sendForm(e){

            e.preventDefault();
            console.log("aaa")
        }
    },
}

</script>