---
chapter: Juster lydene
title: Effekter
lang: no
layout: exercise
---

Vi har ventet med dette altfor lenge nå, endelig kommer det: `with_fx`! 

Det er et kraftig verktøy for å legge på forskjellige effekter på komposisjonen din. La oss starte med `:reverb`. Nesten alt høres fint ut med reverb. Begynn med å skrive `with_fx :reverb do` og `end` rundt den delen av koden du vil skal få effekten:

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Høres større ut, gjør det ikke? Akkurat som med synther og sampler har effekter også justeringsmuligheter. `mix:` bestemmer hvor mye orginallyden og hvor mye av effekten som blir hørt. `mix: 0` spiller bare den orginale lyden og `mix: 1` spiller bare effekten. Reverb har en `:room` justeringsmulighet også. Forsøk med forskjellige romstørrelser med verdier mellom 0-1. Hvis du trykker på 'Fx' vinduet på hjelpemenyen kan du finne ut hvilke justeringsmuligheter som finnes for forskjellige effekter. 

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

Det finnes så mange forskjellige effekter (FX) å velge blant. Og du trenger ikke engang å velge bare en, du kan nøste dem i hverandre! (Til slutt kan maskinen din gå tom for ressurser om du bruker for mange, men la oss bry oss om det hvis det skjer...)

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

Nå kan du bare slippe deg løs og legge på FX overalt for nye, fantastiske lyder!