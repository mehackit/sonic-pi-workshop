---
chapter: Jatkoaiheet 1
title: Efekti Slicer
lang: fi
layout: exercise
---

Samplejen yksinkertainen pilkkominen ja rytmikäs soittaminen onnistuu kätevästi myös efektillä nimeltä `:slicer`. Käytännössä se vaihtelee (ts. moduloi) äänenvoimakkuutta ajan suhteen. Aloitaan slicer-efektin tutkiminen luomalla ensiksi uusi  `live_loop` tyhjään bufferiin ja käytetään pohjana rumpuluuppia nimeltä `:loop_breakbreat`:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Luupin pitäisi nyt kuulostaa samalta kuin alla olevassa videossa. Punaisella värillä merkitään äänenvoimakkuutta ja nyt sen pitäisin kuulua täydellä voimakkuudella.
{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Lisätään `live_loop`:iin seuraavaksi slicer-efekti käyttämällä `with_fx`-komentoa. Jos et muista miten efektejä käytetään Sonic Pi:ssä, voit palata lunttaamaan sen aiemmasta osiosta <a href="{{ "/exercises/fi/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Efektit</a>.

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

Slicer-efekti kuulostaakin ilman sen enempiä lisäsäätöjä hieman liian dramaattiselta! Käydään aluksi läpi Slicerin tärkeimmät parametrit: `phase` (vaihe), `wave` (aaltomuoto) ja `mix`, joilla voi säätää millä tavoin slicer moduloi äänenvoimakkuutta. Vaihe (`phase`) vaikuttaa kuinka nopeasti äänenvoimakkuutta muokkaava aalto toistuu ja sen oletusarvona on `0.25`, joka tarkoittaa sitä että slicer-efekti toistuu jokaisella 1/16 nuotilla. Tästä syystä aiempi esimerkki kuulostikin niin hektiseltä!

Slicer-efekti voi moduloida äänenvoimakkuutta käyttämällä neljää erilaista aaltomuotoa (wave): `0` (saw/saha), `1` (pulse/pulssi), `2` (triangle/kolmio) ja `3` (sine/siniaalto). Oletuksena slicer-efektillä on voimassa seuraavat arvot (ellei niitä toisin määritellä): `wave: 1, phase: 0.25, mix: 1`. Alla oleva kuva havainnollistaa miltä eri aaltomuodot näyttävät ja millä tavoin ne laskevat tai voimistavat äänenvoimakkuutta.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Kokeillaanpa vaihtaa aaltomuotoa saha-aaltoon (`wave: 0`), jolloin äänestä tulee sulavampi ja vähemmän katkonainen. 

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

Muokataanpa vaihetta pidemmäksi (`phase: 0.5`) ja muutetaan aaltomuodoksi pulssi (`wave: 1`):
{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Pidetään vaihe samana (`phase: 0.5`) ja vaihdetaan aaltomuodoksi kolmio (`wave: 2`):
{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

Tällä tavoin on helppo luoda rytmikkyyttä ja varianssia esimerkiksi normaaleihin rumpuluuppeihin ja mikään ei tietenkään estä käyttämästä sliceria Sonic Pi:n syntikoiden kanssa! Seuraavassa Industrial-henkisessä esimerkissä käytämme sliceria moduloimaan ja rytmittämään rumpuluuppia ja syntikkaa hieman pidemmillä vaiheilla:

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
