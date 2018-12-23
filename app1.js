// first vue instance
new Vue({
    // Element which holds this instance
    el: "#app1",

    // Data os this instance
    data: {
        title: 'App one',
        rawSubtitle: '<i>Subtitle</i>',
        date: '',
        counter: 0,
        model1: 'Jorge',
        clickedSquare: false,
        show: true,
        stuff: [
            {name: "One", age: 33},
            {name: "Two", age: 44}
        ]
    },

    // Callable methods inside this element
    methods: {
        updateDate: function () {
            this.date = new Date();
        },
        updateCounter: function (inc, event) {
            this.counter += inc;
        },
        result: function () {
            return "result is " + this.counter;
        }
    },

    // Computed roperties are only called (computed or recalculated)
    // when their values are changed (watch style)
    computed: {
        result2: function () { // depends on this.counter
            return "result is " + this.counter;
        },
        cssSquare: function() {
            return {
                'red': this.clickedSquare
            }
        }
    },

    // Watches (computed properties are recommended over this)
    // although they are useful with async tasks
    watch: {
        counter: function (value) {
            // code...
        }
    }
})