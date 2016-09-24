---
chapter: Lag lyder
title: Akkordprogresjon
lang: no
layout: exercise
---

Det forrige eksepmelet spilte bare i C-moll. Her er et eksempel som bruker en ring av akkorder som alle løkkene bruker. Alle løkkene spiller rundt med samme akkord og en av løkkene endrer akkorden for alle. Det begynner å bli ganske komplekst, men sjekk det ut hvis du vil. Du kan bruke <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">akkordprogresjoner</a> for å velge fine akkorder om du vil det. 

{% highlight ruby %}
akkorder = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = akkorder[0] # ta den første akkorden i ringen og lagre den i en variabel
# Denne kommer til å bli brukt i alle live løkkene og blir ticket videre av :bass løkken.

live_loop :melodi do
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
    play c[0] # spill den første noten i akkorden, vi teller fra null
    sleep 1
  end
  play c[2] # spill den tredje noten i akkorden
  sleep 0.5
  play c[1] # # spill den andre noten i akkorden
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
