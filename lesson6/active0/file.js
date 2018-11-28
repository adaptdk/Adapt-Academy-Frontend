const myFunction = () => {
	let foo = "my string";

	const bar = foo ? foo : false;

	console.log(bar);

	for (var i = 0;    i < 8; i++) {
		for (var k = 0; k < 8; k++) {
			bar = "nex string" + k + i;
		}
	}

	if(bar == true){
		bar = "new string which bis very long and have nothingh in it so to make it fold or smth idk";
	}



	return bar;

};

myFunction();