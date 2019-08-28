---
chapter: 进阶话题1
title: 外部采样
lang: chs
layout: exercise
---

Sonic Pi附带大约164个可以随意使用和播放的采样，此外它也完全支持使用外部采样。 比如你想录制的一些声音（比如自己的声音或吉他），然后在Sonic Pi中使用个人曲目。

首先，你要把WAV格式的音频样本放置在硬盘上的文件夹中。 在下面的例子中，我们使用的是Mehackit提供的免费采样包，名为Solenoid Samples 1，您可以从<a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">这里</a>下载。 它包含14个一次性采样和循环采样，这些采样是我们用2016年初在工作坊制作的动力声音装置记录的。


一旦你下载了采样包并将这些文件解压到一个文件夹中，就必须留意该文件夹的完整路径。 比如你将文件解压缩到桌面上名为“Samples”的文件夹，那么该路径很可能是这样的：

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples" 

就记住要用自己取的名字而不要用“sam”文件夹。采样包包括以下文件：`hit_1.wav`到`hit_7.wav`（打击乐）和`loop_1.wav`到`loop_7.wav`（推荐使用采样选项`beat_stretch`的循环节拍）

现在你就能在`sample`指令下使用正确路径来直接演奏它们了：

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

如果采样命令的路径设置正确，你现在应该可以听到`loop_1.wav`的声音。 记得使用自己的文件路径而不是这些示例中显示的文件路径！ 这是访问和播放样本的最直接的方式。 可能你想在代码中只输入一次文件夹路径，并仅通过引用其文件名来播放示例。 那你就可以为文件路径指定一个变量并将其与sample命令结合使用。 Sample指令后你可以输入包含文件路径的变量名称，然后输入采样的名称。 我们将在下面的采样中为示例文件夹文件路径指定一个名为`solenoid`的变量。 点击运行时，采样`loop_4.wav`就开始播放并循环了：

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

你现在能在自己的作品里使用外部采样和Sonic Pi库存采样了。播放这个使用了四个不同的`live_loop`采样的例子来播放外部和Sonic Pi自己的采样。 需要注意的是，在`live_loop：solenoid2`中，我们使用变量`samplename`从`hit_1.wav`到`hit_7.wav`中随机选择了一个采样。

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
