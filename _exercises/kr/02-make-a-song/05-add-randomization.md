---
chapter: 노래 만들기
title: 랜덤(무작위) 추가하기
lang: kr
layout: exercise
---

좋습니다! 이제 일정한 비트와 베이스가 깔린 위에 멜로디가 들어간 곡이 준비 됐습니다. 이제 Sonic Pi의 진정한 매력을 알 수 있는 기능을 배워볼거예요. 생성 요소들을 트랙에 추가해서 컴퓨터가 우릴 위해 작곡하도록 할거에요!

## 주사위를 던져 멜로디 뒤바꾸기

순서를 바꾼다는 건 음의 높낮이를 바꾼다는 말입니다. 무작위로 멜로디를 뒤바꿔 보고 트랙에 변화를 줘볼까 해요. 멜로디 중 바꾸고 싶은 부분에서 주사위를 던지면 됩니다. 여기에 예시가 있습니다:

{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## 무작위로 베이스 트랙 만들어 보기

베이스 루프에 재밌는 걸 더해봅시다. `.choose`는 리스트에 있는 소리 중에 하나를 랜덤으로 고르는 기능을 해요. 이렇게요:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` 라는 음의 리스트에서 (이 음들은 C Major 코드입니다) `.choose` 가 무작위로 한 음을 고릅니다. sleep 값도 똑같이 적용해 볼 수 있어요:


{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

어떤 음들이 어느 코드에 있었는지 기억하지 않아도 돼요. Sonic Pi가 이 부분을 해결해 줄겁니다. `[:c, :e, :g]` 라고 쓰는 대신, ?`(chord :C, :major)`라고 써도 되거든요. 그러면 이 코드에 들어가는 음들이 자동으로 준비가 되는거죠. 이렇게요:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

이 마법으로 베이스 트랙을 입체감있게 살려보도록 합시다. 지금까지의 작업을 저장하고 다시 돌아가고 싶을 때를 대비해서 현재의 `:bass` 루프를 다른 buffer에 복사하세요. 그런 다음에는 새로운 베이스 트랙이 들어갈 자리를 마련하도록 루프 내용을 지워줍니다. 클래식 synth인 `:tb303` 를 사용하고 C Major 코드의 16분 음표 음들을 랜덤으로 연주해 봅시다.

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

엇! 뭔가 좀 이상하죠. play 명령어 끝에 , `release: 0.125` 를 추가로 입력해보세요. 이렇게요:


{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

아, 이제 좀 낫군요. 아직 이 곡을 조금 더 다듬을 수 있는 방법이 남았습니다. 지금까지는 play 명령어를 위해서 `attack:` 과 `release:` 라는 변수들을 사용했었죠. 어떤 synth를 사용하느냐에 따라 사용할 수 있는 변수들이 더욱 많답니다. 방금 사용한 tb303 synth는 사용할 수 있는 변수가 45개나 되죠. 베이스 트랙에 cutoff라는 변수를 한번 사용해 봅시다. Cutoff는 `cutoff` 주파수 값 중 최대치를 넘기는 주파수를 지워버리는 역할을 해요. (cutoff frequency는 차단주파수라고도 불려요) 0 부터 130까지의 값을 입력할 수 있어요.

Cutoff 값 또한 랜덤으로 값을 고를 수 있으니 고정된 값만 사용하지 않아도 돼요! `rrand(min, max)`라는 명령어로 주어진 범위 안에서 무작위 숫자들을 생성할 수 있어요. 이 예시처럼 한번 해보세요:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

좋~~아요! 그래도 다른 것들을 더 시도해보고 더 파헤쳐보는 걸 잊지 마세요. 지금까지 배운 내용을 토대로 만들어 볼 수 있는 곡의 예시를 하나 보여드릴게요:

{% highlight ruby %}
use_bpm 120

live_loop :drums do
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


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
