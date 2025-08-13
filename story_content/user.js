function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hzXZW3O6lW":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="music.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

