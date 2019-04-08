---
chapter: Jienaid duddjon
title: Doaimmat (options)
lang: sme
layout: exercise
---

Dán rádjái don leat geavahan doaimmaid `attack`, `release` ja `cutoff` `play`-gohččuma maŋŋel. Doaimmat (options dahje oaniduvvon hámis ops) leat stellema botkkonat, maiguin sáhtát duddjot ja hálddašit iežat buvttadan jiena. Juohke syntetisáhtoris leat iežaset doaimmat, maiguin sáhttá ráhkadit ja stellet daid buvttadan jiena. Máŋggaide syntetisáhtoriidda gávdnojit oktasaš doaimmat. Čuovvovažžan don oahpat muhtin molssaeavttuid, maiguin sáhtát lasihit iežat musihka olggosbuktima.

Don sáhtát geavahit maid muhtin doaimmaid sample-gohččuma olis.

### `amp:`-doaibma

Amplituda dárkkuha jietnagivrodaga. Árvu 0 dárkkuha jaskatvuođa, dahjege jietna ii gullo obanassiige, árvvuin 1 jietna čuodjá dábálaš jietnagivrodagain. Don sáhtát lasihit jietnagivrodaga go lasihat árvvuid, dego 2, 10 dahje 100. Jietnagivrodaga lasiheapmi dahká jiena dávjá moivvasin ja ártegin ja dat heajuda jietnašlája. Buorre lea viggat geavahit vuollegit jietnagivrodagaid, ovdamearka dihte gaskkal 0 – 0.5. Ovdamearkka dihte árvvuin 0.5 jietna čuodjá beliin jietnagivrodagain. 

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`- doaibma


Pan-doaibma hálddaša dan, movt jietna stivrejuvvo gullot skájanasain. Árvvuin-1 jietna gullo gurut skájanasas, árvvuin 1 dat gullo olgeš beale skájanasas ja árvu 0 dárkkuha dan, ahte jietna gullo gasku, dahjege goappánai skájanasas seamma ládje. Sáhtát geavahit maid árvvuid beare -1 ja 1 gaskkas. Sáhtát maid iskat geavahit deivvolaš pan-árvvu iežat hi-hat-oasis vai oaččut musihkkii lasi dimenšuvnnaid, dego maŋit ovdamearkkas, mas lea adnon gohččun `rrand (-0.7, 0.7)`:

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`- doaibma


Cutoff-doaibma čuohppá du bihtás dahje dan oasis visot jienaid, mat leat du válljen čuohppansaji bajábealde. Sáhtát geavahit árvvuid 0 – 130 gaskkas.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` ja `release:` – doaimmat:


Attack dárkkuha áiggi, mii gollá jiena gievrumii ja release bealistis áiggi, mii gollá jiena jaskkodeapmái. Goappánai gohččunráidui áigi addojuvvo časkkástagaid mearrin. 

{% highlight ruby %}
play :c2, attack: 1, release: 1 
#nuohtta lea guokte časkkástaga guhku

{% endhighlight %}

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

Mielčuovvu govas čielggasmahttojuvvojit dát gohččumat. Ceakkoákselis (horisontála) govviduvvo jietnagivrodat ja vealuákselis (vertikála) áigi. 

### `use_synth_defaults` ja `use_sample_defaults` -doaimmat

Juos it hálit addit juohke play- dahje sample-gohččumii sierra iešguđetlágán doaimmaid (ops) luhpastat, sáhtát geavahit gohččumiid `use_synth_defaults` ja `use_sample_defaults`, maiguin sáhtát meroštallat navdinásahusaid ja gohččumiid buohkaide daidda čuovvu play- ja sample-gohččumiidda luhpastat. Dáiguin gohččumiiguin biddjon navdinásahusat eai sirdás live_loop:as nubbái muhto dat galget meroštallojuvvot juohke luhpas sierra. Vulobeal kodas leat geavahuvvon návdinásahus-gohččumat.

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

### Bonus: `beat_strech:` (časkkástaga fanaheapmi) ja `rate:` (dákta) -doaimmat

Dáiguin gohččumiiguin sáhtát duddjot miellagiddevaš osiid iežat nuhttii, iige daid gánnát guođđit geavatkeahttá. Geahččal čuovvovaš kodalahki:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

Fuobmáthan, ahte luhpa loahpas lea heađušteaddji bodda. Dat boahtá das, ahte namuhuvvon sample :loop_amen lea dárkilit 1.753310657596372 časkkástaga guhkki. Dat ii leat obanassiige anolaš juos hálidat doallat iežat bihtá rievttes ritmmas ja ovttastahttit dan sierra gohččumiidda. Lihkus sáhtát geavahit gohččuma `beat_stretch: 2`, mainna sáhttá fanahit dahje játnada sample aiddo 2 časkkástaga guhkkosažžan, dego mielčuovvu ovdamearkkas:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Dál sáhtát geahččalit `rate` (leaktu) -doaimma. Dat stivre dan, man jođánit sample čuodjá. Árvu 1 dárkkuha dábálaš leavttu, 0.5 bealleleavttu ja 2 duppalleavttu. Sample orru maid čuodjame allelis dahje vuollelis sorjádettiin dan leavttus. Ja mii fiidnámus, sáhtát juobe čuojahit iežat sample ruovttogežiid! Dat lihkostuvvá go geavahat gohččuma ovddas negatiiva árvvuid. Kopiere vulobeale koda guoros buffer (duohčas) -gaskabláđđái, čađat prográmma ja geahččal movt árvvuid earáhuhttin rate (dákta) ja sleep (oađe) -gohččumiin váikkuha du bihttái. 

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}
