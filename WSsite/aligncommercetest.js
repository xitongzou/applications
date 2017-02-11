(() => {
    const getRandomColor = () => {
        const hex = Math.floor(Math.random() * 0xFFFFFF);
        return "#" + ("000000" + hex.toString(16)).substr(-6);
    };

    const bodyElem = $('body');
    const att = document.createAttribute("style");
    const map = new Map();

    setInterval(() => {
        const color = getRandomColor();
        if (!map.get(color)) {
            att.value = 'background-color: ' + color;
            bodyElem.setAttributeNode(att);
            map.set(color, true);
        }
    }, 1000)
})();