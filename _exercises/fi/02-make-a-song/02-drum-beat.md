---
chapter: Kappaleen tekeminen
title: Rumpubiitti
lang: fi
layout: exercise
---

Katsotaan aluksi kuinka Sonic Pi:ssä ohjelmoidaan rumpubiitti, jossa on bassorumpu, virveli ja hihat ja tutustutaan kahteen uuteen komentoon `live_loop` ja `sample`. 

Aloita ohjelman kirjoittaminen tyhjälle välilehdelle (*Buffer*) ja luodaan sinne `live_loop` nimeltä `:rummut`. Luupin nimi voi olla mitä vain ja sen tarkoitus on vain selventää mitä kyseinen luuppi tekee. `live_loop` on jatkuva luuppi (ts. toistuu niin kauan kunnes ohjelma pysäytetään painamalla **Stop**-nappulaa) ja se ajetaan samanaikaisesti muiden `live_loop`:ien kanssa. 

{% highlight ruby %}
live_loop :rummut do
  sleep 1
end
{% endhighlight %}

Huomioi`live_loop`-komentoja voi olla lukuisia eri nimillä, mutta kahdella `live_loop`:lla ei voi olla samaa nimeä. Jokaisen `live_loop`:in sisällä täytyy olla vähintään yksi `sleep`-komento. 

Nyt sinulla on ohjelmassa tyhjä luuppi nimeltä `:rummut`. Ohjelmoidaan sinne seuraavaksi yksinkertainen peruskomppi, jossa bassorummun iskut ovat ensimmäisellä ja kolmannella iskulla ja virvelirummun iskut ovat toisella ja neljännellä. Sävelten soittamisen sijaan käytetään tällä kertaa komentoa `sample :samplen_nimi`, jolla voidaan soittaa sample (nauhoitettu ääninäyte). Tässä on esimerkkiohjelma rumpubiitistiä :

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
{% endhighlight %}

Ohjelman pitäisi soittaa nyt tasaista peruskomppia. Tempoa voit kokeilla muuttaa vaihtamalla numeroa `use_bpm`-komennon perässä. Kun olet kirjoittanut `sample`-komennon ja painanut välilyöntiä Sonic Pi tarjoaa sinulle automaattisesti listan eri sample-mahdollisuuksista, joita voit käyttää komennon kanssa. Kokeile seuraavaksi vaihtaa eri iskuilla kuuluvia rumpusampleja. 

Alla oleva kuva vielä havainnollistaa kuinka yksi `live_loop`:in kierto toimii:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

## Lisää hi-hat

Seuraavaksi lisätään rumpukomppiin hi-hatin iskut. Sitä varten luodaan uusi `live_loop` nimeltä `:hihat` ja ohjelmoidaan se soittamaan hi-hatilta kuulostava sample esimerkiksi joka 1/16-nuotilla: 

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

Noin monotoninen hi-hat-komppi ei kuitenkaan istu hirveän hyvin peruskompin sekaan. Tehdään siitä vähän mielenkiintoisempi esimerkiksi seuraavalla muokkauksella:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Hi-hat-komppi soikin nyt polyrytmisesti, sillä luupin pituus on nyt 1.25 iskua, joten se ei aina alakaan alusta rumpukompin ykkösellä. Alunperin tarkoituksenamme oli tehdä siitä tasan yhden iskun pituinen, mutta annetaan tämän hi-hat-kompin nyt olla, sillä sehän kuulostaa todella hyvältä ja se onkin tärkeintä! Sonic Pi -ohjelmoinnissa voi ja on varaa tehdä paljon virheitä, sillä niiden avulla voit monesti löytää ääniä ja rytmejä jotka ovatkin mielenkiintoisempia kuin lopputulos mihin alunperin olit pyrkimässä. 

Nyt kappaleen alun pitäisi näyttää jotakuinkin tältä: 

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
{% endhighlight %}

Millä tavoin live_loopit näyttäytyisivät normaaleissa musiikinteko-ohjelmissa? Katso alla oleva video, jonka avulla voit hahmottaa minkälaisia "sekvenssejä" live_loopit muodostavatkaan.

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Kokeile seuraavaksi muuttaa rumpukompin sampleja ja rytmejä. Voit halutessasi lisätä kolmannen live_loopin perkussiosoittimille tai muille. Seuraavaksi luomme bassoraidan kappaletta varten…  