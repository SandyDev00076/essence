export interface BPCard {
  title: string;
  content: JSX.Element | string;
}

interface BPState {
  type: "Low" | "Pre-high" | "Ideal" | "High";
  cards: BPCard[];
}

interface Props {
  children: React.ReactNode;
}

const Good = ({ children }: Props) => {
  return <span className="goodIndication">{children}</span>;
};

const Bad = ({ children }: Props) => {
  return <span className="badIndication">{children}</span>;
};

export const InvalidContent: JSX.Element = (
  <Bad>Values that you have entered are wrong. Reset and try again.</Bad>
);

export const ReferenceCard: BPCard = {
  title: "Reference",
  content: (
    <a
      href="https://www.nhs.uk/conditions/blood-pressure-test/"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.nhs.uk
    </a>
  ),
};

export function getBPState(systolic: string, diastolic: string): BPState {
  const sys = parseInt(systolic);
  const dia = parseInt(diastolic);

  if (sys < 90 && dia < 60)
    return {
      type: "Low",
      cards: [
        {
          title: "Risks",
          content: (
            <span>
              Naturally low blood pressure is <Good>unlikely</Good> to cause any
              symptoms and is normally nothing to worry about.
            </span>
          ),
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
              <a
                href="https://www.mayoclinic.org/diseases-conditions/low-blood-pressure/diagnosis-treatment/drc-20355470"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mayo Clinic
              </a>
              <a
                href="https://www.webmd.com/heart/understanding-low-blood-pressure-basics#1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebMD
              </a>
            </>
          ),
        },
        ReferenceCard,
      ],
    };
  if (sys < 120 && dia < 80)
    return {
      type: "Ideal",
      cards: [
        {
          title: "About",
          content: (
            <span>
              Your blood pressure is in the <Good>ideal range</Good>. Keep up a
              healthy lifestyle, as not only will this help your blood pressure
              – and risk of having a heart attack or stroke – but also many
              wider health issues.
            </span>
          ),
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
        ReferenceCard,
      ],
    };
  if (sys < 140 && dia < 90)
    return {
      type: "Pre-high",
      cards: [
        {
          title: "About",
          content: (
            <span>
              Your blood pressure is described as being <Bad>high-normal</Bad>.
              Ideally, it should be <Good>below 120/80mmHg</Good>.
            </span>
          ),
        },
        {
          title: "Risks",
          content: (
            <span>
              Known as the <Bad>"silent killer"</Bad>, high blood pressure
              rarely has obvious symptoms. But left untreated, it{" "}
              <Bad>increases your risk of having a heart attack</Bad> or stroke.
            </span>
          ),
        },
        {
          title: "Remedy",
          content: (
            <>
              The <Good>good news</Good> is it can be brought under control
              through lifestyle changes, such as:
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
              <a
                href="https://www.mayoclinic.org/diseases-conditions/prehypertension/symptoms-causes/syc-20376703"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mayo Clinic
              </a>
              <a
                href="https://www.webmd.com/hypertension-high-blood-pressure/guide/prehypertension-are-you-at-risk#1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebMD
              </a>
              <a
                href="https://www.kidney.org/news/kidneyCare/fall10/Prehypertension"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kidney.org
              </a>
            </>
          ),
        },
        ReferenceCard,
      ],
    };
  return {
    type: "High",
    cards: [
      {
        title: "About",
        content: (
          <span>
            Your reading of {sys}/{dia} is <Bad>high</Bad>, also known as{" "}
            <Bad>'silent killer'</Bad>. If your GP practice does not already
            know about this, make an appointment to see either your doctor or
            nurse in the next month to get it checked.
          </span>
        ),
      },
      {
        title: "Risks",
        content: (
          <span>
            High blood pressure rarely has obvious symptoms. But left untreated,
            it <Bad>increases your risk of having a heart attack</Bad> or
            stroke.
          </span>
        ),
      },
      {
        title: "Remedy",
        content: (
          <>
            While you may need medication, the <Good>good news</Good> is you may
            well be able to lower your blood pressure through lifestyle changes,
            such as:
            <ul>
              <li>Losing weight (if you're overweight)</li>
              <li>Reducing the amount of salt in your diet</li>
              <li>Exercising regularly</li>
              <li>Cutting back on alcohol and caffeine</li>
            </ul>
          </>
        ),
      },
      {
        title: "Links",
        content: (
          <>
            <a
              href="https://www.healthline.com/health/high-blood-pressure-hypertension#overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Healthline
            </a>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mayo Clinic
            </a>
            <a
              href="https://www.heart.org/en/health-topics/high-blood-pressure"
              target="_blank"
              rel="noopener noreferrer"
            >
              heart.org
            </a>
          </>
        ),
      },
      ReferenceCard,
    ],
  };
}
