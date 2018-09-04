---
chapter: Introduction
title: メロディーを鳴らす
lang: ja
layout: exercise
---

次のコードをBufferにタイプしてrunを押してみてください:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

メロディーのようには聞こえなかったのではないでしょうか？音を順番に鳴らすかわりに、Sonic Piはすべての音を同時に鳴らしています（そして実際のところこれが和音を書く方法です）。

Sonic Piで音を順番に鳴らしたい場合には、その時々に休むように指示する必要があります。次のように、それぞれの音の下に`sleep 1`をタイプしてみましょう:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1`はSonic Piに1拍待つように指示しています。小さい値も大きい値も試すことができます。sleepの値を小さくすると、playコマンドの間の時間が短くなり、大きくするとその逆になります。もしあなたが記譜法に慣れていれば、音符や休符の違いがSonic Piで次のように記述されるのを理解できるでしょう。

<img src="{{ "/assets/img/Notes_EN.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_en.png" | prepend: site.baseurl }}">

以前に紹介したとおり、音は0から127のMIDIノート番号（`67`、`80`、`22`など）でも、音名表記（`:G4`、`:Ab5`、`:Bb`など）でも記述可能で、どちらを使うかはあなた次第です。次の表は、音名と対応するMIDIノート番号を示しています:

<img src="{{ "/assets/img/midi_notes.png" | prepend: site.baseurl }}">

## 試してみよう

Cメジャースケール（`72, 74, 76, 77, 79, 81, 83`または`:C5 :D5 :E5 :F5 :G5 :A5 :B5`）の音を使って、メロディーを作ってみましょう。`sleep`の値を変化させて、リズムを変えてみましょう。最初にある`use_bpm`で、メロディー全体を早くしたり遅くしたりすることができます。BPMは、_Beats Per Minute_ の略語で、1分間あたりの拍数という意味です。以下が例です:

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

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Listen to the previous example" %}

ではあなた独自のメロディーを作ってみましょう！
