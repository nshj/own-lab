const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & pause video
function toggleVideoStatus() {
    // 设置或返回音频/视频是否暂停
    if (video.paused) {
        // 开始播放音频/视频
        video.play();
    } else {
        // 暂停当前播放的音频/视频
        video.pause();
    }
}

//Update play/pause icon
function updatePlayIcon(){
    if (video.paused) {
        play.innerHTML = '<i class="play-icon"></i>'
    } else {
        play.innerHTML = '<i class="pause-icon"></i>'
    }
}

// Format second
function formatSecond(result) {
    let hour = Math.floor(result / 3600);
    let mins = Math.floor(result / 60 % 60);
    let secs = Math.floor(result %60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    if (hour < 1) {
        result = `${mins}:${secs}`;
    } else if(hour < 10) {
        hour = '0' + String(hour);
        result = `${hour}:${mins}:${secs}`;
    } else {
        result = `${hour}:${mins}:${secs}`;
    }
     return result;
}

// Update progress & timestamp
function updateProgress() {
    progress.max = video.duration;
    progress.value = video.currentTime;

    timestamp.innerHTML = `${formatSecond(video.currentTime)}/${formatSecond(video.duration)}`;
}

// Set video time to progress 
function setVideoProgress() {
    video.currentTime = progress.value;
}

// Stop video
function stopVideo() {
    // 设置或返回音频/视频中的当前播放位置（以秒计）
    video.currentTime = 0;
    video.pause();
}

// Event listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);

//  loadedmetadata event is fired when the metadata has been loaded.
video.addEventListener('loadedmetadata',updateProgress);
// 当currentTime更新时会触发timeupdate事件
video.addEventListener('timeupdate', updateProgress);

// 窗口load发生时，video还没加载出来，所以video.duration为NaN
// window.addEventListener('load',updateProgress);
// ************************************************************
// 当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件。

// 音频/视频的元数据包括：时长、尺寸（仅视频）以及文本轨道。

// 当音频/视频处于加载过程中时，会依次发生以下事件：

// loadstart
// durationchange
// loadedmetadata
// loadeddata
// progress
// canplay
// canplaythrough

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('input',setVideoProgress);
// input的两个属性：

// oninput---该事件在 <input> 或 <textarea> 元素的值发生改变时触发

// onchange---该事件在 <input> 或 <textarea> 元素的值发生改变后触发