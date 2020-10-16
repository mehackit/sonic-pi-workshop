---
chapter: Ismerd meg a hangokat
title: Effektusok
lang: hu
layout: exercise
---

Túl régóta visszatartottuk ezt, tehát itt jön: `with_fx`!

Ez egy hatalmas eszköz a különféle effektusok hozzáadásához. Kezdjük a `:reverb`utasítással. Nagyjából minden hang jól hangzik a reverb-bel. Kezd azzal, hogy körülveszed a kódot egy  `with_fx :reverb do` művelettel és egy  `end` blokkal.

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Nagyobbnak hangzik, nem igaz? Csakúgy, mint a szintetizátorok és a minták, az effektusoknak is vannak beállításai. A  `mix:`egy olyan lehetőség, amely meghatározza, hogy az effektus és az eredeti hang mennyire hallható. A  `mix: 0` csak az eredeti hangot játssza, a `mix: 1` csak az FX-et játssza. A Reverbnek van  `room` beállítása is. Próbálj ki különböző room méreteket 0-1 közötti értékekkel. Ha megnyitod a súgó menü 'FX' fülét, megtudhatod, hogy mely FX lehetőségek állnak rendelkezésre.

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Olyan sok FX közül lehet választani. És nem is kell egynél megmaradnod: befészkelheted őket! (Bizonyos pontokban a számítógépen kifogyhat az erőforrások, de majd akkor aggódj ezen.)

{% highlight ruby %}
live_loop :effects do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

Most őrülj meg, és adj hozzá FX-et mindenhol a csodálatos új hangzáshoz!
