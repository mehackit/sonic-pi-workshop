---
chapter: Introduction
title: メロディーを繰り返す
lang: ja
layout: exercise
---

さて、前の節でメロディーを書けたことでしょう。では、メロディー全体あるいはその一部分を何回か繰り返そうとした場合、どうしたら良いでしょう？メロディーをコピー・ペーストすることは可能ですが、何度かやると疲れてきます。幸運にも **繰り返し** を使うことができます！これに対応するコンピュータサイエンスの用語はイテレーションで、「1回より多くの回数何かを実行する」という意味です。

メロディーの始まりに`2.times do`を、終わりに`end`を書いてみましょう（以下では例としてそれぞれの音が音名で書かれていますが、MIDIノート番号を使うこともできます）。

{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

`2.times do`のかわりに、何回繰り返したいか指定することができます。例えば、`4.times do`や`99.times do`などです。

また、繰り返しの中に繰り返しを使うこともできます:

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Listen to the previous example" %}
