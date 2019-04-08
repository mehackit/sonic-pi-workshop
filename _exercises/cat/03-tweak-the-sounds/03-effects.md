---
chapter: Modifica els sons
title: Efectes
lang: cat
layout: exercise
---

La llarga espera ha acabat, ací està: `with_fx`!

És una eina poderosa per a afegir diferents efectes a la composició. Comencem amb `:reverb`. Quasi tots els sons sonen millor amb reverberació. Comenceu envoltant un bloc del teu codi amb `with_fx :reverb do` i `end`: 

{% highlight ruby %}
live_loop :fx do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Sona millor, veritat? Com els sintetitzadors i els samples, els efectes tenen també opcions. `mix:` és una opció que estableix quina quantitat de l’efecte i del so original s'escolta. `mix: 0` només toca el so original, `mix: 1` toca solament el FX. Reverb té també una opció `:room`. Proveu diferents grandàries de room (‘habitació’) amb valors entre 0-1. Si obriu la pestanya **Fx** en el menú d'ajuda, podeu trobar quines opcions estan disponibles per a cada efecte.

{% highlight ruby %}
live_loop :fx do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Hi ha molts efectes per triar. I no teniu perquè conformar-vos amb una: pots niar-los! (En algun moment l’ordinador es pot quedar sense recursos però ja us preocupareu després si açò pasa).

{% highlight ruby %}
live_loop :effects do
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

Ara torneu-vos bojos afegint FX en tots els llocs per a crear nous sons increïbles!	