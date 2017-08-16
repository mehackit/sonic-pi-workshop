---
chapter: 노래 만들기
title: 드럼 비트
lang: kr
layout: exercise
---

간단한 드럼비트를 어떻게 만드는지 볼까요? 드럼비트는 킥 드럼(kick drum), 스네어 드럼(snare drum), 하이햇(hi-hat)로 구성되어 있어요. `live_loop`과 `sample`의 사용법에 대해 알아봅시다.

비어있는 buffer에 `:drums`라고 부르는 `live_loop`을 입력해보세요. 이름은 아무렇게나 지을 수 있지만, 루프을 봤을 때 바로 이해하기 쉬운 이름으로 붙여 놓았습니다. `live_loop`은 끊임없이 반복되는 루프로 다른 live_loops와 동시에 연주될 수도 있습니다.(`live_loop`은 적어도 한번의 쉬는 템포, `sleep`이 반드시 포함되어야 합니다.)

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

실행 **Run** 버튼을 누르고 비트마다 킥드럼이 연주되는 첫 `live_loop` 을 들어봅시다.

자, 간단한 백 비트를 만들거예요. 첫번째와 세번째에  킥드럼을 넣고 스네어 드럼을 두번째와 네번째에 넣어봅니다. 음계를 직접 넣는 대신에 이번에는 샘플들을 불러서 사용해 보겠습니다. `sample :sample_name`를 입력해 보세요. 드럼비트의 예시 하나 보여드릴게요:

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
{% endhighlight %}

기본적인 백 비트라고 할 수 있어요. 위의 `:drums`는 킥 드럼으로 시작해서, 스네어 드럼이 두 번째, 다시 킥 드럼이 세번째, 스네어 드럼이 다시 네번째로 연주되는 루프(loop) 입니다.

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

자, 템포를 다르게 바꿔 보고 (`use_bpm` 뒤에 나오는 숫자를 변경해보세요) 샘플들을 연주해 봅시다. 샘플 이름을 입력하려고 할 때, 아마 아래에 자동 완성 목록들이 나올 겁니다. 다른 여러가지 샘플들을 연주해보고 어떤 소리가 들리는지 확인해보세요. 이런 것들을 바꿀 때는 stop(정지)를 누를 필요가 없습니다 - 코드를 먼저 바꾸고 그저 **Run**(실행)을 다시 누르면 됩니다 - 사라지는 비트 없이 다음 루프에도 소리가 저절로 바뀌게 될거예요.

## hi-hat 더해보기

자, 이제 hi-hat을 더해봅시다. `:hihat`이라 불리는 새로운 루프를 만들고 hi-hat 샘플들을 넣어보세요. 8분 음표나 16분 음표 박자에 맞춰 연주해봅시다. (아래 예시는 16분 음표):

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

하지만 이렇게 정형화된 박자만 연주할 필요는 없어요. 더 펑키한 느낌으로 이렇게 해 볼 수도 있죠:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

처음 하이-햇 폴리리듬은 “실수"로 만들어졌어요. 루프가 한박으로 되어야 하는 걸 실수로 1.25박으로 넣은거죠. 그런데 정말 멋졌죠! 기대하지도 않았던 멋진 소리를 찾을 수도 있으니까 실수를 많이 해봐야한다는 것, 잊지 마세요.

이렇게 만들어진 곡이 있네요:

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
{% endhighlight %}

live_loop이 유명한 작곡 앱에서 어떤식으로 활용되는지 아마 궁금할거예요. 아래 비디오를 통해서 더 잘 이해할 수 있을겁니다.

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

이제 각기 다른 샘플들과 리듬을 연주해봅시다. 세번째 `live_loop`을 더해서 다른 타악기나 다른 효과음들을 더해볼 수 있을거에요. 다음은 베이스 트랙을 만들어 보겠습니다.
