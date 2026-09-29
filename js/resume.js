document.addEventListener("DOMContentLoaded", function () {

    const expandableButtons = document.querySelectorAll(
        ".work-header, .expandable-header"
    );


    expandableButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

        });

    });


    const sectionButtons = document.querySelectorAll(
        ".section-header"
    );


    sectionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

        });

    });

});
