---
chapter: Hacer una canción
title: Añade aleatorización
lang: es
layout: exercise
---

¡Genial! Conseguiste que tu canción vaya bien con un ritmo estable y un bajo enganchado encima de la melodía. Ahora vamos a hacer algo muy guay y desataremos el verdadero potencial de Sonic Pi. Vamos a añadir algunos elementos generativos a la pista y a programar la computadora para que lo componga por nosotros.

## Tirar un dado y transportar la melodía

Transportar significar mover el tono hacia arriba o hacia abajo. Podemos transportar aleatoriamente la melodía de vez en cuando y luego añadir algún condimento a la pista. Puedes tirar un dado para decidir cuando cambiar el tono de la melodía. Un ejemplo:

{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## Crea una pista aleatoria acid bass

Vamos a hacer algo interesante para el bucle de bajos. `.choose` es un método práctico que aleatoriamente escoge un elemento de una lista. Como esta:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` son una lista de notas (en este caso las notas del acorde de Do mayor). `.choose` elige una de estas notas al azar. En lugar de notas puedes escribir cualquier cosa en la lista. Como tiempos de silencio por ejemplo: 

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

No tienes incluso que recordar que notas están en un acorde. Sonic Pi puede hacer eso por ti. En lugar de escribir `[:c, :e, :g]`, simplemente escribe `(chord :C, :major)`. Eso crea una lista automática para ti con las notas correctas. Por ejemplo:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Usa esta hechicería para una pista de bajo tipo bubbling (burbujeante). Guarda tu trabajo y copia tu bucle `:bass` en curso en otro buffer, por si quieres volver a él. Luego haz sitio para nuestra nueva pista de bajo y elimina el contenido del bucle. Vamos a usar el sintetizador clásico `:tb303` y tocaremos notas de semicorchea del acorde de Do mayor:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

¡Oh! No está del todo bien. Añade el parámetro `release: 0.125` al final del comando play, así:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Así está mejor, pero todavía se puede pulir algo más. Hasta ahora has usado los parámetros `attack:` y `release:` para el comando `play`. Dependiendo del sintetizador que estés usando, hay un muchos más parámetros para usar. 

Por ejemplo el sintetizador tb303 tiene 45 opciones diferentes de retoque. Vamos a usar el parámetro llamado `cutoff` para los bajos. Cutoff elimina todas las frecuencias por encima de la frecuencia de cutoff. Puedes usar valores entre 0-130.

Pero no uses solo un determinado valor de cutoff, ¡puedes tener un valor aleatorio! Con `rrand(min, max)` puedes generar números aleatorios en un rango dado. Pruébalo:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

¡Bieeen! Recuerda investigar y probar cosas diferentes. Como repaso, aquí tenemos un ejemplo sobre lo que puedes ya haber probado a estas alturas:

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
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
