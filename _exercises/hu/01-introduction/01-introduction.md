---
chapter: Bevezetés
title: Bevezetés
lang: hu
layout: exercise
---

A Sonic Pi egy nyílt forráskódú programozási környezet, amelynek célja a programozási fogalmak felfedezése és tanítása új hangok létrehozásának folyamatán keresztül. Ez egy ingyenes élő kódolási szintetizátor mindenkinek, amelyet Sam Aaron készített a Cambridge-i Egyetem Számítógépes Laboratóriumában. A Sonic Pi segítségével programozhatsz, komponálhatsz és előadhatsz klasszikus és kortárs stílusokat, kezdve a Kánonoktól a Dubstepig.

Ez az oktatóprogram végigvezet a Sonic Pi alapjaiban és még sok másban. Az oktatóprogram végén képes leszel létrehozni valami hasonlót:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Vagy valami ilyesmit:

{% include player.html filepath="/assets/audio/amen.mp3" %}

A Sonic Pi a felfedezésről szól. Nincsenek hibák, csak felfedezések. Mindenekelőtt a szórakozásról van szó. Tehát ne feledd ezt: érezd jól magad, fedezz fel és csapj bele!

## A Sonic Pi megnyitása

Ha még nincs telepítve a Sonic Pi, menj a  <a href="http://sonic-pi.net/">sonic-pi.net</a>, webhelyre, töltsd le és telepítsd a Sonic Pi szoftvert. Elérhető Windows, OS X és Linux operációs rendszerekhez.

Ezután indítsd a Sonic Pi-t! Lássuk, hogyan néz ki.

Ez a Sonic Pi felület; három fő ablaka van. A legnagyobb a kód írására való, és ezt nevezzük Programozási panelnek. Van egy naplópanel, amely információkat jelenít meg a futtatott programodról. Amikor rákattintasz az ablak tetején található súgó gombra, az alsó részen megjelenik a harmadik panel, amelyen látható a súgó dokumentációja. Ez információkat tartalmaz a Sonic Pi programozásának nyelvéről, valamint a különféle szintetizált hangokról, mintákról és még sok mindenről. Rengeteg kész példa is van, amelyeket kipróbálhatsz és felhasználhatsz!

<img src="{{ '/assets/img/interface_hu.png' | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## Játssz le egy hangot

Ahhoz, hogy egy hangot lejátsszunk, kezdjük a Sonic Pi programozásával. Válaszd a `Buffer 0` fület és írd be:

{% highlight ruby %}
play 60
{% endhighlight %}

A bal felső sarokban nyomd meg a **Run** gombot. Hallasz egy sípoló hangot?

Próbáld ki a különböző értékeket. Írd be például a `play 50` vagy a `play 70` utasításokat. Hogyan változik a hang?

Most próbáld beírni a `play 60` és kattints a futtatás gombra. Mi történik?

> Ez egy példa egy hibára a kódodban. A későbbi tevékenységek során, ha a hibapanel szöveget jelenít meg, akkor tudni fogod, hogy hiba van, amelyet ki kell javítanod. Lehet, hogy elírtál egy olyan szót, mint a `play`.

A használt számok MIDI-jelek. A MIDI hasznos módja a komponálásnak, és hasznos eszköz a hangjegyek gyors teszteléséhez és beállításához, értékük csökkentésével (alacsonyabb hang használatával) vagy növelésével (a hangmagasság növelésével). A Sonic Pi ismeri mind a MIDI jeleket  (értékek `0` és `127` között) mind a hagyományos zenei jelöléseket (például: `:C4`, `:Eb3` vagy `:G5`).
