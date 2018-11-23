# aframe-ahead
aframe component , Always move camera straight ahead.

Use as shown below.

```html:index.html
<html>
	<script src='https://aframe.io/releases/0.8.2/aframe.min.js' ></script>
	<script src="./aframe-ahead.js" ></script>
	<a-scene  >
		<a-camera ahead="speed:1" ></a-camera>
		<a-box position="0 0 -10" color="red" >
	</a-scene>
</html>
```

|Property|Value     |
|-------:|---------:|
|speed   |default 1.|
