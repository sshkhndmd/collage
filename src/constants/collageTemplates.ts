import { collageTemplates } from './collageTemplates';
import Collage1 from "../assets/collage1.svg";
import Collage2 from "../assets/collage2.svg";
import Collage3 from "../assets/collage3.svg";
import Collage4 from "../assets/collage4.svg";
import Collage5 from "../assets/collage5.svg";
import Collage6 from "../assets/collage6.svg";
import Collage7 from "../assets/collage7.svg";
import Collage8 from "../assets/collage8.svg";

interface ICollage {
  id: number;
  url: string; 
  code: {
      'grid-template-columns'?: string;
      'grid-template-rows'?: string;
  }[];
  count: number;
}

export const collageTemplates: ICollage[] =  [
{
  id: 1,
  url: "Collage1",
  code: [
      {
          'grid-template-columns': 'repeat(2, 1fr)'
      },
      {
          'grid-template-rows': 'repeat(6, 1fr)'
      }
  ],
  count: 5,
},

  {
    id: 2,
    url: Collage2,
    code: "",
    count: 5,
  },
  {
    id: 3,
    url: Collage3,
    code: "",
    count: 5,
  },
  {
    id: 4,
    url: Collage4,
    code: "",
    count: 5,
  },
  {
    id: 5,
    url: Collage5,
    code: "",
    count: 6,
  },
  {
    id: 6,
    url: Collage6,
    code: "",
    count: 4,
  },
  {
    id: 7,
    url: Collage7,
    code: "",
    count: 5,
  },
  {
    id: 8,
    url: Collage8,
    code: "",
    count: 5,
  },
];


