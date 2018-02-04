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
getTriangleArea(4, 30);

/*function randomizeTriangleArea(triangle1Area, triangle2Area, triangle3Area) {
	var triangle1Area = getTriangleArea(4, -10);
	var triangle2Area = getTriangleArea(10, 25);
	var triangle3Area = getTriangleArea(8, 19);
	return random = randomizeTriangleArea;
}
randomizeTriangleArea();*/