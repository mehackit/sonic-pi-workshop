---
chapter: Clés, accords et gammes
title: Clés, accords et gammes
lang: fr
layout: exercise
---

Composer une mélodie avec Soni Pi peut être ardu si tu ne sais pas immédiatement comment sonnent `62` ou `:c3`. Pour t'aider, voici un clavier pour essayer tes idées. Si tu veux, tu peux sélectionner une gamme à partir de la liste déroulante pour voir quelles sont les notes qui sonnent bien dans cette gamme.

<div class="keyboard-options">
  <select ID="sound">
    <option value="0" selected>Clavier</option>
    <option value="1">Orgue</option>
    <option value="2">Guitare Acoustique</option>
    <option value="3">EDM, bro!</option>
  </select>
  Sélectionner la gamme :
  <select ID="scale">
    <option value="C">Do Majeur</option>
    <option value="Db">Réb Majeur</option>
    <option value="D">Ré Majeur</option>
    <option value="Eb">Mib Majeur</option>
    <option value="E">Mi Majeur</option>
    <option value="F">Fa Majeur</option>
    <option value="Gb">Solb Majeur</option>
    <option value="G">Sol Majeur</option>
    <option value="Ab">Lab Majeur</option>
    <option value="A">La Majeur</option>
    <option value="Bb">Sib Majeur</option>
    <option value="B">Si Majeur</option>
    <option value="C_m">Do Mineur</option>
    <option value="Bb_m">Réb Mineur</option>
    <option value="D_m">Ré Mineur</option>
    <option value="Eb_m">Mib Mineur</option>
    <option value="E_m">Mi Mineur</option>
    <option value="F_m">Fa Mineur</option>
    <option value="Gb_m">Solb Mineur</option>
    <option value="G_m">Sol Mineur</option>
    <option value="Ab_m">Lab Mineur</option>
    <option value="A_m">La Mineur</option>
    <option value="Bb_m">Sib Mineur</option>
    <option value="B_m">Si Mineur</option>
  </select>
  <div ID="keyboard" class="keyboard-holder"></div>
  <div class="keyboard-options">
    <small>
    Registre [C<span ID="OCTAVE_LOWER">3</span>-B<span ID="OCTAVE_UPPER">5</span>]
    <input type="button" ID="-_OCTAVE" value="-" />
    <input type="button" ID="+_OCTAVE" value="+" /><br />
    <i>(Flèches gauche/droite pour changer de registre)</i>
    <p>Audio Synthesizer, créé par <a href="http://www.keithwhor.com/">Keith William Horwood</a></p>
    </small>
  </div>
</div>

## Quels accords et notes jouer ?

Clairement tu peux jouer n'importe quels notes et accords que tu aimes. Il n'y a ni vérité ni erreur. La musique n'a pas à être harmonieuse et certaines dissonances ou bruits peuvent faire partie du morceau si l'artiste a décidé de les y introduire. Il y a cependant certaines règles que tu peux essayer de suivre.

Si ta composition est dans une certaine tonalité, par exemple en Do majeur, tu as certains accords qui sonneront bien dans le morceau. Voici un tableau avec des accords jazzy qui sonnent bien ensemble. Si tu veux, tu peux en trouver plus dans ces progressions d'accords&nbsp;: <a href="http://www.lotusmusic.com/chord-progression-map.html">lotusmusic.com/chord-progression-map.html</a>

Progressions usuelles d'accords en majeur  |  I - IV - V   |   I - VI - IV - V   |   II - V - I

|Tonalité majeur| I | II | III | IV | V | VI |
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

Progressions usuelles d'accords en mineur naturel  |  I - VI - VII  |   I - IV - VII  |   I - IV - V  |   I - VI - III - VII  |   II - V - I

|Tonalité mineur| I | II | III | IV | V | VI | VII |
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
