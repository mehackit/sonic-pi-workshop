---
chapter: Gör en låt
title: Huvudmelodin
lang: se
layout: exercise
---

Nu när grunden till din låt är klar är det dags att hitta på en huvudmelodi åt den. Istället för att skriva melodin som en serie av `play` och `sleep`, kan vi använda kommandot `play_pattern_timed` för att spara tid och rader av kod. 

Istället för att skriva: 

{% highlight ruby %}
play :c2
sleep 0.5
play :d2
sleep 0.25
play :e2
sleep 0.75
play :d2
sleep 0.5
{% endhighlight %}

Kan du uttrycka samma sak så här: 

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

Den första listan `[:c2, :d2, :e2, :d2]` representerar noterna och den andra `[0.5, 0.25, 0.75, 0.5]` pauserna mellan dem. 

## Melodin

Gör en ny `live_loop` som heter `melodi`. Hit kan du skriva huvudmelodin för ditt stycke. Om det känns lättare kan du använda `play_pattern_timed` för att skriva din melodi. Du kan också använda <a href="{{ "/exercises/se/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">ett virtualpiano</a> som fungerar i din webbläsare. 

Ett exempel på en melodi: 

{% highlight ruby %}
live_loop :melodi do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Nu ser hela låten ut ungefär såhär: 

{% highlight ruby %}
use_bpm 120

live_loop :trummor do
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

live_loop :bas do
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end

live_loop :melodi do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Nu har du redan kommit igång med musikprogrammering med Sonic Pi! Det lönar sig att utforska hur din låt ändras när du provar olika melodier, synter, samples och `sleep`, `attack` och `release` -värden.