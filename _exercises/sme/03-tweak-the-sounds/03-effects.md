---
chapter: Jienaid duddjon
title: Efeavttat
lang: sme
layout: exercise
---

Čuovvovažžan don beasat iskat fiinna bargoneavvu
`with_fx`! Dainna sáhtát lasihit iešguđetlágán efeavttaid iežat nuhttii. Álggahit `:reverb` –efeavttain (skádjaefeakta-doaibma). Measta buot čuodjá fiinnisin, go geavahat dán efeavtta. Dat lasiha latnjasaji skája. Álggat iežat koda gohččunráidduin: `with_fx :reverb do` ja heaitte dan gohččumii `end`:
do=dahkat; end=heaitit, room=latnja


{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Iigo jietna čuojage stuoribun? Áibbas dego syntetisáhtor- ja čájánas- (sample) gohččumiin, efeavttain (effects) leat maid iešguđetlágán doaimmat (options). `mix:` lea doaibma, mii meroštallá gori, man olu originála ja beavttálmahtton jietna gullo. Gohččun `mix: 0` čuojaha dušše originála jiena, gohččun `mix: 1` čuojaha beavttálmahtton jiena (fx-jiena). `mix: 0.5` -gohččun goappánai jiena seamma goris. Skádjaefeavttain `:reverb` lea maid `room:` -doaibma. Dainna sáhttá meroštallat efeavtta ráhkadit málle skája sierra latnjasturrodagaid mielde. Sáhtát geahččalit iešguđetlágán árvvuid loguid 0-1 gaskkas. Veahkkepanelas Help gávnnat Fx-gaskabláđis lasi dieđu eará efeavttaid doaimmas, dan ásahusain ja kodain. 
Sáhtát geahččalit gohččuma mielčuovvu kodain:


{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Sonic Pi-prográmmas leat duođaid máŋggat efeavttat (effects), main don sáhtát válljet. Don it dárbbaš oba duhtat oktii, daningo sáhtát geavahit máŋggaid sierra efeavttaid seamma bihtás ja juobe badjálagaid. Efeavttaid meari ja geavahusa rádjin lea dušše du dihtora čađahannávccat. Sáhtát goallostit efeavttaid maŋŋálaga ovdamearkka dihte čuovvovaš vuogi mielde, dego mielčuovvu kodas:

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

Geahččal čuovvovažžan eará efeavttaid máŋggabeallásaččat ja duddjo daiguin ođđalágán musihka! 
