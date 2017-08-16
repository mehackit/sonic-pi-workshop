---
chapter: 사운드 만들기
title: 코드 진행
lang: kr
layout: exercise
---

이전 예시는 C Minor에서만 연주되는 거였는데요. 여기에서 보여드릴 건, 모든 루프(loop)들이 사용하는 코드의 링을 사용하는 겁니다. 모든 루프(loop)들은 같은 코드를 사용해서 연주 될거고, 한 루프(loop)가 전체 곡을 위해 코드를 변경할 겁니다. 조금 복잡해졌지만 그래도 작곡을 위한 더 많은 영감을 얻을 수 있을거예요. 더 많은 코드를 알아보려면 <a href="{{ "/exercises/kr/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">코드 진행 표</a>를 확인해보세요!

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # ring의 첫번째 코드를 선택해서 변수로 저장하세요.
# 저장된 변수는 live_loops에 사용될 겁니다. 그리고 :bass loop으로 tick 기능을 사용하겠습니다.

live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play c
  sleep 1
end

live_loop :bass do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] # 코드의 첫번째 음을 연주합니다  
    sleep 1
  end
  play c[2] # 코드의 세번째 음을 연주합니다
  sleep 0.5
  play c[1] # 코드의 두번째 음을 연주합니다
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
