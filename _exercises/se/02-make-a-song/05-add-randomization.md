---
chapter: Gör en låt
title: Lägg till slumpmässighet
lang: se
layout: exercise
---

Fantastiskt! Nu har du en låt med ett bra trumkomp, hihats, bas och melodi. Nu gör vi något som öppnar Sonic Pis egentliga potential. Vi tillägger slumpmässighet i koden! Det betyder att vi låter datorn “kasta tärning” för oss och bestämma över t.ex vilka toner som spelas. 

## Kasta tärning och transponera melodin!

Transponering betyder att man antingen höger eller sänker tonhöjden. Vi kan t.ex. låta datorn ibland transponera en  `live_loop` två tonsteg högre. Det lyckas med hjälp av kommandot `if one_in(6)` som vi provar i nästa exempel: 

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

Märkte du hur melodin ibland var högre? I exemplet kallar vi på `if one_in(6)` varje gång live_loopen startas om. Kommandot berättat åt Sonic Pi att kasta en virtualisk sexsidig tärning och om resultatet är sex, transponeras melodin (play_pattern_timed) två tonsteg högre. Om resultatet är något annat än sex transponeras melodin inte. 

## Skapa en slumpmässig “Acid house”- baslinje

Nu provar vi att göra något intressant åt baslinjen. Med `.choose` kan du välja ett slumpmässigt element från en lista. Som i det här exemplet:  

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

I Sonic Pi behöver du inte minnas vilka toner hörs till vilket ackord. Istället för att skriva `[:c, :e, :g]` kan du skriva chord(:C, :major). T.ex: 

{% highlight ruby %}
loop do
  play chord(:c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Vi använder den här metoden t.ex. i  ett “bubblande” basspår som är bekant från Acid House-musik. Spara ditt arbete (Tryck på Save) och kopiera din `:bas`-loop till en ny buffer. Vi tömmer live_loopen så att vi kan skriva om den. Använd synthen `:tb303` för den nya basen och spela c-dursackordet som sextondelstoner:

{% highlight ruby %}
live_loop :bas do
  use_synth :tb303
  play chord(:C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Inte riktigt bra än! Tonernas längd är automatiskt 1 (`release: 1`). Tillsätt kommandot `, release: 0.125` efter `play`, så borde resultatet låta mycket bättre. 

{% highlight ruby %}
live_loop :bas do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Tills nu har du använt parametrarna `attack:` och `release:` med play - metoden, men det finns många fler och vilka du kan använda kan bero på vilken synth du använder. Till exempel `:tb303`- ljudet har 45 olika parametrar som man kan bearbeta ljudet med. Prova att ändra basljudet med parametern `cutoff`, som klipper bort alla frekvenser över cutoff-värdet. Med cutoff kan du använda värden mellan 0 och 130. 

Med cutoff lönar det sig inte att använda något bestämt värde. Vi kan göra låten mycket intressantare genom att ändra på värdet slumpmässigt.  Vi kan kan använda en ny metod `rrand(min, max)`, som lottar ut slumpmässiga värden mellan värdena min och max. Vi provar det här i baslinjen:

{% highlight ruby %}
live_loop :bas do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Jättefint! Kom ihåg att utforska och prova olika värden med de olika kommandona från exemplet. Som repetition, här är programmet vi har skrivit med hjälp av exemplen: 

{% highlight ruby %}
use_bpm 120

live_loop :trummor do
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

live_loop :bas do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
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
