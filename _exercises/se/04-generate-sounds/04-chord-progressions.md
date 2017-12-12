---
chapter: Genrera ljud
title: Ackordföljd
lang: se
layout: exercise
---

I föregående exempel använde vi endast ett ackord. Vi tar ett titt på ett exempel där en kedja används för att bestämma hela styckets ackordföljd. Alla live_loops använder toner från samma ackord och en av looparna bestämmer när man förflyttar sig till nästa ackord i kedjan. Det här exemplet är ganska komplicerat, men gå igenom det för inspirationens skull. Du kan använda ackordföljder för att hitta bra kombinationer om du vill.

{% highlight ruby %}
chords = [chord(:C, :minor7), chord(:Ab, :major7), chord(:Eb, :major7), chord(:Bb, "7")].ring
c = chords[0] # take the first chord of the ring and save it to a variable
# this is going to be used in all the live_loops. It will be ticked by the :bass loop

live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play c
  sleep 1
end

live_loop :bass do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] # play the first note of the chord
    sleep 1
  end
  play c[2] # play the third note of the chord
  sleep 0.5
  play c[1] # # play the second note of the chord
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
