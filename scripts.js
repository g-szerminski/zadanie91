function getTriangleArea(a, h) {
	var triangleArea = (a*h/2);
	if (a <= 0) {
		alert('Podana liczba musi być liczbą dodatnią');
		console.log ('Podana liczba jest mniejsza lub równa zero');
	} else if (h <= 0) {
		alert('Podana liczba musi być liczbą dodatnią');
		console.log ('Podana liczba jest mniejsza lub równa zero');
	} else {
		alert('Pole trójkąta wynosi ' + triangleArea);
	    console.log ('Pole trójkąta = ' + triangleArea);
	}
	return triangleArea;
}
//getTriangleArea(4, 20);

function TriangleArea(triangle1Area, triangle2Area, triangle3Area) {
	var triangle1Area = getTriangleArea(10, 15);
	console.log(triangle1Area);
	var triangle2Area = getTriangleArea(-1, 22);
	console.log(triangle2Area);
	var triangle3Area = getTriangleArea(3, 7);
	console.log(triangle3Area);
}
TriangleArea();