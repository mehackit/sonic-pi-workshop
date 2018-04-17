---
chapter: Retoca los sonidos
title: Opciones
lang: es
layout: exercise
---

Hasta ahora has usado las opciones `attack`, `release`, y `cutoff` después del comando play.  Las opciones (o opts abreviando) son controles que pasas a play las cuales modifican y controlas aspectos del sonido que escuchas. Cada sintetizador tiene su propio conjunto de opts para ajustar de forma precisa su sonido. Sin embargo, hay un conjunto común de opts compartidas por muchos sonidos. Ahora vamos a conocer algunas opciones más para añadir más expresión a tus sonidos.

¡Puedes usar también algunas de las opciones con las muestras de sonido!


### `amp:`

La amplitud es el volumen de un sonido. 0 es silencio (no oirás nada), 1 es el volumen normal. Puedes subir la amplitud a 2, 10 o 100. Sin embargo, esto a menudo hace el sonido enturbiado y extraño. Así que intenta usar amplitudes bajas, por ejemplo en el rango de 0 a 0.5 para evitar compresión. 

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

Pan controla el paneo de un sonido en estéreo. -1 significa que lo oirás en el altavoz izquierdo, 1 significa que lo oirás en el altavoz derecho y 0 es centro. Puedes usar cualquier valor entre -1 y 1. Puedes intentar usando un valor aleatorio de paneo para algunas texturas de tu hi-hats.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

Suprimir frecuencias mayores a un valor dado. Usa valores entre 0-130.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` y `release:`

Tiempo en pulsos para ataque y liberación.

{% highlight ruby %}
play :c2, attack: 1, release: 1 #the note is two beats long
{% endhighlight %}

<img src="{{ "/assets/img/es/attackrelease_es.png" | prepend: site.baseurl }}">

### `use_synth_defaults` y `use_sample_defaults`

Si no quieres configurar tus opts por cada play o muestra de sonido de tu bucle, puedes usar  `use_synth_defaults` y `use_sample_defaults` para configurar las opts para todos los plays y muestras posteriores en el bucle :

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### Bonus: `beat_stretch:` y `rate:`

Esto es demasiado guay para saltárnoslo. Prueba esto:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

Hay un vacío molesto al final. La muestra es de 1.753310657596372 pulsos de duración, algo no muy práctico cuando quieres tocarla con todas las otras cosas que estamos usando. Por fortuna puedes usar `beat_stretch: 2` para estirar o encoger la muestra para hacerla durar exactamente 2 pulsos. 


{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

¡Bien! Ahora la opción `rate`.  Rate controla la velocidad que se toca un sample. 1 es en su velocidad original, 0.5 es a mitad de velocidad y 2 es al doble de velocidad.  El tono del sample también cambia a más alto o más bajo cuando cambias rate. ¡Y (redoble de tambores…) puedes tener incluso valores negativos! Los valores negativos tocan las muestras hacia atrás. Prueba tocando este bucle y cambiando sus valores de rate y speed:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

