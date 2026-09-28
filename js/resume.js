document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".work-header");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isExpanded));
        });
    });
});
