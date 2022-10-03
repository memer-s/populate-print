function populateHTML(UnpopulatedHTML, args) {
	let html = UnpopulatedHTML;
	const keys = Object.keys(args);
	for(let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = args[key];
		if(html != html.replace(`!{{${key}}}`, value)) {
			html = html.replace(`!{{${key}}}`, value);
		}
		else {
			console.error("Could not populate HTML properly.");
		}
	}
	return html;
}

function printContents(printContentHTML, style) {
	let iframeElement = document.createElement("iframe");
	iframeElement.style = "display: none;"
	document.body.append(iframeElement);

	console.log(style);

	let iframe = iframeElement.contentWindow;
	iframe.document.head.innerHTML = `<style>${style}</style>`
	iframe.document.body.innerHTML = printContentHTML.innerHTML || printContentHTML;
	iframe.print();

	iframeElement.remove();
}

export {populateHTML, printContents}