---
chapter: Generar sons
title: Variables
lang: cat
layout: exercise
---

Feu una ullada a l'exemple de més a baix. Què està passant?

{% highlight ruby %}
live_loop :melodia do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Hi ha una variable r que pren un cert valor cada temps que es toca el bucle, i aquest valor està sent usat com per al valor extinció (release) de play i com la duració de sleep. Una variable és com una caixa on podeu guardar coses i agafar-les després. Usar una variable és tan simple com escriure `valiable_name = variable_value`. Ara el variable_value (valor de la variable) es guarda en variable_name (nom de la variable). Podeu obtenir el valor simplement escrivint variable_name.

Afegirem un sintetitzador i baixos a l'exemple per a provar variables. El bucle `:keys` és simple, no hi ha res de nou, però el bucle `:bass` és una mica complicat:

{% highlight ruby %}
live_loop :melodia do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = chord(:c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play chord(:c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = chord(:c2, :minor).tick` pren una nota de l’acord de Do menor i la guarda en una variable anomenada `n. .tick` sempre es mou cap al següent valor quan se li crida. `play n` toca la nota guardada. Després `.tick` és nombrat novament per aconseguir la següent nota de l’acord. Quan el bucle comença de nou, `.tick` continua des d'on s’havia quedat.
