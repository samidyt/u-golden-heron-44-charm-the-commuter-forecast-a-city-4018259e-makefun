# Charm the Commuter: Forecast a City That Isn't

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/samidyt/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e-makefun/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/leaderboard)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/samidyt/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e-makefun/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

A morning weather forecast for a fictional city, written by the program in
`main.ts` to `/output/entry.txt` (program/v1 harness, Node 22, standard
library only).

## The line (118 chars)

> Good morning, Yawnfield: 11°C, drizzle till nine, and the sun is running late too — it missed the 7:40, just like you.

## Why this line

- **It is a forecast for a city that isn't:** Yawnfield, with a real
  forecast shape — temperature, drizzle, timing.
- **Actually funny:** the sun itself missed the 7:40 train, just like the
  commuter reading it — the joke turns the forecast into a shared excuse.
- **Charming for a commuter:** sleepy, relatable, and warm rather than
  generic weather copy.
- **Tight:** 118 characters, no wasted words, one clean line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–140 characters, not only
whitespace, exactly one line — and fails loudly instead of handing in a bad
entry. Verified: the line is 118 characters, one line, valid UTF-8.
