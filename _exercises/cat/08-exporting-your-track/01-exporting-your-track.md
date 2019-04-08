---
chapter: Exportant la teua pista
title: Exportant la teua pista
lang: cat
layout: exercise
---

Quan estigueu satisfet amb la pista, potser voleu guardar-la com un arxiu d'àudio i compartir-la amb els amics en la xarxa (per exemple, en la vostra pàgina <a href="http://www.soundcloud.com/mehackit">SoundCloud</a>). Primer necessitareu enregistrar la cançó usant la funció guardar en Sonic Pi.

El procés d'enregistrament és senzill:
* Prem el botó Rec i hauria de quedar destacat
* Ara que l'enregistrament està premut, comença la teua cançó prement Run
* Una vegada que la teua cançó ha acabat (o una vegada que has reproduït suficients vegades les teues live_loops) prem Stop
* Finalment, prem de nou Rec per a parar l'enregistrament
* Guarda el teu arxiu d'àudio en la finestra de diàleg (per exemple amb el nom LaMeuaCançó.wav)


{% include videoplayer.html filepath="/assets/video/record_audio" %}

Una vegada que l’arxiu d'àudio està guardat, estareu llestos per a reproduir-lo i compartir-lo. No obstant açò, us recomanem que processeu l’arxiu d'àudio una mica, per a fer el so més professional i amb més volum. Amb aquest objectiu, utilitzarem Audacity, que és un programari lliure, de codi obert per enregistrar i editar sons. Podeu descarregar Audacity (per a Windows, Linux i OSX) ací: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>. 

## Audacity: eliminant silencis

Normalment quan enregistreu àudio amb Sonic Pi, hi haurà una mica de silenci extra en el principi i al final de la cançó. Si voleu, podeu eliminar aquest silenci no desitjat amb uns passos senzills. Primer, obriu l’arxiu d'àudio en Audacity des del menú “Arxiu / Obri” Una vegada obert l’arxiu veureu alguna cosa com aquesta:

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Ara navegueu pel menú “Efecte” i seleccioneu “Trunca un silenci”.

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Useu els següents valors en la finestra “Truncat de silenci”:

* Nivell: -60 dB
* Durada: 0.5 segons
* Truncar a: 0.1 segons


Després prem “Ok”.

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Ara hauríeu de veure que les parts del silenci en l'àudio s’han eliminat de l'ona de so.

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Normalització del volum

Ara farem que el so siga tan fort com siga possible sense compressió o sense fer cap dany al propi àudio. Si penseu que la música que heu creat està dominada ritme i penseu que hauria de sonar més fort, en general, aleshores el següent pas és el que necessiteu. D'altra banda, si el vostre material és més suau (com música ambiental, per exemple) i hauria de quedar-se així, aleshores no necessàriament recomanem que seguiu els següents passos per a normalitzar el so. De qualsevol manera, açò és el que heu de fer: Aneu al menú “Efecte” i selecciona “Normalitza”

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Poseu els següents valors en la finestra “Normalitza”:

* Normalitzar amplitud màxima a -0.1 dB

Selecciona els dues opcions de més amunt i prem “Ok”

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Ara hauríeu de veure que els pics de l'ona del so són més alts, la qual cosa significa que l'àudio resultant és també més fort.

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Desant arxius MP3

Ara només haureu de guardar un arxiu d'àudio. Per exemple, si voleu guardar la pista en un arxiu MP3, obriu el menú “Fitxer” i seleccioneu “Exporta l’àudio...”

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

En la finestra Exporta l’àudio hauríeu de veure un menú desplegable en algun lloc de la finestra d'arxius. Seleccioneu “Arxius MP3” del menú. Podeu usar un dels ajustos preestablerts en les Opcions de format per als arxius MP3. Per exemple, les següent opcions de format haurien de funcionar sempre de forma decent:

* Manera de velocitat de transferència: Valor predefinit
* Qualitat: Estàndard, 170-210 kbps
* Velocitat variable: Ràpida
* Mode de canal: Estèreo unit

El següent és posar un nom d'arxiu en el camp “Nom” i prémer “Desar”. Ja ho tenim! Ara teniu l'arxiu MP3 de la pista, que podeu enviar fàcilment als amics, posar-ho en SoundCloud o pujar-ho al telèfon mòbil. 

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

Esperem que us hageu divertit creant i publicant pistes amb Sonic Pi!
