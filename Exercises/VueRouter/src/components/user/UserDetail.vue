<template>
    <h3>User {{ id }} Details</h3>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>
