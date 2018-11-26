
AFRAME.registerComponent('ahead',{
	schema: {
		type:'number', default : '1'
	},
	tick: function (time, timeDelta) {

		let speed = (this.attrValue ? this.attrValue : 1) / 60;

		let position = this.el.getAttribute('position');
		let rotation = this.el.getAttribute('rotation');

		position.x += -Math.cos((rotation.y - 90) * Math.PI / 180) * speed;
		position.z += Math.sin((rotation.y - 90) * Math.PI / 180) * speed;
		this.el.setAttribute('position', position);
	},
	init: function () {
	}
});

