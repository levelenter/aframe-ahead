AFRAME.registerComponent('ahead',{
	schema: {
		speed: {type: 'number'}
	},
	tick: function (time, timeDelta) {
		// console.log(this,this.attrValue.speed,time,timeDelta);
		let speed = this.attrValue.speed / 60;

		this.position.x += -Math.cos((this.rotation.y - 90) * Math.PI / 180) * speed;
		this.position.z += Math.sin((this.rotation.y - 90) * Math.PI / 180) * speed;
		this.camera.setAttribute('position', this.position);
	},

	init: function () {
		this.camera = document.querySelector('a-camera');
		this.position = this.camera.getAttribute('position');
		this.rotation = this.camera.getAttribute('rotation');
	}
});

