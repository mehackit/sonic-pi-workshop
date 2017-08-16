---
chapter: Make a song
title: Add randomization
lang: en
layout: exercise
---

Great! Now you got your song running nicely with a steady beat and a bass with the melody hook on the top. Now we're going to do something really cool and unleash the true potential of Sonic Pi. Let's add some generative elements to the track and program the computer to compose for us!

## Throw a dice and transpose the melody

Transposing means changing the pitch up or down. We could randomly transpose the melody a bit every now and then to add some spice to the track. You can throw a dice to decide when to shift the pitch up for the melody. Here's an example:

{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## Create a random acid bass track

Let's do something interesting for the bass loop. `.choose` is a handy method that randomly picks out an element from a list. Like this:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` is a list of notes (in this case the notes of the C major chord). `.choose` picks out one of those notes at random. Instead of notes you could have anything in the list. Like sleep values for example:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

You don't even have to remember what notes are in what chords. Sonic Pi can handle that for you. Instead of writing `[:c, :e, :g]`, you can just use `(chord :C, :major)`. That creates a list of right notes for you automatically. Here's an example:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Let's use this sorcery for a bubbling bass track. Save your work and copy your current `:bass` loop to another buffer, in case you want to come back to it. Then make room for our new bass track and delete the content of the loop. Let's use the classic `:tb303` synth and play random 16th notes from C major chord:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Ough! Not quite right. Add `, release: 0.125` parameter in the end of the play command, like this:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

That's better, but there's still a bit polishing to do. So far you have used the `attack:` and `release:` parameters for a play command. Depending on the synth you are using, there's a lot lot more parameters to use. For example the tb303 synth has 45 different options to tweak. Let's use a parameter called `cutoff` for the bass. Cutoff removes all frequencies above the cutoff frequency. You can use values between 0-130.

But don't just use a fixed cutoff value when you can have a random value! With `rrand(min, max)` you can generate random numbers in a given range. Try that out:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Grrreat! Remember to explore and try out different things. As a recap, here's an example about what you could have going on at this point:

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
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
