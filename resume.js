document.querySelectorAll(".work-header").forEach((button) => {
button.addEventListener("click", () => {
const isExpanded = button.getAttribute("aria-expanded") === "true";

```
    button.setAttribute("aria-expanded", String(!isExpanded));
});
```

});
