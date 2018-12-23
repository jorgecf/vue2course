new Vue({
  el: '#exercise',
  data: {
    effectClasses: { // css syntax
      highlight: true,
      shrink: false,
    },
    userClass: '',
    isVisible: true,
    mystyle: {
      width: '150px',
      height: '150px',
      backgroundColor: 'blue'
    },
    barWidth: {
      width: '0px'
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 500);
    },
    startProgress: function () {
      var vm = this;
      var width = 0;

      setInterval(function () {
        vm.barWidth.width = width;
        width += 10;
      }, 150);
    }
  }
});
