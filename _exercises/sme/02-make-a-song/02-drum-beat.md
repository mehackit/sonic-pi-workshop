---
chapter: Lávlaga dahje bihtá ráhkadeapmi
title: Trumboritma
lang: sme
layout: exercise
---

Gehččojuvvo vuos movt Sonic Pi:s ráhkaduvvo ovttageardánis trumboritma, mas leat bássatrumbu (čiekčantrumbu), unnatrumbboš ja dalearkatrumbbut (hi-hat-trumbbut). Don oahpat guokte ođđa gohččuma `live_loop` (njuolga_luhppa) ja `sample` (čájánas ~ sample)

Álggat prográmma čállima guoros gaskabláđđái (Buffer) (duohčas) ja duddjo dohko `live_loop` -gohččuma `:drums` (trumbbut). Sáhtát nammadit movt hálidat, nama ulbmil lea dušše govvidit dan, maid gohččun dahká. `live_loop` lea gohččun, mainna duddjojuvvo jámmes geardunšuokŋa, mii geardduhuvvo dassážii go gohččun bissehuvvo. Dat sáhttá synkreniserejuvvot eará `live_loop` -gohččumiiguin. 

Fuomáš, ahte `live_loop`-gohččumat sáhttet leat eatnatlohkosaččat sierra namaiguin, muhto guovtti live_loop:as ii sáhte leat seamma namma. Juohke `live_loop`-gohččuma siste ferte leat unnimusat okta bodda (`sleep`-gohččun).


Geahččal čuovvovaš gohččuma:


{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

Deatte **Run**-boalu vai beasat guldalit vuosttaš `live_loop` -musihkkaoasi, mas čuodjá juohke časkkástagain bássatrumbu.

Čuovvovažžan dohko komponerejuvvo ovttageardánis trumboritma, ng. maŋŋečievččastat (backbeat), mas bássatrumbu (kick drum) čuodjá vuosttaš ja nuppi časkkástagain ja unnatrumbboš (snare) nuppi ja njealját časkkástagain. Nuohtaid čuojaheami sajes duddjot jietnačájánasaid (sample). Sample dárkkuha báddejuvvon jietnačájánasa ja elektrovnnalaš musihkas jietnalahki. Jietnačájánasa ráhkadeapmi lea ovttágeardán, čálát dušše `sample :sample_namma`. Dás lea ovdamearka trumboritmmas :

{% highlight ruby %}

use_bpm 100

live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end
{% endhighlight %}

Dát dássedis duogášritma. `:drums` -jietnačájánas álgá bássaritmmain, čuojáha unnatrumbbožiid nuppi časkkástagain, bássatrumbbu goalmmádin ja unnatrumbbožiid njealjadin. De jietnačájánas čuodjagoahtá álggu rájes ođđasit.

Vulobeal eŋgelasgiel govva áiccalmahttá movt ovtta `live_loop` -gohččuma gierdu doaibmá:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

Čuovvovažžan don sáhtát geahččalit tempo dehege bihtá johtilvuođa nuppástuhttima nu ahte molssut árvvu dehege nummára `use_bmp` -gohččuma maŋis ja čuojahat jietnačájánasa. Go don leat čállán sample-gohččuma ja deaddán gaskačaskkastaga, de Sonic Pi fállá dutnje automáhtalaččat logahallama sierra sample-vejolašvuođain, maid sáhtát geavahit gohččumiin. Iskka sierralágán jietnačájánasaid (sample) ja guldal, makkár jietna dain šaddá. Fuomáš ahte don it dárbbaš deaddit stop-boalu jiena earáhuhttima várás – sáhtát dušše rievdadit iežat čállin koda ja deaddit ođđasit **Run**-boalu. Jienat earáhuvvet automáhtalaččat čuovvovaš luhpas (loop).

## Lasit hi-hat 

Čuovvovažžan lasihuvvojit trumboritmii hi-hat:a dehege dalearkkaid časkkástagat. Duddjo ođđa `live_loop` -gohččuma namain `:hihat` ja lasit hi-hat -jietnačájánasa. Don sáhtát ovdamearkka dihte geavahit 1/8 dahje1/16 nuohta. Mielčuovvu koodas geavahuvvo 1/16 nuohtta. Dađi várás duddjojuvvo ođđa live_loop namain :hihat ja dat prográmmerejuvvo čuojahit hi-hat čuodji čájánas ovdamearkka dihte juohke 1/16-nuohtain:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

Hi-hat-jietna ii goitge dárbbaš leat nu stirddus ja ovttageardán. Sáhtát maid ráhkadit koda čuovvovaččat nu ahte dagat iežat musihkas eanet máŋggabeallásačča:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Hi-hat-trumbbut čudjetge dal poliritmmalaččat, dehege máŋggain sierra ritmmain oktanaga. Dát boahtá das, ahte luhpa guhkkodat lea dál 1.25 časkkástaga, vaikko ulbmil lei dahkat dain ovtta časkkástaga guhkkosaččaid. Dát guhkkodat lei “meattáhus”. Muhto datdahan čuodjá duođaid buorrin. Prográmmeremis lea buorre dahkat meattáhusaid ja iskat daiguin sierralágán jienaid, ja meattáhusaid bakte šaddan musihkka sáhttánai leat mihá miellagiddevaččat go originála plána jienat. 

Bihttá lea dákkár:

{% highlight ruby %}
use_bpm 100

live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Sáhtát suokkardit, movt Sonic Pi -prográmma live_loopat doibmet musihkkaválddusin bivnnuhis musihkadahkama heivehusain (apps) Čuovvovaš video veahkeha ipmirdit daidgaskasaš gori.

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Dál sáhtát geahččalit ja heivehit iešguđetlágán jietnačájánasaid  ja ritmmaid bihtástat. Sáhtát maid lasihit goalmmát `live_loop` -gohččuma perkussiočuojanasaide (časkinčuojanasaide) dahje lasihit eará efeavttaid. Čuovvovaččat sáhtát duddjot bássaoasi iežat komposišuvdnii.
