import { autoSize } from "./vendors/autoSize";
import { quillEditor } from "./vendors/quill";
import { inputMask } from "./vendors/imask";
import { niceSelect2 } from "./vendors/niceSelect2";
import { dropzoneJs } from "./vendors/dropzone";
import { colorPicker } from "./vendors/vanillaColorful";
import { inputSlider } from "./vendors/noUiSlider";
import { emblaCarousel } from "./vendors/emblaCarousel";
import { vanillajsDatepicker } from "./vendors/vanillajsDatepicker";
import { tooltips } from "./vendors/tippy";

// Simplebar (scrollbars)
import "simplebar";
import "simplebar/dist/simplebar.min.css";

// Autosize textareas
autoSize();

// Quill editor
quillEditor();

// Input mask
inputMask();

// NiceSelect 2
niceSelect2();

// Color picker
colorPicker();

// NoUiSlider
inputSlider();

// Embla carousel
emblaCarousel();

// Vanillajs Datepicker
vanillajsDatepicker();

// Tippy tooltips
tooltips();

// Dropzone.js
dropzoneJs();