---
chapter: Bevezetés
title: Dallam lejátszása
lang: hu
layout: exercise
---

Írd be a következőt a pufferbe, és nyomd meg a futtatást:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

Ez nem hangzott úgy, mint egy dallam, ugye? A hangsor lejátszása helyett a Sonic Pi az összes hangot egyszerre játssza le (egyébként így írhatsz majd akkordokat).

Ha azt akarod, hogy a Sonic Pi minden egyes hangjegyet egymás után játsszon le, meg kell mondanod a szoftvernek, hogy időnként tartson szünetet. Próbáld meg a  `sleep 1` utasítást minden hang alá begépelni, így:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` azt jelenti a Sonic Pi-ban, hogy várjon egy ütemet. Kipróbálhatsz kisebb és nagyobb számokat. Minél kisebb a sleep érték, annál rövidebb idő telik el a lejátszási parancsok között és fordítva. Ha ismered a zenei jelöléseket, akkor így néznek ki a különböző hangok a Sonic Pi-ban:

<img src="{{ '/assets/img/notes_hu.png' | prepend: site.baseurl }}">
<img src="{{ '/assets/img/Rests_hu.png' | prepend: site.baseurl }}">

Mint korábban említésre került, a hangokat írhatod MIDI-ben, amelyek alapvetően 0 és 127 közötti számok  (`67`, `80`, `22`) vagy hangjegyekben  (`:G4`, `:Ab5`, `:Bb`), ), ez rajtad múlik. Az alábbiakban bemutatjuk a hangjegyeket és a megfelelő MIDI-értékeket mutató ábrát:

<img src="{{ '/assets/img/midi_notes_hu.png' | prepend: site.baseurl }}">

## Próbáld ki

Használd a C-dúr skálát  (`72, 74, 76, 77, 79, 81, 83` vagy `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) dallam létrehozásához. Alkalmazd a `sleep` utasítást különböző értékekkel a ritmus változtatásához. Használhatod a `use_bpm` utasítást a program elején, hogy gyorsabb vagy lassabb legyen. A BPM rövidítés jelentése: Ütés Per Perc. Itt egy példa:



{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Hallgasd meg az előző példát" %}

Most készíts saját dallamot!