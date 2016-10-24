---
chapter: Introduksjon
title: Gjenta en melodi
lang: en
layout: exercise
---

Ok, så du har skrevet en fin melodi. Hva om du vil gjenta den, eller deler av den, et par ganger. Du kan jo klippe og lime melodien, men det blir litt kjedelig etter en stund. Heldigvis kan du bruke **repetisjon**! Det fancy dataordet for dette er iterasjon, som bare betyr å gjøre det samme mer enn en gang.

Skriv `2.times do` i begynnelsen av melodien din og `end` på slutten av melodien din (notene er i musikknotasjon, bare for eksempelets del, du kan gjerne bruke MIDI noter hvis du vil det):

{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

Istedenfor å bruke `2.times do` kan du velge hvor mange ganger du vil gjenta notene. For eksempel `4.times do` eller `99.times do`.

Du kan også bruke gjentagelser inni gjentagelser hvis du vil:

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Lytt til det forrige eksempelet" %}