---
chapter: Make a song
title: Bass track
lang: ja
layout: exercise
---

Add another live loop for your bass. Compose a solid and simple bass groove. If it helps, you can use the <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> on your browser to choose notes that you like. Here's an example:

{% highlight ruby %}
live_loop :bass do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## Change the synth

It's time to make your tune sound more interesting! We can do this by changing the synthesizer sounds it is using. The default Sonic Pi synth is called `beep`. To use a different synth, you need to add the code `use_synth :name_of_synth` above the sequence of code you want to use it in.

In this example, fm is the name of the synth:

{% highlight ruby %}
live_loop :bass do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

There are lots of cool-sounding synths included with Sonic Pi. To find the names of them, click on the help icon at the top of the screen so that the help documents window appears. Then select Synths from the tabs along the left hand side of the help window. Click on any of the synth names to get more information on how to use it.

## Change the length of notes

On occasion, you might like to make sounds play for a longer time or at a different rate. This can be achieved by modifying the optional parameters of the code you are using. `attack` and `release` control the amplitude of a note over time:

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

Using attack and release looks like the following. Now the note would be 4 beats long.

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

You could make a short staccato note by setting attack to zero and release to a very short value:

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Explore different synths and note lengths and get your bass track rolling.

Now the song could be something like this:

{% highlight ruby %}
use_bpm 100

live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end

live_loop :bass do
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}
