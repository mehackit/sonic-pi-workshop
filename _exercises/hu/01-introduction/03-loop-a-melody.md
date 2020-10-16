---
chapter: Bevezetés
title: Dallam ismétlése
lang: hu
layout: exercise
---

Rendben, szép dallamot írtál. Mi van, ha ismételni szeretnéd párszor a dallamot, vagy annak csak egy részét. Lehet másolni és beilleszteni a dallamot, de ez egy idő után fárasztóvá válik. Szerencsére használhatsz ismétlés funkciót! A programozási szakkifejezés erre az iteráció vagy ciklus, ami azt jelenti, hogy a program valamit többször hajt végre.

Írd a `2.times do` utasítást a dallamod elé és az `end` utasítást a dallamod végére (a hangjegyek zenei jelölései csak példák, természetesen használhatod a megfelelő MIDI értékeket is):

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

A `2.times do` utasítás helyett kiválaszthatod, hányszor ismételje a hangokat. Például `4.times do` vagy `99.times do`.

Az ismétléseket az ismétlések belsejében is használhatod, ha szeretnéd:

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

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Hallgasd meg az előző példát" %}