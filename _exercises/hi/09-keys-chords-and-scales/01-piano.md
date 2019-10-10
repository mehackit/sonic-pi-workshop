---
chapter: कुंजी, तार और तराजू
title: कुंजी, तार और तराजू
lang: hi
layout: exercise
---

कभी-कभी Sonic Pi के साथ एक राग तैयार करना मुश्किल हो सकता है, अगर आपको तुरंत पता नहीं है कि  `62` या `:c3`  कैसा लगता है। अपने विचारों को आज़माने के लिए यहां एक ब्राउज़र कीबोर्ड है। यदि आप चाहते हैं, तो आप ड्रॉप मेनू से एक पैमाने का चयन कर सकते हैं यह देखने के लिए कि एक निश्चित कुंजी में क्या चाबियाँ अच्छी लग सकती हैं। 

<div class="keyboard-options">
  <select ID="sound">
    <option value="0" selected>Keyboard</option>
    <option value="1">Organ</option>
    <option value="2">Acoustic Guitar</option>
    <option value="3">EDM, bro!</option>
  </select>
  Select scale: 
  <select ID="scale">
    <option value="C">C Major</option>
    <option value="Db">Db Major</option>
    <option value="D">D Major</option>
    <option value="Eb">Eb Major</option>
    <option value="E">E Major</option>
    <option value="F">F Major</option>
    <option value="Gb">Gb Major</option>
    <option value="G">G Major</option>
    <option value="Ab">Ab Major</option>
    <option value="A">A Major</option>
    <option value="Bb">Bb Major</option>
    <option value="B">B Major</option>
    <option value="C_m">C Minor</option>
    <option value="Bb_m">Bb Minor</option>
    <option value="D_m">D Minor</option>
    <option value="Eb_m">Eb Minor</option>
    <option value="E_m">E Minor</option>
    <option value="F_m">F Minor</option>
    <option value="Gb_m">Gb Minor</option>
    <option value="G_m">G Minor</option>
    <option value="Ab_m">Ab Minor</option>
    <option value="A_m">A Minor</option>
    <option value="Bb_m">Bb Minor</option>
    <option value="B_m">B Minor</option>
  </select>
  <div ID="keyboard" class="keyboard-holder"></div>
  <div class="keyboard-options">
    <small>
    Range [C<span ID="OCTAVE_LOWER">3</span>-B<span ID="OCTAVE_UPPER">5</span>]
    <input type="button" ID="-_OCTAVE" value="-" />
    <input type="button" ID="+_OCTAVE" value="+" /><br />
    <i>(कीबोर्ड के साथ समायोजित करने के लिए बाएँ / दाएँ तीर का उपयोग करें)</i>
    <p>ऑडियो सिंथेसाइज़र, <a href="http://www.keithwhor.com/">Keith William Horwood</a> द्वारा बनाया गया है</p>
    </small>
  </div>
</div>

## क्या तार और नोट्स खेलने के लिए?

जाहिर है आप जो भी नोट्स और कॉर्ड आपको पसंद है उसे बजा सकते हैं। कोई सही या गलत नहीं है संगीत के लिए हार्मोनिक ध्वनि नहीं है और कुछ असंगति या शोर एक ट्रैक से संबंधित है जितना कलाकार यह चाहता है। हालाँकि यदि आप चाहें तो कुछ नियम हैं जिन्हें आप आज़मा सकते हैं।

यदि आपकी रचना एक निश्चित कुंजी में है, तो एक उदाहरण के लिए C major को बताएं, आपके पास कुछ chords हैं जो संभवतः ट्रैक पर अच्छे लगते हैं। यहाँ एक मेज है जिसमें कुछ जज़ीज़ी तार हैं जो एक दूसरे के साथ अच्छी तरह से खेलना चाहिए। यदि आप चाहते हैं कि आप यहाँ और अधिक प्रगति देख सकते हैं: <a href="http://www.lotusmusic.com/chord-progression-map.html">lotusmusic.com/chord-progression-map.html</a>

Common chord progressions in major  |  I - IV - V   |   I - VI - IV - V   |   II - V - I

|Major key| I | II | III | IV | V | VI |
|---|---|---|---|---|---|---|
|C|chord(:C, :major7)|chord(:D, :minor7)|chord(:E, :minor7)|chord(:F, :major7)|chord(:G, &quot;7&quot;)|chord(:A, :minor7)|
|Db|chord(:Db, :major7)|chord(:Eb, :minor7)|chord(:F, :minor7)|chord(:Gb, :major7)|chord(:Ab, &quot;7&quot;)|chord(:Bb, :minor7)|
|D|chord(:D, :major7)|chord(:E, :minor7)|chord(:Gb, :minor7)|chord(:G, :major7)|chord(:A, &quot;7&quot;)|chord(:B, :minor7)|
|Eb|chord(:Eb, :major7)|chord(:F, :minor7)|chord(:G, :minor7)|chord(:Ab, :major7)|chord(:Bb, &quot;7&quot;)|chord(:C, :minor7)|
|E|chord(:E, :major7)|chord(:Gb, :minor7)|chord(:Ab, :minor7)|chord(:A, :major7)|chord(:B, &quot;7&quot;)|chord(:Db, :minor7)|
|F|chord(:F, :major7)|chord(:G, :minor7)|chord(:A, :minor7)|chord(:Bb, :major7)|chord(:C, &quot;7&quot;)|chord(:D, :minor7)|
|Gb|chord(:Gb, :major7)|chord(:Ab, :minor7)|chord(:Bb, :minor7)|chord(:Cb, :major7)|chord(:Db, &quot;7&quot;)|chord(:Eb, :minor7)|
|G|chord(:G, :major7)|chord(:A, :minor7)|chord(:B, :minor7)|chord(:C, :major7)|chord(:D, &quot;7&quot;)|chord(:E, :minor7)|
|Ab|chord(:Ab, :major7)|chord(:Bb, :minor7)|chord(:C, :minor7)|chord(:Db, :major7)|chord(:Eb, &quot;7&quot;)|chord(:F, :minor7)|
|A|chord(:A, :major7)|chord(:B, :minor7)|chord(:Db, :minor7)|chord(:D, :major7)|chord(:E, &quot;7&quot;)|chord(:Gb, :minor7)|
|Bb|chord(:Bb, :major7)|chord(:C, :minor7)|chord(:D, :minor7)|chord(:Eb, :major7)|chord(:F, &quot;7&quot;)|chord(:G, :minor7)|
|B|chord(:B, :major7)|chord(:Db, :minor7)|chord(:Eb, :minor7)|chord(:E, :major7)|chord(:Gb, &quot;7&quot;)|chord(:Ab, :minor7)|

Common chord progressions in natural minor  |  I - VI - VII  |   I - IV - VII  |   I - IV - V  |   I - VI - III - VII  |   II - V - I

|Minor key| I | II | III | IV | V | VI | VII |
|---|---|---|---|---|---|---|
|Cm|chord(:C, :minor7)|chord(:D, &quot;m7-5&quot;)|chord(:Eb, :major7)|chord(:F, :minor7)|chord(:G, :minor7)|chord(:Ab, :major7)|chord(:Bb, &quot;7&quot;)|
|Ddm|chord(:Dd, :minor7)|chord(:Eb, &quot;m7-5&quot;)|chord(:E, :major7)|chord(:Gb, :minor7)|chord(:Ab, :minor7)|chord(:A, :major7)|chord(:B, &quot;7&quot;)|
|Dm|chord(:D, :minor7)|chord(:E, &quot;m7-5&quot;)|chord(:F, :major7)|chord(:G, :minor7)|chord(:A, :minor7)|chord(:Bb, :major7)|chord(:C, &quot;7&quot;)|
|Ebm|chord(:Eb, :minor7)|chord(:F, &quot;m7-5&quot;)|chord(:Gb, :major7)|chord(:Ab, :minor7)|chord(:Bb, :minor7)|chord(:B, :major7)|chord(:Db, &quot;7&quot;)|
|Em|chord(:E, :minor7)|chord(:Gb, &quot;m7-5&quot;)|chord(:G, :major7)|chord(:A, :minor7)|chord(:B, :minor7)|chord(:C, :major7)|chord(:D, &quot;7&quot;)|
|Fm|chord(:F, :minor7)|chord(:G, &quot;m7-5&quot;)|chord(:Ab, :major7)|chord(:Bb, :minor7)|chord(:C, :minor7)|chord(:Db, :major7)|chord(:Eb, &quot;7&quot;)|
|Gbm|chord(:Gb, :minor7)|chord(:Ab, &quot;m7-5&quot;)|chord(:A, :major7)|chord(:B, :minor7)|chord(:Db, :minor7)|chord(:D, :major7)|chord(:E, &quot;7&quot;)|
|Gm|chord(:G, :minor7)|chord(:A, &quot;m7-5&quot;)|chord(:Bb, :major7)|chord(:C, :minor7)|chord(:D, :minor7)|chord(:Eb, :major7)|chord(:F, &quot;7&quot;)|
|Abm|chord(:Ab, :minor7)|chord(:Bb, &quot;m7-5&quot;)|chord(:B, :major7)|chord(:Db, :minor7)|chord(:Eb, :minor7)|chord(:E, :major7)|chord(:Gb, &quot;7&quot;)|
|Am|chord(:A, :minor7)|chord(:B, &quot;m7-5&quot;)|chord(:C, :major7)|chord(:D, :minor7)|chord(:E, :minor7)|chord(:F, :major7)|chord(:G, &quot;7&quot;)|
|Bbm|chord(:Bb, :minor7)|chord(:C, &quot;m7-5&quot;)|chord(:Db, :major7)|chord(:Eb, :minor7)|chord(:F, :minor7)|chord(:Gb, :major7)|chord(:Ab, &quot;7&quot;)|
|Bm|chord(:B, :minor7)|chord(:Db, &quot;m7-5&quot;)|chord(:D, :major7)|chord(:E, :minor7)|chord(:Gb, :minor7)|chord(:G, :major7)|chord(:A, &quot;7&quot;)|