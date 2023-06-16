/*
    This feature allows to have either one or two sidebar columns within the content area.
    e.g. File Manager
 */

export const contentSidebar = () => {
    (() => {
        const content = document.getElementById("content");
        const search = document.getElementById("content-search");
        const input = document.getElementById("content-search-input");
        const trigger = document.querySelectorAll("[data-toggle]");

        if(trigger) {
            trigger.forEach(item => {
                let target = item.getAttribute("data-toggle");
                
                item.addEventListener("click", (e) => {
                    e.preventDefault();
                    
                    if(target === "sidebar") {
                        content.classList.remove("content-list-toggled");
                        content.classList.remove("content-body-toggled");
                        content.classList.add("content-sidebar-toggled");
                    }
                    else if (target === "list") {
                        content.classList.remove("content-sidebar-toggled");
                        content.classList.remove("content-body-toggled");
                        content.classList.add("content-list-toggled");
                    }
                    else if (target === "body") {
                        content.classList.remove("content-sidebar-toggled");
                        content.classList.remove("content-list-toggled");
                        content.classList.add("content-body-toggled");
                    }
                    else if (target === "search") {
                        search.classList.toggle("hidden");
                        input.focus();
                        input.value = "";
                    }
                });
            });
        }
    })();
};