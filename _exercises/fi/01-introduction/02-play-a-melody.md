---
chapter: Johdanto
title: Melodian soittaminen
lang: fi
layout: exercise
---

Syötä allaoleva koodinpätkä ohjelmointipaneeliin ja paina **Run**-nappia:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

Sehän ei kuulostanut melodialta ollenkaan, vai kuulostiko? Ohjelma ei soittanutkaan säveliä peräkkäin vaan itse asiassa samaan aikaan. Lopputulos kuulosti soinnulta (ts. kahden tai useamman sävelen yhtäaikainen soiminen). Jotta Sonic Pi soittaa play-komennot peräkkäin koodiin pitää merkitä myös nuottien kestot taukoina. Tämä voidaan tehdä `sleep`-komennolla, jonka perään syötetään tauon pituus iskuina. Esimerkkinä:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1`-komento käskee ohjelmaa odottamaan kokonaisen iskun ennen kuin suorittaa seuraavalla rivillä olevan komennon. Voit seuraavaksi kokeilla `sleep`-komentoa pienemmillä ja isommilla arvoilla. Jos tavanomainen nuotinnus on sinulle tuttua, alla oleva kuva kertoo miten eri tauot ja sävelpituudet toimivat Sonic Pi:ssä:  

<img src="{{ "/assets/img/Notes_EN.png" | prepend: site.baseurl }}"> 
<img src="{{ "/assets/img/Rests_en.png" | prepend: site.baseurl }}">

`play`-komennon perässä olevat nuotit voi kirjoittaa MIDI-arvoina (esim. 67, 80, 22) tai nuotteina (:G4, :Ab5, :Bb). Se on täysin sinusta kiinni kumpaa merkintätapaa haluat käyttää. 

Alla on kaavio, joka kertoo mitä nuottia kukin MIDI-arvo vastaa: 

<img src="{{ "/assets/img/midi_notes.png" | prepend: site.baseurl }}">

## Kokeile itse

Käytä sävellaljin C-duuri nuotteja (`72, 74, 76, 77, 79, 81, 83` tai `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) melodian luomiseen. Käytä `play`-komentojen välissä `sleep`-komentoa eri arvoilla muuttaaksesi musiikin rytmillistä kulkua. Koko kappaleen nopeutta (tempoa) voit käyttää komentoa `use_bpm` ohjelman alussa. BPM on lyhenne termistä *Beats Per Minute*, joka tarkoittaa numeroarvoa siitä kuinka monta iskua kappaleessa on minuutin aikana. Kokeile esimerkiksi seuraavaa: 

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Kuuntele edellinen esimerkki" %}

Näillä eväillä voit tehdä oman melodian ja rytmin!