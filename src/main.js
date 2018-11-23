AFRAME.registerComponent('ahead',{
	schema: {
		type:'number', default : '1'
	},
	tick: function (time, timeDelta) {
		// console.log(this,this.attrValue,time,timeDelta);
		let speed = (this.attrValue ? this.attrValue : 1) / 60;

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

