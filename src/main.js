
AFRAME.registerComponent('ahead',{
	schema: {
		type:'number', default : '1'
	},
	tick: function (time, timeDelta) {

		let speed = (this.attrValue ? this.attrValue : 1) / 60;

		let position = this.camera.getAttribute('position');
		let rotation = this.camera.getAttribute('rotation');

		position.x += -Math.cos((rotation.y - 90) * Math.PI / 180) * speed;
		position.z += Math.sin((rotation.y - 90) * Math.PI / 180) * speed;
		this.camera.setAttribute('position', this.position);
	},

	init: function () {
		this.camera = document.querySelector('a-camera');
		if(!this.camera){
			this.camera = document.querySelector('[camera]')
		}
	}
});

