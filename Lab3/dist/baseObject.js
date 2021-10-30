"use strict";
var baseObject;
baseObject = {
    width: 0,
    length: 0,
    calcSize: function () { },
};
var rectangle;
rectangle = Object.create(baseObject);
rectangle.calcSize = baseObject.calcSize;
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
