---
chapter: Generatiivisuus
title: Muuttujat
lang: fi
layout: exercise
---

Kokeile alkuun alla olevaa esimerkkiä. Mitä siinä oikein tapahtuu?

{% highlight ruby %}
live_loop :melodia do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Siinä on muuttuja `r`, joka saa tietyn arvon listasta `[0.25, 0.25, 0.5, 1]` jokaisella kerralla kun luuppi ajetaan. Muuttujaa `r` käytetään `play`-komennon release-parametrin ja koko luupin viimeisen komennon `sleep` arvoina. Muuttuja on ikään kuin laatikko, jonne voi laittaa jonkin arvon säilöön ja ottaa sen sieltä myöhemmin käyttöön. Tässä laatikossa voi kuitenkin olla vain yksi arvo kerrallaan, joten aina kun sinne laittaa uuden arvon edellinen häviää. Muuttujan käyttäminen on niinkin helppoa kuin koodirivin `muuttujan_nimi = muuttujan_arvo` kirjoittaminen. Nyt `muuttujan_arvo` on tallennettu muuttujaan `muuttujan_nimi`. Myöhemmin voit koodissa ottaa `muuttujan_arvo`:n käyttöön vain kirjoittamalla `muuttujan_nimi`. 

Lisätään seuravaaksi kaksi uutta `live_loop`:ia edelliseen esimerkkiin. Ensimmäinen luuppi `:syna` on yksinkertainen eikä sisällä mitään uutta, mutta toinen luuppi `:basso` on jo vähän monimutkaisempi:

{% highlight ruby %}
live_loop :melodia do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :syna do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :basso do
  use_synth :fm
  n = chord(:c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play chord(:c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = chord(:c2, :minor).tick` ottaa sävelen C-mollisoinnusta ja tallentaa sen muuttujaan `n`. Samassa yhteydessä `.tick` siirtyy soinnun seuraavaan säveleen kun sitä on kutsuttu. Seuraavaksi `play n` soittaa muuttujaan `n` tallennetun sävelen. Sen jälkeen `.tick`:iä kutsutaan uudestaan saadaksemme seuraavan sävelen C-mollisoinnusta. Kun luuppi alkaa uudestaan, `tick` jatkaa siitä sävelestä mihin se viimeksi jäi.
