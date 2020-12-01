/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "",
      showExtraInfo: false,
      fruits: ["apple", "banana", "watermelon", "pineapple"],
      newFruit: ""
    };
  },
  methods: {
    toggleElement: function() {
      this.showExtraInfo = !this.showExtraInfo;
    },
    addFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})