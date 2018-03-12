var vm = new Vue({
  el:'#app',
  data: {
    message:'Hello Vue',
    credit: 5,
    newCredit: 0,
    orders: []
  },
  methods: {
      changeMessage: function(newMessage) {
        this.message = newMessage
      },
      setCredit: function(newCredit) {
        if (newCredit >= 0) {
          this.credit = newCredit;
        } else {
          this.credit = 0;
        }
      },
      printDump: function() {
        console.log("printDump");
      },
      printRock: function() {
        console.log("printRock");
      },
      loadOrders: function() {
        this.$http.get('http://localhost:3001/admin/orders?token=admin')
        .then(function(response){
          this.orders = response.body;
          for(var i=0; i<this.orders.length; i++) {
            this.orders[i].amount = 0;
            this.orders[i].add = function() {
              this.amount++;
            }
          }
          console.log("response:", response);
        })
      }
  },
  watch: {
    'message': function(n, old) {
      //console.log("new value:", n);
      //console.log("old value:", old);
    },
    'newCredit': function(newCredit, oldCredit) {
        if (newCredit >= 0) {
          this.credit = newCredit;
        } else {
          this.credit = 0;
        }
    }
  },
  computed: {
      sumOrdersAmount: function() {
          var total = 0;
          for(var i=0; i < this.orders.length; i++) {
              total += this.orders[i].amount;
          }
          return total;
      },
      sumOrdersPrice: function() {
          var price = 0;
          for(var i=0; i < this.orders.length; i++) {
              price += this.orders[i].amount * this.orders[i].price;
          }
          return price;
      }
  },
  created: function() {
    console.log("sono stato creato");
    this.loadOrders();
  }
})

/*vm.message = "ciao sono il nuovo valore";
//vm.setCredit(12);
vm.credit = 12;
setTimeout(function() {
  vm.changeMessage("torno ad hello vue");
  //vm.setCredit(-4);
  vm.credit = -4;
}, 2000);*/
