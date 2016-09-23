---
chapter: Templates
title: Morolyd
lang: no
layout: exercise
---

{% include player.html filepath="/assets/audio/play-pattern-fun.mp3" %}

Load the code as a <a href="{{ "/assets/files/play-pattern-fun.txt" | prepend: site.baseurl }}">text file</a>

{% highlight ruby %}
# Having Fun with the Play Pattern Timed command
# Mehackit 2016

use_bpm 100

live_loop :kick do
  sample :bd_haus
  sleep(1)
end

live_loop :melodia do
  with_fx :reverb, mix: 0.4 do
    use_synth :piano
    play chord(:E4, :minor7), release: 2, amp: 2

    use_synth :tri
    play_pattern_timed chord(:E3, :minor7), 0.25, pan: rrand(-1, 1), release: 0.05
    play_pattern_timed chord(:E4, :minor7), 0.25, pan: rrand(-1, 1), release: 0.1
    play_pattern_timed chord(:E5, :minor7), 0.25, pan: rrand(-1, 1), release: 0.2
    play_pattern_timed chord(:E6, :minor7), 0.25, pan: rrand(-1, 1), release: 0.3

    use_synth :piano
    play chord(:C4, :major7), release: 2, amp: 2

    use_synth :saw
    play_pattern_timed chord(:C3, :major7), 0.25, pan: rrand(-1, 1), release: 0.05
    play_pattern_timed chord(:C4, :major7), 0.25, pan: rrand(-1, 1), release: 0.1
    play_pattern_timed chord(:C5, :major7), 0.25, pan: rrand(-1, 1), release: 0.2
    play_pattern_timed chord(:C6, :major7), 0.25, pan: rrand(-1, 1), release: 0.3
  end
end

live_loop :hihats do
  sleep 0.5
  with_fx :reverb, mix: 0.3 do
    3.times do
      sample :drum_cymbal_closed, rate: 1.5, vol: rrand(0.3, 0.7)
      sleep 0.5
    end
    sample :perc_snap , rate: 2, vol: rrand(0.1, 0.3)
  end
end
{% endhighlight %}