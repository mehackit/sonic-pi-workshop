---
chapter: Kappaleen tekeminen
title: Lisää satunnaisuutta
lang: fi
layout: exercise
---

Mahtavaa! Nyt sinulla on valmiina kappaleen alku, jossa on tukeva peruskomppi, hihatit, basso ja melodiakoukku kaiken huipulla. Seuraavaksi teemme jotain mikä avaa Sonic Pi:n todelliset mahdollisuudet. Lisätään seuraavaksi satunnaisia elementtejä kappaleen koodiin! Se tarkoittaa sitä että voimme antaa tietokoneen "heittää noppaa" puolestamme ja tehdä valintoja esim. siitä mitä säveliä jossain kappaleen kohdassa soitetaan. 

## Heitä noppaa ja transponoi melodiaa

Transponointi tarkoittaa sävelkorkeuden muuttamista ylös (korkeammalle) tai alas (matalammalle). Me voimme esimerkiksi antaa tietokoneen välillä transponoida yhden `live_loopin` sisällä olevat sävelet kaksi sävelaskelta korkeammalle. Sitä varten tutustumme komentoon `if one_in(6)` seuraavassa esimerkissä: 

{% highlight ruby %}
live_loop :melodia do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Huomasitko miten kappaleen melodia soi välillä korkeammalta? Esimerkissä jokaisella live_loopin kierrolla kutsutaan komentoa `if one_in(6)`, joka käskee Sonic Pi:tä heittämään kuusisivuista noppaa. Jos nopanheiton tulos on kuusi, seuraavan rivin komento `use_tranpose 2` suoritetaan ja sen seurauksena `play_pattern_timed`-komennon sävelet soitetaan kaksi sävelaskelta korkeammalta. Jos nopanheiton tulos on alle kuusi, kutsutaan rivin `else` jälkeistä komentoa `use_transpose 0`, joka tarkoittaa että melodiaa ei transponoida. 

## Luo satunnainen "Acid House" -bassolinja

Kokeillaan seuraavaksi tehdä jotain mielenkiintoista bassolinjalle. `choose` on erittäin hyödyllinen komento, jolla voimme valita listasta satunnaisesti jonkin elementin. Esimerkiksi näin: 

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` on lista nuotteja (tässä tapauksessa C-duurisoinnun sävelet). `.choose` valitsee satunnaisesti yhden sävelen kaikista listassa olevista sävelistä. Sävelten sijasta voit myös satunnaisesti valita esimerkiksi numerolukuja. Kuten tässä esimerkissä: 

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Tässä välissä on hyvä mainita muutama asia soinnuista, Sonic Pi:ssä sinun ei tarvitse muistaa mitkä sävelet kuuluvat mihinkin sointuun. Sen sijaan että kirjoittaisit `[:c, :e, :g]` voit kirjoittaa komennon `chord(:C, :major)`, joka palauttaa listana sävelet jotka kuuluvat C-duurisointuun. Esimerkiksi: 

{% highlight ruby %}
loop do
  play chord(:c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Käytetään tätä komentoa esimerkiksi Acid House -musiikista tuttuun "kuplivaan" bassoraitaan. Tallenna työsi (**Save**-nappia painamalla) ja kopioi sinun `:basso`-luuppi uudelle **Buffer**-välilehdelle. Tyhjennä `live_loop`:in sisältö ja kirjoitetaan se uusiksi. Käytetään uutta bassolinjaa varten syntetisaattorin ääntä `:tb303` ja soitetaan C-duurisoinnun säveliä 1/16-nuotin pituisina: 

{% highlight ruby %}
live_loop :basso do
  use_synth :tb303
  play chord(:C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

No se ei kuulostanut vielä kovin hyvältä. Sävelten pituus (oletuksena `release: 1`) aiheuttaa sen että ne soivat päällekäin ja puuroutuvat. Lisätään `play`-komennon perään parametri `, release: 0.125` ja lopputulos kuulostaa jo paljon paremmalta: 

{% highlight ruby %}
live_loop :basso do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Tähän mennessä olet käyttänyt parametreja `attack:` ja `release:` play-komennon kanssa, mutta parametreja on paljon enemmänkin ja voivat riippua siitä mitä syntetisaattorin ääntä käytät. Esimerkiksi `:tb303`-äänellä on 45 erilaista parametria, joilla ääntä voi muokata. Kokeillaan seuraavaksi muokata bassoääntä parametrillä `cutoff`, joka leikkaa äänestä pois kaikki taajuudet cutoff-arvon yläpuolelta. Cutoff:in kanssa voit käyttää arvoja väliltä 0-130. 

Cutoff:in kanssa ei kannata käyttää mitään kiinteätä lukua ja voimme tehdä äänestä paljon mielenkiintoisemman muuttamalla arvoa satunnaisesti. Voimme käyttää uutta komentoa `rrand(minimi, maksimi)`, joka arpoo satunnaisesti lukuja minimi- ja maksimiarvojen väliltä. Kokeillaan sitä bassolinjassa: 

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Mahtavaa! Muista tutkia ja kokeille erilaisia arvoja esimerkin komennoilla. Kertauksena, tässä on ohjelma minkä olemme esimerkkien avulla kirjoittaneet: 

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
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melodia do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}