const http = require('http');
//http is a core module, so we don't need to install it

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
	//createServer is a method that takes a callback function as an argument
	const { url } = req;
	console.log(url);
	//req is the request object and res is the response object
	if (url === "/translations") {
		const translations = { 1: "one", 2: "two", 3: "three" };

		res.setHeader("Content-Type", "application/json");
		res.write(JSON.stringify(translations));
        res.end();
	}
	
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
    //backticks are used for string interpolation
});

 