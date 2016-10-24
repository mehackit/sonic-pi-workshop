---
chapter: Introduksjon
title: Spill en melodi
lang: no
layout: exercise
---

Skrive det følgende inn i bufferet og trykk run:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

Det hørtes ikke så veldig ut som en melodi, gjorde det vel? Istedenfor å spille en sekvens, spilte Sonic Pi alle lydene samtidig (og det er faktisk sånn man skrive akkorder).

Hvis du vil at Sonic PI skal spille hver note etter hverandre (i sekvens, om du vil), må du si at du vil ha en pause innimellom. Forsøk å skrive `sleep 1` under hver tone, sånn som dette::

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` forteller Sonic PI å vente en takt. Du kan forsøke med større og mindre nummere. Jo mindre verdien etter sleep er, jo kortere er pausen. Hvis du kan noter, er det sånn forskjellige noter ser ut i Sonic Pi:

<img src="{{ "/assets/img/Notes_EN.png" | prepend: site.baseurl }}"> 
<img src="{{ "/assets/img/Rests_en.png" | prepend: site.baseurl }}">

Som nevnt før kan du skrive noter i MIDI, som er tall mellom og og 127 (`67`, `80`, `22`) eller som noter (`:G4`, `:Ab5`, `:Bb`), det er opp til deg. Her er en oversikt over noter og MIDI verdiene deres:

<img src="{{ "/assets/img/midi_notes.png" | prepend: site.baseurl }}">

## Prøv deg frem

Bruk noter fra C-dur skalaen (`72, 74, 76, 77, 79, 81, 83` eller `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) for å lage en melodi. Bruk `sleep` med forskjellige verdier for å variere rytmen. Du kan bruke `use_bpm` i starten av programmet ditt for å gjøre sangen raskere eller tregere. BPM står for  _Beats Per Minute_. Her er et eksempel:

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Lytt til det forrige eksempelet" %}

Nå kan du lage din egen melodi!