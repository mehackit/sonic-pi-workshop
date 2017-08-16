---
chapter: 노래 만들기
title: 리드 트랙
lang: kr
layout: exercise
---

이제 멜로디를 만들 시간입니다. 수많은 `play`와 `sleep`을 반복해서 입력하지 않아도 쉽게 사용할 수 있는 방법이 있습니다: `play_pattern_timed` 를 입력해보세요.

이렇게 쓰는 대신에:

{% highlight ruby %}
play :c2
sleep 0.5
play :d2
sleep 0.25
play :e2
sleep 0.75
play :d2
sleep 0.5
{% endhighlight %}

이렇게 입력할 수 있죠:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

첫 번째 리스트인 `[:c2, :d2, :e2, :d2]` 는 음들이고 두번째 리스트인 `[0.5, 0.25, 0.75, 0.5]` 는 음 사이 사이에 들어가는 쉼표들입니다.

## 멜로디

`:melody`라는 새로운 `live_loop`을 만들어 작곡하려는 곡의 주요 테마를 만들어 봅시다. 더 쉽게 멜로디를 써보기 위해 아까 말했던 `play_pattern_timed` 기능을 이용해 보세요. 혹시 필요하다면 <a href="{{ "/exercises/kr/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">피아노</a>를 활용해보세요. 여기에 예시가 있습니다.:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

곡 전체는 이렇게 될 수 있겠죠:

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
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end

live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

시작이 좋은데요! 다른 멜로디들, synth들 그리고 `attack` 과 `release` 값들을 바꿔보면서 더 많은 음악을 만들어보세요.
 
