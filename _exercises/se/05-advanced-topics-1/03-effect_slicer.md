---
chapter: Avancerade teman
title: Slicer
lang: se
layout: exercise
---

Utöver “sample slicing” som vi bekantade oss med tidigare kan du också använda effekten `:slicer` för att skapa liknande effekter till din låt. I praktiken modulerar (ändrar) den volymen i respekt till tiden. Vi börjar undersöka slicer-effekten genom att skapa en ny `live_loop` i en tom buffer. Vi använder ett trumkomp (`:loop_breakbreat`) som bas:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Det borde nu låta lika som i videon nedan. Vi använder den röda färgen för att indikera volymen och i det här exemplet borde volymen vara på max. 
{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Nu lägger vi till slicer-effekten med hjälp av `with_fx`. Om du inte minns hur man använder effekter kan du pigga upp minnet här: <a href="{{ "/exercises/fi/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Efektit</a>.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

Nu låter effekten lite väl dramatisk, eller hur? Vi måste justera den lite. De viktigaste parametrarna är `phase`, `wave` och `mix`. Phase påverkar hur ofta vågen som bearbetar volymen återkommer och standardvärdet är `0.25`, vilket betyder att slicer-effekten återkommer på varje 1/16 not. Därför lät exemplet så hektiskt!

Slicer-effekten kan modulera volymen genom att använda fyra olika slags vågor: (wave): `0` (saw/såg), `1` (pulse/puls), `2` (triangle/triangel) och `3` (sine/sinusvåg). Om du inte ändrar dem använder slicer värdena `wave: 1, phase: 0.25, mix: 1`. Bilden nedan visar hur de olika vågorna ser ut och hur de förstärker eller förminskar ljudstyrkan.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Vi provar att ändra vågen till en “sågvåg” (`wave: 0`), då ljudet blir mjukare och mindre abrupt. 

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

Vi ändrar perioden (`phase: 0.5`) och byter vågtypen till puls (`wave: 1`):
{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Vi håller perioden som förut och ändrar vågens form till triangulär (`wave: 2`): 
{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

Såhär är det lätt att skapa rytm och varians till t.ex. vanliga trumkomp och inget hindrar dig att använda slicern med synthar! Det sista slicer-exemplet använder en längre period (phase) med slicer. 

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 1.75, wave: 0, mix: 1.0 do
    sample :loop_garzul, beat_stretch: 16, amp: 1
    sleep 16
  end
end

live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :kick do
  sample :bd_haus
  sleep 4
end

{% endhighlight %}

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
