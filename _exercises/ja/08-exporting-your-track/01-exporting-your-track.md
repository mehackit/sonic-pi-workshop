---
chapter: Exporting Your Track
title: Exporting Your Track
lang: ja
layout: exercise
---

When you're happy with your track you might want to save the track as an audio file and share it with your friends online (for example, on your <a href="http://www.soundcloud.com/mehackit">SoundCloud</a> page). First, you'll need to record your song by using the record function in Sonic Pi.

The recording process is simply following:

* Click the **Rec** button and it should highlight
* Now that record is toggled on start your song by clicking **Run**
* Once your song is finished (or you've played enough of your live_loops) click **Stop**
* Finally, click **Rec** again to stop the recording
* Save your audio file in the dialog window (for example, with a name *MySong.wav*)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

Once you have your audio file saved you are ready to play and share it. However, we recommend you to process your audio file a little bit to make it sound more professional and louder. For this, we are going to use *Audacity* which is a free, open-source software for recording and Editing sounds. You can download *Audacity* (for Windows, Linux and OS X) from here: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>.

## Audacity: Removing Silence

Usually when you record audio with Sonic Pi there will be some extra silence in the beginning and the end of the song. If you want, you can remove this unwanted silence with few simple steps. First, open your audio file in Audacity from the menu "File / Open". Once you have opened the file you should see a view like the one below.

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Now navigate to the "Effect" menu and select "Truncate Silence".

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Use the following values in the "Truncate Silence" window:

* Level: -60 dB
* Duration: 0.5 seconds
* Truncate to: 0.1 seconds

Next, click "Ok".

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Now you should see the silent parts of the audio removed from the waveform.

## Audacity: Normalizing loudness

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

Next, let's make the audio as loud as possible without compressing or doing any damage to the audio itself. If you feel like your music is more beat-driven and should overall be louder, then this next step is for you. On the other hand, if your material is more subtle (like ambient music) and should remain like that, then we don't necessarily recommend you to take the following steps for normalizing the audio. Anyway, here's how you do it: Go to the "Effect" menu and select "Normalize".

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Set the following value in the "Normalize" window:  

* Normalize maximum amplitude" to -0.1 dB

Check the two topmost checkboxes and click "Ok".

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Now you should see that the spikes in the waveform are taller which means that the resulting audio is louder as well.

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Saving an MP3 file

Now you'll just need to save the audio file. For example, if you want to save your track as an MP3 file, open the "File" menu and select "Export Audio".

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

In the Export Audio window you should see a pull-down menu somewhere around the file browser. Select "MP3 Files" from that menu. You can use one of the of standard presets in the Format Options for the MP3 file. For example, the following Format Options should always work decently:

* Bit Rate Mode: Preset
* Quality: Standard, 170-210 kbps
* Variable Speed: Fast
* Channel Mode: Joint Stereo

Next you'll need to enter the filename to the field "Name" and click "Save". That should do the trick! Now you have the MP3 file of your track, which you can easily send to your friends, post on SoundCloud or upload to your mobile phone.

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

We hope you'll have fun creating and publishing tracks with Sonic Pi!
