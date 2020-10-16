---
chapter: Hangok generálása
title: Akkordfelbontások
lang: hu
layout: exercise
---


Az előző példa csak C-mollban játszott. Íme egy példa, amely az összes ciklus által használt akkordkört használja. Az összes ciklus ugyanazon akkord körül fog játszani, és egy ciklus mindenki számára megváltoztatja az akkordot. Meglehetősen bonyolult, de ha kíváncsi vagy, inspirálódj. Használhatod az  <a href="{{ "/exercises/hu/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">akkordfelbontás táblázat</a> -ot szép akkordok kiválasztásához, ha szeretnéd.

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # veszi a kör első akkordját és menti egy változóba
# ezt az összes live_loop-ban fogják használni. Ezt a következőt jelöli :bass loop

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
    play c[0] # lejátssza az akkord első hangját
    sleep 1
  end
  play c[2] # lejátssza az akkord harmadik hangját
  sleep 0.5
  play c[1] # # lejátssza az akkord második hangját
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
