export default class Block {
    constructor(label, size, cssClass) {
        this.label = label;
        this.size = size;
        this.cssClass = cssClass;
    }

    print() {
        console.log(this.label);
    }

    draw() {
        return `<div class="block ${this.cssClass}" style="height: ${this.size}px; width: ${this.size}px">${this.label}</div>`;
    }
}

console.log(typeof Block);
