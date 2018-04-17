---
chapter: Generar sonidos
title: Progresiones de acordes
lang: es
layout: exercise
---

El anterior ejemplo se tocó solo en Do menor. Aquí tenemos un ejemplo, que usa un anillo de acordes que todos los bucles usan. Todos los bucles tocarán sobre el mismo acorde y un bucle cambia el acorde para todos. Se está haciendo bastante complejo, pero revísalo como fuente de inspiración si lo deseas. Puedes usar  <a href="{{ "/exercises/es/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">las tablas de progresión de acordes</a> para elegir buenos acordes si lo deseas. 

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # take the first chord of the ring and save it to a variable
# this is going to be used in all the live_loops. It will be ticked by the :bass loop

live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play c
  sleep 1
end

live_loop :bass do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] # play the first note of the chord
    sleep 1
  end
  play c[2] # play the third note of the chord
  sleep 0.5
  play c[1] # # play the second note of the chord
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
