---
chapter: Gör en låt
title: Trummor
lang: se
layout: exercise
---

Vi börjar med att ta ett titt på hur man kan programmera ett enkelt trumbeat med bastrumma, virvel och hi-hat. Dessutom bekantar vi oss med två nya egenskaper, `live_loop` och `sample`.

Vi börjar skriva programmet i en tom flik (*Buffer*) och skapar en `live_loop` med namnet `:trummor`. Loopen kan heta vad som helst, namnet är till för att klargöra vad loopen gör. `live_loop` är en kontinuerlig loop (dvs. den spelas tills man klickar på **STOP**- knappen) och den körs samtidigt med andra live_loops.

{% highlight ruby %}
live_loop :trummor do
  sleep 1
end
{% endhighlight %}

Obs! En `live_loop` kan heta nästan vad som helst, men två live_loops kan inte ha samma namn. Varje `live_loop` måste ha åtminstone ett `sleep`-kommando.

I ditt program har du nu en tom live_loop som heter `:trummor`. Till näst programmerar vi ett enkelt komp, där bastrumman spelas på första och tredje slaget och virveln på andra och fjärde. I stället för att spela noter använder vi i stället kommandot `sample :namn`, som man kan spela samples med (inspelade ljud). Här är ett exempel på ett trumbeat: 

{% highlight ruby %}
use_bpm 100

live_loop :trummor do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end
{% endhighlight %}

Nu borde programmet spela ett jämnt grundkomp. Tempot kan du prova byta genom att byta numret efter `use_bpm`. När du skriver `sample` och trycker på mellanslag ger Sonic Pi automatiskt en lista av olika möjligheter som du kan använda med kommandot.  

Bilden nedan klargör ännu hur en `live_loop` fungerar. 

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

## Tillägg hi-hat

Nu tillägger vi hi-hats till trumkompet. Skapa en ny `live_loop` som heter `:hihat` och programmera den att spela sextondelsnoter med en sample som låter som en hi-hat.

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

Ett så monotoniskt hi-hatkomp passar inte så hemskt bra bland grundkompet. Vi gör det lite intressantare till exempel genom följande ändring:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Hi-hatkompet blev nu polyrytmisk, dvs en omgång är 1.25 slag långt istället för 1, av misstag! Meningen var att skapa ett komp som är ett slag långt, men vi låter det nya kompet vara,för det låter jättebra och det är det viktigaste. Med Sonic Pi kan ett misstag ibland låta bättre eller intressantare än det som du planerade att göra. 

Nu borde ditt stycke se ut ungefär såhär:

{% highlight ruby %}
use_bpm 100

live_loop :trummor do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Hur beter sig en `live_loop` i vanlig musiksoftware? Den här videon förklarar hurdana sekvenser en `live_loop` skapar. 

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Till näst skapar vi ett basspår till vår låt.
