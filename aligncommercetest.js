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

    setInterval(() => {
        att.value = 'background-color: ' + getUniqueColor();
        bodyElem.setAttributeNode(att);
    }, 1000)
})();