---
chapter: Hangok generálása
title: Változók
lang: hu
layout: exercise
---

Nézd meg az alábbi példát. Mi történik?

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Van egy olyan  `r` változó, amely egy bizonyos értéket kap a ciklus lejátszásakor, és ezt az értéket használja a kezdés beállításának és az sleep hosszának. A változó egy kicsit olyan, mint egy doboz, ahol tárolhatsz dolgokat és kiveheted azokat. A változó használata egyszerű:  `variable_name = variable_value`. Most a változó_értéket a változó_neve tárolja. Az értéket egyszerűen a változónév beírásával kaphatod meg.

Adjunk a példához egy szintetizátort és egy basszust a változók kipróbálására. A  `:keys` ciklus egyszerű, semmi új nem történik, de a  `:bass` hurok egy kicsit trükkös:

{% highlight ruby %}
live_loop :melody do
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

`n = (chord :c2, :minor).tick` egy hangot választ a C-moll skálából és elmenti az  `n`nevű változóba. Ezután a `.tick` amindig továbblép a következő értékre a hívás után.  `play n` lejátssza a mentett hangot. Ezután ismét hívja a  `.tick` -et, hogy megkapjuk a következő hangot az akkordból. Amikor a ciklus újra elindul, a  `.tick` tovább folytatja onnan, ahol tartott.
