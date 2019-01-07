<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User is called {{ name }}</p>
        <button @click="resetCallback">Reset the name...</button>
    </div>
</template>

<script>
    export default {
        props: { // properties set from outside
            // name: String, // could be an array: [String, Boolean]
            name: { // another way
                type: String,
                // required: true,
                default: "default"
            },
            resetCallback: Function,
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
