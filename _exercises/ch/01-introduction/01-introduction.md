---
chapter: 介紹
title: 介紹
lang: ch
layout: exercise
---

Sonic Pi 是一個資源開放式的程式設計環境，通過創造新聲音的方式來探索和傳播程
式設計的基本概念。這是一款由英國劍橋大學電腦實驗室的Sam Aaron 推出的免費的
編碼合成器。你可以使用Sonic Pi程式設計和作曲來創造出風格迥異的音樂，例如古
典音樂或現代音樂中的卡農及迴響貝斯。
這個教程會從基礎介紹開始引導你更自如地使用Sonic Pi。完成整個教程之後你就能
獨立地創作出如下的音樂：

{% include player.html filepath="/assets/audio/groove.mp3" %}

或是這樣的效果

{% include player.html filepath="/assets/audio/amen.mp3" %}

使用Sonic Pi，一切為了探尋。沒有錯誤，只有新發現。重點是愉悅身心！所以只記
得三件事就好：尋開心、學探索、玩轉程式設計！

## 打開Sonic Pi

如果你還沒有安裝Sonic Pi，點擊 <a href="http://sonic-pi.net/">sonic-pi.net</a>, 下載即可安裝。適配Windows、OS X和Linux系統。

接著啟動Sonic Pi，我們一起來看看。
這就是傳說中的Sonic Pi了，它有三個主視窗。最大的是寫代碼用的，我們稱之為“程式設計面板”。還有一個日誌面板用來顯示程式運行的內容。當你點擊視窗上方説明按鈕時，第三個視窗就會帶著文檔列表從底部彈出來。文檔資訊包括程式設計語言和不同的合成效果、采樣以及很多輔助材料。更有很多已經待命的采樣等你來親自體驗。

<img src="{{ "/assets/img/interface_ch.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## 彈奏一個音符

我們從編寫代碼讓Sonic Pi彈奏一個音符開始。選擇`Buffer 0` 按鈕並輸入：

{% highlight ruby %}
play 60
{% endhighlight %}

點擊左上角的運行。聽見滴的一聲了嗎？


現在試著輸入 `pley 60` 並點擊運行。發生了什麼？

> 這就是代碼中bug的一個舉例。如果錯誤面板顯示了文本就證明你有錯誤需要修復。有可能就是拼寫錯誤。

我們輸入的數位其實是MIDI音符。MIDI是一種非常有效的作曲方式，也是通過減少（降調）或者增加數值（升調）的方式快速調音的工具。

