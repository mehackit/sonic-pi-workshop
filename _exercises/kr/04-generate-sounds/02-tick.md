---
chapter: 사운드 만들기
title: 틱 (Tick)
lang: kr
layout: exercise
---

`chord`를 기억하세요? 특정한 코드의 음들을 소리내는 기능을 하죠.

{% highlight ruby %}
play (chord :c, :major).choose 
# C Major 코드의 음을 무작위로 연주합니다. (:c, :e, :g)
{% endhighlight %}

`scale` 이라는 기능도 있습니다. 스케일 (Scale)은 한 코드에 있는 음 하나만이 아닌, 같은 음계안에 있는 모든 음들을 불러옵니다.

{% highlight ruby %}
play (scale :c, :major).choose 
# C Major 음계의 음을 무작위로 연주합니다. (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

`choose`를 사용해서 리스트에 있는 값을 무작위로 고를 수 있습니다. 조금 더 체계적으로 접근하고 싶은 사용자를 위해 Sonic Pi가 갖고 있는 기능이 바로 `tick`입니다:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

E3 Minor 펜타토닉 음계를 선택해서 각 음에 tick 기능을 넣어보겠습니다. 각 스케일 명령어 끝에 .tick을 추가해보세요. 이 tick은 live loop 명령어에 속하는거라, 각 live loop마다 각자의 tick 기능을 가질 수 있어요.

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## 링 (Rings)

ring을 사용해서 tick 기능을 사용할 수 있는데요. (다른 리스트들에 있는 것들에도 tick 기능을 사용할 수는 있지만 연주가 끝날때 멈추죠). Ring은 연주가 끝나고 나서도 다시 새롭게 시작되는 특별한 리스트라고 할 수 있습니다. 방금 보여준 예시에서는 마지막 음이 연주된 다음에 다시 스케일이 연주되잖아요. `scale` 과 `chord` 모두 `ring`으로  돌아갑니다. 리스트를 작성한 후에 `.ring`을 입력해서 링을 만들거나 ring 생성기를 이용할 수 있습니다:

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 2, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

조금 더 복잡한 예시를 보여드릴게요. 여러 리스트나 코드들을 하나의 ring에 넣고 tick 기능을 써 보겠습니다:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

이 위에 주 멜로디를 입혀볼게요:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

tick 기능을 맘껏 써보세요! 
