---
chapter: Introducció
title: Introducció
lang: cat
layout: exercise
---

Sonic Pi és un entorn de programació de codi obert, dissenyat per explorar i ensenyar conceptes de programació a través del procés de crear sons nous. És un sintetitzador gratuït de programació en temps real per a tothom, creat per Sam Aaron al laboratori d'informàtica de la Universitat de Cambridge. Podeu fer servir Sonic Pi per programar, compondre i interpretar en un ventall amplíssim d'estils, des de clàssics a contemporanis, de Canons a Dubstep.

Aquest tutorial us guiarà per fer els primers passos i anar més enllà amb Sonic Pi. Al final d'aquest tutorial sereu capaç de crear coses com aquesta:

{% include player.html filepath="/assets/audio/groove.mp3" %}

O com aquesta:

{% include player.html filepath="/assets/audio/amen.mp3" %}

En Sonic Pi, del que es tracta és d'explorar. No hi ha errors, només descobriments. I sobretot, és qüestió de passar-s'ho bé. Així que recorda: diverteix-te, explora i hackeja!

## Obriu Sonic Pi

Si no teniu instal·lat Sonic Pi, visiteu <a href="http://sonic-pi.net/">sonic-pi.net</a>, descarregueu-lo i instal·leu-lo. Està disponible per a Windows, macOS i sistemes operatius Linux.

Després, enceneu Sonic Pi! Vegem com és.

Aquest és la interfície de Sonic Pi; té tres finestres principals. La major és per a escriure el codi i la podem anomenar Panell de Programació. Hi ha també un panell de registre, que mostra informació sobre el programa quan s'executa. Quan feu clic sobre el botó d'ajuda, a la part de dalt de la finestra, un tercer panell apareix a la part del fons mostrant la documentació d'ajuda. Aquesta documentació conté informació sobre el llenguatge per programar Sonic Pi, i també sobre els diferents sintetitzadors de so, exemples de so, i moltes coses més. Hi ha també multitud d'exemples llestos per funcionar que podeu provar i utilitzar!

 
<img src="{{ "/assets/img/interface_cat.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## Reproduir una nota

Comencem programant Sonic Pi per tocar una nota. Seleccioneu el `Buffer 0` i escriviu:

{% highlight ruby %}
play 60
{% endhighlight %}

Premeu **Run**, a la cantonada superior esquerra. Pots sentir un so?

Proveu diferents valors. Escriviu per exemple `play 50` o `play 70`. Com canvia el so?


Ara intenteu escriure `pley 60` i premeu **run**. Què ocorre?

> Aquest és un exemple d'un error en el teu codi. En les activitats de més endavant, si el panell d'error mostra un text, sabreu que teniu un error que necessiteu corregir. Podria ser que heu escrit una paraula malament, com `play`.


Els nombres que heu utilitzat són notes MIDI. MIDI és una forma pràctica de compondre i és una eina pràctica per provar ràpidament les notes i ajustar-les disminuint el seu valor (fent la teva nota més greu) o incrementant-la, (fent el to més agut). Sonic Pi està familiaritzat tant amb la notació numèrica en MIDI (amb valors entre 0 i 127) i la notació musical tradicional (com: :C4, :Eb3 o :G5).
