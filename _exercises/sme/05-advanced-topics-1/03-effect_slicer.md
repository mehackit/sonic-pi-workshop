---
chapter: Ovdánan fáttát 1
title: Efeakta Slicer (čuohppi)
lang: sme
layout: exercise
---

Sampleod (čájánasaid) smoarrun osiide lihkostuvvá ovddit oasis ovdanbuktojuvvon vuogi lassin  jietnaefeavttain namain `:slicer`, mainna sáhtát lasihit iežat musihkkii ritmmalašvuođa. Geavadis doaibma duddjo jietnagivrodaga áiggi ektui. Dát efeakta gohčoduvvo dávjá jietnagivrodaga duddjojeaddjin (amplitude modulator). Čuovvovažžan geahččaluvvo doaibma nu ahte dasa duddjojuvvo ođđa `live_loop` guoros gaskabláđđái (buffer, sámás duohčas) ja geavahuvvo gohččun `sample :loop_breakbeat`
luhpa vuođđun. Breakbeat-gohččun duddjo ođđa trumbooasi.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Musihkkalahkki dehege luhppa galggašii dál čuodjat seamma ládje go vulobeal videos. Rukses ivnniin merkejuvvo jietnagivrodat ja dán ovdamearkkas dat galggašiige gullot dievas jietnagivrodagain.  

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Čuovvovažžan lasihuvvo `live_loop` musihkkalahkkái čuohppanefeakta nu ahte geavahuvvo oahpes `with_fx` -gohččun. Juos it muitte movt efeavttat geavahuvvojit Sonic Pi:s, sáhtát máhccat geardduhit dieđuidat rávvagiid oasis <a href="{{ "/exercises/en/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">”Efeavttat”</a>.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

Sáhtát guldalit, movt koda gullo, go deattát play-boalu. 

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

Slicer-efeakta čuodjá ilá roakkasin ja dan galgá stellet. Slicer-efeavtta deháleamos doaimmat leat `phase` (muddu), `wave` (bárru) ja `mix` (seagut). Sáhtát geavahit daid duddjot jietnagivrodaga. `phase` -doaibma stivre, man johtilit dahje njozet jietnaduddjon dáhpáhuvvá. Navdinárvu `phase` -doibmii lea 0.25, mii dárkkuha ahte efeakta geardduhuvvo juohke 1/16 nuohtain. Dán dihte ovddit ovdamearka čuojaige nu hektalažžan!  

Slicer-efeakta sáhttá duddjot jietnagivrodaga nu ahte geavaha njealji sierralágán bárrohámi (wave): `0` (saw - sahá), `1` (pulse - lakkas), `2` (triangle – golmmačiegat) ja `3` (sinewave - alitbárru). Navdinásahussan slicer-efeavttas lea `wave` biddjon árvui `1`, dehege efeakta geavaha lakkashámi jietnagivrodaga duddjomii. Lakkas dovdojuvvo maid namain njealječiegat. Vulobeal govat čájehit, makkárat sierra bárrohámit leat olggosoaidnit ja movt dat lasihit dahje luitet jietnagivrodaga (mii lea merkejuvvon rukses ivnniin) áiggi ektui.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Geahččalednot molsut bárrohámi sahái (`wave: 0`), goas jienas šaddá livttis ja unnit botkkodeaddji.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

Vulobeale govva čájeha, movt koda rievdada jietnagivrodaga áiggi ektui. 

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

LČuovvovažžan duppalastojuvvo muddu-doaimma guhkkodat (`phase: 0.5`) ja rievdaduvvo bárrohápmin lakkas (`wave: 1`). Vulobeal govva čájeha, manin nuppástus čuodjá.

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Čuovvovažžan geahččaluvvo mii dáhpáhuvvá, go dollojuvvo muddu-doaibma seamman, muhto válljejuvvo bárrohápmin golmmačiegat (`phase: 0.5, wave: 2`). Vulobeal govva čájeha, manin nuppástus čuodjá.

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

Dát lea oalle álkes vuohki lasihit ritmma ja molsašuddivuođa trumboluhpaide. Sáhtát geavahit dáid slicer-doaimmaid maid Sonic Pi:a syntetisáhtoriin. Čuovvovaš ovdamearkkas geavahuvvo slicer-efeakta guhkit muttus (phase).

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 1.75, wave: 0, mix: 1.0 do
    sample :loop_garzul, beat_stretch: 16, amp: 1
    sleep 16
  end
end

live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :kick do
  sample :bd_haus
  sleep 4
end
{% endhighlight %}

Go deattát play-boalu sáhtát gullat, makkárin ođđasit ritmejuvvon luhppa čuodjá.

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
