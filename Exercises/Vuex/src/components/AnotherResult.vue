<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }} </p>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'; // mapGetters utility

    export default {
        computed:{
            ...mapGetters(['doubleCounter', 'stringCounter']),
            otherComputed() {
                return "hola";
            }
        } 
    }
</script>