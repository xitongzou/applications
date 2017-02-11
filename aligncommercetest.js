(() => {
    const bodyElem = $('body');
    const att = document.createAttribute("style");
    const map = new Map();

    const getRandomColor = () => {
        const hex = Math.floor(Math.random() * 0xFFFFFF);
        return "#" + ("000000" + hex.toString(16)).substr(-6);
    };

    const getUniqueColor = () => {
        const color = getRandomColor();
        if (!map.get(color)) {
            map.set(color, true);
            return color;
        } else {
            getUniqueColor();
        }
    };

    const myTimer = () => {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("demo").innerHTML = t;
    };

    const changeBgColor = setInterval(() => {
        att.value = 'background-color: ' + getUniqueColor();
        bodyElem.setAttributeNode(att);
    }, 1000);

    setTimeout(() => {
        clearInterval(changeBgColor);
    }, 10000);
})();