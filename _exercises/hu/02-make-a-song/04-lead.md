---
chapter: Készíts egy dalt
title: Fő téma/Vezető szólam
lang: hu
layout: exercise
---

Itt az ideje dallamot hozzáadni. Ahelyett, hogy újra egy  `play` és `sleep` parancsot írnál újra és újra, a következő parancsikont fogjuk használni:  `play_pattern_timed`.

Ehelyett:

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

ezt tudod írni:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

az első lista `[:c2, :d2, :e2, :d2]` egy hangjegyek csoportja, a második lista  `[0.5, 0.25, 0.75, 0.5]` a hangjegyek közti szünetek csoportja.

## Dallam

A dalod fő témájának elkészítéséhez hozz létre egy új  `live_loop` -ot  `:melody` néven. Ha könnyebbnek érzed, használd a `play_pattern_timed` funkciót a dallam megírásához. A <a href="{{ "/exercises/hu/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">zongora</a> szimulátort is használhatod, ha segít. Íme egy példa:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Most az egész dal valami ilyesmi lehet:

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

Jaj, ez nagyszerű kezdés! Most menj, és kísérletezz különböző dallamokkal, szintetizátorokkal és  `attack:` és `release:`  értékekkel.