<template>
    <div class="container">

        <!-- quote grid, send quotes with props -->
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>

    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotes: ["The default quote"]
            }
        },
        components: {
            "app-quote-grid": QuoteGrid
        }
    }
</script>

<style>
</style>
