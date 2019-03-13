---
chapter: 導出你的音訊
title: 導出你的音訊
lang: ch
layout: exercise
---

你對自己的作品滿意之後很可能想保存音訊檔並分享給朋友（比如在你的<a href="http://www.soundcloud.com/mehackit">SoundCloud</a>主頁）。首先你要用Sonic Pi的錄製功能把歌曲錄下來。

錄製步驟如下

* 點擊Rec按鈕等它亮起
* 按一下“運行”開始錄製歌曲
* 歌曲完成後（或者live_loops玩膩了）點擊Stop
* 最後再次點擊Rec來結束錄製
* 在對話方塊裡面儲存檔（例如取名MySong.wav）

{% include videoplayer.html filepath="/assets/video/record_audio" %}

一旦你保存了音訊檔就可以播放和分享了。 不過我們建議你稍微處理一下音訊檔，這樣聽起來更專業更響亮。 我們可以使用一款免費的開源軟體Audacity，用於錄製和編輯聲音。 Audacity可以從這裡下載（適用於Windows，Linux和OS X）：<a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>. 

## Audacity：裁剪靜音

通常你用Sonic Pi錄音的時候，開頭結尾都有一段多餘的靜音段落。你可以按照個人喜好用簡單的幾步去掉它們。首先在功能表“File / Open”中打開Audacity中的音訊檔。 打開檔後可以看到如下所示的視圖。

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

現在點擊“效果”欄並選擇“裁剪靜音”。

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

在“裁剪靜音”視窗輸入以下數值 

* 等級：-60分貝
* 持續時間：0.5秒 
* 裁剪到：0.1秒

接著點擊“OK。

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

現在在波形圖裡面能看到靜音部分在音訊裡被去掉了。

## Audacity：響度標準化

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

下面我們要在儘量無損無壓縮的情況下把音訊響度調到最大。如果你覺得你的作品節奏感強應該更大聲，那麼下面的內容就是為你準備的。但是呢，如果你的材料比較微弱（例如環境音樂）而且你覺得這樣更合適，那就別按照以下步驟再調整了。閒話少說，以下是做法：點擊“效果”功能表並選擇“標準化”。

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

在“標準化”視窗中設置以下數值 

* 標準化最大振幅為-0.1 dB

勾選最上面兩個選項並點擊“OK”

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

現在波形中的尖峰更高了，音訊也會隨之更響。

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity：保存為MP3檔

現在你只需要保存音訊了。如果你想把音訊保存成MP3檔，打開“檔”功能表然後選擇“匯出音訊”。

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

在匯出音訊視窗你能在檔流覽器旁邊看到一個下拉式功能表。從那個功能表中選擇“MP3檔”。你可以在格式選項中為你的MP3檔選擇一個標準預設值。比如下方的格式選項就很好用：

* 位元速率模式：預設
* 品質：標準，170-210 kbps
* 變速：快速 
* 通道模式：聯合身歷聲 

下一步在“名稱”處輸入檔案名並點擊“保存”。大功告成！你現在有了MP3檔可以發給朋友、上傳到SoundCloud或者存到手機裡面了。 

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

我們希望你用Sonic Pi創作並發佈音訊的時候玩得開心！
