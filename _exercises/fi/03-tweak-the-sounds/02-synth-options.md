---
chapter: Tweak the sounds
title: Options
---

So far you have used `attack`, `release`, and `cutoff` options after a play command. Options (or opts for short) are controls you pass to play which modify and control aspects of the sound you hear. Each synth has its own set of opts for finely tuning its sound. However, there are common sets of opts shared by many sounds. Now you'll get to know few options more to add more expression to your sounds.

Note that you can use some of the options with samples too!

### `amp:`

Amplitude is the loudness of a sound. 0 is silent (you’ll hear nothing), 1 is normal volume. You can crank up the amplitude to 2, 10 or 100. However, this can often make the sound muddy and strange. So try to use low amplitudes, i.e. in the range 0 to 0.5 to avoid compression. 

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

Pan controls the panning of a sound in stereo. -1 means that you hear it out of the left speaker, 1 means you hear it out of your right speaker and 0 is center. You can use any value between -1 and 1. You could try using a random pan value for your hi-hats for some texture.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

Remove frequencies higher that the given value. Use values between 0-130.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attac:` and `release:`

Time in beats for attack and release.

{% highlight ruby %}
play :c2, attack: 1, release: 1 #the note is two beats long
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

### `use_synth_defaults` and `use_sample_defaults`

If you don't want to set your ops for each play or sample on your loop, you can use `use_synth_defaults` and `use_sample_defaults` to set the ops for all the next samples and plays in the loop:

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### Bonus: `beat_stretch:` and `rate:`

These are too cool to skip. Try this out:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

There's an annoying gap in the end. The sample is 1.753310657596372 beats long, which isn't that handy when you want to play it with all the other stuff we have going on. Luckily you can use `beat_stretch: 2` to make the sample 2 beats long:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Nice! Now to the `rate` option. Rate controls how fast a sample is played. 1 is in original speed, 0.5 is in half speed and 2 is in double speed. The sample also sounds higher and lower pitched when you change the rate. And (drumroll...) you can have even negative values! Negative values play the samples _backwards_. Try playing this loop and changing the rate and sleep value:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

