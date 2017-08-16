---
chapter: 더 많이 알아보기
title: 외부 샘플
lang: kr
layout: exercise
---

Sonic Pi 에는 무료로 사용할 수 있는 73개의 샘플들이 있지만, 외부 샘플들도 불러와 사용할 수 있습니다. 예시로 직접 녹음한 샘플을 (직접 목소리나 기타를) Sonic Pi로 불러와 사용할 수 있죠.

우선, 오디오 샘플은 PC나 하드 드라이브에 저장된 WAV 포맷이어야 합니다. 다음 예시들에서는 Mehackit에서 만든 무료 샘플 팩을 사용할겁니다. Solenoid Samples 1이라는 샘플 팩이고 <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">여기에서</a> 다운로드 받으실 수 있어요. 14가지의 개별 소스와 반복리듬 샘플들이 있어요. 이 샘플들은  2016년 초 워크샵에서 만든 키네틱 사운드에서 녹음한 것들입니다.

샘플 팩을 다운로드 받고나서 폴더로 옮기게 되면, 저장된 폴더의 경로를 확인해야만 합니다. 예를 들어, 데스크탑에 있는 Samples라는 폴더에 파일들을 옮기면 경로는 다음과 같이 나오겠죠:

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples" 


저 위의 경로에서 ‘sam’ 대신에 아마 여러분의 유저 이름이 들어갈겁니다. 샘플 팩에는 이런 파일들이 들어 있어요: 타악기 소리들로 `hit_1.wav`  부터 `hit_7.wav` 까지,  `loop_1.wav` 부터 `loop_7.wav` 까지 있습니다. (이 루핑 샘플들은 `beat_stretch`라는 샘플러와 같이 연주해보시길 추천합니다.)

정확한 파일 경로를 입력해서 `sample`을 바로 연주할 수 있습니다.

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

샘플의 위치 경로를 정확하게 입력했다면 `loop_1.wav`를 들을 수 있을 겁니다. 다만 여기 예시들에 나온 그대로가 아닌, 여러분의 하드 드라이브에 입력된 경로에 맞게 입력해야 한다는 걸 잊지 마세요! 이 방법은 샘플을 바로 불러와 연주할 수 있는 방법이죠. 폴더 경로를 한번만 입력하고 파일 이름만 바꿔서 연주할 수 있는 방법이 궁금할거에요. 다양한 파일 경로를 입력하고 `sample` 명령어와 결합해서 사용할 수 있습니다. `sample` 다음에 파일 경로를 포함한 이름을 입력하고 샘플 이름을 입력하세요. 아래 예시에 solenoids라고 불리는 샘플 폴더 경로의 변형을 입력해 볼 겁니다. 연주를 실행하면, `loop_4.wav` 샘플이 반복(루핑) 재생 될거예요:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

자 이제 외부에서 샘플을 불러오거나 Sonic Pi에 저장된 샘플들을 사용할 수 있겠죠. 아래 예시들을 연주해 봅시다. 외부 샘플과 Sonic Pi의 샘플을 사용한 네개의 서로 다른 `live_loop` 예시들이 있습니다. `live_loop :solenoid2`에서 `samplename`라는 변수를 써서 `hit_1.wav`부터 `hit_7.wav`까지 무작위로 하나의 샘플을 골라볼게요.

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample solenoids, "hit_6", rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
