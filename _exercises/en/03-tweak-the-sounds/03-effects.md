---
chapter: Tweak the sounds
title: Effects
lang: en
layout: exercise
---

We've been holding this off for too long now, so here it comes: `with_fx`! 

That's a powerful tool for adding different effects to your composition. Let's start with `:reverb`. Pretty much everything sounds nice with a reverb. Start with surrounding your code with a `with_fx :reverb do` and `end` blocks:

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Sounds bigger, doesn't it? Just like synths and samples, effects also have options. `mix:`is an option that sets how much the effect and the original sound is heard. `mix: 0` plays only the original sound, `mix: 1` plays only the FX. Reverb has a `room` option also. Try different room sizes with values between 0-1. If you open the 'Fx' tab on the help menu you can find what options are available for which FX.

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

There are so many FX to choose from. And you don't even have to settle for one: you can nest them! (At some point your computer can run out of resources but don't worry about that now.)

{% highlight ruby %}
live_loop :effects do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

Now go crazy and add FX everywhere for some amazing new sounds! 
