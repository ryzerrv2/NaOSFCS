const ukFlag = document.getElementById("uk-flag");
const itFlag = document.getElementById("it-flag");

ukFlag.addEventListener("click", () => {
	const url = window.location.href;
	if(url.indexOf('en') > -1) return;
	const domain = url.substring(0, url.indexOf('.it') + 3);
	const indexActPage = url.indexOf('.it') + 3; 
	const actPage = '/en' + url.substring(indexActPage);
	const newUrl = domain + actPage;
	window.location.href = newUrl;
});

itFlag.addEventListener("click", () => {
	const url = window.location.href;
	if(url.indexOf('en') === -1) return;
	const domain = url.substring(0, url.indexOf('.it') + 3);
	const indexActPage = url.indexOf('.it') + 6; 
	const actPage = url.substring(indexActPage);
	const newUrl = domain + actPage;
	window.location.href = newUrl;
});