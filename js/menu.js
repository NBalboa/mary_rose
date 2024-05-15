document.addEventListener("DOMContentLoaded", function () {
    // console.log("Dom is Ready");

    document.getElementById("menu_btn").addEventListener("click", function () {
        const menu_items = document.querySelector(".menu_items");

        if (!menu_items.classList.contains("hidden")) {
            menu_items.classList.add("hidden");
            this.innerHTML = "Menu";
        } else {
            menu_items.classList.remove("hidden");
            this.innerHTML = "Close";
        }
        // console.log(menu_items.classList.add("."));
        // menu_items.c
    });
});
