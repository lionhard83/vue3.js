Vue.component('alessandro', {
  template: `
    <p>
      Ciao sono Alessandro
    </p>
  `
})

Vue.component('unknown', {
  props:['name', 'color'],
  template: `
    <p style="background-color:{{color}};">
      !Ciao sono {{name}}
    </p>
  `
})

Vue.component('navbar', {
  template: `
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
  </nav>`
})

Vue.component('jumbotron', {
  props:['fn1','x'],
  methods:{
    printHello: function() {
      console.log("Hello component jumbotron");
      this.x = this.x * 2;
    }
  },
  template: `
  <div class="jumbotron">
      <h1 class="display-4">Hello, world! {{x}}</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <button class="btn btn-primary btn-lg" @click='fn1 ? fn1() : printHello()'>yahooo</button>
      </p>
  </div>
  `
})

Vue.component('line1', {
  props:['order'],
  template: ` <li class="list-group-item d-flex justify-content-between align-items-center">
    {{order.products}}-€{{order.price}}
    <button @click='order.add()' type="button" class="btn btn-outline-success">Add</button>
    <button :disabled="order.amount == 0" @click='order.amount > 0 ? order.amount-- : "" ' type="button" class="btn btn-outline-danger">Substract</button>
    <span v-bind:class="[order.amount != 0 ? 'badge-success' : 'badge-danger']"  class="badge">{{order.amount != 0 ? "Available":"Sold out"}}</span>
    <span class="badge badge-primary badge-pill">{{order.amount}}</span>
  </li>`
})
