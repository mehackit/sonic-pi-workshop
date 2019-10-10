---
chapter: नाद उत्पन्न करो
title: चर
lang: hi
layout: exercise
---

नीचे दिए गए उदाहरण पर एक नज़र डालें। क्या चल रहा है?

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

एक चर `r` है जिसे एक निश्चित मूल्य मिलता है जो हर बार loop बजाया जाता है और उस मूल्य का उपयोग खेलने के लिए release विकल्प और sleep की लंबाई के रूप में किया जा रहा है। एक चर एक बॉक्स की तरह एक सा है जहाँ आप चीजों को स्टोर कर सकते हैं और चीजों को बाहर निकाल सकते हैं। वैरिएबल का उपयोग करना वैसा ही आसान है जैसा कि `variable_name = variable_value`। अब variable_value को variable_name में स्टोर किया जाता है। आप बस variable_name मूल्य प्राप्त कर सकते हैं।

वेरिएबल्स को आज़माने के लिए उदाहरण के लिए एक synth और बास जोड़ें।  `:keys` loop सरल है, कुछ भी नया नहीं हो रहा है, लेकिन `:bass` loop थोड़ा मुश्किल है:

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick` C minor कॉर्ड से एक नोट लेता है और इसे n नाम के एक वेरिएबल में सेव करता है। `.tick`  हमेशा आगे की वैल्यू के लिए आगे बढ़ता है जिसे यह कहा जाता है। `play n` सहेजे गए नोट चलाती है। तब `.tick` को कॉर्ड से अगला नोट प्राप्त करने के लिए फिर से कहा जाता है। जब loop फिर से शुरू होता है, तो `.tick` वहीं से जारी रहता है जहां यह था।
