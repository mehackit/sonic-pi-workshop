---
chapter: Inledning
title: Spela en melodi
lang: se
layout: exercise
---

Skriv följande kod i programmeringspanelen och tryck på **Run**-knappen:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

Det lät ju inte som en melodi alls, eller hur? Programmet spelade inte noterna efter varandra utan samtidigt. Resultatet lät som ett ackord (d.v.s två eller fler noter som spelas samtidigt). För att Sonic Pi ska spela noterna efter varandra, måste man märka ut noternas längd med kommandot `sleep`. Till exempel:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

Kommandot `sleep 1` berättar för programmet att vänta ett helt slag innan nästa kommando utförs. Till näst kan du prova att använda olika värden istället för värdet 1. Desto mindre värdet är, desto kortare tid väntar programmet före nästa kommando (och tvärtom). Om du känner till vanlig musiknotation, berättar nästa bild hur olika pauser och tonlängder fungerar i Sonic Pi:

<img src="{{ "/assets/img/notes_se.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_se.png" | prepend: site.baseurl }}">

Noterna efter `play`-kommandot kan man skriva antingen som så kallade MIDI - värden, (nummer mellan 0 och 127, t.ex. 67, 80, 22) eller som noter (:G4, :Ab5, :Bb). Det beror helt och hållet på dig vilken notation du vill använda.

Här är en översikt över noter och deras MIDI - värden.

<img src="{{ "/assets/img/midi_notes_se.png" | prepend: site.baseurl }}">

## Prova dig fram

Använd noter från C-durskalan (`72, 74, 76, 77, 79, 81, 83` eller `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) för att skapa en melodi. Använd `sleep`- kommandon mellan `play` - kommandon för att variera rytmen. I början kan du använda `use_bpm` för att göra tempot snabbare eller långsammare. BPM är en förkortning for *beats per minute*(slag per minut). Här är ett exempel:

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

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Kuuntele edellinen esimerkki" %}

Nu kan du prova att göra din egen melodi!