---
chapter: 导出你的音频
title: 导出你的音频
lang: chs
layout: exercise
---

你对自己的作品满意之后很可能想保存音频文件并分享给朋友（比如在你的<a href="http://www.soundcloud.com/mehackit">SoundCloud</a>主页）。首先你要用Sonic Pi的录制功能把歌曲录下来。


录制步骤如下

* 点击Rec按钮等它亮起
* 单击“运行”开始录制歌曲
* 歌曲完成后（或者live_loops玩腻了）点击Stop
* 最后再次点击Rec来结束录制
* 在对话框里面储存文件（例如取名MySong.wav）

{% include videoplayer.html filepath="/assets/video/record_audio" %}

一旦你保存了音频文件就可以播放和分享了。 不过我们建议你稍微处理一下音频文件，这样听起来更专业更响亮。 我们可以使用一款免费的开源软件Audacity，用于录制和编辑声音。 Audacity可以从这里下载（适用于Windows，Linux和OS X）：<a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>. 

## Audacity：裁剪静音

通常你用Sonic Pi录音的时候，开头结尾都有一段多余的静音段落。你可以按照个人喜好用简单的几步去掉它们。首先在菜单“File / Open”中打开Audacity中的音频文件。 打开文件后可以看到如下所示的视图。


<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

现在点击“效果”栏并选择“裁剪静音”。

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

在“裁剪静音”窗口输入以下数值

* 等级：-60分贝
* 持续时间：0.5秒
* 裁剪到：0.1秒

接着点击“OK。

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

现在在波形图里面能看到静音部分在音频里被去掉了。

## Audacity：响度标准化

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

下面我们要在尽量无损无压缩的情况下把音频响度调到最大。如果你觉得你的作品节奏感强应该更大声，那么下面的内容就是为你准备的。但是呢，如果你的材料比较微弱（例如环境音乐）而且你觉得这样更合适，那就别按照以下步骤再调整了。闲话少说，以下是做法：点击“效果”菜单并选择“标准化”。

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

在“标准化”窗口中设置以下数值

* 标准化最大振幅为-0.1 dB

勾选最上面两个选项并点击“OK”

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

现在波形中的尖峰更高了，音频也会随之更响。

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity：保存为MP3文件

现在你只需要保存音频了。如果你想把音频保存成MP3文件，打开“文件”菜单然后选择“导出音频”。


<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

在导出音频窗口你能在文件浏览器旁边看到一个下拉菜单。从那个菜单中选择“MP3文件”。你可以在格式选项中为你的MP3文件选择一个标准预设值。比如下面的格式选项就很好用：

* 比特率模式：预设
* 质量：标准，170-210 kbps
* 变速：快速 
* 通道模式：联合立体声 

下一步在“名称”处输入文件名并点击“保存”。大功告成！你现在有了MP3文件可以发给朋友、上传到SoundCloud或者存到手机里面了。 

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

我们希望你用Sonic Pi创作并发布音频的时候玩得开心！
