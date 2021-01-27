const directions = function (frame) {
    const newTab = document.createElement("div");
    newTab.style.cssText = "background-color: antiquewhite; display: flex; margin: 0 auto; text-align: center; background-color: white; padding: 2%;";
    newTab.classList.add("tabContent");
    newTab.innerHTML = "Moscow, Lenina str. 123";
    const oldDiv = document.querySelector(".tabContent");
    if (oldDiv !== null)
        frame.removeChild(oldDiv);
    frame.appendChild(newTab);
}

export default directions;
