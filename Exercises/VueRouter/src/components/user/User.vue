<template>
    <div>
        <h1>The User Page</h1>
        <button class="btn btn-primary" @click="backToHome">Back to home</button>
        
        <hr>
        <!-- router view for the nested routes -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        backToHome() {
            // use vue-router programmatically
            this.$router.push({ path: '/' }); // the router
        }
    }
}
</script>