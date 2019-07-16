var name='global'
// getName()
var a = {
  name: 'a property',
  aFn:function(){
    console.error('-------------------------------------------------------------');
    console.log(this);
    getName.apply()
  },
  b:{
    name:'b property',
  } 
};
function getName(){
  console.log(this);
  console.log(this.name)
}

// getName.apply()
// getName.apply(a)
// getName.apply(a.b)
a.aFn()
