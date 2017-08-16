---
chapter: 시작하기
title: 멜로디 반복하기
lang: kr
layout: exercise
---

좋아요, 멋진 멜로디를 완성했습니다. 이 멜로디 전체 혹은 일정 부분만 반복하고 싶을 수 있겠죠. 물론 멜로디를 복사하고 붙이는 방법이 있지만 계속 하다보면 지칠지도 몰라요. 다행히 멜로디를 반복하는 기능이 있습니다! 멋진 과학 용어로 이걸 바로 ‘iteration’ (반복) 이라고 해요. 

멜로디를 시작하기 전에 `2.times do`를 입력한 다음에 멜로디의 마지막에 `end`를 입력하세요. (음계 코드를 써놓았지만 MIDI노트를 사용해도 괜찮아요)

{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

`2. times do` 대신 원하는 반복하는 횟수를 넣을 수 있어요. `4.times do` 나 `99.times do` 처럼요. 

원한다면 반복되는 멜로디 안에 반복을 또 넣을 수 있어요. 이렇게요:

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="한번 들어볼까요?
" %}
