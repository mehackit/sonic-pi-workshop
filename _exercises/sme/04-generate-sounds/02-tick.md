---
chapter: Jienaid buvttadeapmi
title: Tick-doaibma
lang: sme
layout: exercise
---

Tick dán oktavuođas lea coahkkin dahje bodda.
Muittátgo `chord`-gohččuma? Dat addá logahallamin dihto šuoŋa nuohtaid.

{% highlight ruby %}
play (chord :c, :major).choose 
# čuojaha deivvolaččat C-durašuoŋa nuohta (:c, :e tai :g)
{% endhighlight %}

TSonic Pi:s lea maid gohččun namain `scale` (ceahkkálas), mii máhcaha buot meroštallojuvvon _ceahkkálassii_ gullevaš nuohtaid, ii nappo dušše šukŋii gullevaš nuohtaid. Mielčuovvu kodas lea govviduvvon gohččun:

{% highlight ruby %}
play (scale :c, :major).choose 
# čuojaha deivvolaččat C-duraceahkkálasa nuohtaid (:c, :d, :e, :f, :g, :a dahje :b)
{% endhighlight %}

`choose` (vállje)-gohččumiin sáhtát boaibmut deivvolaš oasi logahallamis. Juos hálidat válljet logahallamis nuohtaid systemáhtalaččat, nu sáhtát geavahit dasa hui beaktilis doaimma, man namma lea `tick`:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Bajábeale kodas válljejuvvojit E-mollaceahkkálasas nuohtat pentatonalaš skála mielde goalmmát oktáva rájes. Pentatonalaš skála (pentatonic scale) sisdoallá 5 nuohta. Dát dahkkojuvvo nu ahte lasihuvvo gohččun `.tick` dan ovddit meroštalli gohččuma ovdii. Tick-doaibma lea luhppaguovdasaš ja juohke live_loop-kodas sáhttá leat anus iežas tick-doaibma: 

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## Goallus (Rings)

Sáhtát geavahit tick-doaimma gollosiin. Sáhtát maid geavahit doaimma logahallamiin, muhto dat bisána gohččuma loahpas. Goallus (ring) lea earenoamáš listu, mii álgá ođđasit loahpas. Ovddit ovdamearkkas nuohttaceahkkálas álggii álggus maŋimus nuohta maŋŋel. `scale`- ja `chord`-gohččumat doibmet goallusin. Muhtimin don sáhtát hálidit duddjot iežat logahallama (ovdamearkka dihte nuohtaid) ja dahkat das gollosa nu ahte geavahat gohččuma `.ring` dahje geavahemiin doaimma `ring` creator (gollosa ráhkadeaddji):

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 2, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Čuovvovaš ovdamearka lea veaháš váddásit. Dán ovdamearkkas šuoŋat rievdaduvvojit goallusin ja mannojuvvo čađa .tick -doaimmain:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Čuovvovažžan bihttái lasihuvvo váldomelodiija. Don sáhtát geavahit lassigohččuma `.mirror` (speadjal), dego vulobeal ovdamearkkas. Mirror (speadjal) lea speadjalastingohččun, mii jorgala gollosa dego birra, dán dáhpáhusas álggaha gollosa alimus nuohtas vuollegačča-musa sajes. 

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Geahččal čuovvovažžan tick:a ja iešguđetlágán gohččumiid sierralágán gollosiiguin ja listtuiguin.
