<template>
    <li class="list-group-item"
        @click="selectServer">
        Server #{{ server.id }}
    </li>
</template>

<script>

    import { serverBus } from '../../main.js';

    export default {
        props: ['server'],
        methods: {
            selectServer() {
                serverBus.$emit("serverSelected", this.server);
            }
        }
    }
</script>

<style scoped>

    li {
        cursor: pointer;
    }

</style>
