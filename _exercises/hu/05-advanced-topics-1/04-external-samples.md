---
chapter: Haladó témák  1
title: Külső minták
lang: hu
layout: exercise
---

A Sonic Pi körülbelül 164 mintával rendelkezik, amelyeket szabadon használhatsz és amelyekkel játszhatsz, de teljes mértékben támogatja a külső minták használatát is. Például, talán szeretnél felvenni valamit (például a saját hangodat vagy a gitárodét), és a Sonic Pi-ba bevinni, hogy felhasználhasd a dalodban.

Először is meg kell adnod néhány WAV formátumú hangmintát a merevlemez mappájába. A következő példákban a Mehackit ingyenes mintacsomagját használjuk. Ennek a neve Solenoid Samples 1, és  <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">innen</a>. letöltheted. 14 egyszerű és ismétléses mintát tartalmaz, amelyeket egy mozgalmas hang összeállításból vettünk fel, melyet egy műhelyfoglalkozás keretében készítettünk 2016 elején.

Miután letöltötted a csomagot, és kibontottad a fájlokat egy mappába, ellenőrizned kell a mappa teljes elérési útját. Például, ha a fájlokat az Asztal „Samples” nevű mappájába bontottad ki, akkor az elérési út valószínűleg a következő:

* Windows: "C:/Users/sam/Desktop/Samples"
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples"

Csak ne feledd, hogy a 'sam' helyett a saját felhasználónevedet használd. A mintacsomag a következő fájlokat tartalmazza: `hit_1.wav` to `hit_7.wav` (ütős találatok) és `loop_1.wav` to `loop_7.wav` (ismétlődő ütemek, amelyeket ajánlott a  `beat_stretch`segítségével lejátszani).

Most közvetlenül a  `sample` paranccsal játszhatod le őket a megfelelő fájl elérési útjának használatával:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Ha az elérési út helyesen lett beállítva a  `sample` parancshoz, akkor most meg kell hallanod a `loop_1.wav`. hangot. Ne felejtsd el használni a fájl saját elérési útját a fenti példákban szereplő helyett! Ez nagyon egyszerű módszer a minták elérésére és lejátszására. Ugyanakkor valószínűleg csak egyszer szeretnéd bírni a mappa elérési útját a kódba, és a mintákat csak a fájlnevekre hivatkozva szeretnéd lejátszani. Létrehozhatsz egy változót a fájl elérési útjára, és használhatod azt a sample paranccsal együtt. A `sample` után megadhatod a fájl elérési útját tartalmazó változó nevét, majd a minta nevét. Az alábbi példában a mintamappát tartalmazó fájl solenoidnak nevezett változót deklaráljuk. Amikor futtatod, a  `loop_4.wav` mintának el kell kezdenie a lejátszást és a ciklust:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Most már használhatsz külső mintákat és a Sonic Pi saját könyvtárából származó mintákat a produkciókban. Próbáld meg lejátszani az alábbi példát, amely négy különféle `live_loop` példányt használ a külső és a Sonic Pi saját mintáinak lejátszására. Felhívjuk figyelmedet, hogy a live_loop  `:solenoid2` változó `samplename` használatával véletlenszerűen választunk ki a mintákat a  `hit_1.wav` és a `hit_7.wav` közül.

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
