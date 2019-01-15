<template>
    <!-- Full Name (First Name + Last Name) -->
    <div class="form-group">
    <label for="firstName">First name</label>
    <input
            type="text"
            id="firstName"
            class="form-control"
            @input="nameChanged(1, $event)"
            :value="fn"> <!-- we use value for props, is not a vmodel -->

    <label for="lastName">Last name</label>
    <input
            type="text"
            id="lastName"
            class="form-control"
            @input="nameChanged(2, $event)"
            :value="ln">
    </div>
</template>

<script>
export default {
    props: ["fn", "ln"],
    methods: {
        nameChanged(idx, event) {
            if(idx == 1) {
                this.$emit("input", event.target.value + '' + this.ln);
            } else {
                this.$emit("input", this.fn + ' ' + event.target.value);
            }
        }
    }
}
</script>

<style scoped>

</style>


