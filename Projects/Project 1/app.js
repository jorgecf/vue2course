new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameOnCourse: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameOnCourse = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        monsterAttack: function (min, max) {
            // we get attacked
            var d = this.calculateDamage(min, max);
            this.playerHealth -= d;
            this.turns.unshift({ isPlayer: false, damage: d });

            this.checkWin();
        },
        attack: function () {
            // we attack
            var d = this.calculateDamage(3, 10);
            this.monsterHealth -= d;
            this.turns.unshift({ isPlayer: true, damage: d });

            this.monsterAttack(3, 10);
        },
        specialAttack: function () {
            this.attack(5, 30);
        },
        heal: function () {
            this.playerHealth = Math.min(100, this.playerHealth + 10);
            this.monsterAttack(3, 10);
        },
        giveUp: function () {
            this.gameOnCourse = false;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0 || this.playerHealth <= 0) {
                if (confirm('Another one?')) { this.startGame(); }
                else { this.gameOnCourse = false; }
            }
        }

    }


});