---
chapter: Inledning
title: Upprepa en melodi
lang: se
layout: exercise
---

Nu när du har en fin melodi vill du kanske upprepa den eller delar av den flera gånger. Du kan klippa och klistra in (copy & paste) delarna du vill upprepa, men det är tråkigt, oeffektivt och dåligt för läsbarheten av din kod. Som tur är kan du använda repetition! Dataordet för det här är iteration, som bara betyder att man gör samma sak mer än en gång. 

Skriv `2.times do` i början av din melodi och `end` i slutet. 

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

Istället för att bara använda `2.times do` kan du välja hur många gånger du vill upprepa melodin, till exempel `4.times do` eller `99.times do`. 

Du kan också använda flera upprepningar inom varandra om du vill. 

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

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Kuuntele edellinen esimerkki" %}