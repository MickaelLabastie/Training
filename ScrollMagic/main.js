var controller = new ScrollMagic.Controller();
var blockTween = new TweenMax.to('#block', 0.6, {width: '80%'});
var containerScene = new ScrollMagic.Scene({
    triggerElement: '#container',
    triggerHook: .01,
    reverse: true
})
.setTween(blockTween)
.addIndicators()
.addTo(controller);

document.getElementById('block').style.width = '20%';

containerScene.refresh();