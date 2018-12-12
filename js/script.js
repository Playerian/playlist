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
var imageLinks = ['','','','',''];
var artists = ['Marshmello ft, Bastlle', 'Porter Robinson & Madeon', 'MitiS', 'Sakuzyo', 'Alexander Alexandrov'];
var songLength = [218, 218, 223,180, 218];
var videoLinks = ["https://www.youtube.com/watch?v=RE87rQkXdNw",
'https://www.youtube.com/watch?v=fzQ6gRAEoy0',
'https://www.youtube.com/watch?v=Tgokaw2ZOoA',
'https://www.youtube.com/watch?v=ZK8AKTWOVak',
'https://www.youtube.com/watch?v=i7pbnTI1_LM'
];

function displaySongInfo(){
    songName.forEach(function(song, index) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    artists.forEach(function(artist, index) {
        $("#artists").append("<p>" + artist + "</p>"); 
    });
    songLength.forEach(function(length, index) {
        $("#lengths").append("<p>" + length + " seconds" + "</p>"); 
    });
    videoLinks.forEach(function(video, index) {
        $("#links").append("<a>" + video + "</a>"); 
    });
    imageLinks.forEach(function(links, index) {
        $("#images").append($("<img>").attr('src', links)); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    

}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    imageLinks.push($('#artist').val());
    songLength.push($('#length').val());
    videoLinks.push($('#link').val());
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
