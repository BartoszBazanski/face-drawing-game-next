import { GameStep } from "@/context/GameContext.types";

import Face1 from "@/assets/faces/face-1.svg";
import Face2 from "@/assets/faces/face-2.svg";
import Face3 from "@/assets/faces/face-3.svg";
import Face4 from "@/assets/faces/face-4.svg";
import Face5 from "@/assets/faces/face-5.svg";
import Face6 from "@/assets/faces/face-6.svg";
import Face7 from "@/assets/faces/face-7.svg";
import Face8 from "@/assets/faces/face-8.svg";

import Eyes1 from "@/assets/eyes/eyes-1.svg";
import Eyes2 from "@/assets/eyes/eyes-2.svg";
import Eyes3 from "@/assets/eyes/eyes-3.svg";
import Eyes4 from "@/assets/eyes/eyes-4.svg";
import Eyes5 from "@/assets/eyes/eyes-5.svg";
import Eyes6 from "@/assets/eyes/eyes-6.svg";
import Eyes7 from "@/assets/eyes/eyes-7.svg";
import Eyes8 from "@/assets/eyes/eyes-8.svg";

import Nose1 from "@/assets/noses/nose-1.svg";
import Nose2 from "@/assets/noses/nose-2.svg";
import Nose3 from "@/assets/noses/nose-3.svg";
import Nose4 from "@/assets/noses/nose-4.svg";
import Nose5 from "@/assets/noses/nose-5.svg";
import Nose6 from "@/assets/noses/nose-6.svg";
import Nose7 from "@/assets/noses/nose-7.svg";
import Nose8 from "@/assets/noses/nose-8.svg";
import Nose9 from "@/assets/noses/nose-9.svg";

import Mouth1 from "@/assets/mouths/mouth-1.svg";
import Mouth2 from "@/assets/mouths/mouth-2.svg";
import Mouth3 from "@/assets/mouths/mouth-3.svg";
import Mouth4 from "@/assets/mouths/mouth-4.svg";
import Mouth5 from "@/assets/mouths/mouth-5.svg";
import Mouth6 from "@/assets/mouths/mouth-6.svg";
import Mouth7 from "@/assets/mouths/mouth-7.svg";

import Hairstyle1 from "@/assets/hairstyles/hairstyle-1.svg";
import Hairstyle2 from "@/assets/hairstyles/hairstyle-2.svg";
import Hairstyle3 from "@/assets/hairstyles/hairstyle-3.svg";
import Hairstyle4 from "@/assets/hairstyles/hairstyle-4.svg";
import Hairstyle5 from "@/assets/hairstyles/hairstyle-5.svg";
import Hairstyle6 from "@/assets/hairstyles/hairstyle-6.svg";
import Hairstyle7 from "@/assets/hairstyles/hairstyle-7.svg";
import Hairstyle8 from "@/assets/hairstyles/hairstyle-8.svg";

export const iconsMap = {
  face: {
    face1: Face1,
    face2: Face2,
    face3: Face3,
    face4: Face4,
    face5: Face5,
    face6: Face6,
    face7: Face7,
    face8: Face8,
  },
  eyes: {
    eyes1: Eyes1,
    eyes2: Eyes2,
    eyes3: Eyes3,
    eyes4: Eyes4,
    eyes5: Eyes5,
    eyes6: Eyes6,
    eyes7: Eyes7,
    eyes8: Eyes8,
  },
  nose: {
    nose1: Nose1,
    nose2: Nose2,
    nose3: Nose3,
    nose4: Nose4,
    nose5: Nose5,
    nose6: Nose6,
    nose7: Nose7,
    nose8: Nose8,
    nose9: Nose9,
  },
  mouth: {
    mouth1: Mouth1,
    mouth2: Mouth2,
    mouth3: Mouth3,
    mouth4: Mouth4,
    mouth5: Mouth5,
    mouth6: Mouth6,
    mouth7: Mouth7,
  },
  hairstyle: {
    hairstyle1: Hairstyle1,
    hairstyle2: Hairstyle2,
    hairstyle3: Hairstyle3,
    hairstyle4: Hairstyle4,
    hairstyle5: Hairstyle5,
    hairstyle6: Hairstyle6,
    hairstyle7: Hairstyle7,
    hairstyle8: Hairstyle8,
  }
} as const;

const faceStep: GameStep<'face'> = {
  id: 1,
  type: 'face',
  iconColorClassName: 'text-blue-500',
  options: Object.keys(iconsMap.face) as Array<keyof typeof iconsMap.face>,
  selectedOption: null
};

const eyesStep: GameStep<'eyes'> = {
  id: 2,
  type: 'eyes',
  iconColorClassName: 'text-black',
  options: Object.keys(iconsMap.eyes) as Array<keyof typeof iconsMap.eyes>,
  selectedOption: null
};

const noseStep: GameStep<'nose'> = {
  id: 3,
  type: 'nose',
  iconColorClassName: 'text-orange-500',
  options: Object.keys(iconsMap.nose) as Array<keyof typeof iconsMap.nose>,
  selectedOption: null
};

const mouthStep: GameStep<'mouth'> = {
  id: 4,
  type: 'mouth',
  iconColorClassName: 'text-red-500',
  options: Object.keys(iconsMap.mouth) as Array<keyof typeof iconsMap.mouth>,
  selectedOption: null
};

const hairstyleStep: GameStep<'hairstyle'> = {
  id: 5,
  type: 'hairstyle',
  iconColorClassName: 'text-green-600',
  options: Object.keys(iconsMap.hairstyle) as Array<
    keyof typeof iconsMap.hairstyle
  >,
  selectedOption: null
};

export const gameSteps = [
  faceStep,
  eyesStep,
  noseStep,
  mouthStep,
  hairstyleStep
];

export const getDefaultGameSteps = () => {
  return JSON.parse(JSON.stringify(gameSteps));
};

