---
chapter: Introducción
title: Repitiendo una melodía
lang: es
layout: exercise
---

Bien, has escrito una bonita melodía. ¿Y si quisieras repetirla, o partes de ellas, varias veces? Puedes cortar y pegar la melodía, pero esto se vuelve algo muy cansado con el tiempo. Por suerte, ¡puedes usar la repetición! El término concreto en informática para esto es iteración, el cual sólo significa hacer cosas más de una vez. 

Escribe `2.times do` en el comienzo de tu melodía y `end` al fin de tu melodía (las notas están escritas en notación musical solo para el ejemplo, puedes usar notas MIDI si así lo deseas):

{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

En lugar de usar `2.times do`puedes elegir cuantas veces quieres repetir las notas. Por ejemplo `4.times do` o `99.times do`.

Puedes también usar repeticiones dentro de repeticiones si quieres:

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Escucha el ejemplo anterior" %}