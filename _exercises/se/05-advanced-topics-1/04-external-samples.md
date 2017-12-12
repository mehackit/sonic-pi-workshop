---
chapter: Avancerade teman
title: Egna samples
lang: se
layout: exercise
---

Sonic Pi kommer med ca 73 ljudsamples som du kan använda fritt i dina stycken, men du kan också använda dina egna. Så du kan till exempel speaĺa in gitarr - eller pianoinspelningar och använda dem i din låt om du följer de här instruktionerna. 

Först måste du ha dina inspelningar i WAV-format i en mapp på din dator. Exemplen vi använder nu är från ett paket Mehackit har samlat ihop som heter Solenoid Samples 1. Du kan ladda ner paketet <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">här</a>. Paketet innehåller sammanlagt 14 samples som spelades in under en workshop Mehackit arrangerade våren 2016.

När du har laddat ner paketet och packat upp dem i en mapp måste du kolla upp mappens hela namn. Till exempel om du packade upp filerna i en mapp på ditt skrivbord  som heter ‘Samples’ är hela namnet antagligen något åt det här hållet: 

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux ja Mac: "/Users/sam/Desktop/Samples" 

Kom ihåg att byta ut ‘sam’ till ditt eget användarnamn, om du använder namnen ovan. Paketet innehåller följande ljudfiler: 

`hit_1.wav` ... `hit_7.wav` (percussions) och `loop_1.wav` ... `loop_7.wav` (trumkomp som rekommederas att spelas med beat_stretch).

Nu kan du spela ljuden i paketet direkt med kommandot sample. Kom ihåg att använda hela namnet på filen. 

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Om namnet på filen är rätt, borde du höra ljudfilen `loop_1.wav` spelas när du kör programmet. Så här kan du väldigt simpelt hänvisa till vilken fil som helst (i WAV-format) på din hårddisk och spela den. I nästa exempel vill vi skriva hela namnet bara en gång och sedan använda endast filnamnet för att spela samplen. Först sparas hela namnet i en variabel, som sedan ges som parameter till kommandot `sample`. Efter det kan man ge samplets namn som en annan parameter till `sample`.

Den här kodbiten hjälper dig att förstå hur t.ex sample “loop_4.wav” spelas med `sample`-kommandot. Vi börjar med att göra en variabel som heter solenoids (dit vi sparar hela namnet) och använder den och hänvisningen till “loop_4” som i det här exemplet: 

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Programmet borde nu spela `loop_4.wav` i en loop. 

Nu kan du fritt blanda dina egna samples med dem från Sonic Pi. Prova till exempel det här exemplet, där egna och förinstallerade samples spelas i fyra olika live_loops. Obs! I live_loopen `:solenoid2` används variabeln `samplename` för att spara en slumpmässig hänvisning till `hit_1.wav` ... `hit_7.wav`.

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
  samplename = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
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
