---
chapter: 進階話題1
title: 外部采樣
lang: ch
layout: exercise
---

Sonic Pi附帶大約73個可以隨意使用和播放的采樣，此外它也完全支援使用外部采樣。 比如你想錄製的一些聲音（比如自己的聲音或吉他），然後在Sonic Pi中使用個人曲目。

首先，你要把WAV格式的音訊樣本放置在硬碟上的資料夾中。 在下面的例子中，我們使用的是*Mehackit*提供的免費采樣包，名為Solenoid Samples 1，您可以從<a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">這裡</a>下載。 它包含14個一次性采樣和循環采樣，這些采樣是我們用2016年初在工作坊製作的動力聲音裝置記錄的。


一旦你下載了采樣包並將這些檔解壓到一個資料夾中，就必須留意該資料夾的完整路徑。 比如你將檔解壓縮到桌面上名為“Samples”的資料夾，那麼該路徑很可能是這樣的：

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples" 

就記住要用自己取的名字而不要用“sam”資料夾。采樣包包括以下檔：`hit_1.wav`到`hit_7.wav`（打擊樂）和`loop_1.wav`到`loop_7.wav`（推薦使用采樣選項`beat_stretch`的循環節拍）

現在你就能在`sample`指令下使用正確路徑來直接演奏它們了：

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

如果采樣命令的路徑設置正確，你現在應該可以聽到`loop_1.wav`的聲音。 記得使用自己的檔路徑而不是這些示例中顯示的檔路徑！ 這是訪問和播放樣本的最直接的方式。 可能你想在代碼中只輸入一次資料夾路徑，並僅通過引用其檔案名來播放示例。 那你就可以為檔路徑指定一個變量並將其與`sample`命令結合使用。 Sample指令後你可以輸入包含檔路徑的變量名稱，然後輸入采樣的名稱。 我們將在下面的采樣中為示例資料夾檔路徑指定一個名為`solenoid`的變量。 點擊運行時，采樣`loop_4.wav`就開始播放並循環了：

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

你現在能在自己的作品裡使用外部采樣和Sonic Pi庫存采樣了。播放這個使用了四個不同的`live_loop` 采樣的例子來播放外部和Sonic Pi自己的采樣。 需要注意的是，在live_loop`:solenoid2`中，我們使用變量`samplename`從`hit_1.wav`到`hit_7.wav`中隨機選擇了一個采樣。

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
