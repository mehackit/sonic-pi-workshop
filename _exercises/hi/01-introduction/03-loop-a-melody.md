---
chapter: परिचय
title: एक राग को दोहराते हुए
lang: hi
layout: exercise
---

Oठीक है, तो आपने एक अच्छी धुन लिखी है। क्या होगा अगर आप इसे दोहराना चाहते हैं, या इसके कुछ हिस्सों को, कुछ बार। आप मेलोडी को कॉपी और पेस्ट कर सकते हैं लेकिन यह थोड़ी देर के बाद थका देता है। सौभाग्य से आप **पुनरावृत्ति** का उपयोग कर सकते हैं! इसके लिए फैंसी कंप्यूटर विज्ञान शब्द iteration है जिसका अर्थ है कि चीजों को एक से अधिक बार करना।

`2.times do` अपनी धुन की शुरुआत में करें और अपनी धुन के `end` में लिखें (नोट केवल उदाहरण के लिए संगीत संकेतन में हैं, आप चाहें तो MIDI नोट का उपयोग कर सकते हैं):

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

`2.times do`  का उपयोग करने के बजाय आप यह चुन सकते हैं कि आप कितनी बार नोटों को दोहराना चाहते हैं। उदाहरण के लिए `4.times do` या `99.times do`।

आप चाहें तो पुनरावृत्ति के अंदर पुनरावृत्ति का उपयोग भी कर सकते हैं:

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

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="पिछले उदाहरण को सुनें" %}