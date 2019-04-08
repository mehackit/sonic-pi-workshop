---
chapter: Lávlaga dahje bihtá ráhkadeapmi
title: Lasi deivvolašvuohta
lang: sme
layout: exercise
---

Oba fiinnis! Dál dus lea gárvvisin duogášritma, bássa ja váldomelodiija. Čuovvovažžan don beasat dahkat juoidá duođaid fiidná ja geahččaladdat mat leat Sonic Pi:a duođalaš vejolašvuođat. Dál sáhtát lasihit bihttásat ođđa  elemeanttaid ja prográmmeret Sonic Pi -prográmma  bidjat nuohta du beales. Dat dárkkuha dan ahte sáhtát addit prográmma dahkat  válljemiid du beales ovdamearkka dihte das, maid nuohtaid prográmma čuojaha čuovvovaččat. 

## Bircco ja transponere melodiija

Transponeren oaivvilda nuohttaallodaga earáhuhttima bajás (allelii) dahje vulos (vuollelii). Don sáhtát addit dihtora transponeret  iežat bihtá nuohttaallodaga gaskkohagaid. Sáhtát dego bircut ja válljet mainna lágiin nuohttaallodat earáhuhttojuvvo. Dán olis čuovvu ovdamearka, mas nuohtat, mat leat live loopa siskkobealde, earáhuhttojuvvojit guokte nuohttalávkki allelii. Gohččun, mainna transponeren dahkkojuvvo lea: `if one_in` 

{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

Fuobmájitgo movt bihtá melodiija čuodjá gaskkohagaid allelis? Ovdamearkkas juohke `live_loop`a čuojahanháve geavahuvvo gohččun `if one_in(6)` (juos okta:6(s), mii gohčču Sonic Pi:a bircut guđasiiddot birccu. Juos bircuma boađus lea guhtta, čuovvovaš gurgadasa gohččun `use_tranpose 2` ollašuhttojuvvo ja dan čuovvumuššan `play_pattern_timed` -gohččuma nuohtat čuojahuvvojit guokte nuohttalávkki allelis. Juos bircuma boađus lea vuollái guhtta, prográmma geavaha gohččuma `else` (eará) maŋŋelaš gohččuma `use_tranpose 0`, mii dárkkuha ahte melodiija ii transponerejuvvo dahjege dan nuohttaallodat ii rievdaduvvo.

## Ráhkat deivvolaš “acid house” (elektromusihka vuollestiila) -bássaoasi

Acid house, mii gohčoduvvo dábálaččat dušše dearpmain acid, lea elektrovnnalaš musihka okta vuollestiillain. Čuovvovaš gohččumiin sáhtát duddjot bássaoasát miellagiddevaš vuogi mielde. Gohččun `.choose` (vállje) lea ávkkálaš vuohki, mainna sáhttá válljejuvvot listtus deivvolaččat muhtin oasit (elements). Ovdamearkka ná:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` lea nuohtaid logahallan, dán dáhpáhusas C-duraceahkkálasa nuohtat. `.choose` -gohččun vállje deivvolaččat ovtta nuohta dáid nuohtaid joavkkus. Nuohtaid sajes sáhtát gohččumiin válljet maid beare listtus, ovdamearkka dihte botta (sleep) árvvuid, dego mielčuovvu ovdamearkkas:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Sonic Pi-prográmmas don it dárbbaš vealtakeahttá muitit mat nuohtaid gullet mange šukŋii. Sonic Pi -prográmma muitá daid du beales. Dan sadjái ahte čálát gohččuma `[:c, :e, :g]`, sáhtát čállit gohččuma `(chord :C, :major)`. Gohččun dahká automáhtalaččat listtu C-duraceahkkálasa nuohtain. Ovdamearkka dihte:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Mii geavahit dán gohččuma bássaoasi duddjomii acid house -musihkkastiilii mihtilmassan “bulljarastin”. Vurke iežat duoji nu ahte deattát Save (vurke)-boalu, vai sáhtát dárbbu mielde geavahit dan ođđasit iežat ovdal dahkan bássaoasi ja kopiere aiddo dál adnojuvvon `:bass`-luhppa ođđa buffer (duohčas) -gaskabláđđái. Gurre bássa luhpa sisdoalu vai sáhtát duddjot ođđasa.Geavahuvvo ođđa bássaoasi várás klassihkalaš syntetisáhtora `:tb303` ja čuojahuvvojit C-duraceahkkálasa nuohtat 1/16-nuohta guhkkosažžan: 

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Na dat gai ii orron vel beare buorre. Nuohtaid guhkkodat (navddusin `release: 1`) dagaha dan, ahte dat čudjet badjálaga ja šaddet buvrun. Mii lasihit pláy-gohččuma maŋŋái ođđa paramehtera, `release: 0.125` 

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Oassi čuodjá juo buorebut, muhto jietna galgá vel duddjojuvvot. Dán rádjái don leat geavahan `attack:` ja `release:` -doaimmaid `play`-gohččuma olis. Iešguđetlágán duddjongohččumat leat eatnaŧ ja fállu sorjá das man syntetisáhtora geavahat. Ovdamearkka dihte `:tb303`-syntetisáhtoriin leat 45 iešguđetlágán paramehtera, maiguin jiena sáhttá duddjot. Čuovvovažžan geavahit bássaoassái gohččuma `cutoff` (čuohppá eret). Gohččun čuohppá jienas eret buot dávjodagaid du válljen čuohppanárvvu bajábealde. Cutoff-gohččuma olis sáhtát geavahit árvvuid 0 – 130 gaskkas.

Cutoff-doaimmain ii dárbbaš geavahit dušše giddes lohkoárvvu, muhto sáhtát geavahit maid deivvolaččat válljejuvvon árvvu. Sáhtát geavahit gohččuma `rrand (minimaárvu, maksimaárvu)`, mainna sáhtát duddjot deivvolaččat loguid minima- ja maksimaárvvuid gaskkas. Geahččal gohččuma bássaoasistat:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Oba fiinnis! Muitte dutkat ja geahččalit gohččuma iešguđetlágán árvvuiguin. Muittuhussan vulobealde lea čállojuvvon koda, mas  leat dán rádjái iežat oahppan máhtut ja gohččumat:

{% highlight ruby %}
use_bpm 120

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
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
