import Border1 from "../assets/Border1.svg";
import Border2 from "../assets/Border2.svg";
import Border3 from "../assets/Border3.svg";
import Border4 from "../assets/Border4.svg";
import Border5 from "../assets/Border5.svg";
import Border6 from "../assets/Border6.svg";
import Border7 from "../assets/Border7.svg";
import Border8 from "../assets/Border8.svg";

interface IBorder {  
    id: number;  
    url: string;   
    code: {  
        [key: string]: string;  
    }[];  
    count: number;  
  }  
    
  export const borderTemplates: IBorder[] =  [  
    {  
      id: 1,  
      url: Border1,  
      code: [], 
      count: 5,  
    },  
    {  
      id: 2,  
      url: Border2,  
      code: [],  
      count: 5,  
    },  
    {  
      id: 3,  
      url: Border3,  
      code: [],  
      count: 5,  
    },  
    {  
      id: 4,  
      url: Border4,  
      code: [],  
      count: 5,  
    },  
    {  
      id: 5,  
      url: Border5,  
      code: [],  
      count: 6,  
    },  
    {  
      id: 6,  
      url: Border6,  
      code: [],  
      count: 4,  
    },  
    {  
      id: 7,  
      url: Border7,  
      code: [],  
      count: 5,  
    },  
    {  
      id: 8,  
      url: Border8,  
      code: [],  
      count: 5,  
    },  
    
  ];