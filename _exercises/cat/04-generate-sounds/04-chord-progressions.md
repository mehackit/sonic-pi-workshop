---
chapter: Generar sons
title: Progressions d'acords
lang: cat
layout: exercise
---


L'anterior exemple sonava només en Do menor. Ací tenim un exemple que fa servir un anell d'acords que tots els bucles utilitzen. Tots els bucles tocaran sobre el mateix acord i un bucle canvia l'acord per a tot el conjunt. S'està complicant bastant, però reviseu-ho com a font d'inspiració si ho desitgeu. Podeu fer servir <a href="{{ "/exercises/fi/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">taules de progressió d'acords</a> per triar bons acords si ho desitgeu. 

{% highlight ruby %}
chords = [chord(:C, :minor7), chord(:Ab, :major7), chord(:Eb, :major7), chord(:Bb, "7")].ring
c = chords[0] # pren el primer acord de l’anell i desa’l com a variable
# aquest serà utilitzat en tots els live_loops. Serà marcat (ticat) per el bucle :bass

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
    play c[0] # reprodueix la primera nota de l’acord
    sleep 1
  end
  play c[2] # reprodueix la tercera nota de l’acord
  sleep 0.5
  play c[1] # reprodueix la segona nota de l’acord
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
