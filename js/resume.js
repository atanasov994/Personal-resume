document.addEventListener("DOMContentLoaded", function () {

    /*
     * Projects + Work Experience
     */
    const accordionButtons = document.querySelectorAll(
        ".accordion-button"
    );

    accordionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const expanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute(
                "aria-expanded",
                String(!expanded)
            );

        });

    });


    /*
     * Education + Certifications
     *
     * These control ONLY the main sections.
     */
    const mainSectionButtons = document.querySelectorAll(
        ".main-section-button"
    );

    mainSectionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const expanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute(
                "aria-expanded",
                String(!expanded)
            );

        });

    });


    /*
     * Master + Bachelor
     *
     * These are the only expandable items
     * inside Education.
     */
    const educationButtons = document.querySelectorAll(
        ".education-button"
    );

    educationButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const expanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute(
                "aria-expanded",
                String(!expanded)
            );

        });

    });

});
