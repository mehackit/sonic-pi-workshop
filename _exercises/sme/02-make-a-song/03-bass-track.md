---
chapter: Lávlaga dahje bihtá ráhkadeapmi
title: Bássaoassi
lang: sme
layout: exercise
---

Lasit ođđa live_loop -gohččuma bássa várás. Komponere ovttágeardánis ja doaibmi bássaritmma. Sáhtát iežat hálu mielde geavahit interneahtta-bláđáristtát doaibmi <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">virtuálapiáno</a> melodiija duddjoma ja nuohtaid válljema várás. Vulobealde lea ovdamearka bássaoasis:


{% highlight ruby %}
live_loop :bass do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## Duddjo syntetisáhtora

Čuovvovažžan don oahpat movt sáhtát ráhkadit čuodji jienas miellagiddevaččabu. Sáhtát duddjot jiena nu ahte rievdadat šuoŋaid, maid syntetisáhtor geavaha. Syntetisáhtor (synthetizer) lea elektrovnnalaš rusttet, mii buvttada iešguđetlágán jienaid. Sonic Pi -prográmmas leat máŋggat syntetisáhtorat ja dat stivrejuvvojit gohččumiiguin. Sonic Pi -prográmmas syntetisáhtora navdinjietna lea `beep` (biipen). Juos hálidat geavahit earálágán jiena syntetisáhtoris, de don galggat lasihit koda. 
`use_synth :syntetisáhtora_namma` kodaráidui

Čuovvovaš ovdamearkkas systetisáhtora namman lea fm: 

{% highlight ruby %}
live_loop :bass do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

Sonic Pi:s leat olu fiinnisin čuodji elektrovnnalaš syntetisáhtorat. Don sáhtát gávdnat álkit daid namaid go coahkkalat help (veahket)-govvosa šearpma badjeoasis, goas veahket-láse rahpasa. Vállje de Synths veahket-láse gurut beale fálus. Coahkkal maid beare synth-nama vai oaččut lasi dieđu das, movt dat adnojuvvojit. Sáhtát maid gávdnat iešguđetlágán jienaid  álkit `use_synth` -gohččuma maŋŋel logahallamis, mii rahpasa.

## Čuodji nuohta guhkkodaga mihtideapmi

Muhtimin don sáhtát hálidit čuojahit nuohtaid guhkibun dahje eará dávtta mielde. Dát sáhttá dahkkot nu ahte duddjot iežat čállin koda variábeliid. Gohččumat `attack` (časkkus) ja `release` (luoitte) rievdadit jietnagivrodaga dan gaskavuođa áigái. Mielčuovvu eŋgelasgiel skovádagas lea govviduvvon dáid gohččumiidgaskasaš gorri.

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

Gohččumat attack ja release orrot oaidnit čuovvovašlágánin. Kodas nuohtta čuodjá oktiibuot njealji časkkástaga áigge ja gievru vuosttaš časkkástaga áigge ja jaskkoda golmma časkkástaga áigge. 

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Sáhtát dahkat maid oanehis staccato-nuohta. 
Staccato dárkkuha bastilit ja oanehaččat čuojahuvvon nuohta. Dákkár nuohta oažžu go lasiha  gohččumii attack árvvu nolla ja go addá gohččumii release hui oanehis árvvu, dego miellčuovvu ovdamearkkas: 


{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Dutkka earálágán syntetisáhtoriid jienaid, nuohtaid guhkkodagaid ja ráhkat bássaoasistat jur dakkára go hálidat!

Du bihttá sáhttá leat čuovvovašlágán kodejuvvon hámis:


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

live_loop :bass do
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}
