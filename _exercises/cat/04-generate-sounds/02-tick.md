---
chapter: Generar sons
title: Tick
lang: cat
layout: exercise
---

Recordeu `chord`? La funció `chord` us dóna les notes d'un acord concret:

{% highlight ruby %}
play chord(:c, :major).choose 
# reprodueix una nota aleatòria de l’acord de Do major (:c, :e or :g)
{% endhighlight %}

Hi ha també una funció anomenada `scale`. Scale us dóna totes les notes d'una escala, no només les notes de l’acord: 

{% highlight ruby %}
play scale(:c, :major).choose 
# reprodueix una nota aleatòria de l’escla de Do major  (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

Amb `choose` pots obtenir un element a l'atzar d'una llista. Si voleu anar a través dels valors de forma més estructurada, Sonic Pi té una funció molt poderosa anomenada `tick`:

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Ací, simplement estem prenent l'escala pentatònica de mi menor (E3) i fent tick a cada element. Açò es fa afegint `.tick` al final de l’ordre de scale. Aquest tick només té efecte local en el live loop, de manera que cada live loop pot tenir el seu propi tick independent:

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play scale(:e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## Anells (Ring)

Podeu fer tick sobre tot els elements d’un anell (bé, podeu fer tick també sobre una llista però s'acabarà quan arribe al final). Els anells són llistes especials, que comencen de nou quan arriben al final. Com en l'exemple anterior, l'escala comença de nou des del principi quan arriba a l'última nota. Tant `scale` com `chord` retornen en forma d’anell. A voltes voldreu crear una llista i convertir-la en un anell escrivint `.ring` o usant el creador d'anells `ring`:

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Ara vegem un exemple més complex. Ací teniu una llista d’acords que es converteixen en un anell a través de `tick`:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

I després complementeu-ho amb una ‘melodia’ principal. 

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play scale(:Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Comenceu a fer tick i embogiu!
