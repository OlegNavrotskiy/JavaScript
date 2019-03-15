'USE STRICT';

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	addDiv() {
    let block = document.createElement('div');
    document.body.appendChild(block);
		block.textContent = 'Какой-то текст';
		block.style.cssText = ` height:${this.height}px;
			width:${this.width}px;
			background-color:${this.bg};
			font-size:${this.fontSize}px;
			text-align:${this.textAlign};`;
	}
}

let element = new Options(150, 800, 'green', 20, 'center');
element.addDiv();

