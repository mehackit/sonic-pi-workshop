---
chapter: Lag lyder
title: Variabler
lang: no
layout: exercise
---

Ta en titt på eksempelet under. Hva er det som skjer her?

{% highlight ruby %}
live_loop :melodi do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Det er en variabel `r` som får en gitt verdi hver gang man spiller løkken og den verdien brukes som release for play og som sleep lengde. En variabel er litt som en boks der du kan lagre ting og ta ting ut igjen. For å bruke en variabel trenger du bare å skrive `variable_navn = variable_verdi`. Nå har du lagret variable_verdi i variable_navn. Du kan få ut verdien igjen bare ved å skrive variable_navn.

La oss legge til en synth og bass til eksemepelet og prøve variablene. `:keys` løkken er enkel, ikke noe nytt som skjer der, men i `:bass` løkken er det en del triks:

{% highlight ruby %}
live_loop :melodi do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick` tar en note fra en C-moll akkord og lagrer den til en variabel vi kaller `n`. `.tick` går alltid videre til den neste verdien etter den er kjørt. `play n` spiller den lagrede noten. Så kalles `.tick` igjen for å få den neste noten i akkorden. Når løkken kalles på nytt fortsetter `.tick` der den slapp.
