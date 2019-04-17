<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 100, duration: 1000})">Increment(100)</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 100, duration: 1000})">Decrement(100)</button>
    </div>
</template>

<script>

    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions(['asyncIncrement', 'asyncDecrement']),
        }
    }
</script>