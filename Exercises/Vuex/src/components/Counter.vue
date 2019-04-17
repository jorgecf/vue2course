<template>
    <div>
        <button class="btn btn-primary" @click="increment(199)">Increment</button>
        <button class="btn btn-primary" @click="decrement(199)">Decrement</button>
    </div>
</template>

<script>

    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations(['increment', 'decrement']) // increment from mutation is linked with local increment function
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>