---
chapter: Jatkoaiheet 1
title: Omat samplet
lang: fi
layout: exercise
---

Sonic Pi:n mukana tulee noin 73 äänisamplea, joita voi käyttää vapaasti musiikin ja äänien tekemiseen, mutta se tukee myös ulkoisten (omien) samplejen käyttöä. Jos haluat esimerkiksi käyttää omaa kitara- tai laulunauhoitusta Sonic Pi:ssä, se on mahdollista tällä sivulla esitetyillä ohjeilla.

Ensiksi sinulla täytyy olla äänisamplet WAV-tiedostomuodossa jossain hakemistossa tietokoneesi kovalevyllä. Tämän sivun esimerkeissä käytetään ilmaista *Mehackitin* kokoamaa samplepakettia nimeltä *Solenoid Samples 1* ja sen voi ladata <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">täältä</a>. Se sisältää yhteensä 14 isku- ja luuppisamplea, jotka nauhoitettiin eräästä Mehackitin työpajassa syntyneestä ääni-installaatiosta keväällä 2016.

Kun olet ladannut samplepaketin ja purkanut sen johonkin kansioon, sinun täytyy tarkistaa kyseisen kansion hakemistopolku. Esimerkiksi, jos purit tiedostot työpöydälläsi sijaitsevaan kansioon nimeltä 'Samples', hakemistopolku on todennäköisesti seuraavanlainen:

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux ja Mac: "/Users/sam/Desktop/Samples" 

Muistathan korvata käyttäjänimen 'sam' omalla käyttäjänimelläsi, jos käytit ylläolevan näköistä hakemistopolkua. Samplepaketti sisältää seuraavat äänitiedostot: `hit_1.wav` ... `hit_7.wav` (perkussioiskuja) ja `loop_1.wav` ... `loop_7.wav` (luuppaavia rumpubiittejä, joita suositellaan käytettäväksi samplerin parametrin `beat_stretch` kanssa).

Nyt voit soittaa kansiossa olevia sampleja suoraan `sample`-komennolla. Muistathan käyttää oikeaa tiedostopolkua alla olevassa esimerkissä! 

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Jos `sample`-komennolle annettu polku on oikea, sinun pitäisi kuulla äänitiedoston `loop_1.wav` soivan ajaessasi ohjelman. Tällä tavoin voit hyvin suoraviivaisesti viitata mihin tahansa WAV-tiedostomuodossa olevaan sampleen (äänitiedostoon) kovalevylläsi ja soittaa sen. Tosin seuraavissa esimerkeissä haluamme kirjoittaa hakemistopolun vain kerran ohjelmaan ja käyttää sen jälkeen pelkkiä tiedostonimiä viitataksemme kyseisiin sampleihin. Tällöin voimme käyttää komentoa `use_sample_pack` määrittääksemme hakemistopolun sampleille ja sen jälkeen komentoa `sample :tiedostonimi` samplejen soittamiseen. Seuraavan esimerkin pitäisi aloittaa samplen `loop_4.wav` soittaminen ja luupata sitä: 

{% highlight ruby %}
use_sample_pack "/Users/sam/Desktop/Samples"
use_bpm 110

live_loop :solenoid1 do
  sample :loop_4, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Mitä tapahtuukaan nyt jos yrität soittaa esimerkiksi samplen `:bd_haus` Sonic Pi:n omasta samplekirjastosta? Sitä ei voidakaan soittaa, sillä `use_sample_pack` ohittaa kaikki muut sampleille asetetut hakemistopolut. Jos haluat käyttää useita hakemistopolkuja (mukaanlukien Sonic Pi:n oma samplekirjasto), sinun täytyy käyttää `use_sample_pack_as`-komentoa `use_sample_pack`:in sijasta.  Komennon `use_sample_pack_as` kanssa täytyy määrittää samplet sisältävän hakemistopolun lisäksi myös nimi, jolla samplepakettia kutsutaan (ja se nimi voi olla mikä vaan, aivan kuten `live_loop`:ien nimien kanssa).

Käytetään seuraavaa komentoa:

{% highlight ruby %}
use_sample_pack_as "/Users/sam/Desktop/Samples", :mySamples
{% endhighlight %}
...määrittämään samplejen hakemistopolku ja antamaan samplepaketin nimeksi `:mySamples`. Nyt voit käyttää komentoa:
{% highlight ruby %}
sample :mySamples__loop_1
{% endhighlight %}
...soittamaan samplen `loop_1.wav`. Huomioithan että viitatessasi ulkoisiin sampleihin tulee aina käyttää samplepaketin nimen ja itse samplenimen välissä tupla-alaviivaa (__). Tällöin Sonic Pi ymmärtää että et yritä soittaa samplea sen omasta äänikirjastosta.

Nyt voitkin vapaasti sekoitella omia sampleja ja Sonic Pi:n kirjaston sampleja. Kokeile esimerkiksi alla olevaa esimerkkiä, jossa soitetaan omia ja Sonic Pi:n kirjaston sampleja neljällä eri `live_loop`:lla. Huomioithan että live_loop:ssa `:solenoid2` käytetään muuttujaa `samplename` tallentamaan satunnaisesti valittu viittaus sampleihin `hit_1.wav` ... `hit_7.wav`.

{% highlight ruby %}
use_sample_pack_as "/Users/sam/Desktop/Samples", :mySamples
use_bpm 110

live_loop :solenoid1 do
  sample :mySamples__loop_4, beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = [:mySamples__hit_1, :mySamples__hit_2, :mySamples__hit_3, :mySamples__hit_4, :mySamples__hit_5, :mySamples__hit_6, :mySamples__hit_7].choose
  time = [0.25, 0.5, 0.75].choose
  sample samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample :mySamples__hit_6, rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
