# Simple Slow Techno
# Mehackit 2016

use_bpm 80

live_loop :kickdrum do
  sample :bd_haus, amp: 1
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_soft, amp: 0.4
  sleep 0.5
end

live_loop :snare do
  sleep 1
  sample :drum_snare_soft, amp: 1.3
  sleep 1
end

live_loop :pulputus do
  with_fx :reverb, amp: 1, mix: 0.25 do
    use_synth :tb303
    nuotti = (chord :C2, :minor).choose
    play nuotti, cutoff: rrand(10, 130), release: 0.1, amp: 0.7, release: 0.1
    sleep 0.25
  end
end