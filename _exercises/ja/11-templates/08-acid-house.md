---
chapter: Templates
title: Acid House with master FX
lang: ja
layout: exercise
---

{% include player.html filepath="/assets/audio/acid-house-with-master-effects.mp3" %}

Load the code as a <a href="{{ "/assets/files/acid-house-with-master-effects.txt" | prepend: site.baseurl }}">text file</a>

{% highlight ruby %}
# Acid House with some boosting effects in the master bus
# Mehackit 2016

use_bpm 110

with_fx :distortion, mix: 0.06 do
  with_fx :nrhpf, mix: 0.05 do

    live_loop :bassorumpu do
      sample :bd_haus, amp: 2
      sleep 1
    end

    live_loop :luuppibiitti do
      sample :loop_compus, beat_stretch: 8, amp: 2
      sleep 8
    end

    live_loop :bassoraita do
      use_synth :saw
      use_synth_defaults release: rrand(0.05, 0.25), amp: rrand(1.5, 2)
      with_fx :reverb, mix: 0.2 do
        nuotit = (ring :C2, :C3, :r, :Eb3, :r, :G2, :Bb2, :r)
        play nuotit.tick, cutoff: rrand(40, 120)
      end
      sleep 0.25
    end

    live_loop :hihat do
      sample :drum_cymbal_pedal, amp: 0.2
      sleep 0.25
    end

    live_loop :virveli do
      sleep 1
      with_fx :reverb, mix: 0.5 do
        sample :perc_snap, amp: 1.5
      end
      sleep 1
    end

    live_loop :syna1 do
      use_synth :prophet
      use_synth_defaults amp: 0.5, attack: 2, release: 1
      with_fx :echo, phase: 2, mix: 0.5 do
        play [:C4, :Eb4, :G4, :Bb4].ring.tick, pan: rrand(-0.95, 0.95)
        sleep 2
      end
    end
  end
end
{% endhighlight %}
