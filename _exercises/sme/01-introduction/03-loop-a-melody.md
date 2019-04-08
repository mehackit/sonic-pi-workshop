---
chapter: Bagadus
title: Melodiija geardduheapmi
lang: sme
layout: exercise
---

Dál go dus lea somás melodiija válmmasin, soaittášit hálidit geardduhit dan, dahje dan osiid eanetge háviid? Melodiija geardduheapmi kopiere ja liibme -vugiin (copy & paste) kodas lea vejolaš, muhto dát vuohki ii leat buot buoremus. Sonic Pi -prográmmas sáhttá lihkus geavahuvvot **geardduhan**doaibma, mii čoavdá dán buncaraggá! Gohččun dárkkuha seamma ášši geardduheami eanet háviid.

Čále melodiijaoasi álgui gohččuma `2.times do` (2 have dahkat) ja gohččuma `end` (heaitte) melodiija lohppii. Vulobeale kodas nuohtat leat čállojuvvon nuohttačállima mielde, muhto sáhtát geavahit juos hálidat maid MIDI-árvvuid.

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

Go rievdadat árvvu `.times`- gohččuma ovddas, de don sáhtát válljet galle háve prográmma geardduha nuohtaid. Don sáhtát ovdamearkka dihte čállit `4.times do` dahje `99.times do` (4. háve dahkat dahje 99. háve dahkat)

Sáhtát maid geavahit geardduhandoaimma geardduheami siste nu ahte čálát mielčuovvu koda:

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

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Guldal ovddit ovdamearkka" %}