---
chapter: Advanced Topics 1
title: スライサー
lang: ja
layout: exercise
---

前のトピックで紹介したサンプルスライスに加え、何か"リズミカルでチョップされた"ものを追加するのに、`:slicer`エフェクトを使うことができます。それは時間に沿って音量を変えます（それはしばしば振幅変調と呼ばれます）。では、空のBufferに新しい`live_loop`を作って、サンプルの`:loop_breakbeat`を構成要素として使い、このエフェクトを実験してみましょう。

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

このループは下のビデオと同じような音がします。ここで赤い色は音量を示していて、この例では最大になっているはずです。

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

では、`with_fx`コマンドを使って、`live_loop`にスライサーエフェクトを追加してみましょう。もしSonic Piでのエフェクトの使い方を思い出せない場合は、前にある<a href="{{ "/exercises/en/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">エフェクト</a>の章で、理解を深めることができます。

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

新しく追加されたスライサーエフェクトは不快に聞こえるので、それを少し調整する必要があります。スライサーエフェクトの主なオプションは、`phase`、`wave`、`mix`です。`phase`はどれだけ速くもしくは遅く振幅変調が起こるかの頻度です。`phase`のデフォルト値は`0.25`で、これは16分音符ごとにこのエフェクトが起こることを意味しています。これにより、先程の例は目まぐるしく聞こえたのです。

スライサーエフェクトは、`0`（saw, ノコギリ波）、`1`（pulse, パルス波）、 `2`（triangle, 三角波）、 `3`（sine, サイン波）の4つの異なる波形を使って振幅を変調しています。デフォルトでは、`wave`オプションは`1`に設定され、これはパルス波（または矩形波としても知られています）を使って振幅を変調することを意味しています。下の図は、振幅（赤色でマークされた領域）が時間に沿ってどのように増減するか示しています。

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

では、波形をノコギリ波（`wave: 0`）に変更してみましょう。これのより突発さを軽減し、このエフェクトを少しスムーズにするでしょう。

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

phaseの時間を倍（`phase: 0.5`）にして、波形をパルス波（`wave: 1`）にしてみましょう:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

では、以下のように、`phase: 0.5, wave: 2`をオプションとして使用すると何が起こるでしょう？

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

こうして、極めて簡単にドラムループにリズムと変化とダイナミクスを追加することができました。そして、これはシンセサイザーにも同様に使用可能であることを覚えておいてください！

次のコードはスライサーエフェクトの最後の例で、長いphaseを使ったものです:

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
