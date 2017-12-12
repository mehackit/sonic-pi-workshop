---
chapter: Créer un morceau
title: Mélodie
lang: fr
layout: exercise
---

Passons maintenant à la mélodie. Au lieu d'écrire un gros paquet de commandes `play` et `sleep` encore et encore, nous allons utiliser le raccourci&nbsp;: `play_pattern_timed`.

Au lieu d'écrire&nbsp;:

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

tu peux écrire&nbsp;:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

La première liste `[:c2, :d2, :e2, :d2]` contient les notes et la seconde liste `[0.5, 0.25, 0.75, 0.5]` contient les pauses entre ces notes.

## Mélodie

Crée une nouvelle `live_loop` nommée `:melodie` pour le thème principal de ton morceau. Si c'est plus simple, utilise la fonction `play_pattern_timed` pour écrire la mélodie. Tu peux aussi utiliser le <a href="{{ "/exercises/fr/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> si cela t'aide. Voici un exemple&nbsp;:

{% highlight ruby %}
live_loop :melodie do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Voici maintenant à quoi peut ressembler le morceau complet&nbsp;:

{% highlight ruby %}
use_bpm 120

live_loop :batterie do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :charleston do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end

live_loop :basse do
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

live_loop :melodie do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Waouh, c'est un bon départ&nbsp;! Maintenant vas-y et explore d'autres mélodies, synthétiseurs et valeurs de `attack:` et `release:`.
