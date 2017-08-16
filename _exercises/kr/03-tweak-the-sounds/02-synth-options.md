---
chapter: 소리 비틀기
title: 옵션
lang: kr
layout: exercise
---

지금까지 `attack`, `release`, 그리고 `cutoff` 옵션을 사용해 봤습니다. 옵션은 쉽게 말해 입력한 소리의 연주 방향을 바꾸고 컨트롤하는 역할을 한다고 볼 수 있습니다. 각 synth는 저마다의 튜닝 옵션들을 가지고 있어요. 물론 여러 소리들에 적용되는 공통된 튜닝 옵션들도 있습니다. 여러분이 작곡한 소리들을 더 입체감있게 표현할 수 있는 몇가지 옵션들을 소개할게요.

몇몇 옵션들은 샘플로도 사용할 수 있습니다.

### `amp:`

진폭(Amplitude)은 소리의 세기를 말합니다. 0은 아무런 소리가 나지 않는 무음 상태이고, 1은 보통 소리의 세기 정도 됩니다. 진폭을 2, 10 또는 100까지도 높일 수가 있어요. 주의해야 할 점은 이 옵션은 소리를 둔탁하게 만들거나 이상하게 들리게 할 수도 있어요. 그러니 낮은 진폭의 값을 사용하길 추천합니다. (컴프레션을 피하려면 0에서 0.5 사이의 값을 사용해보세요)

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

Pan은 패닝(Panning)을 말합니다. 이 옵션을 소리를 좌우로 나누는 위치를 지정해줍니다. -1은 왼쪽 스피커에서, 1은 오른쪽 스피커에서, 0은 가운데에서 들리도록 하는 설정값입니다. 하이햇(hi-hat)에 랜덤으로 값을 정해서 한번 연주해보세요.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

주어진 값보다 높은 주파수를 없애주는 옵션입니다. 0에서 130까지의 값을 사용할 수 있어요.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` 과 `release:`

attack 과 release를 사용할 수 있는 옵션입니다.

{% highlight ruby %}
play :c2, attack: 1, release: 1 # 음은 2비트의 길이가 됨
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease_kr.png" | prepend: site.baseurl }}">

### `use_synth_defaults` 와 `use_sample_defaults`

옵션 세트를 루프의 모든 샘플이나 플레이에 적용하고 싶지 않으면, `use_synth_defaults` 와 `use_sample_defaults` 을 이용해서 구분지을 수 있습니다. 옵션을 루프의 다음 플레이와 샘플에 적용할 수 있어요.

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### `beat_stretch:` 와 `rate:`

꼭 소개하고 싶은 옵션들입니다. 아래 루프를 입력해서 연주해보세요:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

곡 끝에 거슬리는 빈 시간이 있죠. 이 샘플은 1.753310657596372 비트가 긴데요. 자연스럽게 이어지도록 만들기 위해서 쓸 수 있는 옵션이 있어요. `beat_stretch: 2` 옵션은 정확하게 2 비트의 박자에 맞게 비트를 늘이거나 줄여주는 역할을 합니다:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

어때요, 자연스럽죠? 이제는 `rate` 옵션에 대해서 알아봅시다. Rate는 샘플이 연주되는 속도를 조절합니다. 1은 원래의 속도, 0.5는 절반 그리고 2는 두배의 속도를 말해요. 속도가 달라지면 자연스럽게 소리의 높낮이도 높고 낮게 바뀝니다. 그리고 마이너스 값도 입력할 수 있어요. 마이너스 값은 거꾸로 연주하게 만듭니다. 아래 루프를 입력해서 연주해보고 rate 값과 sleep값을 바꿔보세요:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

