const resizeYesButton = (button) => {
	const yesBtn = document.getElementById("yesBtn");
	const currentWidth = yesBtn.offsetWidth;
	const maxWidth = window.innerWidth * 0.6;
	const maxHeight = window.innerHeight * 0.6;
	const newWidth = Math.min(currentWidth * 1.5, maxWidth);
	const newHeight = Math.min(currentWidth * 1.25, maxHeight);
	yesBtn.style.width = `${newWidth}px`;
	yesBtn.style.height = `${newHeight}px`;

	const yesBtnText = window
		.getComputedStyle(yesBtn, null)
		.getPropertyValue("font-size");
	const maxFontSize = parseInt(yesBtnText) * 2;
	yesBtn.style.fontSize = `${Math.min(maxFontSize, 48)}px`;
};

const resetYesButtonSize = () => {
	const yesBtn = document.getElementById("yesBtn");
	yesBtn.style.width = "";
	yesBtn.style.height = "";
	yesBtn.style.fontSize = "";
};

const togglePortal = () => {
	const portal = document.getElementById("yesBtnPortal");
	portal.classList.toggle("hidden");
};

const triggerYesButton = () => {
	togglePortal();
	resetYesButtonSize();
};
