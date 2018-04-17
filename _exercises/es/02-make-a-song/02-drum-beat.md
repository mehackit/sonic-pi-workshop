---
chapter: Hacer una canción
title: Ritmo de batería
lang: es
layout: exercise
---

Vamos a ver como crear un simple ritmo de batería, consistente en un bombo, caja y hi-hat (el charles). Aprenderás dos cosas nuevas: `live_loop` y `sample`.

Empieza con un buffer vacío y crea un `live_loop` llamado`:drums`. Se le puede llamar de cualquier forma, los nombres solo son para identificar rápidamente que hace el bucle. `live_loop` es una bucle que se repite sin fin, que se puede sincronizar con otros live_loops (un `live_loop` tiene que tener al menos un sleep):

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

Presiona **Run** para oír tu primer `live_loop` tocando un buen sonido de bombo en cada tiempo. 

Vamos a hacer un backbeat simple con un golpe de caja en 1 y 3,  un redoble en 2 y 4. En vez de tocar notas, estarás desencadenando samples. Es tan simple como escribir `sample :sample_name`. Por ejemplo, un toque de tambor:

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
{% endhighlight %}

Eso es un toque continuo de tambor. El bucle `:drums` empieza con un golpe de caja, toca un redoble en dos, golpe de caja en tres y luego de nuevo un redoble en cuatro. Luego el bucle empieza de nuevo:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

Ahora prueba cambiando el tiempo (el número después de `use_bpm`) y juega con los samples. Cuando empieces a escribir el nombre del sample, puedes navegar entre las distintas muestras con la función de auto completado. Prueba distintos samples y echa un vistazo a como suenan.
Recuerda que no tienes que pulsar stop para cambiar el sonido – solo cambia el código y pulsa de nuevo **Run** – ¡los sonidos cambiarán automáticamente en el siguiente bucle sin perder el ritmo!


## Añadir hi-hat

Ahora añade hi-hat (el charles). Crea otro live loop llamado `:hihat` y añade tus samples hi-hat. Puedes hacer directamente por ejemplo notas corcheas o semicorcheas como esta (este es con semicorcheas):

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

No hace falta que sea tan cuadrado. Puedes hacerlo algo más funky como este:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

El patrón de ritmos cruzados de hi-hat era en principio un “error”. El bucle dura 1.25 tiempos en lugar del supuesto 1. ¡Pero suena bien!. Recuerda hacer muchos errores para encontrar cosas que ni siquiera estabas buscando.

Ahora la canción es algo como esto:

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
{% endhighlight %}

Quizás te estés preguntando como los live_loops se podrían traducir a secuencias de música en aplicaciones populares de música. El siguiente vídeo puede ayudarte a entender su relación. 

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Ahora juega con diferentes ritmos y muestras de sonido. Puedes añadir un tercer `live_loop`  para percusiones u otros efectos. Luego crearás una pista de bajos para tu composición.
