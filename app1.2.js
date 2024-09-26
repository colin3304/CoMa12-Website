                                                /*smooth scroll funktion*/

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t* (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);

}

                                                /*navbar*/

var navHome = document.querySelector('#navHome');

navHome.addEventListener('click',function(){
    smoothScroll('.home', 1500);
});

var navMusic = document.querySelector('#navMusic');

navMusic.addEventListener('click',function(){
    smoothScroll('.music', 2000);
});

var navAboutus = document.querySelector('#navAboutus');

navAboutus.addEventListener('click',function(){
    smoothScroll('.aboutus', 2500);
});

var navContact = document.querySelector('#navContact');

navContact.addEventListener('click',function(){
    smoothScroll('.contact', 3000);
});

                                                /*home sidebar*/

var navStart = document.querySelector('#navStart');

navStart.addEventListener('click',function(){
smoothScroll('.mainHeader', 1500);
});                                      
                    
var navMusic1 = document.querySelector('#navMusic1');

navMusic1.addEventListener('click',function(){
    smoothScroll('.music', 1500);
});

var navAboutus1 = document.querySelector('#navAboutus1');

navAboutus1.addEventListener('click',function(){
    smoothScroll('.aboutus', 2000);
});

var navContact1 = document.querySelector('#navContact1');

navContact1.addEventListener('click',function(){
    smoothScroll('.contact', 2500);
});

                                                /*music sidebar*/

var navStart1 = document.querySelector('#navStart1');

navStart1.addEventListener('click',function(){
smoothScroll('.mainHeader', 2000);
});    

var navHome1 = document.querySelector('#navHome1');

navHome1.addEventListener('click',function(){
smoothScroll('.home', 1500);
});         

var navAboutus2 = document.querySelector('#navAboutus2');

navAboutus2.addEventListener('click',function(){
smoothScroll('.aboutus', 1500);
});      

var navContact2 = document.querySelector('#navContact2');

navContact2.addEventListener('click',function(){
smoothScroll('.contact', 2000);
});      

                                                /*aboutus sidebar*/

var navStart2 = document.querySelector('#navStart2');

navStart2.addEventListener('click',function(){
smoothScroll('.mainHeader', 2500);
});    

var navHome2 = document.querySelector('#navHome2');

navHome2.addEventListener('click',function(){
smoothScroll('.home', 2000);
});      

var navMusic2 = document.querySelector('#navMusic2');

navMusic2.addEventListener('click',function(){
smoothScroll('.music', 1500);
});      

var navContact3 = document.querySelector('#navContact3');

navContact3.addEventListener('click',function(){
smoothScroll('.contact', 1500);
});      

                                                /*contact sidebar*/

var navStart3 = document.querySelector('#navStart3');

navStart3.addEventListener('click',function(){
smoothScroll('.mainHeader', 3000);
});                                           

var navHome3 = document.querySelector('#navHome3');

navHome3.addEventListener('click',function(){
smoothScroll('.home', 2500);
});      

var navMusic3 = document.querySelector('#navMusic3');

navMusic3.addEventListener('click',function(){
smoothScroll('.music', 2000);
});      

var navAboutus3 = document.querySelector('#navAboutus3');

navAboutus3.addEventListener('click',function(){
smoothScroll('.aboutus', 1500);
});      

                                                /*sidebar zeigen und verstecken*/

function showSidebarHome() {
    document.getElementById('btnHome').classList.toggle('click');
    document.getElementById('sidebarHome').classList.toggle('show');
}

var linksHome = document.getElementsByClassName("linksHome");
for (var i = 0; i < linksHome.length; i++) {
    linksHome[i].addEventListener('click', e => {
        document.getElementById('btnHome').classList.toggle('click');
        document.getElementById('sidebarHome').classList.toggle('show');
    });
}

function showSidebarMusic() {
    document.getElementById('btnMusic').classList.toggle('click');
    document.getElementById('sidebarMusic').classList.toggle('show');
}

var linksMusic = document.getElementsByClassName("linksMusic");
for (var i = 0; i < linksMusic.length; i++) {
    linksMusic[i].addEventListener('click', e => {
        document.getElementById('btnMusic').classList.toggle('click');
        document.getElementById('sidebarMusic').classList.toggle('show');
    });
}

function showSidebarAboutus() {
    document.getElementById('btnAboutus').classList.toggle('click');
    document.getElementById('sidebarAboutus').classList.toggle('show');
}

var linksAboutus = document.getElementsByClassName("linksAboutus");
for (var i = 0; i < linksAboutus.length; i++) {
    linksAboutus[i].addEventListener('click', e => {
        document.getElementById('btnAboutus').classList.toggle('click');
        document.getElementById('sidebarAboutus').classList.toggle('show');
    });
}

function showSidebarContact() {
    document.getElementById('btnContact').classList.toggle('click');
    document.getElementById('sidebarContact').classList.toggle('show');
}

var linksContact = document.getElementsByClassName("linksContact");
for (var i = 0; i < linksContact.length; i++) {
    linksContact[i].addEventListener('click', e => {
        document.getElementById('btnContact').classList.toggle('click');
        document.getElementById('sidebarContact').classList.toggle('show');
    });
}


                                                // Album cover drehen

var album = document.getElementById("album");
album.addEventListener('click', () => {
    album.classList.toggle("albumBack");
});


                                                 // Song previews

const playerContainer = document.querySelector('.playerContainer');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progressContainer');
const playerTitle = document.querySelector('#playerTitle');
const cover = document.querySelector('#cover');

const songs = ['Solitude', 'Monsters', 'Shattered Souls', 'Individual Faces', 'Breakout', 'New Ground', 'Sun Sets Over Our Home', 'Consistency', 'Repetition Pt.1 Fortress', 'Repetition Pt.2 Death & Life'];
        

                                                // Song previews 2

const playerContainer2 = document.querySelector('.playerContainer2');
const playBtn2 = document.querySelector('#play2');
const nextBtn2 = document.querySelector('#next2');
const prevBtn2 = document.querySelector('#prev2');
const audio2 = document.querySelector('#audio2');
const progress2 = document.querySelector('.progress2');
const progressContainer2 = document.querySelector('.progressContainer2');
const playerTitle2 = document.querySelector('#playerTitle2');
const cover2 = document.querySelector('#cover2');

const songs2 = ['Demon in Disguise', 'Broken Home (I Miss You)', 'Run', 'Can\'t Keep Us', 'Time Won\'t Heal'];


//

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    playerTitle.innerText = song + " (" +(songIndex+1)+ "/10) ";
    audio.src = `music/${song}.mp3`;
}

function playSong() {
    playerContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    playerContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();
}

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = playerContainer.classList.contains('play');
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

//

let songIndex2 = 0;

loadSong2(songs2[songIndex2]);

function loadSong2(song) {
    playerTitle2.innerText = song + " (" +(songIndex2+1)+ "/5) ";
    audio2.src = `music/${song}.mp3`;
}

function playSong2() {
    playerContainer2.classList.add('play');
    playBtn2.querySelector('i.fas').classList.remove('fa-play');
    playBtn2.querySelector('i.fas').classList.add('fa-pause');

    audio2.play();
}

function pauseSong2() {
    playerContainer2.classList.remove('play');
    playBtn2.querySelector('i.fas').classList.remove('fa-pause');
    playBtn2.querySelector('i.fas').classList.add('fa-play');

    audio2.pause();
}

function prevSong2() {
    songIndex2--;
    if(songIndex2 < 0) {
        songIndex2 = songs2.length - 1;
    }
    loadSong2(songs2[songIndex2]);
    playSong2();
}

function nextSong2() {
    songIndex2++;
    if(songIndex2 > songs2.length - 1) {
        songIndex2 = 0;
    }
    loadSong2(songs2[songIndex2]);
    playSong2();
}

function updateProgress2(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress2.style.width = `${progressPercent}%`;
}

function setProgress2(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio2.duration;

    audio2.currentTime = (clickX / width) * duration;
}

playBtn2.addEventListener('click', () => {
    const isPlaying = playerContainer2.classList.contains('play');
    if(isPlaying) {
        pauseSong2();
    } else {
        playSong2();
    }
});

prevBtn2.addEventListener('click', prevSong2);
nextBtn2.addEventListener('click', nextSong2);

audio2.addEventListener('timeupdate', updateProgress2);

progressContainer2.addEventListener('click', setProgress2);

audio2.addEventListener('ended', nextSong2);


                                                    //gallery

//Aufbau der Gallery                                   

const pictures = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];
const img = document.querySelector('.galleryPicture');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

let pictureIndex = 0;

loadPicture(pictures[pictureIndex]);

//Funktionen zum Laden, schließen, wechseln

function loadPicture(picture) {
    img.src = `pictures/${picture}.jpg`;
}

function prevPicture() {
    pictureIndex--;
    if(pictureIndex < 0) {
        pictureIndex = pictures.length - 1;
    }
    loadPicture(pictures[pictureIndex]);
}

function nextPicture() {
    pictureIndex++;
    if(pictureIndex > pictures.length - 1) {
        pictureIndex = 0;
    }
    loadPicture(pictures[pictureIndex]);
}

function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
}

function changeImg(changeDir) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = pictureIndex + 1;
        pictureIndex = pictureIndex + 1;
        if(calcNewImg > pictures.length - 1) {
            calcNewImg = 0;
            pictureIndex = 0;
        }
    } else if(changeDir === 0) {
        calcNewImg = pictureIndex - 1;
        pictureIndex = pictureIndex - 1;
        if(calcNewImg < 0) {
            calcNewImg = pictures.length - 1;
            pictureIndex = pictures.length - 1;
        }
    }


    newImg.setAttribute("src", "pictures/" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        //let imgWidth = pictures[0].width;
        //let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 60;

        let nextBtn = document.querySelector(".img-btn-next");
        //nextBtn.style.cssText = "right: " + 250 + "px;"

        let prevBtn = document.querySelector(".img-btn-prev");
        //prevBtn.style.cssText = "left: " + 250 + "px;"

    }

}

//Beim klicken auf das Bild:


img.addEventListener('click', function() {

    getLatestOpenedImg = pictureIndex + 1;

    let container = document.body;
    let newImgWindow = document.createElement("div");
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute("class", "img-window");
    newImgWindow.setAttribute("onclick", "closeImg()");

    let newImg = document.createElement("img");
    newImgWindow.appendChild(newImg);
    newImg.setAttribute("src", `pictures/${pictures[pictureIndex]}.jpg`);
    newImg.setAttribute("id", "current-img");

    newImg.onload = function() {

        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 60;

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge +"px;" ;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.right = calcImgToEdge;
        newNextBtn.style.cssText = "right: " + calcImgToEdge +"px;" ;

    }
});




