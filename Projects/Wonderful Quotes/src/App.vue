<template>
    <div class="container">

        <!-- header -->
        <app-header :quotes-count="quotes.length" :max-quotes="maxQuotes"></app-header>

        <!-- add a new quote -->
        <app-new-quote @newQuote="updateQuotes"></app-new-quote>

        <!-- quote grid, send quotes with props -->
        <app-quote-grid @quoteDeleted="deleteQuote" :quotes="quotes"></app-quote-grid>

        <div class="row">
            <div class="col-12 text-center footer">
                Click on any quote to delete it
            </div>
        </div>

    </div>
</template>

<script>

    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotes: ["The default quote"]
            }
        },
        methods: {
            updateQuotes(quote) { // data was passed by NewQuote's $emit
                if(this.quotes.length < this.maxQuotes) {
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            "app-quote-grid": QuoteGrid,
            "app-new-quote": NewQuote,
            "app-header": Header
        }
    }
</script>

<style scoped>

    .footer {
        background-color: #D3D3D3;
    }

</style>
