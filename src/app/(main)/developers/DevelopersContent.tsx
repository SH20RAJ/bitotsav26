"use client";

import KineticTeamHybrid from "@/components/ui/kinetic-team-hybrid";
import { PageWrapper } from "@/components/ui/page-wrapper";

const developers = [
  { 
    id: "dev-01",
    name: "Manoj Kumar", 
    role: "Tech Team Lead", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Manoj",
  },
  { 
    id: "dev-02",
    name: "Venkat Saahit Kamu", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Venkat",
  },
  { 
    id: "dev-03",
    name: "Mritunjay Raj", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mritunjay",
  },
  { 
    id: "dev-04",
    name: "Shaswat Raj", 
    role: "Web Developer", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Shaswat",
  },
  { 
    id: "dev-05",
    name: "Abhinav Kumar Choudhary", 
    role: "UI Designer", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abhinav",
  },
  { 
    id: "dev-06",
    name: "Raghav Bajaj", 
    role: "AI/ML Developer", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Raghav",
  },
   { 
    id: "dev-07",
    name: "Aniket Gupta", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aniket",
  },
  { 
    id: "dev-08",
    name: "Vaibhav Anand Singh", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Vaibhav",
  },
  { 
    id: "dev-09",
    name: "Kunal Kashyap", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kunal",
  },
  { 
    id: "dev-10",
    name: "Arya Chakraborty", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arya",
  },
   { 
    id: "dev-11",
    name: "Rishabh Anand", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rishabh",
  },
  { 
    id: "dev-12",
    name: "Sarthak Singh", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarthak",
  },
   { 
    id: "dev-13",
    name: "Deepak Pradhan", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Deepak",
  },
  { 
    id: "dev-14",
    name: "Priyanshu Agrahari", 
    role: "Tech Team", 
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priyanshu",
  },
];

export default function DevelopersContent() {
  return (
    <PageWrapper>
        <KineticTeamHybrid 
            title="Code Wizards" 
            subtitle="The Architects of Bitotsav '26"
            members={developers} 
        />
    </PageWrapper>
  );
}

