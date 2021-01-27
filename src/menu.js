const menu = function (frame) {
    const newTab = document.createElement("div");
    newTab.style.cssText = "background-color: antiquewhite; display: flex; margin: 0 auto; background-color: white; padding: 2%;";
    newTab.classList.add("tabContent");
    newTab.innerHTML = "Burger&emsp;&emsp;10$<br><br>Cola&emsp;&emsp;2$";
    const oldDiv = document.querySelector(".tabContent");
    if (oldDiv !== null)
        frame.removeChild(oldDiv);
    frame.appendChild(newTab);
}

export default menu;
