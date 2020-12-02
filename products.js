var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      products: []
    };
  },
  methods: {
    loadProducts: function() {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(console.log(response.data))
      .then(response => (this.products = response)
      });
    }
  }
});