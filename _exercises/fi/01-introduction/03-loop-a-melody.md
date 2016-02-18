---
chapter: Johdanto
title: Toistaminen
lang: fi
layout: exercise
---

Nyt kun sinulla on kiva melodia valmiina, haluaisit mahdollisesti toistaa sen useammankin kerran? Koodin jatkaminen kopio ja liimaa -metodilla (copy & paste) on mahdollista, mutta se on väsyttävää, tehotonta ja epäsiistiä koodin luettavuuden kannalta. Sonic Pi:ssä meillä on onneksi *toistokomennot* (ts. luupit), jotka ratkaisevat tämän ongelman meille! 

Kirjoita ennen melodiaosuuttasi komento `2.times do` ja komento `end` melodiaosuuden loppuun: 

{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

Sen sijaan että käyttäisit ainoastaan komentoa `2.times do` voit vaihtaa komennossa olevan numeron ja kertoa sillä ohjelmalle kuinka monta toistokertaa haluat. Esimerkiksi `4.times do` tai `99.times do`.

Voit myös halutessasi kirjoittaa luupin toisen luupin sisään:

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Kuuntele edellinen esimerkki" %}