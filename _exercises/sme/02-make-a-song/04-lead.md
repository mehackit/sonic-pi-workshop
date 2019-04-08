---
chapter: Lávlaga dahje bihtá ráhkadeapmi
title: Váldomelodiija
lang: sme
layout: exercise
---

Čuovvovažžan bihttái galgá komponeret melodiija. Dan sadjái ahte melodiija čállojuvvošii eatnatlohkosaš `play`- ja `sleep`-gohččumiiguin ain ođđasit, don sáhtát seastit áiggi nu ahte duddjot málle geavahettiin gohččuma `play_pattern_timed` (čuojat-málle-doaimmahuvvon mearreáigge dihto ládje), mii ráhkada málle melodiijai.

Dan sadjái ahte čálášit:

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

Sáhtát čállit seamma ášši oaneheappot:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

Vuosttaš listu `[:c2, :d2, :e2, :d2]` lea nuohtaid joavku  ja nubbi listu `[0.5, 0.25, 0.75, 0.5]` ovdanbuktá bottaid guhkkodagaid, mat leat sierra nuohtaid gaskkas.

## Melodiija

Ráhkat ođđa `live_loop` namain `:melody` (melodiija), Gohččumiin duddjojuvvo du bihttái váldofáddá. Juos dat orru álkit, geavat play_pattern_timed -gohččuma melodiija čállimii. Juos hálidat, de sáhtát maid geavahit <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">virtuálapiáno</a> melodiija duddjoma várás. Vulobealde lea ovdamearka melodiija komponeremis:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Dál olles bihttá čájeha kodejuvvon hámis čuovvovašlágánin:

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

live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

De gal viššá, dát lea fiinna álgu! Dál sáhtát joatkit nuohta bidjama nu ahte lonuhat eará melodiijaid, syntetisáhtoriid jienaid  ja geavahettiin eará árvvuid `sleep` (oađe), `attack` (časkkástat) ja `release` (luoitin) -gohččumiin. 