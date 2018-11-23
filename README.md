# aframe-ahead
aframe component , Always move camera straight ahead.

## Usage
Use as shown below.

```html:index.html
<html>
	<script src='https://aframe.io/releases/0.8.2/aframe.min.js' ></script>
	<script src='https://levelenter.github.io/aframe-ahead/dest/aframe-ahead.js' ></script>
	<a-scene  >
		<a-camera ahead="1" ></a-camera>
		<a-box position="0 0 -10" color="red" >
	</a-scene>
</html>
```

|Property|Value     |
|-------:|---------:|
|(speed) |default 1.|
