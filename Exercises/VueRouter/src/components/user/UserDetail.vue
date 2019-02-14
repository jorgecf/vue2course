<template>
    <div>
        <h3>User {{ $route.params.id }} Details</h3>
        <router-link class="btn btn-primary" tag="button" 
        :to="link">
            Edit details
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: { 
                name: 'edit',
                params: { id: this.$route.params.id }, 
                query: { para: 123 },
                hash: '#anchor'
            }
        }
    },
    // local before
    beforeRouteEnter(to, from, next) {
        console.log("local before");
        next();
    }
}
</script>
