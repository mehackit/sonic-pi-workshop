---
chapter: Generatiivisuus
title: Sointukulku
---


Edellisessä esimerkissä käytimme ainoastaan C-mollisointua. Seuraavaksi katsomme esimerkkiä, jossa hyödynnetään ketjua (**ring**) koko kappaleen sointukulun määrittämistä varten. Kaikki esimerkissä olevat luupit käyttävät säveliä samasta soinnusta ja yksi luupeista määrittää sen milloin ketjussa edetään seuraavaan sointuun. Tämä on jo hieman monimutkaisempi esimerkki, mutta se kannattaa kuitenkin käydä läpi inspiraation vuoksi. Kopio esimerkki tyhjään **Buffer**-välilehteen ja kokeile muuttaa sen sointuja `chords`-ketjussa. Voit löytää sopivia sointukulkuja esimerkiksi tämän <a href="{{ "/exercises/09-piano/01-piano.html" | prepend: site.baseurl }}">sointukulkukaavion</a> avulla. 

{% highlight ruby %}
chords = [chord(:C, :minor7), chord(:Ab, :major7), chord(:Eb, :major7), chord(:Bb, "7")].ring
c = chords[0] # take the first chord of the ring and save it to a variable
# this is going to be used in all the live_loops. I will be ticked by the :bass loop

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