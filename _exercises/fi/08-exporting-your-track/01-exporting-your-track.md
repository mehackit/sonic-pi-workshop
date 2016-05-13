---
chapter: Kappaleen nauhoittaminen
title: Kappaleen nauhoittaminen
lang: fi
layout: exercise
---

Kun olet saanut kappaleesi valmiiksi, seuraava luonnollinen vaihe onkin sen nauhoittaminen ja julkaisu! Käydään ensiksi läpi vaiheet, joiden avulla saat kappaleen nauhoitettua Sonic Pi:ssä. 

Nauhoitus tapahtuu yksinkertaisesti seuraavasti:

* Paina **Rec**-nappia
* Nauhoitus on nyt päällä ja seuraavaksi voit aloittaa kappaleen toistamisen **Run**-napista
* Kun kappaleesi on päättynyt (tai olet soittanut tarpeeksi monta kertaa live_loopit) paina **Stop**-nappia
* Tämän jälkeen paina **Rec**-nappia nauhoituksen pysäyttämiseksi
* Tallennusikkuna aukeaa ja voit tallentaa äänitiedoston haluamallasi nimellä (esimerkiksi *MunBiisi.wav*)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

Kun olet nauhoittanut ja tallentanut äänitiedoston, se on valmis soitettavaksi ja jaettavaksi (jos haluat jakaa kappaleen ystävillesi esimerkiksi <a href="http://www.soundcloud.com/mehackit">SoundCloudissa</a>). Suosittelemme kuitenkin käsittelemään äänitiedostoa muutamalla toimenpiteellä ennen sen julkaisua. Niiden avulla lopputulos tulee kuulostamaan yleensä enemmän ammattimaiselta tuotannolta! Äänenkäsittelyn voi tehdä esimerkiksi *Audacity*-ohjelmalla, joka on äänen nauhoittamiseen ja käsittelyyn suunniteltu ilmainen avoimen lähdekoodin ohjelma. Voit ladata *Audacityn* (Windows, OS X ja Linux) täältä: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>. 

## Audacity: Hiljaisuuden poistaminen

Äänitiedoston alkuun ja loppuun jää yleensä ylimääräistä hiljaisuutta kun nauhoitat kappaleesi Sonic Pi:llä. Jos hiljaisuus on ei-haluttua, se kannattaa poistaa seuraavalla toimenpiteellä. Avaa ensiksi kappaleen äänitiedosto Audacityssä valikosta "File / Open" (suom. "Tiedosto / Avaa"). Kun olet avannut äänitiedoston, Audacityn näkymän pitäisi näyttää jotakuinkin tältä:

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Valitse seuraavaksi "Effect"-valikosta (suom. "Efekti") työkalu nimeltä "Truncate Silence" (suom. "Typistä hiljaisuutta").

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Syötä seuraavat arvot työkalun kanssa: 

* Level: -60 dB (suom. Hiljaisuuden kynnysarvo) 
* Duration: 0.5 seconds (suom. Min silence duration) 
* Truncate to: 0.1 seconds (suom. Hiljaisuuden maksimipituus: 100 millisekuntia)

Paina seuraavaksi "Ok"-nappia.

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Nyt hiljaisuuden pitäisi olla näkyvästi lyhentynyt äänitiedoston aaltomuodossa. 

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Normalisointi

Jos äänitiedosto soi liian hiljaa verrattuna esimerkiksi muihin kappaleisiin, kannattaa harkita sen "normalisointia". Se tekee äänestä niin lujaa soivan kuin vain mahdollista ilman äänenlaadun vahingoittamista. Normalisointi on suositeltavaa erityisesti jos musiikkisi on biittivetoista konemusiikkia. Jos puolestaan kappaleesi on hiljaista ja rauhallista ambient-musiikkia, emme välttämättä suosittele äänen normalisointia. 

Näin se tehdään: Valitse "Effect"-valikosta (suom. "Efekti") työkalu nimeltä "Normalize" (suom. "Normalisoi").

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Syötä seuraava arvo "Normalize"-työkalun (suom. "Normalisoi") ikkunaan: 

* Normalize maximum amplitude: -0.1 dB. 

Tarkista että kaksi ylintä valintaruutua ovat valittuina ja paina "Ok". Jos haluat hiljaisemman tason äänenvoimakkuudelle, voit syöttää myös jonkin pienemmän arvon (esimerkiksi -4.0).

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Normalisoinnin jälkeen sinun pitäisi nähdä aaltomuodon "piikit" korkeampina, joka tarkoittaa äänenvoimakkuuden nousua. 

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: MP3-tiedoston tallentaminen

Seuraavaksi onkin vuorossa äänitiedoston tallentaminen. Jos haluat esimerkiksi tallentaa kappaleesi MP3-muodossa, avaa valikko "File" (suom. "Tiedosto") ja valitse sieltä "Export Audio" (suom. "Vie"). 

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

Vienti-ikkunassa on valikko "Format", josta voi valita tiedostomuodoksi MP3:n. Tiedostomuodon asetuksissa voi valita jonkin "Presetin" (suom. "Esiasetuksen"). Esimerkiksi seuraavilla asetuksilla saat toimivan MP3:n: 

* Bit Rate Mode: Preset (suom. Esiasetus)
* Quality (suom. Laatu): Standard, 170-210 kbps (suom. Oletus)
* Variable Speed (suom. Vaihteleva nopeus): Fast (suom. Nopea)
* Channel Mode (suom. Kanavatila): Joint Stereo (suom. Yhdistetty Stereo)

Seuraavaksi sinun täytyy syöttää tiedostonimi kenttään "Save As" ja painaa "Save"-nappia. Nyt sinulla pitäisi olla pakattu MP3-tiedosto kappaleestasi, jonka voit jakaa netissä kaveriesi kanssa tai siirtää esimerkiksi matkapuhelimeesi! 

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Näin helposti se tapahtuu, ja nyt voitkin alkaa nauhoittelemaan Sonic Pi -tuotoksiasi ja julkaisemaan niitä netissä!
