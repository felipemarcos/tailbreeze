//-------------------------------------------------------------------------------------
// Resize JsVectorMaps maps on document resize.
//-------------------------------------------------------------------------------------
export const resizeMap = (mapWrapper) => {
	const MAP_PARENT = mapWrapper.parentNode;

	let mapParentWidth = MAP_PARENT.offsetWidth;
	let paddingWidth = mapParentWidth < 550 ? 50 : 120;

	mapWrapper.style.width = mapParentWidth - paddingWidth + "px";
	mapWrapper.style.height = mapWrapper.offsetWidth / 2 + "px";
};
