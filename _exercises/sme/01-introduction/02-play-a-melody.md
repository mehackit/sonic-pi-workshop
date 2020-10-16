---
chapter: Bagadus
title: Melodiija čuojaheapmi
lang: sme
layout: exercise
---

Čale vulobeale kodalahkki kodaeditorii (code editor) ja deatte Run (čađat) -boalu:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

Dathan ii čuodjan melodiijan ollenge, vai čuojaigo? Prográmma ii čuojahan nuohtaid maŋŋálaga muhto iešalddes oktanaga. Dáinna lágiin don sáhtát prográmmeret šuoŋaid. Šuokŋa dárkkuha eanet, 2-3 nuohta čuojaheami oktanaga.

Juos hálidat Sonic Pi:a čuojahit nuohtaid maŋŋálaga, nu kodii galgá merkejuvvot juohke nuohta maŋŋái botta. Čále `sleep 1` (oađe) juohke nuohta vulobeallái, dego dás:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` -gohččun (oađe) gohčču prográmma vuordit ovtta časkkástaga, ovdal go čuojaha čuovvovaš nuohta. Mađi unnit lea sleep (oađe) -doaimma árvu (lohku), dađi oanehit lea áigi sierra play-gohččumiid gaskkas. Ja seamma ládje mađi stuorit sleep (oađe) -doaimma árvu (lohku), dađi guhkit bodda lea sierra nuohtaid gaskkas. Juos dábálaš nuohtaid bidjan lea dutnje oahpis, vulobeal govas sáhtát oaidnit movt sierra nuohtat doibmet Sonic Pi:s.

<img src="{{ "/assets/img/notes_sme.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_sme.png" | prepend: site.baseurl }}">

Play-gohččuma maŋis nuohtat sáhttet čállojuvvot MIDI-árvun, mat leat nummárat 0-127 gaskkas (omd. `67`, `80`, `22`) dahje nuohttan (`:G4`, `:Ab5`, `:Bb`). Don sáhtát ieš válljet goappá merkenvuogi hálidat geavahit.

Mielčuovvu tabealla muitala, man nuhttii iešguhtege MIDI-árvu dávista. Tabeallas octave number dárkkuha oktáva nummára ja note number nuohta nummára.

<img src="{{ "/assets/img/midi_notes.png" | prepend: site.baseurl }}">

## Geahččal

Geavat C-duraceahkkálasa nuohtaid (`72,74,76,77,79,81,83` dahje `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) vai ráhkadat melodiija. Geavat play-doaimmaid gaskkas `sleep`-gohččuma eará árvvuiguin nuppástuhttit ritmma. Sáhtát geavahit  `use_bmp` -gohččuma kodagurgadasa álggus ráhkadit melodiija  johtileabbon dahje njoazibun, dehege earáhuhttit melodiija tempo. Melodiija johtilvuohta mearriduvvo árvvuin, mii merkejuvvo koda lohppii. BPM lea oanádus dearpmas _Beats Per Minute_, mii oaivvilda, galle časkkástaga bihtás lea minuntta áigge. Geahččal ovdamearkka dihte čuovvovačča:

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

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Guldal bajábeal ovdamearkka nu ahte deattát play-boalu" %}

Dál lea du vuorru ráhkadit iežat melodiija!