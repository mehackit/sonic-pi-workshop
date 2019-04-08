---
chapter: Jienaid buvttadeapmi
title: Variábelat (variables)
lang: sme
layout: exercise
---

Čále mielčuovvu ovdamearkakoda ja dutkka dan. Mii das rievtti mielde dáhpáhuvvá? 

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Kodas lea variábel `r`, mii oažžu dihto árvvu logahallamis [0.25, 0.25, 0.5, 1] juohke háve go luhppa čuojahuvvo. Variábel r geavahuvvo play-gohččuma release (luoitte) -doaimma ja sleep (oađe) -gohččuma guhkkodaga meroštallamis. Variábel lea dego gássa, masa sáhtát vurket áššiid ja mas sáhtát váldit áššiid. Dán gássas sáhttá goitge leat dušše okta árvu háválassii, nu ahte go dohko bidjá ođđa árvvu, de ovddit jávká. Variábela geavaheapmi lea nuge álki go kodaráidui čállin: `variable_namma = variable_árvu`. variábela_namma = variábela_árvu čállin. Dál variábela árvu lea vurkejuvvon du nammadan variábelii. Maŋŋel sáhtát iežat kodas váldit variábela árvvu atnui dušše nu ahte čálát variable_namma.

Čuovvovaččat lasit syntetisáhtora ja bássa ovdamerkii ja beasat geahččalit iešguđet variábeliid. Vuosttaš `live_loop :keys` (čoavdagat) lea ovttageardán, muhto nubbi `:bass` -luhppa lea veaháš eanet hástaleaddji:

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

Mielčuovvu ovdamearkkas gohččunráidu `n = (chord :c2, :minor).tick` váldá nuohta C-mollašuoŋas ja vurke dan variábelii, man namma lea `n.tick` –gohččun sirdása álot čuovvovaš árvui dan maŋŋel, go prográmma lea mannan čađa tick-gohččuma. `play n` –gohččun čuojaha vurkejuvvon nuohta. Čuovvovažžn `.tick` –gohččun čuojaha čuovvovaš nuohta C-mollašuoŋas. Go luhppa álgá ođđasit, de `.tick` –doaibma álgá das, masa dat maŋimus bázii. 
