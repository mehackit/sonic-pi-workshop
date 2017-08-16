---
chapter: 소리 비틀기
title: 효과
lang: kr
layout: exercise
---

이 효과를 소개하려고 참 오래 기다렸습니다, 바로 `with_fx` 입니다!

이 효과는 작곡한 곡에 다른 효과들을 추가할 수 있는 파워풀한 도구라고 할 수 있습니다. `:reverb`부터 시작해보도록 하죠. reverb효과는 거의 모든 소리와 잘 어울립니다. 코드를 `with_fx :reverb do`로 시작해서  `end`로 끝내봅시다:

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

이 효과를 사용하기 전이랑 비교해면 소리가 조금 더 커졌을 겁니다. 그렇죠? synth나 샘플처럼 효과 또한 여러 옵션을 가지고 있습니다. `mix:`는 효과와 원래 소리를 어느 크기로 낼지 결정하는 옵션입니다. `mix:0` 는 원래 소리만을, `mix:1` 는 FX 소리만을 냅니다. Reverb는 `room`라는 옵션도 가지고 있습니다. 0에서 1까지의 값으로 소리가 퍼지는 공간의 너비를 다르게 표현할 수 있어요. 도움 메뉴의 ‘Fx’ 탭을 누르면 각 FX에 어떤 옵션이 가능한지 확인할 수 있습니다.

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

사용할 수 있는 Fx 효과들이 정말 많습니다. 한가지 효과만 사용하지 말고 다른 효과들도 사용해보세요! (언젠가는 컴퓨터가 사용할 소스가 바닥날지도 모르지만 그건 그때가서 걱정합시다.)

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

자 이제 FX를 추가해서 기발하고 새로운 소리들을 만들어 보세요!
