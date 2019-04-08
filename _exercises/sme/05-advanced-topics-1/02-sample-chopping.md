---
chapter: Ovdánan fáttát 1
title: Sampleid smoarrun
lang: sme
layout: exercise
---

Muittátgo vel, maid rávvagiid ovddit oasit leat oahpahan sampleid dahkamis ja daid čuojaheamis? Geahča vulobeal video, mii veahkeha ipmirdit movt sample meannuda, lea olggos oaidnit ja čuodjá.

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Video čájeha sample `:loop_amen` gearduma čuovvovaš kodain:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

Čuovvovažžan dahkkojuvvo `live_loop`, mii čuojaha bihttái ritmma. Muittátgo  `beat_stretch` -doaimma, mii geavahuvvo `sample` –gohččuma olis? Doaibma fanaha/játnada sample háliduvvon guhkkosažžan časkkástagain. Gieđahallat dan oasis: “jiena duddjon”. Čuovvovažžan geavahit doaimma ja fanahit sample `loop_amen` njealji časkkástaga guhkkosažžan ja joatkit dan “luhpema”:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Čuovvovažžan oahpásnuvvat dasa, movt sáhttá čuojahit Amen-luhpa osiid sierra ortnegis. Sample -gohččumiin don sáhtát bidjat samplei sierra álggahan- ja heaitináiggiid nu ahte geavahat sample doaimmaid `start`  (álggat) ja  `finish` (heaitte). Goappánai doaibma dohkkeha árvvuid `0` ja `1` gaskkas. Ovdamearkka dihte `0` lea sample álgočuokkis, `0.5` lea sample gaskkamuddu ja `1` lea sample loahppačuokkis. Geahččalit sample duddjoma ovdamearkkain:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

Vulobeal video (mii lea ráhkaduvvon Ableton Live-fitnodaga veahkkehemiin) visualisere, mat oasit `loop_amen` -samples čuojahuvvojit mange `live_loop` -garvima áigge. 

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Iigo leatnai somá smoarrut sampleid ja čuojahit daid aivve sierra ortnegis? Dutkka `sample` –gohččuma sierra ásahusaid ja doaimmaid. Geahččal ovdamearkka dihte bidjat juosat bajábeal ovdamearkka `loop_amen` –koda časkkástahkii doaimma `rate: -1`, goas sample čuodjá boasttogežiid.

Sample-gohččuma sierra doaimmaid molssaeavttuiguin sáhtát duddjot iežat bihtá makkárin hálidat nu ahte geavahat ovdamearkka dihte čuovvovaš doaimmaid: `rate`, `pan`, `amp`, `attack`, `release`, `start` ja `finish`  sierra árvvuiguin. Geahččal vulobeal ovdamearkka, mas čuojahuvvojit duođaid oanehis ja áidnalunddot “mikrojienat” guovtti samples ja rievdademiin loahppabohtosa jámma deivvolašárvvuiguin (`rrand`). 

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

Go deattát pláy-boalu, de gulat go koda čuojahuvvo. 

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

Dát teknihkka geavahuvvo olu granuláralaš syntesas ja granuláralaš syntetisáhtoriin. Granuláralaš dárkkuha “čuorpmaslágána”. Dat vuođđuduvvá seamma teknihkkii go sample-doaibma, muhto doaibmá hui unna jienažiin, mikrojienain. Sáhtát lohkat dás lasi dieđ <a href="https://en.wikipedia.org/wiki/Granular_synthesis">eŋgelalašgiel wikipedia artihkkalis</a>. 
(granuláralaš syntetisáhtor =  syntetisáhtor, mii smoarru bihtáid osiide) 
