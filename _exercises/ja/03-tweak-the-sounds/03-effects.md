---
chapter: Tweak the sounds
title: エフェクト
lang: ja
layout: exercise
---

長い間ずっとしまっておきましたが、やっとここで紹介します: `with_fx`です！

これは様々なエフェクトをあなたの作品に追加する強力なツールです。`:reverb`から始めましょう。リバーブによってすべての音がとても良く聞こえるのではないでしょうか。コードを`with_fx :reverb do`と`end`のブロックで囲ってみましょう:

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

音が大きく聞こえたのではないでしょうか？シンセやサンプルと同じように、エフェクトにもオプションがあります。`mix:`はエフェクトの音とオリジナルの音がどれだけ聞こえるか設定するオプションです。`mix: 0`だとオリジナルの音だけ、`mix: 1`だとエフェクトの音だけ鳴ります。また、リバーブには`room`オプションがあります。0から1の色々な値のroomを試してみましょう。ヘルプメニューの'エフェクト'タブを開くと、どのエフェクトにどのオプションが利用できるか探すことができるでしょう。

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

エフェクトはたくさんありすぎて1つを選べないかもしれません。エフェクトは1つだけ使う必要はありません。それはネストすることができるのです！（ネストしすぎるとコンピュータのリソースを使い切ってしまうかもしれませんが、当面はそれを心配しないでください）

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

では、エフェクトをいろんなところで使って、驚くような新しい音を作ってみましょう！
