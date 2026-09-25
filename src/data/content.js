// Central content store for Palicon Hospital.
// Editing copy, contact details or service listings here updates the whole site.

export const CLINIC = {
  name: "Palicon Hospital",
  shortName: "Palicon",
  tagline: "Gynaecology & Obstetrics, delivered with dignity",
  address: "1 Popoola Odusami Street, Balogun Ln, Abule Folly, Lagos 105101, Lagos",
  addressMapQuery: "1 Popoola Odusami Street, Balogun Ln, Abule Folly, Lagos 105101, Lagos",
  phonePrimaryDisplay: "0807 260 6299",
  phonePrimaryTel: "+2348072606299",
  whatsappNumber: "2348072606299",
  whatsappMessage:
    "Hello Palicon Hospital, I would like to book an appointment.",
  email: "paliconhospital@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

export const VALUES = [
  {
    title: "Integrity",
    description:
      "We tell every woman the truth about her body and her options, and we do right by her whether or not anyone is watching.",
  },
  {
    title: "Respect",
    description:
      "Every patient is treated with dignity, listened to fully, and never rushed through a decision about her own care.",
  },
  {
    title: "Excellence",
    description:
      "We hold our clinical work to a standard that exceeds the minimum, from the first consultation to the last follow-up.",
  },
  {
    title: "Compassion",
    description:
      "Reproductive health is personal. Our team meets each story with warmth, patience and genuine care.",
  },
  {
    title: "Innovation",
    description:
      "We invest in modern diagnostic and surgical technique so Lagos women have access to contemporary standards of care.",
  },
];

export const SERVICES = [
  {
    id: "gynaecology",
    title: "Gynaecological Care",
    short: "Diagnosis and treatment for benign and malignant conditions.",
    description:
      "Comprehensive management of uterine fibroids, endometriosis, pelvic infections and ovarian conditions such as cysts, tumours and polycystic ovaries — from first diagnosis through to treatment.",
  },
  {
    id: "preconception",
    title: "Preconception Counselling",
    short: "Preparing your body for a healthy pregnancy.",
    description:
      "Entering pregnancy in stable, optimal health shapes the outcome of the entire journey. We offer dedicated pre-pregnancy counselling for women of reproductive age who are planning to conceive.",
  },
  {
    id: "prenatal",
    title: "Prenatal Care & Delivery",
    short: "Antenatal support from the first trimester to birth.",
    description:
      "Full antenatal monitoring and delivery services, with a clinical team present at every scan, milestone and decision along the way to birth.",
  },
  {
    id: "family-planning",
    title: "Family Planning",
    short: "Every contraception option, explained plainly.",
    description:
      "Hormonal and non-hormonal methods, alongside surgical and minimally invasive contraception options, chosen to fit your life and long-term plans rather than the other way round.",
  },
  {
    id: "fertility",
    title: "Fertility Services",
    short: "Diagnosis and treatment for difficulty conceiving.",
    description:
      "Investigation into the causes of infertility, followed by therapeutic intervention where required, to improve your chances of a successful pregnancy.",
  },
  {
    id: "laparoscopy",
    title: "Laparoscopy",
    short: "Camera-guided surgery through a keyhole incision.",
    description:
      "Minimally invasive diagnosis and treatment performed through a small camera-guided incision, offering a faster recovery than open surgery for carefully selected patients.",
  },
  {
    id: "hysteroscopy",
    title: "Hysteroscopy",
    short: "A direct look inside the womb.",
    description:
      "A procedure that allows our specialists to directly visualise the inside of the womb, identifying abnormalities that scans alone cannot always show.",
  },
  {
    id: "cancer-screening",
    title: "Cancer Screening & Vaccination",
    short: "Routine screening for cervical, ovarian and endometrial cancer.",
    description:
      "Regular screening catches gynaecological cancers early, when they are most treatable. We also provide vaccination for cancer prevention.",
  },
  {
    id: "sti",
    title: "STI Screening & Treatment",
    short: "Confidential testing and prompt treatment.",
    description:
      "Early diagnosis and treatment of sexually transmitted infections, a leading and preventable cause of infertility, handled with complete confidentiality.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Reach out",
    description:
      "Message us on WhatsApp or call the clinic directly to describe what you need and find a time that works.",
  },
  {
    number: "02",
    title: "Meet your specialist",
    description:
      "Sit down with a consultant who listens fully before recommending any test, scan or treatment.",
  },
  {
    number: "03",
    title: "A plan built around you",
    description:
      "Every recommendation accounts for your health history, your goals and what matters to you.",
  },
  {
    number: "04",
    title: "Care that continues",
    description:
      "From follow-up scans to postnatal review, our team stays with you well beyond the first appointment.",
  },
];

export const FACILITY_IMAGES_ALT = [
  "Bright, modern clinic reception with wood-panelled front desk",
  "Clean, minimal patient waiting area with comfortable seating",
];
