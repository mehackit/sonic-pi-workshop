---
chapter: 더 많이 알아보기
title: 자르기 / 조각내기
lang: kr
layout: exercise
---

샘플을 자르는 방법에 대해서 더 이야기 해보자면, `:slicer` 라는 오디오 효과를 써서 음악에 더 “리드미컬하고 부분 부분으로 나눠진" 효과를 더해보세요. 이 효과는 소리의 크기에 변화를 줍니다. (이 기능은 보통 진폭 변조라고 불려요.) 이제 이 효과를 이용해서 빈 buffer에 새로운 `live_loop` 을 만들어 봅시다. 이번에는  `:loop_breakbeat`이라는 샘플을 사용해 볼거예요:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

저장된 루프(loop)는 아래 비디오처럼 재생됩니다. 소리 크기를 표시하기 위해 빨간색을 사용할거고요, 이 예시에서는 최대 음량크기일겁니다.

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

알고 있는 `with_fx` 명령어를 사용해서 `live_loop`에 자르기 효과를 적용해 봅시다. 혹시 이전에 사용했던 효과들이 생각나지 않는다면 <a href="{{ "/exercises/kr/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">효과</a> 챕터를 확인해 보세요.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

자르기 효과가 처음에는 이해하기가 쉽지 않습니다. 조금씩 천천히 알아가보도록 하죠. 자르기 효과의 주 옵션들은 `phase`, `wave`, `mix` 입니다. 이 기능들은 진폭 변조를 조절하기 위해서 사용합니다. `phase`는 진폭 변조가 천천히 혹은 빠르게 일어나는 주기를 말해요. `phase`의 디폴트 값은 `0.25`이고, 이 값은 16분의 1 박자마다 효과가 적용된다는 뜻입니다. 이 효과로 이전 예시가 조금 더 정신없게 들릴거예요.

자르기 효과는 네 가지 웨이브형태를 사용해서 진폭을 변형합니다: `0`(saw-톱니파), `1`(pulse-펄스파), `2`(triangle-삼각파) 그리고 `3`(sinewave-사인파). 디폴트 값으로 `wave`는 `1`값을 취하는데 이는 펄스파(사각형이라고도 알려져 있죠) 웨이브를 사용해서 진폭을 변형합니다. 아래 그림들을 보면 각 웨이브 형태들이 어떻게 생겼는지 그리고 어떻게 진폭을 추가하거나 줄이는지 (빨간색으로 표시된 영역) 알 수 있습니다.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

자 이제 saw-톱니파 (`wave:0`) 웨이브 형태로 한번 바꿔 봅시다. 이 형태는 소리를 조금 더 부드럽고 자연스럽게 들리도록 합니다.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

이번에는 phase (`phase: 0.5`)를 두배로 늘리고 웨이브형태를 pulse(`wave: 1`)로 바꿔보죠.

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

(`phase: 0.5, wave: 1`)를 적용하면 어떤일이 일어날까요?

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

이 방법을 이용하면 드럼 루프(loop)에 리듬이나 변주를 추가하기 정말 쉬워요. Sonic Pi에서 다른 신디사이저들도 이용할 수 있다는걸 잊지 마세요!

더 긴 phase에 자르기 효과를 사용한 마지막 예시가 여기 있습니다.

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

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
