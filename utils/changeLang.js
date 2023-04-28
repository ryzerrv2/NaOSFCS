const ukFlag = document.getElementById("uk-flag");
const itFlag = document.getElementById("it-flag");

ukFlag.addEventListener("click", () => {
	const url = window.location.href;

	const domain = url.substring(0, url.indexOf('.it') + 3) + '/en/';

	const indexActPage = url.lastIndexOf('/') + 1; 

	const actPage = url.substring(indexActPage);
					
	const newUrl = domain + actPage;

	window.location.href = newUrl;
});

itFlag.addEventListener("click", () => {
	const url = window.location.href;

	const domain = url.substring(0, url.indexOf('.it') + 3);

	const indexActPage = url.lastIndexOf('/') + 1; 

	const actPage = url.substring(indexActPage);
					
	const newUrl = domain + actPage;

	window.location.href = newUrl;
});