<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server 
                v-for="server in servers" 
                :server="server">
            </app-server>
        </ul>
    </div>
</template>

<script>

    import Server from './Server.vue';

    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: "Good"},
                    {id: 2, status: "Dying"},
                    {id: 3, status: "Bad"},
                    {id: 4, status: "Poor"}
                ]
            }
        },
        components: {
            appServer: Server,
        }
    }
</script>

<style>

</style>
