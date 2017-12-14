---
chapter: Inledning
title: Inledning
lang: se
layout: exercise
---

Sonic Pi är en utvecklingsmiljö för programmering som baserar sig på öppen källkod och kombinerar textbaserad programmering med producering av elektronisk musik. Med hjälp av Sonic Pi är det lätt att bekanta sig med de grundläggande idéerna bakom programmering och den passar utmärkt som ett verktyg för grundstudier i programmering. Med Sonic Pi kan du skriva kod, komponera och framföra allt från klassisk musik till modern EDM och Dubstep. 

Den här guiden tar oss igenom Sonic Pi:s grunder och mera avancerade funktioner. När vi är klara kan du skapa dina egna stycken och det kan låta till exempel så här:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Eller till och med så här:

{% include player.html filepath="/assets/audio/amen.mp3" %}

Programmering med Sonic Pi handlar om att utforska. Det finns inga fel, endast upptäckter. Och det allra viktigaste, det är att ha det roligt!

## Att öppna Sonic Pi

Om du inte har installerat Sonic Pi än, gå till <a href="http://sonic-pi.net/">sonic-pi.net</a> och ladda ner och installera den rätta versionen för din dator (Windows, OS X eller Linux).

Nu kan du starta Sonic Pi och ta ett titt på hur den ser ut!

Här är användargränssnittet för Sonic Pi som består av tre huvudfönster. Det största är för att skriva din kod i, vi kallar det för programmeringsfönstret. Till höger om programmeringsfönstret finns en loggpanel, som visar information om ditt program när det körs. När du klickar på hjälp-knappen i längst upp till höger får du fram den tredje fönstret som visar dokumentationen längst ner på skärmen. Där hittar du användbara programmeringsexempel och information om olika ljud, samples och mycket mer!
 
<img src="{{ "/assets/img/interface_se.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## Spela en ton

Vi börjar programmering med Sonic Pi med att spela en ton. Välj `Buffer 0` nederst i programmeringsfönstret och skriv: 

{% highlight ruby %}
play 60
{% endhighlight %}

Klicka **Run** i övre vänstra hörnet. Hör du ett pip? 

Prova med olika värden. Skriv till exempel `play 50` eller `play 70`. Hur ändras ljudet? 

Nu kan du prova skriva `pley 60` och klicka **Run** igen. Vad händer?

> Det här är ett exempel på en bugg i din kod. Om du i fortsättningen ser text i loggpanelen, vet du att du har ett fel som du måste fixa. Oftast beror buggar på små misstag, så som skrivfel. I det här fallet har du stavat `play` fel

Numren du använder är så kallade MIDI-noter. I MIDI representerar numren från 0 till 127 pianotangenter i över tio oktaver. När du programmerar med Sonic Pi kan du använda både MIDI-notation och traditionell musiknotation, som vi bekantar oss med i nästa kapitel.