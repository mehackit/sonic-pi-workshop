---
chapter: Exporting Your Track
title: トラックをエクスポートする
lang: ja
layout: exercise
---

作った曲が良さそうだったらオーディオファイルとして保存して、オンライン（例えば、<a href="http://www.soundcloud.com/mehackit">SoundCloud</a>など）で公開したいとあなたは思うかもしれません。その場合は、最初にSonic Piにある録音機能で曲を録音する必要があります。

録音の手順は以下のように簡単です:

* **Rec** ボタンをクリックします。ボタンは強調表示されるはずです。
* 録音が開始されたので、**Run** をクリックして曲を開始します。
* 曲が終わったら（もしくは、live_loopを十分に再生したら）**Stop** をクリックします。
* 最後に、**Rec** を再度クリックして、録音を終了します。
* ダイアログウィンドウが表示されるので、オーディオファイルを保存します（例えば、*MySong.wav* という名前で）。

{% include videoplayer.html filepath="/assets/video/record_audio" %}

上記の手順で一度オーディオファイルを保存すれば、それを再生したり共有したりする準備はできています。しかし、それをよりプロフェッショナルかつラウドにするために、オーディオファイルを少し処理することをおすすめします。このために、これから *Audacity* を使っていきます。これは、音を編集・記録するためのオープンソースのソフトウェアです。*Audacity*（Windows版、Linux版、macOS版）は、次のURLからダウンロードできます: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>

## Audacity: 無音を取り除く

Sonic Piで録音すると普通は曲の前と後ろに余計な無音が入っていると思います。簡単な手順でこれを取り除くことができます。最初に、録音したファイルをAudacityの"File / Open"メニューから開きます。ファイルを開くと以下のような画面になっているでしょう。

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

次に、"Effect"メニューから"Truncate Silence"を選択します。

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

"Truncate Silence"ウィンドウでは、以下の値を使ってください:

* Level: -60 dB
* Duration: 0.5 seconds
* Truncate to: 0.1 seconds

"Ok"をクリックしてください。

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

これで、波形から無音部分が取り除かれたのを確認できたと思います。

## Audacity: 音量をノーマライズする

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

続いて、オーディオファイルを圧縮したり傷つけたりせずに音量を大きくしたいと思います。もしあなたの曲がビート中心の音楽で音量を大きくしたい場合には、次の手順をおすすめします。それに対して、あなたの曲が（アンビエントミュージックのように）繊細であれば、次の手順はおすすめしないでしょう。いずれにしても、次が手順です: "Effect"メニューから"Normalize"を選択してください。

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

"Normalize"ウィンドウでは以下の値を設定してください:

* "Normalize maximum amplitude" to -0.1 dB

上の2つのチェックボックスにチェックを入れ、"Ok"をクリックしてください。

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

波形のスパイクが高くなっているのを確認できると思います。処理の結果音が大きくなっています。

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: MP3ファイルを保存する

最後に、オーディオファイルを保存する必要があります。例えば、MP3ファイルで保存したい場合には、"File"メニューから"Export Audio"を選択します。

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

"Export Audio"ウィンドウでは、ファイルブラウザのあたりにプルダウンメニューがあると思います。そのメニューで、"MP3 Files"を選択してください。MP3ファイルに標準的なフォーマットオプションのプリセットが利用可能です。ここでは、例として、以下のフォーマットオプションは、常に適切に動作するはずです:

* Bit Rate Mode: Preset
* Quality: Standard, 170-210 kbps
* Variable Speed: Fast
* Channel Mode: Joint Stereo

次に、"Name"のフィールドにファイル名を入れ、"Save"をクリックしてください。これで細工してくれるはずです。これであなたのトラックのMP3を手に入れたので、友達に送ったり、SoundCloudにポストしたり、携帯電話にアップロードしたり簡単にできるようになりました。

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

みなさんがSonic Piによるトラックの作成と公開を楽しんでくれると期待しています！
