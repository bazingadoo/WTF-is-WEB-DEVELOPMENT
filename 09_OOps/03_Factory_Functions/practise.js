function makeColor(r, g, b) {
    const color = {};     //mackes an object
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;     //this refers to the color object 
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb();
firstColor.hex();

firstColor.r = 255;