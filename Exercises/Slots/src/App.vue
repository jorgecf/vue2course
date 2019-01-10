<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectComponent('app-blue')" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectComponent('app-green')" class="btn btn-success">Load Green Template</button>
                <button @click="selectComponent('app-red')" class="btn btn-danger">Load Red Template</button>
                <hr>
                
                <component :is="selectedComponent">
                    <h1>Color template</h1>
                </component>

            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedComponent: ""
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            selectComponent(sc) {
                this.selectedComponent = sc;
            }
        }
    }
</script>

<style>
</style>
