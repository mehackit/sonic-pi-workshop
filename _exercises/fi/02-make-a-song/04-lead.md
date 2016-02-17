---
chapter: Kappaleen tekeminen
title: Päämelodia
---

Nyt kun kappaleen pohja on kunnossa on aika keksiä sille toimiva päämelodia. Sen sijaan että kirjoittaisimme melodiakulun toistuvilla `play` ja `sleep` komentojen sarjoilla, voimme käyttää komentoa `play_pattern_timed` säästääksemme aikaa ja koodirivejä. 

Sen sijaan että kirjoittaisit: 

{% highlight ruby %}
play :c2
sleep 0.5
play :d2
sleep 0.25
play :e2
sleep 0.75
play :d2
sleep 0.5
{% endhighlight %}

Voit kirjoittaa saman asian myös näin:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

Ensimmäinen lista `[:c2, :d2, :e2, :d2]` on joukko säveliä ja toinen lista `[0.5, 0.25, 0.75, 0.5]` on joukko sävelten välissä olevia taukoja. 

## Melodia

Tee uusi `live_loop` nimeltä `melodia`, johon voimme kirjoittaa kappaleen päämelodian. Jos se tuntuu helpommalta, käytä `play_pattern_timed` komentoa melodian kirjoittamiseen. Voit myös halutessasi käyttää selaimessa toimivaa <a href="{{ "/exercises/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">pianoa</a> päämelodian tavailua varten. Alla on esimerkki melodiasta:

{% highlight ruby %}
live_loop :melodia do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

Nyt koko kappale kuulostaa jotakuinkin tältä: 

{% highlight ruby %}
use_bpm 120

live_loop :rummut do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end

live_loop :basso do
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end

live_loop :melodia do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Nyt olet jo saanut upean alun kappaleen kirjoittamiseen Sonic Pi:llä. Seuraavaksi kannattaakin tutkia miten kappale muuttuu kokeilemalla erilaisia melodiakulkuja, syntetisaattorin ääniä, sampleja ja `sleep`, `attack` ja `release` -arvoja. 
