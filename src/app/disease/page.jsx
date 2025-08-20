"use client";
import { useState } from "react";

// Mock data
const diseases = [
  // A (5 entries)
  {
    id: 1,
    name: "Acidity",
    description: "Acidity is one of the most common ailments that almost everyone experiences once...",
    image: "/diseases/acidity.jpg",
  },
  {
    id: 2,
    name: "Acne",
    description: "Acne is a common condition that most of us have dealt with at some point in our...",
    image: "/diseases/acne.jpg",
  },
  {
    id: 3,
    name: "Addison's disease",
    description: "Addison's disease is a rare disorder characterized by inadequate production of th...",
    image: "/diseases/addisons.jpg",
  },
  {
    id: 4,
    name: "Alzheimer's disease",
    description: "Alzheimer's disease (AD) is a slowly progressive disorder of the brain that fades...",
    image: "/diseases/alzheimer.jpg",
  },
  {
    id: 5,
    name: "Asthma",
    description: "Asthma is a chronic condition affecting the airways of the lungs...",
    image: "/diseases/asthma.jpg",
  },

  // B (2 entries only)
  {
    id: 6,
    name: "Bronchitis",
    description: "Bronchitis is the inflammation of the bronchial tubes that carry air to your lungs...",
    image: "/diseases/bronchitis.jpg",
  },
  {
    id: 7,
    name: "Brain Tumor",
    description: "A brain tumor is a growth of abnormal cells in the brain...",
    image: "/diseases/brain_tumor.jpg",
  },

  // C (5 entries)
  {
    id: 8,
    name: "Chickenpox",
    description: "Chickenpox is a highly contagious viral infection that causes an itchy rash...",
    image: "/diseases/chickenpox.jpg",
  },
  {
    id: 9,
    name: "Cholera",
    description: "Cholera is an acute diarrheal illness caused by infection of the intestine...",
    image: "/diseases/cholera.jpg",
  },
  {
    id: 10,
    name: "Cataract",
    description: "Cataract is clouding of the normally clear lens of the eye...",
    image: "/diseases/cataract.jpg",
  },
  {
    id: 11,
    name: "COVID-19",
    description: "COVID-19 is a contagious disease caused by the SARS-CoV-2 virus...",
    image: "/diseases/covid.jpg",
  },
  {
    id: 12,
    name: "Celiac Disease",
    description: "Celiac disease is an immune reaction to eating gluten...",
    image: "/diseases/celiac.jpg",
  },

  // D (5 entries)
  {
    id: 13,
    name: "Diabetes",
    description: "Diabetes is a chronic health condition that affects how your body turns food into energy...",
    image: "/diseases/diabetes.jpg",
  },
  {
    id: 14,
    name: "Dengue",
    description: "Dengue fever is a mosquito-borne viral infection causing flu-like illness...",
    image: "/diseases/dengue.jpg",
  },
  {
    id: 15,
    name: "Depression",
    description: "Depression is a common but serious mood disorder that negatively affects how you feel...",
    image: "/diseases/depression.jpg",
  },
  {
    id: 16,
    name: "Dermatitis",
    description: "Dermatitis is a general term for skin irritation...",
    image: "/diseases/dermatitis.jpg",
  },
  {
    id: 17,
    name: "Diphtheria",
    description: "Diphtheria is a serious infection caused by strains of bacteria...",
    image: "/diseases/diphtheria.jpg",
  },

  // E (3 entries only)
  {
    id: 18,
    name: "Ebola Virus Disease",
    description: "Ebola virus disease is a rare but severe and often fatal illness in humans...",
    image: "/diseases/ebola.jpg",
  },
  {
    id: 19,
    name: "Emphysema",
    description: "Emphysema is a lung condition that causes shortness of breath...",
    image: "/diseases/emphysema.jpg",
  },
  {
    id: 20,
    name: "Epilepsy",
    description: "Epilepsy is a neurological disorder where brain activity becomes abnormal...",
    image: "/diseases/epilepsy.jpg",
  },

  // F (5 entries)
  {
    id: 21,
    name: "Flu",
    description: "Influenza (flu) is a contagious respiratory illness caused by influenza viruses...",
    image: "/diseases/flu.jpg",
  },
  {
    id: 22,
    name: "Fibromyalgia",
    description: "Fibromyalgia is a disorder characterized by widespread musculoskeletal pain...",
    image: "/diseases/fibromyalgia.jpg",
  },
  {
    id: 23,
    name: "Fracture",
    description: "A fracture is a break, usually in a bone...",
    image: "/diseases/fracture.jpg",
  },
  {
    id: 24,
    name: "Food Poisoning",
    description: "Food poisoning is illness caused by eating contaminated food...",
    image: "/diseases/food_poisoning.jpg",
  },
  {
    id: 25,
    name: "Fatty Liver Disease",
    description: "Fatty liver disease occurs when too much fat builds up in the liver...",
    image: "/diseases/fatty_liver.jpg",
  },

  // … continue this pattern for G → Z
];


export default function DiseaseIndex() {
  const [selectedLetter, setSelectedLetter] = useState("A");

  // Filter diseases by selected letter
  const filteredDiseases = diseases.filter((d) =>
    d.name.toLowerCase().startsWith(selectedLetter.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight">
        Disease Index{" "}
        <span className="text-[#2DAAE0]">({selectedLetter})</span>
      </h1>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all duration-200 
              ${
                selectedLetter === letter
                  ? "bg-[#2DAAE0] text-white shadow-md scale-110"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-[#2DAAE0]"
              }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-gray-600 text-sm mb-6 text-center">
        Showing <span className="font-medium">{filteredDiseases.length}</span>{" "}
        result{filteredDiseases.length !== 1 ? "s" : ""}
      </p>

      {/* Disease Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiseases.map((disease) => (
          <div
            key={disease.id}
            className="group flex flex-col p-5 bg-white border rounded-2xl shadow-sm 
            hover:shadow-lg hover:border-red-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <img
                src={disease.image}
                alt={disease.name}
                className="w-16 h-16 object-cover rounded-xl border shadow-sm group-hover:scale-105 transition"
              />
              <h2 className="font-semibold text-gray-900 text-lg group-hover:text-red-500 transition">
                {disease.name}
              </h2>
            </div>
            <p className="text-gray-600 text-sm mt-3 line-clamp-3">
              {disease.description}
            </p>
            <button className="mt-4 text-sm text-red-600 font-medium hover:underline self-start">
              Read more →
            </button>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredDiseases.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            No diseases found starting with{" "}
            <span className="font-semibold">{selectedLetter}</span>
          </p>
        </div>
      )}
    </div>
  );
}
