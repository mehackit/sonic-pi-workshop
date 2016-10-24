---
chapter: Lag en sang
title: Melodien
lang: no
layout: exercise
---

Nå er det på tide å skrive en melodi. Istedenfor å skrive en hel masse `play` og `sleep` kommandoer igjen og igjen skal vi bruke en snarvei: `play_pattern_timed`.

Istedenfor å skrive:

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

kan du skrive:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

Den første listen `[:c2, :d2, :e2, :d2]` er en gruppe av noter, og den andre listen `[0.5, 0.25, 0.75, 0.5]` er en gruppe av pauser mellom notene.

## Melodi

Lag en ny `live_loop` som heter `:melodi` og lag en melodi til sangen din. Hvis du synes det er enklere kan du bruke `play_pattern_timed` funksjonen for å skrive melodien. Du kan også bruke <a href="{{ "/exercises/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> hvis det hjelper. Her er et eksempel:

{% highlight ruby %}
live_loop :melodi do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Nå ser hele sangen ut omtrent som det her:

{% highlight ruby %}
use_bpm 120

live_loop :trommer do
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

live_loop :melodi do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Supert, det er en flott begynnelse! Nå kan du utforske med forskjellige melodier, synther og `attack:` og `release:` verdier. 