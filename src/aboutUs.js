const aboutUs = function (frame) {
    const newTab = document.createElement("div");
    newTab.style.cssText = "background-color: antiquewhite; display: flex; margin: 0 auto; text-align: center; background-color: white; padding: 2%;";
    newTab.classList.add("tabContent");
    newTab.innerHTML = "Sakhalin - project of restaurateur Boris Zarkov and Vladimir Mukhin, a brand-chef of the company White Rabbit Family. A variety of seafood: shells, crabs, shrimps and fish of the Far East of Russia - on the background of a unique 360-degree panoramic view of Moscow. Gastronomy as an art where perfection of performance is achieved under the conductor's stick of taste is Sakhalin. The restaurant, which sounds the music of the seas and oceans.";
    const oldDiv = document.querySelector(".tabContent");
    if (oldDiv !== null)
        frame.removeChild(oldDiv);
    frame.appendChild(newTab);
}

export default aboutUs;
