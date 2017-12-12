---
chapter: Toner, ackord och skalor
title: Toner, ackord och skalor
lang: se
layout: exercise
---

Ibland kan det vara svårt att komponera med Sonic Pi, eftersom du inte nödvändigtvis vet hur du t.ex borde utveckla melodin eller hur tonen `60` eller `:C3` låter. Du kan använda ett vanligt instrument som hjälp eller t.ex. ett virtualpiano, som du kan använda i webbläsaren för att snabbt prova olika melodier. 
Du kan välja tonart i menyn för att se vilka toner passar i tonarten ifråga. 

<div class="keyboard-options">
  <select ID="sound">
    <option value="0" selected>Keyboard</option>
    <option value="1">Organ</option>
    <option value="2">Acoustic Guitar</option>
    <option value="3">EDM, bro!</option>
  </select>
  Välj skala:
  <select ID="scale">
    <option value="C">C Dur</option>
    <option value="Db">Db Dur</option>
    <option value="D">D Dur</option>
    <option value="Eb">Eb Dur</option>
    <option value="E">E Dur</option>
    <option value="F">F Dur</option>
    <option value="Gb">Gb Dur</option>
    <option value="G">G Dur</option>
    <option value="Ab">Ab Dur</option>
    <option value="A">A Dur</option>
    <option value="Bb">Bb Dur</option>
    <option value="B">B Dur</option>
    <option value="C_m">C Moll</option>
    <option value="Bb_m">Bb Moll</option>
    <option value="D_m">D Moll</option>
    <option value="Eb_m">Eb Moll</option>
    <option value="E_m">E Moll</option>
    <option value="F_m">F Moll</option>
    <option value="Gb_m">Gb Moll</option>
    <option value="G_m">G Moll</option>
    <option value="Ab_m">Ab Moll</option>
    <option value="A_m">A Moll</option>
    <option value="Bb_m">Bb Moll</option>
    <option value="B_m">B Moll</option>
  </select>
  <div ID="keyboard" class="keyboard-holder"></div>
  <div class="keyboard-options">
    <small>
    Register [C<span ID="OCTAVE_LOWER">3</span>-B<span ID="OCTAVE_UPPER">5</span>]
    <input type="button" ID="-_OCTAVE" value="-" />
    <input type="button" ID="+_OCTAVE" value="+" /><br /><br />
    <p>Audio Synthesizer, skapad av <a href="http://www.keithwhor.com/">Keith William Horwood</a></p>
    </small>
  </div>
</div>

## Vilka toner och ackord lönar det sig att spela?

Som musiker kan du naturligtvis spela vilka toner eller ackord du vill. Till frågan i rubriken finns det inga rätt eller fel svar, och dissonans eller “oväsen” hör hemma i din låt om du vill så. Det finns vissa regler för hur du kan komponera “harmonisk” musik. 

Om din komposition är i någon speciell tonart som t.ex. C-dur, kan du använda vissa toner och ackord som låter bra i din låt. Nedan har du en tabell på vilka toner och ackordföljder låter bra ihop. Här
kan du bekanta dig bättre med ackordföljder: <a href="http://www.lotusmusic.com/chord-progression-map.html">lotusmusic.com/chord-progression-map.html</a>


Vanliga ackordföljder i dur  |  I - IV - V   |   I - VI - IV - V   |   II - V - I

|Dur Ton| I | II | III | IV | V | VI |
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

Vanliga ackordföljder i mol  |  I - VI - VII  |   I - IV - VII  |   I - IV - V  |   I - VI - III - VII  |   II - V - I

|Moll ton| I | II | III | IV | V | VI | VII |
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