---
chapter: 더 많이 알아보기
title: 샘플 자르기
lang: kr
layout: exercise
---

조금 전으로 돌아가 샘플을 다시 한번 살펴 봅시다. 아래에 있는 비디오를 보면 반복(루핑:looping)되는 샘플이 어떤 형태로 재생이 되는지 이해할 수 있을거예요.

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

`:loop_amen` 샘플이 재생되는 모습입니다:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

이제 `live_loop`를 만들어 볼건데요, 계속해서 비트를 연주해주는 기능입니다. `beat_stretch` 옵션을 기억하시나요? 원하는 음의 길이와 비트에 맞게 샘플을 수정해주는 역할을 하는 옵션이죠. “소리 비틀어보기” 챕터에서 간략하게 소개 했었어요. 자, 이제 `loop_amen` 샘플을 4비트에 맞게 늘여서 반복 연주해 봅시다:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

이번에는 Amen loop 샘플의한 부분을 다르게 연주할 수 있는 방법에 대해 알아보겠습니다. `sample` 명령어 안에서 `start` 과 `finish` 라는 변수를 이용해서 시작과 끝 지점을 새롭게 세팅할 수 있어요. 이 두 변수들은 모두 `0`에서 `1`까지의 값을 가질 수 있고, 이 값은 샘플 안의 지점을 뜻합니다. 예를 들어서: `0`은 샘플의 시작 점, `0.5`는 샘플의 중간 점, `1`은 샘플이 끝나는 지점을 말하는 거겠죠. 다음 예시를 한번 재생해 봅시다!

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

아래 비디오는 (Ableton Live의 도움으로 만들었답니다) `loop_amen`이 `live_loop`로 반복 재생되는 모습을 구간 별로 나눈 모습을 보여주고 있어요. 

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

샘플의 부분을 다르게 연주하는게 재밌지 않나요? `sample` 을 사용해서 다른 옵션들도 한번 연주해보세요. 예를 들어, `loop_amen`에 `rate: -1` 옵션을 추가해서 거꾸로 연주되는 걸 들어보세요.

(`rate`, `pan`, `amp`, `attack`, `release`, `start` 그리고 `finish`)와 같은 `sample` 옵션들을 사용해보기 시작하면 어느 sample을 조작하기 쉬울거에요. 다음 예시는 두개의 샘플에서 이 옵션들에 무작위 값을 주고 특이하고 미세한 소리들을 연주해보려고 합니다.

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

이 기술은 그래눌라 샘플러와 신디사이저에 널리 쓰입니다.
