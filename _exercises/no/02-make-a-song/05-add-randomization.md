---
chapter: Lag en sang
title: Legg til tilfeldigheter
lang: no
layout: exercise
---

Strålende! Nå har du en sang med en fin rytme og bass og med melodien over. Nå skal vi gjøre noe skikkelig tøft og demonstrere Sonic Pis virkelige potensial. La oss legge til noe generert musikk til sangen og programmere datamaskinen til å komponere musikk for oss!

## Kast en terning og transponer melodien

Å transponere betyr å endre tonearten. Vi kan legge til litt tilfeldig transponering til en melodi innimellom for å krydre sangen litt. Du kan kaste en terning for å bestemme når vi skal endre melodiens tonehøyde. Her er ett eksempel:

{% highlight ruby %}
live_loop :melodi do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## Å lage et tilfeldig acid bass spor

La oss gjøre noe spennende med bassløkken. `.choose` er en nyttig metode som velger et tilfeldig element fra en liste. Det ser sånn ut:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` er en liste av noter (i dette eksempelet er det notene i C-dur akkorden). `.choose` velger ut en av disse notene tilfeldig. Istedenfor noter kn du ha hva du vil i listen, for eksempel verdier for sleep:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Du trenger ikke engang å huske hvilke noter som er i hvilke akkorder. Sonic Pi kan fikse det for deg. Istedenfor å skrive `[:c, :e, :g]` kan du bare skrive `(chord :C, :major)`. Det lager en list av noter for deg automatisk. For eksempel:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

La oss bruke trolldommen vi nettopp lærte for å lage et boblende basspor. Lagre arbeidet ditt og kopier `:bass` løkken til et annet mellomlager (buffer) i tilfelle du vil bruke det siden. Slett det som er inni løkken så vi får plass til noe nyt. La oss bruke den klassiske `:tb303` synthen og spille tilfeldige noter fra C-dur akkorden:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Ough! Ikke akkurat sånn... Legg til `, release: 0.125` parameteren etter play kommandoen, som dette:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Det høres bedre ut, men vi må pusse litt mer på det. Så langt har vi brukt `attack:` og `release:` parametere for play kommandoen. Avhengig av synthen du bruker så er det mange andre parametere man kan bruke. For eksempel har tb303 synthen 45 forskjellige muligheter å skru på. La oss bruke en parameter for en play kommando som heter `cutoff` på bassen. Cutoff fjerner alle frekvenser over cutoff frekvenser, altså den lyse/høye biten av tonen.  Du kan bruke verdier mellom 0-130.

Men hvorfor bruke en fast cutoff verdi når vi kan ha en tilfeldig verdi? Med `rrand(min, max)` kan du velge tilfeldige tall i et bestemt intervall. Prøv det:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Strrrrrålende! Husk å utforske og prøve forskjellige ting. Som en oppsummering, her er et eksempel på hva du kan lage basert på det vi har lært så langt:

{% highlight ruby %}
use_bpm 120

live_loop :trommer do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end

live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melodi do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
