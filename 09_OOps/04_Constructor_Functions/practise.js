function Color(r, g, b) {
    // console.log(this);
    this.r = r;
    this.g = g;
    this.b = b;

}

//define on the prototype
Color.prototype.rgb = function () {
    const { r, g, b } = this;     //this refers to the color object 
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
}

Color.prototype.rgba = function (a = 1.0) {        //default
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 60, 60);
color1.hex();
const color2 = new Color(60, 60, 160);
color2.rgb();



