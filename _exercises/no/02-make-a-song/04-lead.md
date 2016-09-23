---
chapter: Lag en sang
title: Lead-på-norsk spor
lang: no
layout: exercise
---

Now is the time for melody. Instead of writing a big bunch of `play` and `sleep` commands over and over again, we're going to use a shortcut: `play_pattern_timed`.

Instead of writing:

{% highlight ruby %}
play :c2
sleep 0.5
play :d2
sleep 0.25
play :e2
sleep 0.75
play :d2
sleep 0.5
{% endhighlight %}

you can write:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

The first list `[:c2, :d2, :e2, :d2]` is a group of notes and the second list `[0.5, 0.25, 0.75, 0.5]` is a group of breaks in between the notes.

## Melody

Create a new `live_loop` called `:melody` create a lead theme for your song. If it feel easier, use the `play_pattern_timed` function to write the melody. You can use the <a href="{{ "/exercises/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> also if it helps. Here's an example:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Now the whole song could be something like this:

{% highlight ruby %}
use_bpm 120

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

live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Yay, that's a great start! Now go and explore with different melodies, synths and `attack:` and `release:` values. 