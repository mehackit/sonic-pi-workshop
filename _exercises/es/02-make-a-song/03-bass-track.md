---
chapter: Hacer una canción
title: Pista de bajos
lang: es
layout: exercise
---

Añade otro live loop para tus bajos. Compón un sencillo y sólido ritmo de bajos tipo groove, puedes usar <a href="{{ "/exercises/es/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">el piano</a> en tu navegador para elegir las notas que quieras. Aquí tienes un ejemplo:


{% highlight ruby %}
live_loop :bass do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## Cambiar el sintetizador

¡Ha llegado el momento de modificar tu sonido de una forma más interesante! Podemos hacerlo cambiando el sintetizador de sonido que estamos usando. El sintetizador predeterminado de Sonic Pic se llama `beep`. Para usar un sintetizador diferente, necesitas añadir al código `use_synth :nombre_del_sintetizador` encima de la secuencia de código que quieres usar en él.

En este ejemplo, fm es el nombre del sintetizador:

{% highlight ruby %}
live_loop :bass do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

Hay muchos sonidos geniales de sintetizador incluidos con Sonic Pi. Para encontrar sus nombres, pulsa sobre el icono de ayuda en lo alto de la pantalla y aparecerá la ventana de ayuda. Luego selecciona Sintetizadores desde las pestañas de la parte izquierda de la ventana de ayuda. Pulsa sobre cualquiera de los nombres de los sintetizadores para conseguir más información sobre como usarlos. 

## Cambiando la duración de las notas

A veces, puede que te guste hacer sonidos que suenen durante un tiempo más largo o a diferente velocidad. Esto se puede conseguir modificando unos parámetros opcionales del código que estás usando. `attack` y `release` controlan la amplitud de la nota en el tiempo:

<img src="{{ "/assets/img/es/attackrelease_es.png" | prepend: site.baseurl }}">

Usar attack y release es como lo siguiente. Ahora la nota sería de una duración de cuatro tiempos .

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Puedes hacer una pequeña nota staccato configurando attack a cero y release a un valor muy corto:

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Explora con distintos sintetizadores y duraciones de notas y consigue tu pista de bajos.

Ahora la canción puede ser algo como esto:

{% highlight ruby %}
use_bpm 100

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
{% endhighlight %}
