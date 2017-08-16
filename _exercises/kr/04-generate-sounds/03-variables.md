---
chapter: 사운드 만들기
title: 변수
lang: kr
layout: exercise
---

아래의 예시들을 같이 봅시다. 어떤 것들이 있나요?

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

`r` 이라는 변수가 보일거예요. 바로 루프(loop)가 연주될때마다 특정한 값을 가지게 하고, 그 값이 release 옵션과 sleep 값과 같게 하는 변수입니다. 변수들은 저장소와 같은 역할을 한다고 보시면 됩니다. 변수는  `variable_name = variable_value` 이렇게 간단하게 쓸 수 있어요. variable_name 안에 variavle_value 를 저장할 수 있습니다. variable_name을 입력하면 바로 그 값을 입력하는 것과 다름 없습니다.

synth와 베이스를 예시에 더해서 변수들을 연주해보죠. `:keys` 루프는 별 변화가 없지만, `:bass` 루프는 뭔가 다를거예요:

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick` 는 C Minor 코드에서 음을 가져와서 `n`이라는 변수에 저장한다는 뜻입니다. `.tick`는 항상 불려온 이후에 연주될 값에 적용됩니다. `play n`은 n이라 저장된 변수를 연주한다는 뜻입니다. 그리고 `.tick`은 코드안의 다음 연주될 값을 위해 불려옵니다. 루프(loop)가 다시 시작하면 `.tick`은 위치한 곳에서 계속 진행됩니다.
