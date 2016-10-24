---
chapter: Introduksjon
title: Introduksjon
lang: no
layout: exercise
---

Sonic Pi er et programmeringsmiljø med åpen kildekode, laget for å utforske og lære bort programmeringskonsepter gjennom å lage nye lyder. Det er en gratis live-kode synth for alle laget av Sam Aaron ved  University of Cambridge Computer Laboratory. Du kan bruke Sonic PI for å programmere, komponere og fremføre både klassiske og moderne stilarter fra kanoner til dubstep.

Denne guiden tar deg gjennom det grunnlegende og mer av Sonic PI. Når du har kommet deg igjenom vil du være i stand til å lage noe slik som dette:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Eller som dette:

{% include player.html filepath="/assets/audio/amen.mp3" %}

Sonic PI handler om å utforske. Man gjør ingen feil, bare oppdagelser. Og det aller viktigste, det handler om å ha det moro. Så husk dette: Ha det gøy, utforske og hack i vei!

## Å åpne Sonic Pi

Hvis du ikke har installert Sonic PI, gå til <a href="http://sonic-pi.net/">sonic-pi.net</a>, last ned og installer Sonic Pi. Det er tilgjengelig for Windows, OS X og Linux. 

Så, la oss starte opp Sonic PI og se hvordan det ser ut.

Dette er Sonic PI brukergrensesnittet. Det har tre hovedvinduer. Det største er for å skrive din kode, vi kaller det programmeringsvinduet. Det er også et logg panel som viser informasjon om programmet ditt mens det kjører. Når du klikker på hjelp-knappen på toppen av vinduet dukker det tredje vinduet opp og viser dokumentasjonen. Dette inneholder informasjon om språket for å skrive kode i Sonic PI og informasjon om synth lyder, samples og mye mer. Det er også mange ferdige eksempler som du kan prøve!

<img src="{{ "/assets/img/interface.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi brukergrensesnitt</i></small></p>

## Spill en tone

La oss starte med å programmere Sonic PI til å spile en tone. Velg `Buffer 0` og skriv:

{% highlight ruby %}
play 60
{% endhighlight %}

Trykk **Run**  i det øvre venstre hjørnet. Kn du høre et pip?

Prøv med forskjellige verdier. Skriv for eksempel `play 50` eller `play 70`. Hvordan endrer det lyden?

Nå kan du prøve å skrive `pley 60` og klikke på run. Hva skjer?

> Dette er et eksempel på en bug i koden din. I senere oppgaver, hvis det kommer noe i feilvinduet så kan du se at du har en feil som du må fikse. Det kan være at du for eksempel har skrevet et ord feil, sånn som her hvor det skulle stått `play`.

Nummerene du bruker heter _MIDI toner_. MIDI er en nyttig måte å komponere på og er et nyttig verktøy for kjapt å teste ut toner på ved å senke verdien (gjøre tonen mørkere) eller å øke verdien (gjøre tonen lysere). Sonic PI kan spille både MIDI tone nummere (verdier mellom `0` og `127`) og tradisjonell musikknotasjon (slik som `:C4`, `:Eb3` eller `:G5`).