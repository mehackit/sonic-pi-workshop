---
chapter: Bagadus
title: Bagadus
lang: sme
layout: exercise
---

Sonic Pi lea programmerenbiras, mii vuođđuduvvá rabas gáldokodii, ja mii lea plánejuvvon prográmmerendoahpagiid dutkamii ja oahpaheapmái ođđa jienaid ja musihka duddjomiin. Dat lea nuvttá heivehus buohkaide. Dan lea duddjon Sam Aaron Cambridge universiteahta dihtorlaboratorias. Sonic Pi-prográmma lea eŋgelasgielat. Sáhtát geavahit Sonic Pi:a prográmmeret, bidjat nuohta ja ovdanbuktit sierra musihkkastiillaid klassihkalaš stiilahálttiid rájes gitta ođđaáigásaš mášenmusihka rádjái, dego EDM:ii ja Dubstepii. Rávvágiid lohppii leat čohkkejuvvon dán ofelaččas adnon kodat ja daid sámegiel čilgehusat.

Dát oahppodiibmu oahpista du Sonic Pi:a álgooahpuid ja eanet ovdánan doaimmaid máilbmái. Oahppodiimmu loahpas sáhtát juo ráhkadit iežat bihtáid ja dat sáhttá čuodjat ovdamearkka dihte dákkárin:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Dahje juobe dákkárin:

{% include player.html filepath="/assets/audio/amen.mp3" %}

Programmeremis eai leat leame meattáhusat, dušše musihkalaš gávdnosat.  Buot deháleamos lea atnit mielas ahte galgá leat suohtas! Nu ahte muitte dán: suohtastala, dutkka ja prográmmere.

## Sonic PI:a rahpan

Juos dus ii leat Sonic Pi-prográmma installerejuvvon, luđe ja installere dan čujuhusas <a href="http://sonic-pi.net/">sonic-pi.net</a> Prográmma lea oažžunsajis Windows, Linux ja OS X -geavahanvuogádagaide. 

Dán maŋŋel bija Sonic Pi johtui. Gehččot 
makkár dat lea!


Dát lea Sonic Pi:a geavahanlakta (mielčuovvu govva), mii čohkiida golmma váldoláses. Stuorimus láse lea koda čállima várás, ja gohčodit dan “Programmerenpanelan”. Dan olgeš bealde lea  “Loggapanela” (Log panel), mas oidnojit merkemat prográmmas go dat vuddjojuvvo. Go deattát  “Help“ (veahket) -boalu olgeš badjeravddas, de oaččut oidnosii ruvttu vuolleoassái goalmmát láse, “Veahkkepanela” (Help panel). Doppe sáhtát gávdnat ávkkálaš dieđu Sonic Pi:a prográmmerengielas ja sierralágán gohččumiin, jienain ja efeavttain. Panelas gávdnojit maid máŋggat gárvves ovdamearkkat, maid sáhtát geahččalit ja geavahit!

<img src="{{ "/assets/img/interface.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi -geavahanlakta </i></small></p>

## Nuohta čuojaheapmi

Álggahit Sonic Pi:in programmerema ovttageardáneamos gohččumis, nuohta čuojaheamis. Vállje `Buffer 0` (duohčas) gaskabláđi Programmenpanela vuolleoasis ja čále dasa čuovvovaš gohččuma:

{% highlight ruby %}
play 60
{% endhighlight %}

Deatte dan maŋŋel **Run** (čađat) -boalu gurut badjeravddas. Gulatgo biipema? 

Geahččal play (čuojat) -gohččuma sierra árvvuiguin. Čále ovdamearkka dihte `play 50` dahje `play 70`. Fuomášatgo movt jietna earáhuvvá?

Geahččal čuovvovažžan čállit `pley 60` ja deatte Run (čađat) -boalu. Mii dáhpáhuvvá?

> Dát lea ovdamearka meattáhusas, mii lea du kodas. Juos meattáhuspanela čájeha maŋŋel deavstta, nu dieđát ahte du kodas lea meattáhus, man don fertet divvut. Dábálepmosit meattáhusat bohtet ng. rihkkomeattáhusain dahje boastut čállojuvvon gohččumiid dihte. Dán dáhpáhusas sátni `play` (čuojat) lea čállojuvvon boastut. 

Nummáriid, maid geavahit gohččuma maŋŋel leat _MIDI-nuohtat_ (Musihkkainstrumeanttaid Digitála rádjegiera). MIDI lea vuogas vuohki bidjat nuohta ja  anolaš gaskaoapmi, mainna sáhtát destet jođánit nuohtaidat ja ráhkadit daid nu ahte vuolidat daid árvvu (nu ahte dagat nuohttaallodaga  vuollegeabbon) dahje nu ahte stuorrudat daid árvvu (nu ahte dagat  nuohttaallodaga alibun). Sonic Pi:s sáhttet geavahuvvot sihke MIDI-nuohttanummárat (árvvut `0` ja `127` gaskkas) ja árbevirolaš musihkalaš nuohttačállin (dego `:C4`, `:Eb3` dahje `:G5`) 
