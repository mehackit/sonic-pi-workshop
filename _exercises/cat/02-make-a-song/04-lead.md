---
chapter: Fer una cançó
title: Pista principal
lang: cat
layout: exercise
---

Ara és el moment de la melodia. En comptes d'escriure una gran quantitat ordres `play` i `sleep` una i altra vegada, farem servir una drecera: `play_pattern_timed`.

En comptes d'escriure:


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

podeu escriure:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

La primera llista `[:c2, :d2, :e2, :d2]` és un grup de notes i la segona llista `[0.5, 0.25, 0.75, 0.5]` és un grup de silencis entre les notes.

## Melodia

Creeu un `live_loop` nou anomenat `:melodia` per obtenir un tema principal per la cançó. Si us sembla més senzill, utilitzeu la funció `play_pattern_timed` per escriure la melodia. Podeu fer servir el <a href="{{ "/exercises/fi/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> també si això us ajuda. Un exemple:

{% highlight ruby %}
live_loop :melodia do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Ara tota la cançó pot ser alguna cosa com això:

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

live_loop :melodia do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Bé, un gran començament! Ara aneu i exploreu amb diferents melodies, sintetitzadors i valors de `attack:` i `release:`. 
