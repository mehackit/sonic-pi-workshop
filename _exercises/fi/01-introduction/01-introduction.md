---
chapter: Johdanto
title: Johdanto
lang: fi
layout: exercise
---

Sonic Pi on avoimeen lähdekoodiin perustuva ohjelmointiympäristö, joka yhdistää saumattomasti tekstipohjaisen koodauksen ja elektronisen musiikin reaaliaikaisen tuottamisen. Sen avulla on helppo tutustua ohjelmoinnin perusajatuksiin ja se sopiikin erinomaisesti ohjelmoinnin perusopetuksen työkaluksi. Sonic Pi:llä voit kirjoittaa koodia, säveltää ja esittää musiikkia aina klassisista tyylisuunnista nykyaikaiseen EDM:ään ja Dubstepiin. 

Tämä oppitunti ohjaa sinut Sonic Pi:n perusteiden ja edistyneempien toimintojen maailmaan. Oppitunnin päätteeksi voit jo luoda omia kappaleitasi ja se voi kuulostaa esimerkiksi tältä:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Tai ehkä jopa tältä:

{% include player.html filepath="/assets/audio/amen.mp3" %}

Sonic Pi:llä ohjelmointi on hyvin koukuttava tutkimusmatka ohjelmoinnin ja elektronisen musiikin sydämeen, jossa varsinaisia virheitä ei ole ja voit tehdä merkittäviä löytöjä. Musiikin ohjelmoinnissa on helppo luoda yhteyksiä kirjoitetun koodin ja toistetun äänen suhteen. Se mahdollistaa myös nopeat oivallukset ja kokeilut, joita ei olisi tullut ajatelleeksikaan tavanomaisilla soittimilla. Kaikista tärkeintä on pitää mielessä että sen pitää olla hauskaa! Joten muista tämä: pidä kivaa, tutki ja luo jotain uutta. 

## Sonic Pi:n avaaminen

Sinun täytyy asentaa Sonic Pi -ohjelmointiympäristö ennen kuin voit lähteä seuraamaan tätä oppituntia. Lataa ja asenna sinun koneellesi sopiva versio (Windows, OS X tai Linux) osoitteesta <a href="http://sonic-pi.net/">sonic-pi.net</a>. 

Tämän jälkeen Sonic Pi on käyttövalmis. Katsotaan miltä se näyttää!

Tässä on Sonic Pi:n käyttöliittymä, joka koostuu kolmesta pääikkunasta. Vasemmalla puolella oleva isoin ikkuna on koodin kirjoittamista varten, ja kutsumme sitä "Ohjelmointipaneeliksi". Sen oikealla puolella on "Lokipaneeli", jossa näkyy merkintöjä ohjelmasta silloin kun se ajetaan. Kun painat "Help"-nappia oikeasta yläkulmasta saat näkyviin ruudun alaosaan kolmannen ikkunan, "Apupaneelin". Sieltä voit löytää hyödyllisiä ohjelmointiesimerkkejä ja tietoa Sonic Pi:n lukuisista eri komennoista, äänistä ja efekteistä. 
 
<img src="{{ "/assets/img/interface_fi.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## Sävelen soittaminen

Aloitetaan Sonic Pi:llä ohjelmointi yksinkertaisimmasta komennosta, sävelen soittamisesta. Valitse `Buffer 0` välilehti Ohjelmointipaneelin alaosasta ja kirjoita siihen seuraava komento:

{% highlight ruby %}
play 60
{% endhighlight %}

Paina tämän jälkeen **Run**-nappia vasemmasta yläkulmasta. Kuuletko piippauksen?

Kokeile **play**-komentoa eri arvoilla. Kirjoita esimerkiksi `play 50` tai `play 70`. Huomaatko kuinka äänen korkeus muuttuu?

Kokeile seuraavaksi kirjoittaa `pley 60` ja paina **Run**-nappia. Mitä seuraavaksi tapahtuu?

> Tämä tilanne on esimerkki koodissa olleesta virheestä. Jos kirjoitat jatkossa virheen koodissasi, se esitetään samanlaisena virheilmoituksena. Yleisimmiten virheet johtuvat ns. pilkkuvirheistä tai väärin kirjoitetuista komennoista. Tässä tapauksessa sana `play` on kirjoitettu väärin. 

Numerot joita syötetään `play`-komennon perään ovat niin sanottuja MIDI-nuotteja. MIDI:ssä numerot 0:sta 127:ään vastaavat pianon säveliä yli 10 oktaavin alueelta. MIDI-nuottien lisäksi Sonic Pi:ssä voidaan käyttää tavanomaisempaa sävelten merkintää, johon tutustumme seuraavaksi. 
