<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server == null">Select a server please?</p>
        <p v-else>{{ server }}</p>

        <button @click="resetServer">Reset to normal</button>
    </div>

</template>

<script>

    import { serverBus } from '../../main.js';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            resetServer() {
                if(this.server)
                    this.server.status = "Normal (reset)";
            }
        },

        // When this component gets created we set up a listener on the event bus
        created() {
            serverBus.$on("serverSelected", (selectedServer) => this.server = selectedServer);
        }
    }

</script>

<style>

</style>
