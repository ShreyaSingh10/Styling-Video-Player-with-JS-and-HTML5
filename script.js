//get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
//?????y not player ke andar player__controls me jake progress?
//const controls = player.querySelector('.player__controls'); 
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

//build our functions
function togglePlay() {
	if(video.paused){
		video.play();
	}
	else{
		video.pause();
	}
}

function updateButton() {
	const icon =this.paused ? '>' : '//';//for selcting the icon
	console.log(icon);
	console.log('Update the button');
	toggle.textContent = icon//for setting the icon on the toggle class

}

function skip(){
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);//parsing to float
}

function handleRangeUpdate(){
	video[this.name] = this.value;

	//console.log(this.value);
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click',
	skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
//hook up the event listeners