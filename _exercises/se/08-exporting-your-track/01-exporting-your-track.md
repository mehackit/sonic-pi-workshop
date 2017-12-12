---
chapter: Spela in din låt
title: Spela in din låt
lang: se
layout: exercise
---

När du är klar med din låt, är det nästa naturliga steget att spela in och publicera den! Vi går först igenom hur du kan spela in din låt med Sonic Pi: 

* Tryck på **Rec**
* Nu är inspelningen på och du kan börja spela din låt genom att trycka på **Run**
* När låten är slut (eller du har spelat live_looparna tillräckligt många gånger), tryck på **Stop**
* Tryck på **Rec** för att avsluta inspelningen 
* Ett fönster öppnas där du kan spara din låt med vilket namn du vill (T.ex. *MinLåt.Wav*)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

När du är klar med inspelningen är din låt klar för att spelas eller publiceras (om du vill dela den med dina vänner i t.ex. <a href="http://www.soundcloud.com/mehackit">SoundCloud</a>). Vi rekommenderar att du bearbetar filen före publicering, så att den låter mera professionell! Du kan göra det t.ex. med programmet *Audacity*, som är ett program designat  för inspelning och bearbetning av ljud. Du kan ladda ner *Audacity* (Windows, OS X ja Linux) här: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>.

## Audacity: Avlägsna tystnaden 

I början av ljudfilen finns det oftast extra tystnad när du spelar in din låt med Sonic Pi. Om tystnaden inte är önskvärd lönar det sig att avlägsna den på följande sätt. Öppna först låtens ljudfil med Audacity (“File / Open”, svenska “Fil / Öppna”). När du har öppnat filen borde det se ut ungefär såhär: 

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Välj ett verktyg med namnet “Truncate Silence” (Typisk tystnad) från Effect - menyn 

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Mata in följande värden: 

* Level: -60 dB (Tystnadens tröskelvärde)
* Duration: 0.5 seconds (Tystnadens minsta längd)
* Truncate to: 0.1 seconds (Tystnadens maximala längd)

Tryck på ‘OK’. 

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Nu borde tystnaden vara mycket kortare. 

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Normalisering

Om ljudfilen ljuder för tyst jämfört med resten av låtarna lönar det sig att överväga att “normalisera” den. Normalisering gör låten så högljudd som möjligt utan att skada ljudkvaliteten. Ofta lönar det sig att normalisera din musik, men om din låt är t.ex. lugn ambient- musik kan det löna sig att inte göra nästa steg.

Välj verktyget “Normalize” i “Effect”-menyn. 

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Mata in följande värde: 

* Normalize maximum amplitude: -0.1 dB.

Kolla att de två översta boxarna är checkade och tryck på “Ok”. Om du vill ha en tystare nivå för volymen kan du också använda ett tystare värde (t.ex. -4.0).

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Efter normaliseringen borde vågens “spetsar” vara högre, vilket betyder att volymen är högre. 

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Spara en MP3-fil

Nut ska vi spara filen. Om du t.ex. vill spara din låt i MP3-format, öppna menyn “File” och välj “Export Audio”. 

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

Fönstret som öppnas innehåller en “Format”-meny där du kan välja filtypen MP3. I filtypens inställningar kan man välja något “Preset”. T.ex. med följande inställningar får du en fungerande MP3-fil: 

* Bit Rate Mode: Preset (“Förinställningar”)
* Quality (Kvalitet): Standard, 170-210 kbps
* Variable Speed: Fast (Snabb)
* Channel Mode: Joint Stereo (suom. Sammanlagd stereo)

Nu måste du mata in namnet på din ful i fältet “Save As” och trycka på “Save”. Nu borde du ha en MP3-fil av din låt  som du kan dela med dina vänner eller förflytta till t.ex. din mobiltelefon!

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Så här lätt är det, och nu kan du spela in dina Sonic Pi-låtar och publicera dem på nätet!
