console.log("Welcome to The MusicPlayer")

let songIndex=0;
let audioElement = new Audio('Playlist1/Badan-Pe-Sitare-Lapete-Huye.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');





let song = [
    {songName:'Badan Pe Sitare Lapete Huye',    filePath:'Playlist1/Badan-Pe-Sitare-Lapete-Huye.mp3',   coverPath:'Images/cover2.jpg'},
    {songName:'Gulabi Aakhein Jo Teri Dekhi',   filePath:'Playlist1/Gulabi-Aankhen-Jo-Teri-Dekhi.mp3',  coverPath:'Images/cover.jpg'},
    {songName:'Likhe Jo Khat Tujhe',            filePath:'Playlist1/Likhe-Jo-Khat-Tujhe.mp3',           coverPath:'Images/cover3.jpg'},
    {songName:'Maine Puchha Chand Se',          filePath:'Playlist1/Maine-Puchha-Chand-Se.mp3',         coverPath:'Images/cover4.jpeg'},
    
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    prog = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=prog;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})         