function preload()
{
    song = loadsound("daddy_song.mp3")
}
function setdate()
{
    document.getElementById("date").innerHTML = new Date().toDateString();
}
function btn()
{
    window.location = "index2.html"
}