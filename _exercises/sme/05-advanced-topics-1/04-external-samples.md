---
chapter: Ovdánan fáttát 1
title: Sample- ja jietnačájánasaid buktin Sonic Pi-prográmmii
lang: sme
layout: exercise
---

Sonic Pi:a mielde bohtet 164 jietnačájánasa, maid sáhttá lupmosit geavahit nuohtaid bidjamii, musihka ja jienaid bargamii. Prográmmii lea vejolaš dahkat maid iežas čájánasaid. Sáhtát ovdamearkka dihte báddet iežat lávluma dahje čuojaheami ja geavahit daid iežat nuohtas. Sáhtát buktit čájánasaid mielčuovvu rávvagiid mielde. 

Fiillat, mat buktojuvvoji Sonic Pi-prográmmii, galget leat vurkejuvvon .wav -fiilahápmái. Jietnaefeavttat galget leat vurkejuvvon du dihtora garraskerrui. Čuovvovaš ovdamearkkain mii geavahit *Mehackit* – sosiála fitnodaga čohkken nuvttá čájánasbáhka, man namma lea *Solenoid Samples 1* ja dan sáhttá luđet <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">dáppe</a>. Dat doallá sisttis oktiibuot 14 ovttain háviin vurkejuvvon loop-sample (luhppačájánasa), mat vurkejuvvojedje jagi 2016 álggus dollojuvvon bargobáji johtti jietnainstallašuvnnas. 

Go don leat luđen fiilabáhka ja burgán dan, de don galggat dárkkistit fiilabearpma ohccubálgá. Dat sorjá du geavahanvuogádagas, dan gielas ja vurkenbáikkis. Juos don leat ovdamearkka dihte burgán fiillaid berbmii ‘Samples’ iežat bargobeavddi nala, bearpma ohcubálggis lea jáhkehahttivuođa mielde čuovvovašlágán:

* Windows: “C:/Users/du_geavahannamma/ Desktop/Samples”
* Raspberry Pi, Linux and Mac: “/Users/du_geavahannamma/Desktop/Samples”
Du geavahannamma lea dat namma, mainna čálihat iežat dihtorasat. Muitte geavahit buot fiilabálgáin iežat geavahannama! 
Čájánasbáhkka doallá sisttis čuovvovaš fiillaid:  `hit_1.wav` -  `hit_7.wav` (časkinčuojanasaid časkkástagaid) ja `loop_1.wav` - `loop_7.wav` ( luhpaid časkkástagaid, mat ávžžuhuvvojit čuojahuvvot `sample` –gohččuma doaimmain `beat_stretch`.

Vulobeale ovdamearkka čuovvumiin sáhtát 
čuojahit bearpma fiillaid njuolga `sample`-gohččumiin. 
Muittáthan geavahit rievttes fiilabálgá vulobeale ovda-
mearkkain!

{% highlight ruby %}
sample "/Users/du_geavahannamma/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Juos čállet `sample`-gohččumii dárkkuhuvvon fiilabálgá riekta, de don galggašit gullat jiena: `loop_1.wav`. Dát lea hui álkes ja ovttageardánis vuohki beassat gieđahallat ja čuojahit olgguldas .way-fiilahámat jietnačájánasaid ja sampleid. Lea goitge ovttageardáneabbo ja johtileabbo, ahte kodii čállojuvvo fiilabálggis dušše oktii ja samplet čuojahuvvojit nu ahte čállojuvvojit dušše daid fiilanamat. Čuovvovaš ovdamearkkain don oahpat, movt sáhtát čuojahit `sample`-gohččumiin olgguldas sampleid, mat leat seamma bearpmas, nu ahte čujuhat dušše fiilanamaide. Don galggat vuos muitalit Sonic Pi-prográmmii fiillaid sajádaga. Don sáhtát dahkat dan `sample`-gohččumiin. Sample-gohččuma maŋŋel sáhtát nammadit variábela dan fiilanamain ja muitalit fiilla sajádaga. Vulobeale ovdamearkkas muitaluvvo, movt dat dahkkojuvvo. Álgui dáhkkojuvvo ođđa variábel, man namma lea solenoids (masa vurkejuvvo sampleid ohcubálggis) ja geavahuvvo dat ja čujuhus samplei “loop_4” vulobeal ovdamearkka mielde. Ovdamearkkas geavahuvvo fiilla namma solenoids luđejuvvon fiillaide. Go vuoját prográmmaid, sample `loop_4.wav` galggašii čuodjagoahtit.  

{% highlight ruby %}
solenoids = "/Users/du_geavahannamma/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Dál sáhtát geavahit olgguldas jietnačájánasaid ja Sonic Pi -prográmma girjeráju sampleid iežat dujiin. Geahččal ovdamearkka dihte vulobeal ovdamearkka, mas 
čuojahuvvojit olgguldas ja Sonic Pi samplet njealji 
sierra live_loop:ain. Válddathan vuhtii, ahte `live_loop`:as namain `:solenoid2`  geavahuvvo variábel 
`samplename` válljet deivvolaččat ovtta dáid sample-
fiillaid joavkkus `hit_1.wav - hit_7.wav`. 

{% highlight ruby %}
solenoids = "/Users/du_geavahannamma/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample solenoids, "hit_6", rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

Sáhtát guldalit, makkárin mielčuovvu koda čuodjá go deattát play-boalu.

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
