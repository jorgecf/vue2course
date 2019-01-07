<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit the age</button>
    </div>
</template>

<script>

    import { eventBus } from '../main.js';

    export default {
        methods: {
            editAge() {
                this.age = 99;
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
