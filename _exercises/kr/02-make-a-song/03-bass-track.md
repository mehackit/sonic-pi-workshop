---
chapter: 노래 만들기
title: 베이스 트랙
lang: kr
layout: exercise
---

자 이제 베이스로 들어갈 다른 live loop을 추가해 봅시다. 묵직하고 간단한 베이스 그루브를 작곡 해보세요. 브라우저 화면에서 <a href="{{ "/exercises/kr/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">피아노를</a> 사용해서 넣고 싶은 음을 골라보세요. 여기에 예시가 있습니다.

{% highlight ruby %}
live_loop :bass do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## Synth(신디사이저) 바꿔보기

이제 여러분이 작곡한 곡의 소리를 더 재밌게 만들어 볼 시간입니다! Synth 소리를 바꿔볼 거에요. Sonic Pi의 디폴트 synth는 `:beep` 입니다. 다른 synth를 사용하기 위해서는 사용하고 싶은 코드의 시퀀스 위에 `use_synth :name_of_synth`라는 코드를 넣어야  해요.

이 예시에서는, fm이 synth의 이름입니다:

{% highlight ruby %}
live_loop :bass do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

Sonic Pi에는 더 많은 소리 synth들이 있습니다. 이름들을 찾아보려면 스크린 상단에 있는 help 아이콘을 클릭해보세요. 왼쪽 패널 아래에 Synth 탭을 클릭하면 각종 이름들과 사용 방법에 대한 더 많은 정보들을 얻을 수 있습니다.

## 음의 길이 바꿔보기

가끔은 소리를 조금 더 길게 연주하고 싶거나 다른 속도로 연주하고 싶을 거예요. 이런 경우에는 사용하는 코드의 추가적인 변수를 바꿔주면 됩니다. `attack`과 `release`는 음의 진폭을 컨트롤하는 역할을 해요.

<img src="{{ "/assets/img/attackrelease_kr.png" | prepend: site.baseurl }}">

아래처럼 attack과 release를 사용해보세요. 음이 네박은 더 길어졌을거예요.

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

attack 값을 0으로, release 값을 짧은 소리의 값을 입력하면 아주 짧은 스타카토 음을 만들 수도 있어요.

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

여러가지 종류의 synth와 음의 길이를 다뤄보면서 베이스트랙을 만들어 보세요.

곡이 이렇게도 될 수 있겠죠:

{% highlight ruby %}
use_bpm 100

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
{% endhighlight %}
