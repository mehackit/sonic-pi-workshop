---
chapter: 介绍
title: 介绍
lang: chs
layout: exercise
---

Sonic Pi 是一个资源开放式的编程环境，通过创造新声音的方式来探索和传播编程的基本概念。这是一款由英国剑桥大学电脑实验室的Sam Aaron 推出的免费的编码合成器。你可以使用Sonic Pi编程和作曲来创造出风格迥异的音乐，例如古典音乐或现代音乐中的卡农及回响贝斯。
这个教程会从基础介绍开始引导你更自如地使用Sonic Pi。完成整个教程之后你就能独立地创作出如下的音乐：


{% include player.html filepath="/assets/audio/groove.mp3" %}

或者是这样的效果

{% include player.html filepath="/assets/audio/amen.mp3" %}

使用Sonic Pi，一切为了探寻。没有错误，只有新发现。重点是愉悦身心！所以只记得三件事就好：寻开心、学探索、玩转编程！

## 打开Sonic Pi

如果你还没有安装Sonic Pi，点击 <a href="http://sonic-pi.net/">sonic-pi.net</a>, 下载即可安装。适配Windows、OS X和Linux操作系统。

接着启动Sonic Pi，我们一起来围观一下。
这就是传说中的Sonic Pi了，它有三个主窗口。最大的是写代码用的，我们称之为“编程面板”。还有一个日志面板用来显示程序运行的内容。当你点击窗口上方帮助按钮时，第三个窗口就会带着文件列表从底部弹出来。文件信息包括编程语言和不同的合成效果、采样以及很多辅助材料。更有很多已经待命的采样等你来亲自体验。


<img src="{{ "/assets/img/interface_chs.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## 弹奏一个音符

我们从编写代码让Sonic Pi弹奏一个音符开始。选择`Buffer 0` 按钮并输入：

{% highlight ruby %}
play 60
{% endhighlight %}

点击左上角的运行。听见滴的一声了吗？
现在试着输入
 `pley 60` 并点击运行。发生了什么？

> 这就是代码中bug（错误输入）的一个举例。如果错误面板显示了文本就证明你有错误需要修复。有可能就是拼写错误。


我们输入的数字其实是MIDI音符。MIDI是一种非常有效的作曲方式，也是通过减少（降调）或者增加数值（升调）的方式快速调音的工具。

