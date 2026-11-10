export type Lang = "en" | "kn";
export type Localized = { en: string; kn: string };
export const copy = (en: string, kn: string): Localized => ({ en, kn });

export const intro = copy(
  "Karave Koushalya is an initiative of Karnataka Rakshana Vedike to help Kannadigas build skills, find guidance and prepare for better career opportunities.",
  "ಕರವೇ ಕೌಶಲ್ಯವು ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಉಪಕ್ರಮ. ಕನ್ನಡಿಗರ ಕೌಶಲ್ಯವೃದ್ಧಿ, ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಉತ್ತಮ ಉದ್ಯೋಗಾವಕಾಶಗಳಿಗೆ ಸಿದ್ಧತೆ ಕಲ್ಪಿಸುವುದು ಇದರ ಉದ್ದೇಶ.",
);

export const vision = copy(
  "A Karnataka where every Kannadiga has the skills, confidence and opportunity to build a better future.",
  "ಪ್ರತಿಯೊಬ್ಬ ಕನ್ನಡಿಗರೂ ಕೌಶಲ್ಯ, ಆತ್ಮವಿಶ್ವಾಸ ಮತ್ತು ಅವಕಾಶಗಳ ನೆರವಿನಿಂದ ಉತ್ತಮ ಭವಿಷ್ಯ ಕಟ್ಟಿಕೊಳ್ಳುವ ಕರ್ನಾಟಕ.",
);

export const mission = copy(
  "Bring learning, mentorship and industry connections together to help Karnataka’s people prepare for employment and entrepreneurship.",
  "ಕಲಿಕೆ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಉದ್ಯಮ ಸಂಪರ್ಕಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ, ಕರ್ನಾಟಕದ ಜನರನ್ನು ಉದ್ಯೋಗ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆಗೆ ಸಜ್ಜುಗೊಳಿಸುವುದು.",
);

export const leadershipDescription = copy(
  "Under the leadership of T. A. Narayana Gowda, Karnataka Rakshana Vedike is bringing its commitment to Kannadigas into a practical skill and career development initiative.",
  "ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರ ನೇತೃತ್ವದಲ್ಲಿ, ಕರ್ನಾಟಕ ರಕ್ಷಣಾ ವೇದಿಕೆಯ ಕನ್ನಡಿಗರ ಪರ ಬದ್ಧತೆಯನ್ನು ಕೌಶಲ್ಯ ಮತ್ತು ವೃತ್ತಿ ಅಭಿವೃದ್ಧಿಯ ಪ್ರಾಯೋಗಿಕ ಉಪಕ್ರಮವಾಗಿ ರೂಪಿಸಲಾಗುತ್ತಿದೆ.",
);

type ProgramArea = {
  id: "skills" | "guidance" | "opportunity";
  title: Localized;
  intro: Localized;
  summary: Localized;
  features: { title: Localized; description: Localized }[];
  audience: Localized;
};

export const programAreas: ProgramArea[] = [
  {
    id: "skills",
    title: copy("Skills & certification", "ಕೌಶಲ್ಯ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ"),
    intro: copy(
      "Learn skills that matter at work.",
      "ಕೆಲಸಕ್ಕೆ ಬೇಕಾದ ಕೌಶಲ್ಯ ಕಲಿಯಿರಿ.",
    ),
    summary: copy(
      "Planned practical training and skill assessments for people from different educational and work backgrounds.",
      "ವಿವಿಧ ಶಿಕ್ಷಣ ಮತ್ತು ವೃತ್ತಿ ಹಿನ್ನೆಲೆಯ ಜನರಿಗಾಗಿ ಪ್ರಸ್ತಾವಿತ ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ ಮತ್ತು ಕೌಶಲ್ಯ ಮೌಲ್ಯಮಾಪನ.",
    ),
    features: [
      {
        title: copy("Practical training", "ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ"),
        description: copy(
          "Learning paths in technology, professional services, skilled trades and workplace skills, matched to each learner’s starting point.",
          "ಕಲಿಯುವವರ ಹಿನ್ನೆಲೆಗೆ ತಕ್ಕಂತೆ ತಂತ್ರಜ್ಞಾನ, ವೃತ್ತಿಪರ ಸೇವೆಗಳು, ನುರಿತ ಕೆಲಸಗಳು ಮತ್ತು ಕೆಲಸದ ಸ್ಥಳದ ಕೌಶಲ್ಯಗಳಲ್ಲಿ ಕಲಿಕೆಯ ಮಾರ್ಗಗಳು.",
        ),
      },
      {
        title: copy("Skill assessments", "ಕೌಶಲ್ಯ ಮೌಲ್ಯಮಾಪನ"),
        description: copy(
          "Planned assessments and digital certificates to help candidates demonstrate their skills. Certification standards will be confirmed before launch.",
          "ಅಭ್ಯರ್ಥಿಗಳು ತಮ್ಮ ಸಾಮರ್ಥ್ಯ ತೋರಿಸಲು ಪ್ರಸ್ತಾವಿತ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರಗಳು. ಪ್ರಮಾಣೀಕರಣದ ಮಾನದಂಡಗಳನ್ನು ಆರಂಭಕ್ಕೂ ಮುನ್ನ ದೃಢಪಡಿಸಲಾಗುತ್ತದೆ.",
        ),
      },
      {
        title: copy("Learning communities", "ಕಲಿಕೆಯ ಸಮುದಾಯಗಳು"),
        description: copy(
          "Proposed college chapters, final-year training camps and professional networks to make continued learning more accessible.",
          "ನಿರಂತರ ಕಲಿಕೆಯನ್ನು ಸುಲಭಗೊಳಿಸಲು ಪ್ರಸ್ತಾವಿತ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿ ಘಟಕಗಳು, ಅಂತಿಮ ವರ್ಷದ ತರಬೇತಿ ಶಿಬಿರಗಳು ಮತ್ತು ವೃತ್ತಿಪರ ಸಂಪರ್ಕ ಜಾಲಗಳು.",
        ),
      },
      {
        title: copy("Skill & job fairs", "ಕೌಶಲ್ಯ ಮತ್ತು ಉದ್ಯೋಗ ಮೇಳಗಳು"),
        description: copy(
          "Planned district and state events connecting learners with trainers, employers and career opportunities.",
          "ಕಲಿಯುವವರನ್ನು ತರಬೇತುದಾರರು, ಉದ್ಯೋಗದಾತರು ಮತ್ತು ವೃತ್ತಿ ಅವಕಾಶಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲು ಪ್ರಸ್ತಾವಿತ ಜಿಲ್ಲಾ ಮತ್ತು ರಾಜ್ಯಮಟ್ಟದ ಮೇಳಗಳು.",
        ),
      },
    ],
    audience: copy(
      "For students, job seekers and working people across education levels.",
      "ವಿವಿಧ ಶಿಕ್ಷಣ ಹಂತಗಳ ವಿದ್ಯಾರ್ಥಿಗಳು, ಉದ್ಯೋಗಾಕಾಂಕ್ಷಿಗಳು ಮತ್ತು ಕೆಲಸ ಮಾಡುತ್ತಿರುವವರಿಗಾಗಿ.",
    ),
  },
  {
    id: "guidance",
    title: copy("Career guidance & mentorship", "ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ"),
    intro: copy(
      "Find clarity for your next step.",
      "ನಿಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆಗೆ ಸ್ಪಷ್ಟತೆ ಪಡೆಯಿರಿ.",
    ),
    summary: copy(
      "Planned guidance from experienced professionals to help young Kannadigas make informed career choices and prepare with confidence.",
      "ಯುವ ಕನ್ನಡಿಗರು ಸೂಕ್ತ ವೃತ್ತಿ ಆಯ್ಕೆಮಾಡಿ, ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಸಿದ್ಧರಾಗಲು ಅನುಭವಿ ವೃತ್ತಿಪರರಿಂದ ಪ್ರಸ್ತಾವಿತ ಮಾರ್ಗದರ್ಶನ.",
    ),
    features: [
      {
        title: copy("Individual guidance", "ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ"),
        description: copy(
          "One-to-one support is planned for technology and professional careers, including career planning, resume feedback and interview preparation.",
          "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ವೃತ್ತಿಪರ ಉದ್ಯೋಗಗಳಿಗಾಗಿ ವೃತ್ತಿ ಯೋಜನೆ, ಪರಿಚಯಪತ್ರ ಸುಧಾರಣೆ ಮತ್ತು ಸಂದರ್ಶನ ಸಿದ್ಧತೆಯಲ್ಲಿ ವೈಯಕ್ತಿಕ ನೆರವು ನೀಡುವ ಯೋಜನೆ.",
        ),
      },
      {
        title: copy("Practical workshops", "ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಾಗಾರಗಳು"),
        description: copy(
          "Group sessions for technical and service workers on workplace communication, rights awareness and career growth.",
          "ತಾಂತ್ರಿಕ ಮತ್ತು ಸೇವಾ ವಲಯದ ಕೆಲಸಗಾರರಿಗೆ ಸಂವಹನ, ಹಕ್ಕುಗಳ ಅರಿವು ಮತ್ತು ವೃತ್ತಿ ಬೆಳವಣಿಗೆ ಕುರಿತು ಗುಂಪು ಕಾರ್ಯಾಗಾರಗಳು.",
        ),
      },
      {
        title: copy("Share your experience", "ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಳ್ಳಿ"),
        description: copy(
          "Professionals can contribute as mentors, with a proposed commitment of 1–2 hours a month. Companies can support employee volunteering.",
          "ವೃತ್ತಿಪರರು ತಿಂಗಳಿಗೆ 1–2 ಗಂಟೆಗಳ ಪ್ರಸ್ತಾವಿತ ಸಮಯದ ಕೊಡುಗೆಯೊಂದಿಗೆ ಮಾರ್ಗದರ್ಶಕರಾಗಬಹುದು. ಕಂಪನಿಗಳು ಉದ್ಯೋಗಿಗಳ ಸ್ವಯಂಸೇವೆಗೆ ಬೆಂಬಲ ನೀಡಬಹುದು.",
        ),
      },
    ],
    audience: copy(
      "For people seeking direction and professionals who want to guide others.",
      "ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು ಮತ್ತು ಇತರರಿಗೆ ದಾರಿ ತೋರಲು ಆಸಕ್ತರಾದ ವೃತ್ತಿಪರರಿಗಾಗಿ.",
    ),
  },
  {
    id: "opportunity",
    title: copy("Employment & entrepreneurship", "ಉದ್ಯೋಗ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ"),
    intro: copy(
      "Prepare for work or start a business.",
      "ಉದ್ಯೋಗಕ್ಕೆ ಸಿದ್ಧರಾಗಿ. ಉದ್ಯಮದ ದಾರಿ ಅರಿಯಿರಿ.",
    ),
    summary: copy(
      "Proposed support for work experience, starting a business and communicating confidently in the workplace.",
      "ಕೆಲಸದ ಅನುಭವ ಪಡೆಯಲು, ಉದ್ಯಮ ಆರಂಭಿಸಲು ಮತ್ತು ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಸಂವಹನ ನಡೆಸಲು ಪ್ರಸ್ತಾವಿತ ಬೆಂಬಲ.",
    ),
    features: [
      {
        title: copy("Paid work experience", "ಗೌರವಧನ ಸಹಿತ ಕೆಲಸದ ಅನುಭವ"),
        description: copy(
          "Karave Udyoga Sanjeevini proposes 3–6 month paid internships and apprenticeships with future employer partners.",
          "ಕರವೇ ಉದ್ಯೋಗ ಸಂಜೀವಿನಿ ಮೂಲಕ ಭವಿಷ್ಯದ ಉದ್ಯೋಗದಾತರ ಸಹಭಾಗಿತ್ವದಲ್ಲಿ 3–6 ತಿಂಗಳ ಗೌರವಧನ ಸಹಿತ ಇಂಟರ್ನ್‌ಶಿಪ್ ಮತ್ತು ಅಪ್ರೆಂಟಿಸ್‌ಶಿಪ್‌ಗಳನ್ನು ಯೋಜಿಸಲಾಗಿದೆ.",
        ),
      },
      {
        title: copy("Start a business", "ನಿಮ್ಮ ಉದ್ಯಮ ಆರಂಭಿಸಿ"),
        description: copy(
          "Proposed Swayam Udyoga support includes business planning, guidance on finance options and connections to supplier networks.",
          "ಪ್ರಸ್ತಾವಿತ ಸ್ವಯಂ ಉದ್ಯೋಗ ಬೆಂಬಲವು ವ್ಯವಹಾರ ಯೋಜನೆ, ಹಣಕಾಸಿನ ಆಯ್ಕೆಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪೂರೈಕೆದಾರರ ಸಂಪರ್ಕಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.",
        ),
      },
      {
        title: copy("Confidence at work", "ಕೆಲಸದಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸ"),
        description: copy(
          "The planned fluency hub brings together Kannada and English communication, interview preparation and professional etiquette.",
          "ಪ್ರಸ್ತಾವಿತ ಭಾಷಾ ಸಂವಹನ ಕೇಂದ್ರವು ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಸಂವಹನ, ಸಂದರ್ಶನ ಸಿದ್ಧತೆ ಹಾಗೂ ವೃತ್ತಿಪರ ಶಿಷ್ಟಾಚಾರವನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.",
        ),
      },
    ],
    audience: copy(
      "For first-time job seekers, aspiring entrepreneurs and employers interested in local talent.",
      "ಮೊದಲ ಉದ್ಯೋಗದ ಹುಡುಕಾಟದಲ್ಲಿರುವವರು, ಉದ್ಯಮ ಆರಂಭಿಸಲು ಬಯಸುವವರು ಮತ್ತು ಸ್ಥಳೀಯ ಪ್ರತಿಭೆಯಲ್ಲಿ ಆಸಕ್ತರಾದ ಉದ್ಯೋಗದಾತರಿಗಾಗಿ.",
    ),
  },
];

export const guidanceRegistrationUrl = "https://forms.gle/GD4aqzcX7ezvwxQj7";
export const mentorRegistrationUrl = "https://forms.gle/YnSzaPG25uEhjYDS9";

type Role = {
  id: "mentee" | "mentor" | "corporate" | "admin";
  title: Localized;
  description: Localized;
  action: Localized;
  registrationUrl?: string;
};

export const roles: Role[] = [
  {
    id: "mentee",
    title: copy("People seeking guidance", "ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು"),
    description: copy(
      "For students, job seekers and professionals looking for skills, career guidance and opportunities.",
      "ಕೌಶಲ್ಯ, ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಅವಕಾಶಗಳನ್ನು ಬಯಸುವ ವಿದ್ಯಾರ್ಥಿಗಳು, ಉದ್ಯೋಗಾಕಾಂಕ್ಷಿಗಳು ಮತ್ತು ವೃತ್ತಿಪರರಿಗಾಗಿ.",
    ),
    action: copy("Register for guidance", "ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ನೋಂದಣಿ"),
    registrationUrl: guidanceRegistrationUrl,
  },
  {
    id: "mentor",
    title: copy("Mentors", "ಮಾರ್ಗದರ್ಶಕರು"),
    description: copy(
      "Share your professional experience and help someone take their next step.",
      "ನಿಮ್ಮ ವೃತ್ತಿ ಅನುಭವ ಹಂಚಿಕೊಂಡು, ಮತ್ತೊಬ್ಬರು ಮುಂದಿನ ಹೆಜ್ಜೆ ಇಡಲು ನೆರವಾಗಿ.",
    ),
    action: copy("Mentor registration", "ಮಾರ್ಗದರ್ಶಕರ ನೋಂದಣಿ"),
    registrationUrl: mentorRegistrationUrl,
  },
  {
    id: "corporate",
    title: copy("Companies & partners", "ಕಂಪನಿಗಳು ಮತ್ತು ಸಹಭಾಗಿಗಳು"),
    description: copy(
      "Connect with local talent or support training, mentoring and work experience.",
      "ಸ್ಥಳೀಯ ಪ್ರತಿಭೆಯೊಂದಿಗೆ ಸಂಪರ್ಕ ಬೆಳೆಸಿ ಅಥವಾ ತರಬೇತಿ, ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಕೆಲಸದ ಅನುಭವಕ್ಕೆ ಬೆಂಬಲ ನೀಡಿ.",
    ),
    action: copy("Organisation registration", "ಸಂಸ್ಥೆಗಳ ನೋಂದಣಿ"),
  },
  {
    id: "admin",
    title: copy("Administrators", "ನಿರ್ವಾಹಕರು"),
    description: copy(
      "Future access for authorised platform administrators and programme coordinators.",
      "ಅಧಿಕೃತ ವೇದಿಕೆ ನಿರ್ವಾಹಕರು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ ಸಂಯೋಜಕರಿಗಾಗಿ ಭವಿಷ್ಯದ ಪ್ರವೇಶ ವ್ಯವಸ್ಥೆ.",
    ),
    action: copy("Administrator access", "ನಿರ್ವಾಹಕರ ಪ್ರವೇಶ"),
  },
];

export const futureSteps: { title: Localized; description: Localized }[] = [
  {
    title: copy("Establish the foundation", "ಅಡಿಪಾಯ ನಿರ್ಮಾಣ"),
    description: copy(
      "Develop the platform, learning pathways and mentor community as the initiative grows.",
      "ಉಪಕ್ರಮದ ಬೆಳವಣಿಗೆಯೊಂದಿಗೆ ವೇದಿಕೆ, ಕಲಿಕೆಯ ಮಾರ್ಗಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಕರ ಸಮುದಾಯವನ್ನು ರೂಪಿಸುವುದು.",
    ),
  },
  {
    title: copy("Build meaningful partnerships", "ಅರ್ಥಪೂರ್ಣ ಸಹಭಾಗಿತ್ವಗಳು"),
    description: copy(
      "Develop relationships with colleges, trainers and employers to connect learning with practical experience.",
      "ಕಲಿಕೆಯನ್ನು ಪ್ರಾಯೋಗಿಕ ಅನುಭವದೊಂದಿಗೆ ಜೋಡಿಸಲು ಕಾಲೇಜುಗಳು, ತರಬೇತುದಾರರು ಮತ್ತು ಉದ್ಯೋಗದಾತರೊಂದಿಗೆ ಸಂಬಂಧ ಬೆಳೆಸುವುದು.",
    ),
  },
  {
    title: copy("Expand opportunity", "ಅವಕಾಶಗಳ ವಿಸ್ತರಣೆ"),
    description: copy(
      "Grow access to skills, career guidance and entrepreneurship support across Karnataka.",
      "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಕೌಶಲ್ಯ, ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆಯ ಬೆಂಬಲದ ವ್ಯಾಪ್ತಿಯನ್ನು ವಿಸ್ತರಿಸುವುದು.",
    ),
  },
];
