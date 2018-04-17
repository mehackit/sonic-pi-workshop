---
chapter: Generar sonidos
title: Variables
lang: es
layout: exercise
---

Echa un vistazo al ejemplo de abajo. ¿Qué está pasando?

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Hay una variable `r` que toma un cierto valor cada tiempo que se toca el bucle, y ese valor está siendo usado como la opción liberación para play y como la longitud de sleep. Una variable es algo como una caja donde puedes guardar cosas y tomar cosas fuera. Usar una variable es tan simple como `nombre_variable =  valor_variable`. Ahora el valor_variable se guarda en nombre_variable. Puedes obtener el valor simplemente escribiendo el nombre_variable.

Vamos a añadir un sintetizador y bajos al ejemplo para probar variables. El bucle `:keys` es simple, no pasa nada nuevo, pero el bucle `:bass` es un poco complicado:

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick` toma una nota del acorde de Do menor y la guarda en una variable llamada `n`. `.tick` siempre se mueve hacia el siguiente valor cuando se le llama. `play n` toca la nota guardada. Luego `.tick` se llama de nuevo para conseguir la siguiente nota del acorde. Cuando el bucle empieza de nuevo, `.tick` continúa  desde donde estaba. 
