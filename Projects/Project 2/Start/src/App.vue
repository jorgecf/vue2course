<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        
        <app-servers></app-servers>
        <hr>
        
        <app-footer></app-footer>
    </div>
</template>

<script>

    // Local imports
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Servers from './components/Servers.vue';

    export default {
        components: {
            "app-header": Header,
            "app-footer": Footer,
            "app-servers": Servers
            // ES6 syntax: 
            // Servers,
            // would create a Servers: Servers k-v
        }
    }

</script>

<style>

</style>
