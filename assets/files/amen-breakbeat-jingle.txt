# Amen Breakbeat Jingle
# Mehackit 2016

use_bpm 160

with_fx :nrlpf, mix: 0.5, res: 0.4, mix: 1.0, cutoff: 60, cutoff_slide: 4, mix_slide: 4 do |dc|
  with_fx :bitcrusher, mix: 0.2, sample_rate: 1000, sample_rate_slide: 4, mix_slide: 4 do |bc|
    control bc, sample_rate_slide: 4, sample_rate: 22000
    control dc, cutoff_slide: 4, cutoff: 130
    with_fx :wobble, mix: 1, res: 0.8, phase: 0.3, phase_slide: 8 do |w|
      control w, phase: 10
      r = sample :loop_amen_full, rate: 1.5, rate_slide: 8, cutoff_slide: 8, cutoff: 130
      control r, rate: 0.5, cutoff: 30
      sleep 8
    end
    with_fx :reverb, room: 0.9 do
      sample :ambi_piano
    end
    sample :loop_amen, rate: 1, beat_stretch: 4
    control bc, sample_rate_slide: 4, sample_rate: 10000
    control dc, cutoff_slide: 2, cutoff: 130
    sleep 4
    sample :loop_amen, start: 0.0, finish: 0.175, rate: 1, beat_stretch: 4
    sleep 0.5
    sample :loop_amen, start: 0.0, finish: 0.175, rate: 1.1, beat_stretch: 4
    sleep 0.5
    sample :loop_amen, start: 0.75, finish: 0.875, rate: 1, beat_stretch: 4
    sleep 0.5
    sample :loop_amen, start: 0.75, finish: 0.875, rate: 1, beat_stretch: 4
    sleep 0.5
    control dc, cutoff_slide: 4, cutoff: 70
    sample :loop_amen, start: 0.5, finish: 0.75, rate: 1, beat_stretch: 4
    sleep 1
    sample :loop_amen, start: 0.5, finish: 0.75, rate: 0.95, beat_stretch: 4
    sleep 1
    sample :loop_amen, start: 0.5, finish: 0.75, rate: 0.9, beat_stretch: 4
    sleep 1
    sample :loop_amen, start: 0.5, finish: 0.75, rate: 0.85, beat_stretch: 4
    sleep 1
    control bc, sample_rate_slide: 0, sample_rate: 1000
    control dc, cutoff_slide: 0, cutoff: 70
    sample :loop_amen, rate: 1.25, start: 0, finish: 0.25, beat_stretch: 4
    control bc, sample_rate_slide: 4, sample_rate: 10000
    control dc, cutoff_slide: 1, cutoff: 130
    sample :loop_amen, rate: 1.0, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.05, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.1, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.15, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.20, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.25, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.3, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.35, start: 0.25, finish: 0.35, beat_stretch: 4
    sleep 0.25
    sample :loop_amen, rate: 1.65, start: 0, finish: 0.15, beat_stretch: 4
    sleep 0.5
    sample :loop_amen, rate: 1.25, start: 0, finish: 0.25, beat_stretch: 4
    sleep 0.5
    sample :loop_amen, start: 0.75, finish: 0.875, rate: 1, beat_stretch: 4
    sleep 0.5
    sample :loop_amen, start: 0.75, finish: 0.875, rate: 1, beat_stretch: 4
    sleep 0.5
    with_fx :reverb, room: 0.9 do
      sample :loop_amen_full, start: 0.9, finish: 1, rate: 1, beat_stretch: 16, amp: 0.8
      sleep 0.5
      sample :ambi_piano, rate: 0.75
    end
    sleep 8
    control dc, mix: 0.0
    control bc, mix: 0.0
  end
end