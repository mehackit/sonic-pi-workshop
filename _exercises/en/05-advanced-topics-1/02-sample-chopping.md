---
chapter: Advanced Topics 1
title: Sample Slicing
lang: en
layout: exercise
---

Let's take a step back and take a look at samples again. Watch the video below to understand how the playback of a looping sample behaves.

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

It shows the playback of the `:loop_amen` sample with the following code:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

Now let's make a `live_loop` that keeps playing the beat for us. Do you remember the option `beat_stretch` for the `sample` command that alters the pitch of the sample to match the desired length in beats? We introduced it briefly in the chapter "Tweak the sounds". Next we're going to use it to stretch the sample `loop_amen` to 4 beats and keep looping it:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Next we're going to take a look how you can play parts of the Amen loop in a different order. With the `sample` command you can set a different starting and ending point for the sample by using parameters `start` and `finish`. Both of the parameters accept values between `0` and `1` indicating the starting and finishing points of the sample playback. For example: `0` is the beginning of the sample, `0.5` is the midpoint of the sample and `1` is the ending point of the sample. Let's try it in action with the following example:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

The video below (created with the help of Simpler in Ableton Live) visualizes what parts of the `loop_amen` sample are being played in each run of `live_loop`:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Now isn't it fun to play different parts of the sample in a completely different order? Try experimenting with options for the command `sample`. For example, adding an option `rate: -1` to one of the `loop_amen` hits makes it play backwards. 

One sample can be sculpted into almost anything once you start experimenting with the `sample` options (such as `rate`, `pan`, `amp`, `attack`, `release`, `start` and `finish`). The following example uses these options with randomized values to play unique microsounds from two samples:

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.9)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.9)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

This technique is also widely used in <a href="https://en.wikipedia.org/wiki/Granular_synthesis">granular samplers and synthesizers</a>. 
