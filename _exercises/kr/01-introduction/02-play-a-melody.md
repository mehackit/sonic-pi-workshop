---
chapter: 시작하기
title: ‘멜로디’ 연주하기
lang: kr
layout: exercise
---

다음 내용을 Buffer에 입력하고 Run (실행)을 눌러 보세요.

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

멜로디 같이 들리진 않죠? Sonic Pi는 순서대로 음을 연주하진 않아요. (그리고 사실 이 방법은 화음을 연주하는 방법이랍니다.)

Sonic Pi로 음을 순서대로 연주하고 싶으면 매번 음이 연주된 다음에 잠시 쉬었다가 다음 음이 연주되어야 한다고 입력해야 해요. `sleep 1` 을 각 음 다음에 넣어서 입력해보세요. 이렇게요:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1`은 Sonic Pi에게 한박자 쉬라고 말해주는 명령어입니다. 1보다 작거나 큰 값을 선택할 수 있어요. 1보다 작은 값의 sleep 값을 넣으면 쉬는 박자가 짧아지고 큰 값을 넣으면 쉬는 박자가 길어집니다. 악보를 그리는 방법을 알고 있다면 다음 악보들을 통해 Sonic Pi에서의 음계를 쉽게 이해할 수 있을 겁니다.

<img src="{{ "/assets/img/Notes_KR.png" | prepend: site.baseurl }}"> 
<img src="{{ "/assets/img/Rests_kr.png" | prepend: site.baseurl }}">

아까 설명했다시피, MIDI 노트를 사용해도 됩니다. `0`부터 `127`까지의 값을 사용하는 MIDI 노트나 악보 코드 (`:G4`, `:Ab5`, `:Bb5`)를 이용해도 돼요. 음계에 맞는 MIDI 노트 값을 써 놓은 표를 참조해 보세요.

<img src="{{ "/assets/img/midi_notes_kr.png" | prepend: site.baseurl }}">

## 연습해보기

C Major 음계 (`72, 74, 76, 77, 79, 81, 83` or `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) 를 사용해서 멜로디를 만들어 봅시다. 리듬을 다르게 하려면 각 음의 값 사이에 다른 sleep 값을 넣어 보세요. use_bpm을 사용해서 멜로디가 처음에 빠르게 혹은 느리게 시작하도록 할 수 있어요. BPM은 1분당 비트 속도 (Beats Per Minute)라는 뜻이에요. 여기 다른 예시들이 있어요:

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="한번 들어볼까요?" %}

자, 이제 여러분만의 멜로디를 만들어보세요!
