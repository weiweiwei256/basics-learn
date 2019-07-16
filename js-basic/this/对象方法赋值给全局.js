var name='global'
var a = {
  name: 'a property',
  b:{
    name:'b property',
    getName: function() {
      console.log(this)
      console.log(this.name)
    }
  } 
};
a.b.getName()
a.aFun = a.b.getName
a.aFun()
var gFun = a.b.getName
gFun();