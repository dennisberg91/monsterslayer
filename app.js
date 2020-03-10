new Vue({
  el: '#app',
  data: {
    gameIsRunning: false,
    playerHealth: 100,
    monsterHealth: 100,
    fightHistory: [],
    attackType: 'attack'
  },
  computed: {},
  methods: {
    healthColor(health) {
      if (health < 50 && health > 20) {
        return 'orange';
      } else if (health <= 20) {
        return 'red';
      }

      return 'green';
    },
    startGame() {
      this.gameIsRunning = true;
      this.fightHistory = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      var min = 1;
      var max = 8;
      var monsterName = 'Diablo';
      var playerName = 'Gerrit'
      this.monsterHealth = this.monsterHealth -= this.calculateDamage(playerName, this.attackType, min, max);
      this.playerHealth = this.playerHealth -= this.calculateDamage(monsterName, this.attackType, min, max);
      this.checkWin();
    },
    heal: function (healType) {
      this.attackType = healType;
      if (this.playerHealth < 100 || this.monsterHealth < 100) {
        var min = 1;
        var max = 10;

        if (this.attackType === 'greater heal') {
          min = 8;
          max = 17;
        }

        var monsterName = 'Diablo';
        var playerName = 'Gerrit'
        this.monsterHealth = this.monsterHealth += this.calculateDamage(playerName, this.attackType, min, max);
        this.playerHealth = this.playerHealth += this.calculateDamage(monsterName, this.attackType, min, max);

        if (this.playerHealth >= 100) {
          this.playerHealth = 100;
        }

        if (this.monsterHealth >= 100) {
          this.monsterHealth = 100;
        }

      }
    },
    specialAttack: function () {
      this.attackType = 'special'
      var min = 7;
      var max = 15;
      var monsterName = 'Diablo';
      var playerName = 'Gerrit'
      this.monsterHealth = this.monsterHealth -= this.calculateDamage(playerName, this.attackType, min, max);
      this.playerHealth = this.playerHealth -= this.calculateDamage(monsterName, this.attackType, min, max);
      this.checkWin();
    },
    calculateDamage: function (name, specialAttack, min, max) {
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.sendLog(name, specialAttack, damage);
      return damage;
    },
    sendLog: function (name, specialAttack, damage) {
      this.fightHistory.push({
        name: name,
        attackType: specialAttack,
        damage: damage
      });
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        alert('YOU WON');
        this.gameIsRunning = false;
        return;
      }

      if (this.playerHealth <= 0) {
        alert('YOU LOST');
        this.gameIsRunning = false;
        return;
      }
    },
    giveUp: function () {
      this.gameIsRunning = false;
    }
  }
});
