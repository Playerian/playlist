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

function displaySongInfo(){
    songName.forEach(function(song, index) {
        let $song = $('<p>');
        $song.text(song);
        $('#songs').append($song);
        //delete part
        let $div = $('<div>').addClass('deleteHome');
        $('#deleteColumn').append($div);
        let $delete = $('<button>');
        $delete.text('delete');
        $delete.attr('id', index);
        $delete.addClass('delete');
        $div.append($delete);
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
        let i = $(this).attr('id');
        console.log(i);
        songName.splice(i, 1);
        songLength.splice(i, 1);
        videoLinks.splice(i, 1);
        imageLinks.splice(i, 1);
        artists.splice(i, 1);
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
