---
chapter: Generatiivisuus
title: Tick
lang: fi
layout: exercise
---

Muistathan komennon `chord`, joka palauttaa listana jonkin soinnun sävelet? 

{% highlight ruby %}
play chord(:c, :major).choose 
# soittaa satunnaisesti C-duurisoinnun säveliä (:c, :e or :g)
{% endhighlight %}

Sonic Pi:ssä on myös komento nimeltä `scale`, joka palauttaa kaikki määriteltyyn sävellajiin kuuluvat sävelet: 

{% highlight ruby %}
play scale(:c, :major).choose 
# soittaa satunnaisesti C-duuriskaalan säveliä (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

`choose`-komennolla saat poimittua jonkin satunnaisen elementin listasta. Jos haluaisitkin käydä listan elementit järjestyksessä läpi, voit käyttää siihen erittäin tehokasta komentoa nimeltä `tick`:

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Tämä esimerkki käy järjestyksessä läpi kaikki E-molliskaalaan kuuluvat sävelet kolmannesta oktaavista, ja se hoituu lisäämällä `.tick` sitä edeltävän `scale`- tai `chord`-komennon perään. `tick`-komento on paikallinen jokaiselle `live_loop`:lle, joka tarkoittaa sitä että jokaisessa `live_loop`:ssa voi olla käytössä oma `tick`:

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

## Ketjut (Ring)

Ketju (**ring**) eroaa listasta siinä että ketjussa `tick` palaa aina ensimmäiseen elementtiin viimeisen jälkeen. Listan läpikäyminen `tick`:llä puolestaan aina päättyy viimeisen elementin jälkeen. Edellisessä esimerkissähän `scale`:n läpikäyminen `tick`:llä jatkui viimeisen elementin jälkeen. `scale` ja `chord` antavat aina ketjun normaalin listan sijaan. Joskus saatat haluta luoda oman listan (esimerkiksi säveliä) ja tehdä siitä ketjun kutsumalla komentoa `.ring`:

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Katsotaan seuraavaksi hieman edistyneempää esimerkkiä. Tässä lista sointuja muutetaan ketjuksi ja sitä käydään läpi `.tick`:llä:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Koristellaan melodia vielä saman sävellajin melodialla! Huom. lisäkomento `.mirror` kääntää seuraavan esimerkin ketjun ympäri (ts. aloittaa ketjun korkeimmasta sävelestä matalimman sijaan): 

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

Kokeile seuraavaksi `tick`:iä erilaisten ketjujen ja listojen kanssa ja anna tietokoneen hoitaa melodiakulkujen soitto.