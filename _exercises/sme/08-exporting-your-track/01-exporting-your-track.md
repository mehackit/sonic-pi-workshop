---
chapter: Bihtá vurken ja doalvun 
title: Bihtá vurken ja doalvun 
lang: sme
layout: exercise
---

o don leat duhtavaš iežat bihttái, de soaittát hálidit vurket dan musihkkafiilan ja juohkit dan ustibiiddátguin (ovdamearkka dihte Mechackit bajásdoallan <a href="http://www.soundcloud.com/mehackit">SoundCloud</a> -siidduin). Vuohččan don galggat vurket dan nu ahte geavahat Sonic Pi -prográmma vurkendoaimma. 

Báddenproseassa dáhpáhuvvá ovttageardánit čuovvovaš vuogi mielde: 

* Deatte Rec-boalu. Dat galggašii oidnot mihttejuvvon hámis. Bádden lea dál manname ja sáhtát álggahit iežat lávlaga/bihtá čuojaheami nu ahte coahkkalat Run-boalu.
* Go leat čuojahan iežat lávlaga/bihtá lohppii dahje vurken iežat mielas doarvái, spoahkkal Stop-boalu (bisset!).
* Dán maŋŋel deatte Rec-boalu báddema bisseheami várás.
* Šerbmii rahpasa vurkenláse ja sáhtát vurket jietnafiilla iežat hálidan namain ja dan berbmii, masa hálidat. Sáhtát geavahit ovdamearkka dihte nama MuLávlla.wav. 

{% include videoplayer.html filepath="/assets/video/record_audio" %}

Dán maŋŋel du bihttá lea válmmas čuojaheami ja juohkima várás. Ávžžuhit goitge gieđahallat jietnafiilla muhtin doaibmabijuin ovdal dan almmustuhttima. Daiguin loahppaboađus čuodjá ámmátlažžabun. Bihtá vátnamii sáhttet geavahuvvot jietnaduddjonprográmmat, dán dáhpáhusas geavahuvvo Audacity -prográmma. Dat lea jienaid vurkema ja duddojoma prográmma, mii vuođđuduvvá rabas gáldokodii. Sáhtát luđet prográmma čuovvovaš geavahanvuogádagaide Windows, Linux ja OS X čujuhusas: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>. Prográmma lea eŋgelasgielalaš.

## Audacity: jaskatvuođa sihkkun

Jietnafiilla álgui ja lohppii báhcá dábálaččat badjelmearálaš jaskatvuohta go báddet iežat bihtá Sonic Pi:ain. Sáhtát iežat hálu mielde sihkkut badjelmearálaš jaskatvuođa muhtin ovttageardánis doaibmabijuin. Raba vuohččan bihtá jietnafiilla Audacitys fálus “File / Open”( “Fiila /Raba”). Go leat rahpan jietnafiilla, Audacity-láse galggašii leat dákkár:

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

NVállje čuovvovažžan “Effect” (Efeakta)-fálus bargoneavvu “Truncate Silence” (“oanit jaskatvuođa”), dego mielčuovvu govas:

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Biepma čuovvovaš árvvuid bargoneavvu lásii:

* Level-60 dB (jaskatvuođa árvu)
* Duration: 0.5 seconds (jaskatvuođa miniguhkkodat, dán dáhpáhusas 0,5 sekundda)
* Truncate to: 0.1 seconds (jaskatvuođa  maksimaguhkkodat, dán dáhpáhusas 100 millesekundda)

Deatte čuovvovažžan OK-boalu. Vulobeal govas oidnojit maid ásahusat:


<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Dál sáhtát áicat iežat jietnafiilla bárrohámis, ahte prográmma lea sihkkon guhkes jienahis ráidduid.

## Audacity: jietnagivrodaga normaliseren

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

Čuovvovažžan du bihttá duddjojuvvo nu jiednát čuodjin dan haga ahte fiila unniduvvo dahje ieš jietnašladja heajuduvvo. Juos navddát, ahte jietnafiila čuodjá ilá jaska, don sáhtát árvvoštallat dan “normaliserema”. Dat dahká jienas nu garrasit čuodji go vejolaš almmá dan haga, ahte jietnašládja hedjonivččii. Doaibma heive earenoamážit dánsa- ja ritmmalaš mášenmusihkkii. Juos du bihttá lea luonddus dáfus ráfálaš ja das leat dovddut, jietnagivrodaga ii vealtakeahttá dárbbaš gieđahallat obanassiige. Ná dat dahkkojuvvo: Vállje “Effect (Efeakta) -fálus bargoneavvu “Normalize” (normalisere”) (geahča vulobeal gova)

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Biepma čuovvovaš árvvu “Normalize”-bargoneavvu lásii: 

* Normalize maximum amplitude” to -0.1 dB (normalisere stuorimus vejolaš jietnagivrodaga -0.1 desibela). 

Dárkkis ahte guokte bajimus fálloruvttu leat válljejuvvon ja deatte “Ok”. (gč. vulobeal gova). Juos hálidat jaskadit dási jietnagivrodahkii, sáhtát biebmat maid muhtin unnit árvvu (ovdamearkka dihte -4.0).

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Normaliserema maŋŋel don galggašit oaidnit bárrohámi “biikkaid” alibun, mii dárkkuha stuorit jietnagivrodaga.

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Vurken mp3 fiilahápmái

Čuovvovažžan vuorus lea du duddjon fiilla vurken. Juos don hálidat vurket iežat bihtá ovdamearkka dihte mp3 –fiilahámis, raba File –fálu (fiila) ja vállje Export Audio (Doalvvo jietnafiilla).  (gč. vulobeal gova).

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

Doalvun-láses (Export Audio) oainnát vulosgeassinfálu olgeš vuollečiegas. Vállje das fiilahápmin: “MP3 Files”. Seamma fálus don sáhtát válljet ásahusaid iežat bihttái. Prográmma addá evttohusaid ovdaásahussan (presets).

Ovdamearkka dihte čuovvovaš ásahusain don oaččut doaibmi mp3-fiilla:


* Bit Rate Mode: Preset (bihttaleaktu: ovdaásahus)
* Quality: Standard, 170-210 kbps (Šládja: dábálaš, 170-210 kilobihta per sekunda
* Variable Speed: Fast (Molsašuddi leaktu: Johtil)
* Channel Mode: Joint Stereo (Kanálasadji: Ovttastuhtton stereo)
 

Čuovvovažžan don galggat válljet iežat bihttái nama ja čállit dan gieddái “Save As” (Vurke námain) ja spoahkkalit Save (Vurke) -boalu. Dál dus galggašii leat buorrešlájat ja doaibmi mp3-fiila bihtástat, man sáhtát juohkit neahtas iežat olbmáiguin dahje sirdit ovdamearkka dihte iežat mátketelefovdnii dahje SoundCloud-siidduide. (gč. mielčuovvu govva) 

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Nuohta bidjan ja prográmmeren lea ná álki Sonic Pi:ain! Ja dál sáhtátnai joatkit nuohta bidjama ja musihka duddjoma!
