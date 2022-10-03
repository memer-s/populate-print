import {populateHTML, printContents} from './populate-print.js'

document.querySelector("#print").addEventListener("click", async () => {
	const text = await (await fetch("print.html")).text();
	printContents(populateHTML(text, {"name": document.querySelector("#name").value, "random": document.querySelector("#rand").value}), await (await fetch("print.css")).text());
})