document.addEventListener("DOMContentLoaded", function () {

    /*
     * Work Experience
     * Projects
     * Master / Bachelor
     *
     * These individual items can expand and collapse.
     */

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


    /*
     * Main section controls
     *
     * Education and Certifications are controlled
     * from their main section headers.
     */

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
