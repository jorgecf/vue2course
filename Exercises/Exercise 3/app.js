new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    // 1 - compute result with value
    computed: {
        result: function () {
            return (this.value != 37) ? 'Not there yet!' : 'done';
        }
    },
    // 2 - watch it change to reset value
    watch: {
        result: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.value = -1;
            }, 5000);
        }
    }
});