---
layout: exercise
chapter: Generate sounds
title: Tick
---

Remember `chord`? The chord function gives you the notes of a certain chord:

{% highlight ruby %}
play chord(:c, :major).choose 
# plays a random note of the C major chord (:c, :g r :f)
{% endhighlight %}

There's also a function called `scale`. Scale returns all the notes in a _scale_, not just the ones in a chord:

{% highlight ruby %}
play scale(:c, :major).choose 
# plays a random note of the C major scale (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

With `choose` you can get a random element from a list. If you want to go through the values in a more structured manner, Sonic PI has a very powerful function called `tick`:

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Here, we’re just grabbing the scale E3 minor pentatonic and ticking through each element. This is done by adding .tick to the end of the scale declaration. This tick is local to the live loop, so each live loop can have its own independent tick: 

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play scale(:e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## Rings

You can tick through anything that is a _ring_ (well, you can tick through lists also but it will stop when you get to the end). Ring is a special list, that starts over when you get to the end. Like in the previous example the scale started again from the beginning after reaching the last note. `scale` and `chord` both return a ring. Sometimes you'll want to create a list and turn that into a ring by calling `.ring`:

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Here's a bit more complex example. Here you have a list or chords that is turned into a ring and ticked through:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

And then top it off with a lead 'melody':

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play scale(:Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Start ticking, go wild! 