import autosize from 'autosize';

export const autoSize = () => {
    const autoSizeTarget = document.querySelectorAll("[data-autosize]");

    if (autoSizeTarget.length > 0) {
        autosize(autoSizeTarget);
    }
}