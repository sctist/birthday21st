function play(){
    var audio = new Audio();
    audio.src = './A Thousand Years.mp3';
    audio.play();  // Set autoplay to true
    $('.button').css('display', 'none');
    $('.birthdayCard').css('display', 'block');
}
