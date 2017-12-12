---
chapter: Justera ljudet
title: Effekter
lang: se
layout: exercise
---

Vi har väntat på det här, och äntligen får vi bekanta oss med `with_fx`! Med hjälp av `with_fx` kan vi prova otaliga ljudeffekter. Vi börjar med `:reverb`. Reverb (sk. ekoeffekt) tillägger ljuder ett eko och praktiskt taget allt låter bra med den. Vi börjar med att se hur vi får effekten att fungera med `with_fx :reverb do` och `end`: 

{% highlight ruby %}
live_loop :effekter do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Låter större, eller hur? Som syntherna och samples, har effekterna också olika justeringsmöjligheter. Till exempel `mix:` är en parameter som justerar hur mycket av det ursprunglig ljudet och effekten som hörs. `mix: 0` spelar endast det ursprungliga ljudet, `mix: 0` endast effekten och `mix: 0.5` spelar båda i samma förhållande. Reverb-effekten har också parametern `room:`, som justerar rumstorleken för ekot. Prova ge `room:` olika värden mellan 0 och 1. I hjälpmenyn (help) hittar du mera information om alla effekter. 

{% highlight ruby %}
live_loop :effekter do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Sonic Pi har så många effekter att välja mellan, och du behöver inte välja bara en! Du kan använda många samtidigt, så här: 

{% highlight ruby %}
live_loop :effekter do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

Prova Sonic Pi:s olika effekter och skapa helt nya ljud med hjälp av dem!
