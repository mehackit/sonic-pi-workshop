---
chapter: Kappaleen tekeminen
title: Bassoraita
lang: fi
layout: exercise
---

Lisää uusi `live_loop` bassoa varten ja kirjoita sille yksinkertainan ja toimiva bassolinja. Voit käyttää halutessasi selaimessa toimivaa <a href="{{ "/exercises/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">virtuaalipianoa</a>  bassolinjan melodian tavailua varten. Alla on esimerkki bassolinjasta:

{% highlight ruby %}
live_loop :basso do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## Soivan äänen muuttaminen

Seuraavaksi opit miten Sonic Pi:n `play`-komennon soivan äänen saa muunnettua. Joka kerta kun kutsut Sonic Pi:ssä komentoa `play` se käyttää syntetisaattorin oletusääntä `beep` ellei sitä ole aiemmin koodissa muutettu. Syntetisaattorin (tuttavallisemmin syntikan) äänen voi vaihtaa komennolla `use_synth :syntikan_nimi` ennen `play`-komentojen kutsuminen.

Alla olevassa esimerkissä käytämme syntikan bassona ääntä nimeltä `fm`:

{% highlight ruby %}
live_loop :basso do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

Sonic Pi:ssä on todella monia mielenkiintoisen kuuloisia syntikoita. Voit löytää eri ääniä helposti `use_synth` komennon jälkeen avautuvasta listasta tai Apupaneelin (Help) Synths-välilehdeltä. 

## Soivan sävelen pituuden muuttaminen

Toisinaan saatat haluta soittaa säveliä eri pituisina. Tämä voidaan tehdä lisäämällä `play`-komentoon parametrit `attack` ja `release`, jotka muokkaavat äänenvoimakkuutta suhteessa aikaan: 

Komennot `attack` ja `release` näyttäävät seuraavanlaiselta. Nyt sävel soi yhteensä 4 iskun ajan: Se voimistuu ensimmäisen iskun ajan ja hiljenee 3 iskun ajan. 

<img src="{{ "/assets/img/attackrelease_fi.png" | prepend: site.baseurl }}"> 

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Voit myös sävelistä lyhyitä iskuja (staccato) asettamalla `attack`-arvo nollaan ja antamalla `release`-arvolla hyvin pieni arvo: 

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Tutki vielä erilaisia syntetisaattorin ääniä ja sävelten pituuksia ja muokkaa bassoraidastasi juuri sellainen kuin haluat! 

Kertauksena, olemme nyt ohjelmoineet yksinkertaisen rumpubiitin ja bassolinjan ja koodi näyttää jotakuinkin tältä: 

{% highlight ruby %}
use_bpm 100

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
{% endhighlight %}