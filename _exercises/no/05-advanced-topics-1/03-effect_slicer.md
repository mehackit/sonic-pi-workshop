---
chapter: Avanserte tema 1
title: Slicer på norsk
lang: no
layout: exercise
---

In addition to the sample slicing presented in the previous topic, you can also use the audio effect `:slicer` to add some "rhythmic and chops" to your music. It basically alters the volume of the sound over time (and this effect is often called amplitude modulation). Now let's start our experiment with this effect by creating a new `live_loop` in an empty buffer and use the sample `:loop_breakbeat` as our building block: 

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

The loop should now sound the same as in the video below. We are using the red color to indicate the volume of the sound and in this example it should be at maximum.  

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Now let's add the slicer effect to the `live_loop` by using the familiar `with_fx` command. If you don't remember or know how the effects are used in Sonic Pi, you can read more about them in the previous chapter called  <a href="{{ "/exercises/en/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Effects</a>.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

Now the newly added slicer effect sounds too harsh and we'll need to tune it a little bit. The main options of the slicer effect are `phase`, `wave` and `mix`. You can use them to control the amplitude modulation. The option `phase` is the frequency how fast or slow the amplitude modulation occurs. The default value for `phase`is `0.25` which means that the effect occurs every 1/16th note. Because of this the previous example sounded rather hectic. 

Slicer effect can modulate the amplitude by using four different waveforms: `0`(saw), `1` (pulse), `2` (triangle) and `3`(sinewave). By default, `wave` is set to `1` which means that is uses pulse (also known as square) wave to modulate the amplitude. The pictures below illustrate what the waveforms look like and how they increase or decrease the amplitude (area marked with red color) over time. 

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Now let's try to change the waveform to the saw (`wave: 0`). This should make the effect a little bit smoother and less abrupt. 

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

Let's double the duration of the phase (`phase: 0.5`) and switch the waveform to pulse (`wave: 1`):

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Now what happens if we use the following options (`phase: 0.5, wave: 1`) with the effect:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

This way it's quite easy to add some rhythm, variance and dynamics to the drum loops. Remember that you can also use this with the synthesizers in Sonic Pi! 

Here is the last slicer effect example that uses longer phase times with the slicer effect:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 1.75, wave: 0, mix: 1.0 do
    sample :loop_garzul, beat_stretch: 16, amp: 1
    sleep 16
  end
end

live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :kick do
  sample :bd_haus
  sleep 4
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
