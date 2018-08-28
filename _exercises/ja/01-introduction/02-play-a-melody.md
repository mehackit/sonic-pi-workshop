---
chapter: Introduction
title: メロディーを鳴らす
lang: ja
layout: exercise
---

Type the following into the buffer and press run:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

That didn't sound like a melody, did it? Instead of playing a sequence, Sonic Pi played all the notes at once (and that's how you can actually write chords).

If you want Sonic Pi to play each note in a sequence, you have to tell the software to take a break every now and then. Try typing in `sleep 1` underneath each note, like this:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` tells Sonic Pi to wait for one beat. You can try smaller and bigger numbers. The smaller the sleep value, the shorter the duration is between the play commands and vice versa. If you're familiar with musical notation, this is what different notes look like in Sonic Pi:

<img src="{{ "/assets/img/Notes_EN.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_en.png" | prepend: site.baseurl }}">

As mentioned before, you can write the notes in MIDI, which is basically numbers between 0 and 127 (`67`, `80`, `22`) or in musical notes (`:G4`, `:Ab5`, `:Bb`), it's up to you. Here's a chart displaying notes and corresponding MIDI values:

<img src="{{ "/assets/img/midi_notes.png" | prepend: site.baseurl }}">

## Try it out

Use notes from the C-major scale (`72, 74, 76, 77, 79, 81, 83` or `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) to create a melody. Use `sleep` with different values to vary the rhythm. You can use `use_bpm` in the beginning to make your tune faster or slower. The acronym BPM stands for _Beats Per Minute_. Here's an example:

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Listen to the previous example" %}

Now make your own melody!
