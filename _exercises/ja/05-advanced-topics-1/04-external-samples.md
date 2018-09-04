---
chapter: Advanced Topics 1
title: 外部サンプル音源
lang: ja
layout: exercise
---

Sonic Piは約73のサンプル音源があってそれで遊ぶことができますが、外部サンプル音源もサポートしています。例えば、あなたが何か（あなた自身の声やギターなど）を録音し、それをSonic Piで使いたいかもしれません。

最初に、サンプル音源をWAVフォーマットでハードディスクドライブのフォルダにいれておく必要があります。以下の例では、*Mehackit* による無料のサンプルパックを使います。それは、*Solenoid Samples 1* というもので、<a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">ここ</a>からダウンロードできます。そこには、2016年初めのワークショップで作成したキネティックサウンドインスタレーションから録音された、14のワンショットもしくはループのサンプル音源が入っています。

サンプルパックをダウンロードしたら、それをどこかのフォルダに解凍してください。そのフォルダのフルパスを確認をする必要があります。例えば、もしあなたがファイルをデスクトップの'Samples'というフォルダに解凍した場合には、フルパスは以下のようなものになるでしょう:

* Windows: "C:/Users/sam/Desktop/Samples"
* Raspberry Pi, Linux, Mac: "/Users/sam/Desktop/Samples"

'sam'のかわりにあなたのユーザ名にするのを忘れないようにしてください。サンプルパックは以下のファイルがあります: `hit_1.wav`から`hit_7.wav`（パーカッシブなヒット）と`loop_1.wav`から`loop_7.wav`（`beat_stretch`オプションと一緒に使うループビート）。

では、`sample`コマンドでファイルパスを直接指定して再生してみます:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

`sample`コマンドに渡すパスが正確であれば、`loop_1.wav`の音が聞こえるはずです。ここで、この例のパスを別なものに変更したいと思ったとしましょう。先程の例は、サンプルにアクセスして再生するとてもストレートな方法でした。しかし、あなたはフォルダパスを1度だけ書いて、ファイル名だけを参照してサンプルを再生したいのではないでしょうか？フォルダパスの変数を定義してそれを組み合わせて`sample`コマンドで使用することができます。`sample`の後に、フォルダパスを格納した変数を渡し、その後にサンプル名を渡すことができます。以下の例では、solenoidsという名前の変数を宣言してサンプルフォルダのパスを格納しています。これを実行すると、`loop_4.wav`のサンプルが再生され、ループするはずです:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

ここまでで外部サンプル音源とSonic Piのサンプル音源の両方をあなたの作品に使うことができるようになりました。下の例では、4つの`live_loop`が外部サンプルとSonic Piのサンプルを再生しています。`:solenoid2`のlive_loopでは、`samplename`という変数を使って、`hit_1.wav`から`hit_7.wav`の1つをランダムに選択しています。

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
