---
chapter: Generar sonidos
title: Tick
lang: es
layout: exercise
---
¿Recuerdas `chord`? La función chord te da las notas de un acorde concreto:

{% highlight ruby %}
play (chord :c, :major).choose 
# plays a random note of the C major chord (:c, :e or :g)
{% endhighlight %}

Hay también una función llamada `scale`. Scale te da todas las notas de una escala, no sólo las notas del acorde:

{% highlight ruby %}
play (scale :c, :major).choose 
# plays a random note of the C major scale (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

Con `choose` puedes obtener un elemento al azar de una lista. Si quieres ir a través de los valores de forma más estructurada, Sonic Pi tiene una función muy poderosa llamada `tick`:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Aquí, simplemente estamos agarrando la escala pentatónica de Mi menor (E3) y haciendo tic tac con cada elemento. Esto se hace añadiendo `.tick` al final de la declaración de scale. Este tick solo tiene efecto local en el live loop, de forma que cada live loop puede tener su propio tic tac independiente:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## Anillos

Puedes hacer tick sobre todo lo que es un _anillo_ (bueno, puedes hacer tick sobre una lista también pero se terminará cuando llegues al final). Los anillos son listas especiales, que empiezan de nuevo cuando llegas al final. Como en el ejemplo anterior, la escala empezó de nuevo desde el principio cuando llegó a la última nota. Tanto `scale` como `chord` devuelven un anillo. A veces querrás crear una lista y convertirla en un anillo llamando a `.ring` o usando el creador de anillos `ring`:

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 2, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Aquí tenemos un ejemplo más complejo. Aquí tienes una lista o acordes que se convierten en un anillo a través de tick: 

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Y luego compleméntalo con una ‘melodía’ principal. 

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

¡Empieza a hacer tick y enloquece!

