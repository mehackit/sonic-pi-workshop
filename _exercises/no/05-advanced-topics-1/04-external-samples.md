---
chapter: Avanserte tema 1
title: Egne sampler
lang: no
layout: exercise
---

Sonic Pi kommer med rundt 164 sampler som du kan bruke fritt og leke med, men det støtter også fullt ut å bruke egne sampler. For eksempel, kanskje har du lyst til å ta opp noe (som din egen stemme eller gitar) og bruke det i Sonic Pi i sangen din.

Først trenger du noen lydsampler i WAV formatet som du legger i en mappe på maskinen din. I eksempelet her så bruker vi en gratis samling med sampler fra *Mehackit*. Den heter *Solenoid Samples 1* og du kan laste det ned <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">her</a>. Den inneholder 14 "one-shot" og gjentagende sampler som ble tatt opp fra en kinetisk lydinstallasjon laget i en workshop tidlig i 2016.

Når du har lastet ned samlingen og pakket ut filene i en mapp må du finne hele navnet til mappen. For eksempel, hvis du pakket det ut til en mappe som heter 'Sampler' på skrivebordet ditt er mappenavnet sannsynligvis noe som::

* Windows: "C:/Users/sam/Desktop/Sampler" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Sampler" 

Bare husk å bytt ut brukernavnet ditt med 'sam'. Pakken inneholder følgende filer: `hit_1.wav` til `hit_7.wav` (perkusjon) og `loop_1.wav` til `loop_7.wav` (Gjentagende rytmer som det er anbefalt å spille med sampler justeringen `beat_stretch`).

Nå kan du spille dem direkte med `sample` kommandoen ved å bruke filnavnet:

{% highlight ruby %}
sample "/Users/sam/Desktop/Sampler/loop_1.wav", amp: 1.5
{% endhighlight %}

Hvis du brukt riktig filnavn kommer du til å høre lyden `loop_1.wav`. Bare husk å bruk ditt eget filnavn istedenfor det som er vist i disse eksemplene! Dette er en ganske enkel måte å få til å spille sampler på. Men, du har sikkert lyst til å bare skrive mappenavnet en gang i koden og referere til samplene bare med filnavnet. Du kan lage en variabel for filnavnet og bruke det sammen med `sample` kommandoen. Etter `sample` kan du skrive inn variabelnavnet som inneholder mappenavnet og så navnet på samplet. I eksempelet under lager vi en variabel for mappenavnet som vi kaller solenoids. Når du kjører eksepelet skal samplet `loop_4.wav` starte å spille en løkke:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Sampler/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Nå er du i stand til å bruke eksterne sampler og sampler fra Sonic Pi's eget bibliotek i sangene dine. Prøv å spille eksempelet under som bruker fire forskjellige `live_loop`er for å spille eksterne og Sonic Pi's egne sampler. Legg merke til at i løkken  `:solenoid2` bruker vi en variabel `samplenavn` for å velge et tilfeldig sample fra `hit_1.wav` til `hit_7.wav`.

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
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
  samplenavn = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplenavn, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
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

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}