---
chapter: Ismerd meg a hangokat
title: Beállítások
lang: hu
layout: exercise
---

Eddig az `attack`, a `release`, és a  `cutoff` lehetőségeket használtad a lejátszási parancs után. A beállítások (vagy rövid választás) a lejátszáshoz átadott kezelőszervek, amelyek módosítják és irányítják a hallott hang aspektusait. Minden egyes szintetizátornak megvan a saját beállítása a hang finomhangolására. Vannak azonban sok hangzás számára megosztott általános beállítások. Most még néhány lehetőséget megismerhetsz, hogy még jobban kifejezhesd a hangokat.

Vedd figyelembe, hogy a minták közül is használhatsz néhányat!

### `amp:`

Az amplitúdó a hang erősségére jellemző mennyiség. 0 néma (nem hallasz semmit), 1 normál hangerő. Az amplitúdót 2, 10 vagy 100 értékre növelheted. Ennek ellenére a hang zavaros és furcsa lehet. Tehát próbálj alacsony amplitúdót, azaz a 0 és 0.5 közötti tartománybeli értéket használni, hogy elkerüld az összenyomást.

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

A Pan vezérli a hang pásztázását sztereo formában. -1 azt jelenti, hogy a bal oldali hangszóróból halljuk, 1 azt jelenti, hogy a jobb oldali hangszóróból halljuk, és 0 középen van. Használhatsz bármilyen értéket -1 és 1 között. Kipróbálhatsz egy véletlenszerű pan-értéket a cinekhez bizonyos szerkezeteknél.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #bal hangszóró
play :c2, amp: 0.5, pan: 0 #közép
play :c2, amp: 0.5, pan: 1 #jobb hangszóró

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

Remove frequencies higher that the given value. Use values between 0-130.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` és `release:`

Egy ütemen belül a kezdés és elengedés

{% highlight ruby %}
play :c2, attack: 1, release: 1 #a hangjegy két ütem hosszú
{% endhighlight %}

<img src="{{ '/assets/img/attackrelease_hu.png' | prepend: site.baseurl }}">

### `use_synth_defaults` and `use_sample_defaults`

Ha nem akarod beállítani az opciókat az egyes lejátszásokhoz vagy mintákhoz a ciklusokban, akkor a  `use_synth_defaults` és `use_sample_defaults` segítségével állíthatod be őket a ciklusban lévő összes következő lejátszáshoz és mintához:

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### Bónusz: `beat_stretch:` és `rate:`

Ezek túl jók ahhoz, hogy kihagyd őket. Próbáld ki ezt:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end
{% endhighlight %}

Végül egy bosszantó hézag van. A minta 1.753310657596372 ütem hosszú, ami nem olyan praktikus, ha azt akarod, hogy az összes többi dolgunkkal lejátsszuk. Szerencsére a  `beat_stretch: 2` segítségével megnyújthatod/ zsugoríthatod a mintát, hogy pontosan 2 ütem hosszú legyen.

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch: 2
  sleep 2
end
{% endhighlight %}

Szép! Most nézzük a  `rate` beállítást. A rate a minta lejátszásának gyorsaságát szabályozza. 1 az eredeti sebesség, 0.5 a fél sebesség és a 2 dupla sebesség. A minta magasabbnak és alacsonyabbnak is tűnhet, ha megváltoztatod az arányt. És (dob ...) akár negatív értékek is lehetnek! A negatív értékek visszafelé játsszák a mintákat. Próbáljd meg ezt a ciklust lejátszani, és változtasd meg a sebességet és a várakozási értéket:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch: 2, rate: -1
  sleep 2
end
{% endhighlight %}

