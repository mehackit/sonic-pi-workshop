---
chapter: 트랙 추출하기
title: 트랙 추출하기
lang: kr
layout: exercise
---

작곡한 트랙이 마음에 쏙 든다면 오디오 파일로 저장해서 공유하고 싶은 마음이 안들 수 없겠죠. (<a href="http://www.soundcloud.com/mehackit">SoundCloud</a>에 올릴 수도 있고 말이죠). 그러기 위해서는 우선 Sonic Pi의 녹음 기능을 사용해서 작곡한 곡을 녹음해야 합니다.

녹음하는 방법은 다음과 같습니다. 아주 간단해요:

* **Rec** 버튼을 눌러 색이 변하는걸 확인하세요
* **Run** 버튼을 클릭해서 음악을 재생시켜 녹음을 시작하세요
* 곡이 끝나면 (혹은 live_loop을 이용해서 반복 재생되는 곡이라면 충분히 반복된 후에) **Stop**을 누릅니다
* 이제 **Rec** 버튼을 다시한번 눌러 녹음을 중지하세요.
* 팝업 창에 오디오 파일의 이름을 입력하고 저장하면 됩니다. (예시: *MySong.wav*)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

오디오 파일을 저장하고 나면 언제든 재생하고 공유하는게 가능합니다. 하지만 여러분의 곡을 조금 더 크게 들릴 수 있도록, 좋은 음향으로 다듬을 수 있는 방법이 있습니다. 그 방법을 소개해드릴텐데요. 여기에서 Audacity라는 무료 오픈 소스 소프트웨어를 사용해서 녹음하고 소리를 수정할거예요.  <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>에서 Audacity를 다운받아보세요. (Windows, Linux, OS X에서 사용 가능합니다.)

## Audacity: 무음 제거하기

Sonic Pi로 소리를 녹음하다보면 곡의 시작과 끝 부분에 불필요한 무음이 있기 마련입니다. 간단한 방법으로 이 무음을 제거할 수 있습니다. 우선, Audacity의 “File/ Open” 메뉴에서 음원을 불러오세요. 파일을 가져왔다면 아래처럼 파일을 볼 수 있을거예요.

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Effect 메뉴를 찾아 “Truncate Silence”(무음 줄이기) 를 선택하세요.

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

“Truncate Silence” 창에서 다음 값들로 지정하세요.

* Level: -60 dB
* Duration: 0.5 seconds 
* Truncate to: 0.1 seconds

Ok를 클릭하세요.

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

이제 아래 소리 파동 곡선에서 무음 부분이 제거된 걸 확인할 수 있을거예요.

## Audacity: 소리크기 정상화하기

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

다음은 연주곡의 소리를 크게 만들어 볼텐데요. 음향에 해가 가지 않는 선에서 가장 큰 소리로 수정해보려고 합니다. 작곡한 곡이 비트가 강해서 큰 소리로 연주되는게 좋다면 이 기능이 큰 도움이 될겁니다. 반대로, 곡이 잔잔한 곡이라면 그대로 두는 것이 나을 수도 있어요. 이런 경우에는 소리크기를 바꾸는 이 기능을 추천하고 싶진 않네요. 어쨌든 이 기능을 우선 소개할게요. “Effect” 메뉴에서 “Normalize”를 선택하세요.

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

“Normalize” 창에 아래의 값을 입력하세요.  

* Normalize maximum amplitude: -0.1 dB

상단의 두개의 체크박스를 클릭하고 “Ok”를 누르세요.

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

이제 소리 파동에서 소리 형태가 이전보다 길어진걸 볼 수 있습니다. 음원의 소리가 커졌다는 걸 의미하죠.

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: MP3 파일로 저장하기

자 이제는 오디오 파일로 저장할 차례입니다. MP3 파일로 트랙을 저장하고 싶다면, “File”메뉴로 들어가 “Export Audio”를 선택하세요.

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

Export Audio 창에서 파일을 검색할 수 있는 창에서 아래로 내릴 수 있는 메뉴가 있습니다. 그곳에서 MP3 Files를 선택하세요. Format Options에서 파일 저장 기준 포맷을 MP3 파일로 지정할 수 있습니다. 아래의 값들을 기본값으로 지정하길 추천합니다.:

* Bit Rate Mode: Preset 
* Quality: Standard, 170-210 kbps 
* Variable Speed: Fast 
* Channel Mode: Joint Stereo 

다음으로 파일 이름을 입력하고 “Save”를 클릭해 저장하세요. 이제 여러분의 연주곡이 MP3 파일 형태로 준비되었군요. 이제 이 파일을 이용해 친구들과 공유하고, 사운드클라우드나 휴대폰에 업로드해서 쉽게 사용해보세요.

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Sonic Pi로 만든 트랙을 더 즐겨 보시길 바랍니다.
