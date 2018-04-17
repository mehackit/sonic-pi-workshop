---
chapter: Hacer una canción
title: Pista principal
lang: es
layout: exercise
---

Ahora es el tiempo para la melodía. En vez de escribir una gran cantidad comandos `play` y `sleep` una y otra vez, vamos a usar un atajo: `play_pattern_timed`.

En vez de escribir:

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

puedes escribir:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}


La primera lista `[:c2, :d2, :e2, :d2]` es un grupo de notas y la segunda lista `[0.5, 0.25, 0.75, 0.5]` es un grupo de silencios entre las notas.

## Melodía

Crea un `live_loop` nuevo llamado `:melody` crea un tema principal para tu canción. Si te parece más sencillo, usa la función `play_pattern_timed` para escribir la melodía. Puedes usar <a href="{{ "/exercises/es/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">el piano</a> también si eso ayuda. Un ejemplo:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Ahora toda la canción puede ser algo como esto:

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

¡Bien, un gran comienzo! Ahora ve y explora con diferentes melodías, sintetizadores y valores de `attack:` y `release:`.