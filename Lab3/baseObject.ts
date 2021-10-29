let baseObject:{
    width:number,
    length:number,
    calcSize(): any
}
baseObject = { 
	width: 0, 
	length: 0, 
    calcSize(){},
}; 
let rectangle: typeof baseObject;
rectangle = Object.create(baseObject); 
rectangle.calcSize = baseObject.calcSize;
rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10