function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) { 
    	return 'Nieprawidłowe dane';
	}
	var triangleArea = (a * h / 2);
	    console.log ('Pole trójkąta = ');
		return triangleArea;
}
var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(-1, 22);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(3, 7);
console.log(triangle3Area);