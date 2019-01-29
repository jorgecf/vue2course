export const computedMixin = {
    computed: {
        reversedText() {
            return this.t1.split("").reverse().join("");
        },
        countedText() {
            return this.t2 + ' ' + this.t2.length;
        }
    }
};