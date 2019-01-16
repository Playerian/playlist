/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    //0 -- name
    //1 -- artist
    //2 -- song length
    //3 -- image
    //4 -- yt link
    //obsoleted
    /*
    ['Happier', 'Marshmello ft. Bastille', '218', '', "https://www.youtube.com/watch?v=RE87rQkXdNw"],
    ['Shelter', 'Porter Robinson & Madeon', '218', '', 'https://www.youtube.com/watch?v=fzQ6gRAEoy0'],
    ['Endeavor', 'MitiS', '223', '', 'https://www.youtube.com/watch?v=Tgokaw2ZOoA'],
    ['Selentia', 'Sakuzyo', '180', '', 'https://www.youtube.com/watch?v=ZK8AKTWOVak'],
    ['Soviet National Anthem(English)', 'Alexander Alexandrov', '218', '', 'https://www.youtube.com/watch?v=i7pbnTI1_LM']
    */
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var songName = ['Happier', "Shelter", "Endeavor", "Selentia", "Soviet National Anthem (English)"];
var imageLinks = ['https://i.ytimg.com/vi/RE87rQkXdNw/maxresdefault.jpg',
'https://i.ytimg.com/vi/DS1qvwJDVC4/maxresdefault.jpg',
'https://funkadelphia.files.wordpress.com/2012/11/mitis-endeavors.jpg',
'https://f4.bcbits.com/img/a0832860265_10.jpg',
'https://cdn.britannica.com/36/22536-004-9855C103.jpg'];
var artists = ['Marshmello ft, Bastlle', 'Porter Robinson & Madeon', 'MitiS', 'Sakuzyo', 'Alexander Alexandrov'];
var songLength = [218, 218, 223, 180, 218];
var videoLinks = ["https://www.youtube.com/watch?v=RE87rQkXdNw",
'https://www.youtube.com/watch?v=fzQ6gRAEoy0',
'https://www.youtube.com/watch?v=Tgokaw2ZOoA',
'https://www.youtube.com/watch?v=ZK8AKTWOVak',
'https://www.youtube.com/watch?v=i7pbnTI1_LM'
];

function moveArray(arr, index, up){
    if (index < 0 || index >= arr.length - 1){
        return arr;
    }
    if (up){
        let first = arr[index];
        let second = arr[index - 1];
        arr.splice(index - 1, 2, first, second);
    }else{
        let first = arr[index + 1];
        let second = arr[index];
        arr.splice(index, 2, first, second);
    }
    return arr;
}

function displaySongInfo(){
    songName.forEach(function(song, index) {
        let $song = $('<p>');
        $song.text(song);
        $('#songs').append($song);
        //delete part
        let $div = $('<div>').addClass('deleteHome');
        $('#deleteColumn').append($div);
        let $arrowUp = $('<img>').attr('num', index).addClass('arrow').addClass('up');
        let $arrowDown = $('<img>').attr('num', index).addClass('arrow').addClass('down');
        $arrowUp.attr('src', 'https://static.thenounproject.com/png/38-200.png');
        $arrowDown.attr('src', 'https://cdn0.iconfinder.com/data/icons/arrows-11/100/arrow-2-512.png');
        let $delete = $('<button>');
        $delete.text('delete');
        $delete.attr('num', index);
        $delete.addClass('delete');
        $div.append($delete);
        $div.append($arrowUp);
        $div.append($arrowDown);
    });
    artists.forEach(function(artist, index) {
        let $artist = $('<p>');
        $artist.text(artist);
        $('#artists').append($artist);
    });
    songLength.forEach(function(length, index) {
        let $length = $('<p>');
        $length.text(`${length} seconds`);
        $('#lengths').append($length);
    });
    videoLinks.forEach(function(video, index) {
        let $video = $("<a>");
        $video.attr('href', video);
        $video.attr('target', '_blank')
        $video.text('link');
        $video.addClass('videoLink');
        $("#links").append($video); 
    });
    imageLinks.forEach(function(links, index) {
        let $image = $("<img>");
        $image.attr('src', links);
        $image.addClass('imageTag');
        $("#images").append($image); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    $('.delete').off('click');
    $('.delete').on('click', function(){
        let i = $(this).attr('num');
        console.log(i);
        songName.splice(i, 1);
        songLength.splice(i, 1);
        videoLinks.splice(i, 1);
        imageLinks.splice(i, 1);
        artists.splice(i, 1);
        emptySongInfo();
        displaySongInfo();
    });
    $('.arrow').on('click', function(){
        let item = $(this);
        let i = parseInt(item.attr('num'));
        if (item.attr('class').includes('up')){
            //going up
            if (parseInt(i) !== 0){
                moveArray(songName, i, true);
                moveArray(songLength, i, true);
                moveArray(videoLinks, i, true);
                moveArray(imageLinks, i, true);
                moveArray(artists, i, true);
            }
        }else{
            //going down
            if (parseInt(i) !== songName.length - 1){
                moveArray(songName, i);
                moveArray(songLength, i);
                moveArray(videoLinks, i);
                moveArray(imageLinks, i);
                moveArray(artists, i);
            }
        }
        emptySongInfo();
        displaySongInfo();
    });
}

function emptySongInfo(){
    // Use jQuery to empty all of the remaining divs
    $("#songs, #images, #artists, #lengths, #links, #deleteColumn").empty();
}


function addSongInfo(){
    var song = $("#song").val();
    songName.push(song);
    // BELOW write the code to add new items to each of the other arrays
    artists.push($('#artist').val());
    imageLinks.push($('#image').val());
    songLength.push($('#length').val());
    videoLinks.push($('#link').val());
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
