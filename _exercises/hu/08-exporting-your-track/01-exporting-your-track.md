---
chapter: A sáv exportálása
title: A sáv exportálása
lang: hu
layout: exercise
---

Ha elégedett vagy a zeneszámmal, érdemes lehet a műsorszámot hangfájlként menteni, és megosztani barátaiddal online (például a <a href="http://www.soundcloud.com/mehackit">SoundCloud</a> oldalon). Először a zeneszámot a Sonic Pi felvételi funkciójával kell rögzítened.

A felvétel módja egyszerűen a következő:

* Kattints **Rec** gombra és kiemelve fogod látni
* NMost, a felvétel elindul a  **Run** gombra kattintva
* Miután befejeződött a dalod (vagy eleget játszottál a live_loop-ok-ból) kattints a  **Stop** gombra
* Végül kattints **Rec** gombra a felvétel leállításához
* Mentsd el a hangfájlt a párbeszédablakban (például *MySong.wav* névvel)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

Miután elmentetted a hangfájlt, az készen áll a lejátszásra és megosztására. Azt javasoljuk azonban, hogy dolgozz egy kicsit a hangfájlon, hogy professzionálisabb és hangosabb legyen. Ehhez az Audacity-t használjuk, amely egy ingyenes, nyílt forráskódú szoftver a hangok rögzítéséhez és szerkesztéséhez. Az Audacity (Windows, Linux és OS X esetén) letölthető innen: : <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>.

## Audacity: A csend eltávolítása

Általában, ha hangfelvételt készítesz a Sonic Pi segítségével, akkor némi extra csend lesz a dal elején és végén. Ha szeretnéd, néhány egyszerű lépéssel eltávolíthatod ezt a nem kívánt csendet. Először nyisd meg az audio fájlt az Audacity alkalmazásban a „File / Open” menüből. Miután megnyitottd a fájlt, az alábbi nézetet kell látnod.

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Most keresd meg az „Effect” menüt, és válaszd a „Csend levágása” lehetőséget.

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Használd a következő értékeket a „Csend levágása” ablakban:

* Szint: -60 dB
* Időtartam: 0.5 seconds
* Levágás: 0.1 seconds

Ezután kattints az "Ok" gombra.

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Ezután kattints az „OK” gombra. Most látnod kell a hang csendes részeit, amelyeket eltávolítottak a hullámformából.

## Audacity: A hangosság normalizálása

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

Ezután tegyük a hangot a lehető leghangosabbá, anélkül, hogy magát a hangot tömörítenénk, vagy bármilyen módon megrongálnánk. Ha úgy érzed, hogy a zenéd inkább ritmusvezérelt és összességében hangosabb kellene, hogy legyen, akkor ez a következő lépés a számodra. Másrészt, ha anyagod kifinomultabb (mint a háttér zene), és így is kell maradnia, akkor nem feltétlenül javasoljuk, hogy lépéseket tegyél a hang normalizálására. Egyébként, a következőképpen teheted meg: Menj a „Effect” menübe, és válaszd a „Normalizálás” menüpontot.

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Állítsd be a következő értéket a „Normalizálás” ablakban:

* A maximális amplitúdó normalizálása " to -0.1 dB

Jelöld be a két legfelső jelölőnégyzetet, majd kattints az „Ok” gombra.

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Most azt kell látnod, hogy a hullámformában a tüskék magasabbak, ami azt jelenti, hogy a kapott hang szintén hangosabb.

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: MP3 fájl mentése

Most csak el kell mentened az audio fájlt. Például, ha MP3-fájlként szeretnéd elmenteni a zeneszámot, nyisd meg a „File” menüt és válaszd az „Export Audio” menüpontot.

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

Az Audio Export ablakban egy legördülő menüt kell látnod a fájlböngésző körül. Válaszd az „MP3 fájlok” lehetőséget a menüből. Az MP3 fájl formázási beállításaiban a szokásos előre beállított értékek egyikét használhatod. Például a következő formátum-beállításoknak mindig megfelelően kell működniük:

* Bitráta üzemmód/Bit Rate Mode: Előre beállítva/Preset
* Minőség/ Quality: Normál, 170–210 kbps
* Változtatható sebesség/ Variable Speed: Gyors/Fast
* Csatorna mód/ Channel Mode: Közös sztereo/Joint Stereo

Ezután be kell írnod a fájlnevet a „Név” mezőbe, majd kattints a „Mentés” gombra. Ennek meg kell csinálnia a trükköt! Most már rendelkezel a zeneszám MP3-fájljával, amelyet könnyedén elküldhetsz barátaidnak, posztolhatod a SoundCloudon, vagy feltöltheted mobiltelefonodra.

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Reméljük, hogy szórakoztató lesz számokat létrehozni és közzétenni a Sonic Pi segítségével!
