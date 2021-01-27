export interface BPCard {
  title: string;
  content: JSX.Element | string;
}

interface BPState {
  type: "Low" | "Pre-high" | "Ideal" | "High";
  cards: BPCard[];
}

export function getBPState(systolic: string, diastolic: string): BPState {
  console.log("systolic - ", systolic);
  console.log("diastolic - ", diastolic);
  const sys = parseInt(systolic);
  const dia = parseInt(diastolic);

  if (sys < 90 && dia < 60)
    return {
      type: "Low",
      cards: [
        {
          title: "Risks",
          content:
            "Naturally low blood pressure is unlikely to cause any symptoms and is normally nothing to worry about.",
        },
        {
          title: "Tip",
          content: (
            <>
              However, if you have any of the following symptoms, please see
              your doctor:
              <ul>
                <li>Chest Pain</li>
                <li>Sweating</li>
                <li>Shortness of breath</li>
                <li>Unsteadiness</li>
                <li>Dizziness</li>
                <li>Light-Headedness</li>
                <li>Fainting</li>
              </ul>
            </>
          ),
        },
        {
          title: "Links",
          content: (
            <>
              <a href="https://www.mayoclinic.org/diseases-conditions/low-blood-pressure/diagnosis-treatment/drc-20355470">
                Mayo Clinic
              </a>
              <a href="https://www.webmd.com/heart/understanding-low-blood-pressure-basics#1">
                WebMD
              </a>
            </>
          ),
        },
      ],
    };
  if (sys < 120 && dia < 80)
    return {
      type: "Ideal",
      cards: [
        {
          title: "About",
          content:
            "Your blood pressure is in the ideal range. Keep up a healthy lifestyle, as not only will this help your blood pressure – and risk of having a heart attack or stroke – but also many wider health issues.",
        },
        {
          title: "Tip",
          content:
            "Pass the message on to friends and family – high blood pressure has no symptoms, so everyone should be tested regularly.",
        },
        {
          title: "Good habits",
          content: (
            <>
              You can control your blood pressure by doing some or all of the
              following:
              <ul>
                <li>Maintaining a healthy weight</li>
                <li>Taking regular exercise</li>
                <li>Checking your blood pressure at least every five years</li>
              </ul>
            </>
          ),
        },
        {
          title: "At home",
          content:
            "If you have a home blood pressure monitor, check your blood pressure regularly, but make sure to tell your GP you're doing this.",
        },
      ],
    };
  if (sys < 140 && dia < 90)
    return {
      type: "Pre-high",
      cards: [
        {
          title: "About",
          content:
            "Your blood pressure is described as being high-normal. Ideally, it should be below 120/80mmHg.",
        },
        {
          title: "Risks",
          content:
            'Known as the "silent killer", high blood pressure rarely has obvious symptoms. But left untreated, it increases your risk of having a heart attack or stroke.',
        },
        {
          title: "Remedy",
          content: (
            <>
              The good news is it can be brought under control through lifestyle
              changes, such as:
              <ul>
                <li>Losing weight (if you're overweight)</li>
                <li>Reducing the amount of salt in your diet</li>
                <li>Exercising regularly</li>
                <li>Cutting back on alcohol and caffeine</li>
                <li>You may also need medication</li>
              </ul>
            </>
          ),
        },
        {
          title: "Links",
          content: (
            <>
              <a href="https://www.mayoclinic.org/diseases-conditions/prehypertension/symptoms-causes/syc-20376703">
                Mayo Clinic
              </a>
              <a href="https://www.webmd.com/hypertension-high-blood-pressure/guide/prehypertension-are-you-at-risk#1">
                WebMD
              </a>
              <a href="https://www.kidney.org/news/kidneyCare/fall10/Prehypertension">
                Kidney.org
              </a>
            </>
          ),
        },
      ],
    };
  return {
    type: "High",
    cards: [
      {
        title: "About",
        content: `Your reading of ${sys}/${dia} is high, also known as 'silent killer'. If your GP practice does not already know about this, make an appointment to see either your doctor or nurse in the next month to get it checked.`,
      },
      {
        title: "Risks",
        content:
          "High blood pressure rarely has obvious symptoms. But left untreated, it increases your risk of having a heart attack or stroke.",
      },
      {
        title: "Remedy",
        content: (
          <>
            While you may need medication, the good news is you may well be able
            to lower your blood pressure through lifestyle changes, such as:
            <ul>
              <li>Losing weight (if you're overweight)</li>
              <li>Reducing the amount of salt in your diet</li>
              <li>Exercising regularly</li>
              <li>Cutting back on alcohol and caffeine</li>
            </ul>
          </>
        ),
      },
    ],
  };
}
