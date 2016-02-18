---
chapter: Äänen muokkaaminen
title: Syntetisaattorit ja samplet
lang: fi
layout: exercise
---

Tähän mennessä olet käyttänyt parametreja `attack`, `release` ja `cutoff` syntetisaattorien ja samplejen soittamisen yhteydessä. Kuten aiemmassa osiossa mainittiin, jokaisella syntetisaattorilla on lukuisia parametreja, joilla niiden ääntä voi muokata. Katsotaan seuraavaksi muutamia yhteisiä parametreja, jotka ovat käytettävissä kaikilla äänillä ja sampleilla. Käyttämällä niitä voit lisätä musiikin ilmaisuvoimaa merkittävästi! 

### `amp:`

Amplitudi on yhtä kuin äänenvoimakkuus. Kun parametrille antaa arvon 0 ääntä ei kuule ollenkaan, arvolla 1 ääni soi normaalivolyymillä. Voit lisätä äänenvoimakkuutta antamalla esimerksi arvon 1.5 tai 2, mutta sitä kannattaa yleensä välttää sillä se voi toisinaan heikentää äänenlaatua. Äänen voi soittaa normaalivolyymiä hiljempaa arvolla joka on alle 1 (esimerkiksi arvolla 0.5 ääni soi puolella volyymillä). 

{% highlight ruby %}
play :c2, amp: 0.5
sleep 1
sample :bd_ada, amp: 0.8
{% endhighlight %}

### `pan:`

Panorointi musiikissa tarkoittaa äänen sijaintia vasemmassa ja oikeassa kanavassa. Arvolla -1 ääni kuuluu ainoastaan vasemmasta kanavasta, 0:lla keskeltä (molemmista kanavista yhtä lujaa) ja 1:llä ainoastaan oikeasta kanavasta. Voit käyttää mitä vain arvoja väliltä -1 ja 1. Esimerkiksi aiemmin tehtyyn hihat-luuppiin voisi antaa hieman lisää liikkeen ja energian tuntua panoroimalla hihat-samplea esimerksi komennolla rrand(-0.7, 0.7)

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker
{% endhighlight %}

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
  sleep 0.25
  sample :drum_cymbal_pedal, pan: rrand(-0.7, 0.7)
  sleep 1
end
{% endhighlight %}

### `cutoff:`

Cutoff poistaa syntetisaattorin äänestä tai samplesta korkeat taajuudet leikkausarvon jälkeen. Parametrin kanssa voi käyttää arvoja väliltä 0 - 130.

{% highlight ruby %}
play :c2, cutoff: 80
sample :drum_cymbal_open, cutoff: 60
{% endhighlight %}

### `attack:` ja `release:`

Attack tarkoittaa äänen voimistumiseen kuluvaa aikaa ja release puolestaan äänen vaimenemisaikaa. Molemmille parametreille aika annetaan iskujen määränä. 

{% highlight ruby %}
play :c2, attack: 1, release: 1 # kaksi iskua pitkä nuotti
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

### `use_synth_defaults` ja `use_sample_defaults`

Jos et halua antaa jokaiselle `play`- tai `sample`-komennolle parametreja erikseen, voit määrittää komennoilla `use_synth_defaults` ja `use_sample_defaults` oletusparametrit kaikille niitä seuraaville `play`- ja `sample`-komennoille. Huom. näillä komennoilla asetetut olennusparametrit eivät siirry `live_loop`:sta toiseen vaan ne pitää määrittää jokaisessa luupissa erikseen. 

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### Bonus: `beat_stretch:` ja `rate:`

Tässä on vielä kaksi todella siistiä parametriä `sample`-komennolle, joita ei voi jättää mainitsematta! Kokeile aluksi seuraavaa koodinpätkää: 

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

Huomasitko että sampleluuppi soi katkonaisesti? Se johtuu siitä että kyseinen sample `:loop_amen` on tarkalleen 1.753310657596372 iskua pitkä, mikä ei ole ollenkaan käytännöllistä jos haluat pitää kappaleesi oikeassa rytmissä. Onneksi Sonic Pi:ssä on parametri `beat_stretch: 2`, jolla voi venyttää samplen soittamisen tasan 2 iskuun:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Nyt voit kokeilla `rate`-parametria, jolla voi ohjata sitä kuinka nopeasti sample soi. Arvolla 1 sample soi normaalinopeudella, 0.5:llä puolinopeudella ja 2:lla tuplanopeudella jne. Sample myös kuulostaa korkeammalta tai matalammalta riippuen sen nopeudesta. Voit myös käyttää negatiivisia arvoja, jolloin sample soi takaperin! Kopioi allaoleva luuppi tyhjään **Buffer**-välilehteen, suorita ohjelma ja kokeile muuttaa `rate`:n ja `sleep`:n arvoja. 

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}
