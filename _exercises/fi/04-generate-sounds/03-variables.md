---
chapter: Generate sounds
title: Variables
---

Take a look at the example below. What's going on?

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

There's a variable `r` that gets a certain value each time the loop is played and that value is being used as the release option for play and as the sleep length. A variable is a bit like a box where you can store things and take things out. Using a variable is as simple as `valiable_name = variable_value`. Now the variable_value is stored in variable_name. You can get the value just by typing variable_name.

Let's add a synth and bass to the example to try out variables. The `:keys` loop is simple, nothing new happening, but the `:bass` loop is a bit tricky:

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = chord(:c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play chord(:c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = chord(:c2, :minor).tick` takes a note from a C minor chord and saves it to a variable named `n`. `.tick` always moves forward to the next value after it's called. `play n` plays the saved note. Then `.tick` is called again to get the next note from the chord. When the loop starts again, `.tick` continues from where it was.