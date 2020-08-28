const keys = Array.from(document.querySelectorAll('.key'));

function playSound(e) {
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    //plau sound
    // 连续按，从头播放
    audio.currentTime = 0;
    audio.play();

    // dom style
    key.classList.add('playing');
}

function removeTransition(e) {
    // 动画的属性 为all 所以TransitionEvent 会有很多
    // console.dir(e);
    // 
    if(e.propertyName ='transform') {
        e.target.classList.remove('playing');
    }
}

window.addEventListener('keydown',playSound);
// keycode不区分大小写

keys.forEach(key =>addEventListener('transitionend',removeTransition));