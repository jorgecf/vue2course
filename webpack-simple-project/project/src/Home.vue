<template>
    <div>
        <p>Home: {{ msg }}</p>
        <button @click="changeMsg">Say goodbye!</button>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
        msg: "hello world!"   
    }
  },

  methods: {
      changeMsg() { // ES6 style
            this.msg ="bye world";
      }
  }

}
</script>

<style>

</style>
