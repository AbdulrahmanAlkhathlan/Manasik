import makkahImg from "../../assets/Makkah.jpg";
import saeeImg from "../../assets/sa'ee.jpg";
import tawafImg from "../../assets/tawaf.jpg";
import trimImg from "../../assets/trim.jpg";

export const umrahStepsData = {
  ihram: {
    title: "Step 1: Ihram - The State of Purity",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    imageAlt: "Person in Ihram clothing",
    instructions: {
      title: "How to enter Ihram:",
      steps: [
        "Perform ghusl (full body washing)",
        "Make the niyyah (intention) for Umrah",
        "Recite the Talbiyah:"
      ]
    },
    note: "You must enter Ihram before passing the Miqat (designated boundary point).",
    dua: {
      arabic: "Labbayk Allahumma labbayk. Labbayk la sharika laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk. La sharika lak."
    }
  },
  makkah: {
    title: "Step 2: Entering Makkah",
    image: makkahImg,
    imageAlt: "Approaching Masjid Al-Haram",
    instructions: {
      title: "Upon entering Makkah:",
      steps: [
        "Continue reciting the Talbiyah",
        "Enter Masjid al-Haram with your right foot",
        "Recite the dua for entering the mosque",
        "Approach the Kaaba with humility and reverence"
      ]
    },
    note: "When you first see the Kaaba, make any dua (supplication) as this is a time when prayers are answered."
  },
  tawaf: {
    title: "Step 3: Tawaf - Circumambulation",
    image: tawafImg,
    imageAlt: "Tawaf around the Kaaba",
    instructions: {
      title: "Performing Tawaf:",
      steps: [
        "Start at Hajar al-Aswad (Black Stone)",
        "Walk counter-clockwise around the Kaaba seven times",
        "For men: Expose right shoulder during first three rounds (Idtiba')",
        "Make dua during each circuit",
        "After completing seven circuits, cover both shoulders",
        "Proceed to Maqam Ibrahim and pray",
        "Drink Zamzam water"
      ]
    },
    note: "If you can't touch the Black Stone due to crowds, simply point at it and say \"Allahu Akbar\" as you pass."
  },
  saee: {
    title: "Step 4: Sa'ee - Walking between Safa and Marwah",
    image: saeeImg,
    imageAlt: "Sa'ee between Safa and Marwah",
    instructions: {
      title: "Performing Sa'ee:",
      steps: [
        "Begin at Safa mount",
        "Face the Kaaba and make dua",
        "Walk to Marwah at a normal pace",
        "Men should jog lightly in the marked green light area",
        "Upon reaching Marwah, face the Kaaba and make dua",
        "Return to Safa (counting as the second trip)",
        "Complete seven trips, ending at Marwah",
        "Make dua and recite Quran during the walks"
      ]
    },
    note: "The Sa'ee commemorates Hajar's (mother of Ismail) search for water for her infant son."
  },
  shaving: {
    title: "Step 5: Halq or Taqsir - Shaving or Trimming Hair",
    image: trimImg,
    imageAlt: "Shaving or trimming hair",
    instructions: {
      title: "Completing Umrah:",
      steps: [
        "For men: Either shave the entire head (preferred) or trim hair evenly",
        "For women: Cut a fingertip length of hair",
        "After this step, the restrictions of Ihram end",
        "Regular clothing can be worn",
        "Normal activities can be resumed"
      ]
    },
    note: "The ritual of hair cutting symbolizes humility and submission to Allah."
  }
};
