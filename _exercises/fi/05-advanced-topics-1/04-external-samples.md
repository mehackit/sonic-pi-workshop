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

Jos `sample`-komennolle annettu polku on oikea, sinun pitäisi kuulla äänitiedoston `loop_1.wav` soivan ajaessasi ohjelman. Tällä tavoin voit hyvin suoraviivaisesti viitata mihin tahansa WAV-tiedostomuodossa olevaan sampleen (äänitiedostoon) kovalevylläsi ja soittaa sen. Tosin seuraavissa esimerkeissä haluamme kirjoittaa hakemistopolun vain kerran ohjelmaan ja käyttää sen jälkeen pelkkiä tiedostonimiä viitataksemme kyseisiin sampleihin. Ensiksi sinun täytyy määrittää hakemistopolku uuteen muuttujaan, joka annetaan parametrina komennolle `sample`. Tämän jälkeen samplen nimi voidaan syöttää toisena parametrina komennolle `sample`. 

Seuraava koodinpätkä helpottaa hahmottamaan kuinka esimerkiksi sample "loop_4.wav" nyt oikein soitetaankaan `sample`-komennolla. Tehdään alkuun uusi muuttuja nimeltä solenoids (johon tallennetaan samplejen hakemistopolku) ja käytetään sitä ja viitettä sampleen "loop_4" alla olevan esimerkin mukaisesti:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Ohjelman pitäisi nyt aloittaa samplen `loop_4.wav` soittaminen ja luupata sitä. 

Nyt voitkin vapaasti sekoitella omia sampleja ja Sonic Pi:n kirjaston sampleja. Kokeile esimerkiksi alla olevaa esimerkkiä, jossa soitetaan omia ja Sonic Pi:n kirjaston sampleja neljällä eri `live_loop`:lla. Huomioithan että live_loop:ssa `:solenoid2` käytetään muuttujaa `samplename` tallentamaan satunnaisesti valittu viittaus sampleihin `hit_1.wav` ... `hit_7.wav`.

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample solenoids, "hit_6", rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
