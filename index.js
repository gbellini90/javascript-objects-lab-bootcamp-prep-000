var recipes={};

function updateObjectWithKeyAndValue(object,key,value){
  let newObject=Object.assign({},object,{[key]:value})
  return newObject
}

