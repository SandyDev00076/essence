import { APPEAR_DURATION, BTN_FADE_ANIM_DURATION } from "../App.constants";

export function animateCard(ele: HTMLDivElement | null, index = 0) {
  if (!ele) return;
  ele.animate(
    [
      { opacity: 0, transform: "translateY(10px)", offset: 0 },
      { opacity: 1, transform: "translateY(0px)", offset: 1 },
    ],
    {
      fill: "forwards",
      duration: APPEAR_DURATION,
      delay: index * APPEAR_DURATION,
      easing: "ease-in-out",
    }
  );
}

export function animateBtnDisappearance(btn: HTMLButtonElement | null) {
  if (!btn) return;
  btn.animate(
    [
      { opacity: 1, offset: 0 },
      { opacity: 0, offset: 1 },
    ],
    {
      fill: "forwards",
      duration: BTN_FADE_ANIM_DURATION,
      easing: "linear",
    }
  );
}

export function animateBtnAppearance(btn: HTMLButtonElement | null) {
  if (!btn) return;
  btn.animate(
    [
      { opacity: 0, offset: 0 },
      { opacity: 1, offset: 1 },
    ],
    {
      fill: "forwards",
      duration: APPEAR_DURATION,
      easing: "linear",
    }
  );
}
