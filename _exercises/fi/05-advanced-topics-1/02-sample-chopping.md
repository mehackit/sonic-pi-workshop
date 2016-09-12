---
chapter: Jatkoaiheet 1
title: Samplejen pilkkominen
lang: fi
layout: exercise
---

Muistatko vielä mitä aiemmat kappaleet ovat opettaneet samplejen soittamisesta? Kerrataanpa alkuun aivan yksinkertainen samplen soittaminen komennolla `sample`. Alla oleva esimerkkivideo kertoo miltä samplen soittaminen kuulostaa ja miltä sample näyttää:

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Se näyttää samplen `:loop_amen` toiston seuraavalla koodilla:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}


Muistatko aiemmista kappaleista miten samplen (esim. `:loop_amen`:in kaltaisen rumpuluupin) saa soimaan tauotta ja pysymään muun kappaleen kanssa samassa tempossa? Sitä varten pitää käyttää parametria `beat_stretch` komennon `sample` yhteydessä. `beat_stretch`:lle annetaan numeroarvona haluttu samplen pituus iskuina, jonka jälkeen samplea nopeutetaan tai hidastetaan sopimaan haluttuun nopeuteen. Seuraavassa esimerkissä "venytämme" ja luuppaamme Amen-rumpuluuppia: 

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Kokeillaan seuraavaksi pilkkoa Amen-luuppi osiin ja soittaa komppi erilaisessa järjestyksessä. Komennolle `sample` voi antaa parametrit `start` ja `finish`, joilla voidaan määritellä samplen soittamisen alku- ja loppukohdat. Kumpikin parametri hyväksyy arvot väliltä `0`...`1` ja arvot tarkoittavat seuraavaa: `0` on samplen alkupiste, `0.5` on samplen puoliväli ja `1` on samplen loppupiste. Kokeillaan samplen pilkkomista toiminnassa seuraavan esimerkin avulla: 

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

Alla oleva video (joka on tehty Ableton Liven avustuksella) hahmottaa mitkä osat samplesta `loop_amen` soivat milloinkin yhden `live_loop`-kierron aikana: 

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Eikö olekin kivaa pilkkoa sampleja ja soittaa niitä täysin eri järjestyksessä? Kokeile laittaa huviksesi johonkin yllä olevan esimerkin Amen-luupin iskuun parametri `rate: -1`, jolloin sample soi väärinpäin. 

`sample`-komennon parametreilla (kuten esimerkiksi `rate`, `amp`, `pan`, `attack`, `release`, `start` ja `finish`) samplet alkavat olla kuin muovailuvahaa, joista voi muokata lähes loputtomasti erilaisia ääniä. Kokeile allaolevaa esimerkkiä, jossa soitetaan todella lyhyitä "mikroääniä" kahdesta samplesta muuttaen lopputulosta jatkuvasti satunnaislukujen (`rrand`) avulla: 

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

Esimerkissä kuultavaa tekniikkaa käytetään hyvin paljon <a href="https://en.wikipedia.org/wiki/Granular_synthesis">granulaarisissa syntetisaattoreissa</a>