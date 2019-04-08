---
chapter: Jienaid buvttadeapmi
title: Šuokŋajohtu
lang: sme
layout: exercise
---


Ovddit ovdamearkkas geavahuvvui duššefal C-mollašuokŋa. Čuovvovaš ovdamearkkas geavahuvvojit buot luhpaid geavahan šuoŋat goallusin (ring). Buot luhpat čuojahit nuohtaid seamma šuoŋas ja okta luhppa rievdada visot luhpaid šuoŋa. Dát lea juo veaháš mohkkát ovdamearka, muhto dan gánnáha liikká mannat čađa inspirašuvnna geažil. Kopiere ovdamearkka guoros Buffer (duohčas)-gaskabláđđái ja geahččal rievdadit dan šuoŋaid chords-gollosis. Sáhtát geavahit <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">šuokŋajohtuskoviid ja govaid</a> veahkkin vai gávnnat heivvolaš šuokŋajođuid. 

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # váldde gollosa vuosttaš šuoŋa ja vurke dan variábelii 
# buot live_loopat geavahit dán. :bass -luhppa manna dan čađa tick gohččumiin

live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play c
  sleep 1
end

live_loop :bass do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] # čuojaha šuoŋa vuosttaš nuohta
    sleep 1
  end
  play c[2] # čuojaha šuoŋa goalmmát nuohta
  sleep 0.5
  play c[1] # # čuojaha šuoŋa nuppi nuohta 
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
