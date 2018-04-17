---
chapter: Temas avanzados 1
title: Rebanando muestras
lang: es
layout: exercise
---

Volvamos atrás y miremos los samples (muestras) de nuevo. Mira el vídeo de más abajo para entender como se comporta la reproducción de un bucle de samples. 

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Muestra la reproducción del sample `:loop_amen` con el código siguiente:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

Vamos a hacer un `live_loop` que mantiene sonando el ritmo para nosotros. ¿Recuerdas la opción `beat_stretch` para el comando `sample` que altera el tono de la muestra para que coincida con la longitud deseada en tiempos? Lo presentamos brevemente en el capítulo “Retocando sonidos”. Luego vamos a usarlo para estirar el sample `loop_amen` a 4 tiempos y lo mantendremos repitiéndolo:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Lo siguiente que vamos a echar un vistazo es como puedes tocar partes del bucle Amen en un orden diferente. Con el comando `sample` puedes configurar un comienzo distinto y un punto final para el sample usando los parámetros `start` y  `finish`. Ambos parámetros aceptan valores entre `0` y `1` indicando los puntos del comienzo y el final de la reproducción del sample. Por ejemplo: `0` es el comienzo del sample, `0.5` es el punto medio y `1` es el final del  sample. Vamos a probarlo en acción con el siguiente ejemplo:

Next we're going to take a look how you can play parts of the Amen loop in a different order. With the `sample` command you can set a different starting and ending point for the sample by using parameters `start` and `finish`. Both of the parameters accept values between `0` and `1` indicating the starting and finishing points of the sample playback. For example: `0` is the beginning of the sample, `0.5` is the midpoint of the sample and `1` is the ending point of the sample. Let's try it in action with the following example:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

El vídeo de abajo, (creado con la ayuda de Simpler en Ableton Live) visualiza que partes del sample `loop_amen` se están tocando en cada ejecución de `live_loop`:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Ahora, ¿no sería divertido tocar distintas partes del sample en un orden completamente diferente? Intenta probando con las opciones para el comando `sample`. Por ejemplo, añadiendo la opción `rate: -1` a uno de los `loop_amen` hace que se reproduzca hacia atrás.

Una muestra de sonido se puede esculpir en casi cualquier cosa una vez que empieces a probar con las opciones de `sample` (como `rate`, `pan`, `amp`, `attack`, `release`, `start` y `finish`). El siguiente ejemplo usa estas opciones con valores aleatorios para tocar unos micro-sonidos únicos de los dos samples: 

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

Esta técnica es también ampliamente usada en <a href="https://en.wikipedia.org/wiki/Granular_synthesis">samplers granulares y sintetizadores</a>. 
