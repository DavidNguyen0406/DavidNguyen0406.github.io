(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_gif_1_atlas_", frames: [[1174,0,228,187],[691,0,481,471],[691,473,393,77],[0,0,689,567]]}
];


// symbols:



(lib.flash0ai = function() {
	this.initialize(ss["banner_gif_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.initialize(ss["banner_gif_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.initialize(ss["banner_gif_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.initialize(ss["banner_gif_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_4 = function() {
	this.initialize(img.flash0ai_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1552,1079);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Price_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flash0ai();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Price_Text, new cjs.Rectangle(0,0,228,187), null);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flash0ai_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button, new cjs.Rectangle(0,0,393,77), null);


// stage content:
(lib.banner_gif_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Price_Text
	this.instance = new lib.Price_Text();
	this.instance.setTransform(1354,616.5,1,1,0,0,0,114,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0717,scaleY:1.0717,y:616.55},14).to({scaleX:1,scaleY:1,y:616.5},15).wait(31));

	// Button
	this.instance_1 = new lib.Button();
	this.instance_1.setTransform(501.5,659.5,1,1,0,0,0,196.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:196.6,regY:38.6,scaleX:1.0424,scaleY:1.0424,x:501.65,y:659.65},14).to({regX:196.5,regY:38.5,scaleX:1,scaleY:1,x:501.5,y:659.5},15).wait(31));

	// Price_border
	this.instance_2 = new lib.flash0ai_1();
	this.instance_2.setTransform(1103,428);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// Text
	this.instance_3 = new lib.flash0ai_3();
	this.instance_3.setTransform(141,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Background
	this.instance_4 = new lib.flash0ai_4();
	this.instance_4.setTransform(0,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(750,313,834,719);
// library properties:
lib.properties = {
	id: 'AAE1E8A77C475848B327CBA92B9ABA87',
	width: 1500,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/flash0ai_4.png?1624231710272", id:"flash0ai_4"},
		{src:"images/banner_gif_1_atlas_.png?1624231710258", id:"banner_gif_1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AAE1E8A77C475848B327CBA92B9ABA87'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs_01 = createjs_01||{}, AdobeAn = AdobeAn||{});
var createjs_01, AdobeAn;