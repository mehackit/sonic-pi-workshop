---
chapter: Äänen muokkaaminen
title: Efektit
lang: fi
layout: exercise
---

Seuraavaksi pääsemmekin värittämään ääniä oikein kunnolla `with_fx`-komennon avulla! Sen avulla voimme lisätä lukusia erilaisia ääniefektejä Sonic Pi -ohjelmiin. Kokeillaan sitä heti alkuun `:reverb`-efektin kanssa. Reverb (ts. kaikuefekti) lisää ääneen huonetilan kaiun ja melkein mikä vain ääni kuulostaa hyvältä sen kanssa. Katsotaan alkuun miten saamme efektin toimimaan `with_fx :reverb do` ja `end` -blokkien kanssa: 

{% highlight ruby %}
live_loop :efekti do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Eikö kuulostakin heti isommalta? Kuten syntikoilla ja sampleilla, efekteilläkin on myös omat parametrinsa. Esimerkiksi `mix:` on parametri, joka määrittää suhteen kuinka paljon alkuperäistä ja efektoitua ääntä kuullaan. `mix: 0` soittaa vain alkuperäisen äänen, `mix: 1` soittaa vain efektoidun äänen ja `mix: 0.5` soittaa kumpaakin ääntä samassa suhteessa. Reverb-efektissä on myös `room:`-parametri, jolla voi määrittää efektin mallintaman huonekaiun koon. Kokeile `room:`-parametrille eri arvoja 0:n ja 1:n väliltä. Apupaneelin (Help) **Fx**-välilehdeltä löydät lisätietoa kaikista efekteistä ja niiden parametreista. 

{% highlight ruby %}
live_loop :efekti do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Sonic Pi:ssä on niin monta efektiä joista voit valita, ja sinun ei tarvitse edes tyytyä yhteen, sillä efektejä voi ketjuttaa peräkkäin esimerkiksi seuraavalla tavalla: 

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

Kokeile seuraavaksi eri efektejä mitä Sonic Pi:llä on tarjota ja luo niiden avulla aivan uudenlaisia ääniä! 	