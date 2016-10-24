---
chapter: Eksportere musikken din
title: Eksportere musikken din
lang: no
layout: exercise
---

Når du er fornøyd med det første sporet ditt vil du kanskje lagre sporet som en lydfil og dele det med vennene dine online (for eksempel på din egen <a href="http://www.soundcloud.com/mehackit">SoundCloud</a> side). Først må du ta opp sangen din ved å bruke 'record' funksjonen i Sonic Pi. 

Stegene for å ta opp er som følger:

* Klikk på **Rec** knappen
* Når du ser at Rec er trykket inn kan du starte sangen din ved å trykke på **Run**
* Når sangen er ferdig eller du har spilt mange nok ganger gjennom live-løkkene dine trykk på **Stop**
* Til slutt trykker på du **Rec** igjen for å stoppe opptaket
* Lagre lydfilen din i diaologvinduet som spretter opp (for eksempel med navnet *MinSang.wav*)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

Når du har lagret lydfilen din er du klr for å spille og dele den. Vi anbefaler at du fikser litt på lyden for å få den til og høres proffere og høyere ut først. For å gjøre dette bruker vi *Audacity* som er gratis og åpen kildekode programvare for å ta opp og redigere lyd. Du kan laste ned *Audacity* (for Windows, Linux og OS X) her: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>. 

## Audacity: Fjerne pauser

Vanligvis når du tar opp lydfiler med Sonic Pi er det noe ekstra pauser (stillhet) på starten og slutten av sangen din. Hvis du vil kan du fjerne dette med noen enkle steg. Først må du åpne lydfilen din i Audacity med "File / Open". Når du har åpnet filen ser du et vindu som ser slikt ut:

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Gå til "Effekter/Effect" menyen og velg "Truncate Silence".

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Bruk disse verdiene i "Truncate Silence" vinduet: 

* Level: -60 dB
* Duration: 0.5 seconds 
* Truncate to: 0.1 seconds

Så kan du trykke på "Ok".

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Nå skal du se at pausene i lydfilen er tatt bort fra sangen.

## Audacity: Fikse volument

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

Nå kan vi forsøke å lage lyden så høy som mulig uten å komprimere eller ødelegge selve lyden. Hvis du tenker at musikken din er mest drevet av rytmen og skal være høyere jevnt over, er dette steget for deg. Om du derimot lager mer forsiktig musikk (som bakgrunnsmusikk) og du vil at den skal være sånn, er kanskje ikke dette steget for deg. Uansett, sånn gjør du det: Gå til "Effect" menyen og velg "Normalize".

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Bruk de følgende verdiene i "Normalize" vinduet:  

* Normalize maximum amplitude" til -0.1 dB

Merk/kryss av de øverste sjekkboksene og trykk "Ok".

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Nå skal du se at toppene i lyden er høyere, som betyr at volumet er høyere.

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Lagre en MP3 fil

Nå må du bare lagre lydfilen. For eksempel, hvis du vil lage en MP3 fil kan du trykke på "File" og "Export Audio".

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

I Export Audio vinduet skal du se en nedtrekksmeny et sted i nærheten av filvelgeren. Velg "MP3 Files" fra den menyen. Du kan velge en av standardinnstillingene i Format Options for MP3 filen. Disse verdiene pleier alltid å virke fint:

* Bit Rate Mode: Preset 
* Quality: Standard, 170-210 kbps 
* Variable Speed: Fast 
* Channel Mode: Joint Stereo 

Deretter må du legge inn filnavnet i feltet "Name" og trykke på "Save". Det burde funke fint! Nå har du en MP3 fil av lydsporet ditt, som du lett kan sende til vennene dine, legge ut på SoundCloud eller legge inn på telefonen din.

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Vi håper du har hatt det morsomt med å lage og publisere musikk med Sonic Pi!
