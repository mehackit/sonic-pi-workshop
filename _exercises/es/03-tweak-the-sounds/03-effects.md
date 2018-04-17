---
chapter: Retoca los sonidos
title: Efectos
lang: es
layout: exercise
---

La larga espera ha terminado, ¡aquí está: `with_fx`! 

Es una herramienta poderosa para añadir distintos efectos a tu composición. Empecemos con `:reverb`. Casi todos los sonidos suenan mejor con reverberación. Empieza envolviendo un bloque de tu código con `with_fx :reverb do` y `end`:

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}


Suena mejor, ¿verdad? Como los sintetizadores y los samples, los efectos tienen también opciones. `mix:` es una opción que establece cuanto se escucha del efecto y del sonido original. `mix: 0` solo toca el sonido original, `mix: 1` toca solo el FX. Reverb tiene también una opción `:room`. Prueba distintos tamaños de room con valores entre 0-1. Si abres la pestaña 'Fx' en el menú de ayuda, pueden encontrar que opciones están disponibles para FX.

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Hay muchas FX donde elegir. Y no tienes porqué conformarte con una: ¡puedes anidarlos! (En algún momento su computadora se puede quedar sin recursos pero preocúpate luego si esto pasa).


{% highlight ruby %}
live_loop :effects do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

¡Ahora vuélvete loco añadiendo FX en todos lados para crear nuevos sonidos increíbles!
