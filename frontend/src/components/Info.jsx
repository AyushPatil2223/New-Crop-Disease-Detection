import React, { useState } from 'react';

const crops = [
  {
    name: 'Corn',
    image: 'https://www.aces.edu/wp-content/uploads/2021/03/shutterstock_616104491-scaled.jpg',
    description: [

      '1. Northern Corn Leaf Blight: Long, grayish-green lesions on leaves; manage by selecting resistant hybrids and applying fungicides during early to mid-season.​',
      '2. Gray Leaf Spot: Rectangular lesions with gray centers; control with resistant varieties and timely fungicide applications.',
      '3. Common Rust: Small, reddish-brown pustules on leaves; manage by planting resistant hybrids and applying fungicides.​',
      '4. Southern Rust: Orange to reddish-brown pustules on leaves; control with resistant hybrids and fungicide applications.​',
      '5. Anthracnose Leaf Blight: Dark, oval lesions with yellow borders; manage by selecting resistant hybrids and applying fungicides.​',
      '6, Stalk Rots (e.g., Fusarium, Gibberella): Rotting of stalks leading to lodging; manage by selecting resistant hybrids and practicing crop rotation.​'
    ]
  },
  {
    name: 'Grape',
    image: 'https://agriculture.basf.us/content/dam/cxm/agriculture/crop-protection/use-areas/crops/images/CRP160087_Solutions_Grape_Inset.jpg',
    description: [
     '1. Powdery Mildew: White powder on leaves and grapes; manage with sulfur sprays and pruning for airflow.',
     '2. Downy Mildew: Yellow spots on leaves with white fuzz underneath; control with copper fungicides and improved drainage.',
     '3. Black Rot: Dark spots on leaves and shriveled black grapes; remove mummified fruit and apply fungicides.​',
     '4. Botrytis Bunch Rot (Gray Mold): Gray mold on grape clusters; enhance air circulation and remove affected clusters.​',
     '5. Anthracnose: Sunken dark lesions on leaves and berries; prune infected parts and apply fungicides early.',
     '6. Crown Gall: Tumor-like growths at vine base; prevent injuries and use resistant rootstocks',
    ]
  },
  {
    name: 'Peach',
    image: 'https://npr.brightspotcdn.com/dims4/default/b8fc64b/2147483647/strip/true/crop/3264x2176+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkstx%2Ffiles%2F201704%2F6040288634_3ba47c5195_o.jpg',
    description: [
      '1. Peach Leaf Curl: Leaves become red, thick, and curled; apply copper fungicide during dormancy.',
      '2. Brown Rot: Blossoms and fruit rot with brown spots; remove infected parts and use fungicides.',
      '3. Bacterial Spot: Dark lesions on leaves and fruit; plant resistant varieties and apply bactericides.',
      '4. Powdery Mildew: White powdery growth on leaves; improve air circulation and apply sulfur sprays.​',
      '5. Crown Gall: Tumor-like growths at the base; avoid injuries and remove infected plants.​',
      '6. Peach Scab: Dark spots on fruit skin; prune for better airflow and apply fungicides.​'
    ]
  },
  {
    name: 'Potato',
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/3/24/01/shutterstock_potato-field-vegetable-tubers-soil-dirt-310661561.jpg.rend.hgtvcom.1280.853.suffix/1679683308258.jpeg',
    description: [

      '1. Late Blight: Dark spots on leaves and tubers; control with resistant varieties and timely fungicide applications.​',
      '2. Early Blight: Brown lesions with concentric rings on leaves; manage by crop rotation and removing infected debris.​',
      '3. Blackleg & Soft Rot: Stems turn black and rot; prevent by planting certified seed and avoiding waterlogged soils.​',
      '4. Common Scab: Rough, scabby patches on tubers; reduce by maintaining soil moisture and using resistant varieties.',
      '5. Fusarium Dry Rot: Sunken, dry lesions on stored tubers; minimize by handling tubers gently and storing in cool, dry conditions.​',
      '6. Potato Virus Y (PVY): Mottled leaves and reduced yield; control by using virus-free seed and managing aphid populations.​',
    ]
  },
  {
    name: 'Soybean',
    image: "https://c8.alamy.com/comp/2ANJMRK/green-mature-soybean-glycine-max-pods-on-plants-with-green-leaves-louisiana-usa-october-2ANJMRK.jpg",
    description: [
      'Common diseases include:',
      '1. Sudden Death Syndrome (SDS): Caused by Fusarium fungi, leading to interveinal chlorosis and plant death; manage by using resistant varieties and crop rotation.​',
      '2. Frogeye Leaf Spot: Characterized by circular lesions with red borders; control with fungicide applications during flowering and early pod stages.​',
      '3. Anthracnose: Caused by Colletotrichum truncatum, resulting in stem lesions and reduced yield; manage with resistant cultivars and timely fungicide use.​',
      '4. Bacterial Blight: Symptoms include water-soaked lesions on leaves; control by planting disease-free seed and practicing crop rotation.​',
      '5. Soybean Cyst Nematode (SCN): Microscopic worms causing root damage and yield loss; manage with resistant varieties and soil testing.​',
      '6.Brown Stem Rot: Caused by Phialophora gregata, leading to browning of stem tissue; manage with resistant varieties and crop rotation.​'
    ]
  },
  {
    name: 'Tomato',
    image: 'https://www.zfc.co.zw/wp-content/uploads/2020/03/Maize-Farming-Business-Plan-1.jpg',
    description: [
      'Common diseases include:',
      '1. Early Blight: Characterized by dark, concentric ring lesions on older leaves; manage by removing infected leaves and applying fungicides like chlorothalonil.​',
      '2. Late Blight: Caused by Phytophthora infestans, leading to water-soaked lesions on leaves and fruit; control with resistant varieties and fungicide applications.​',
      '3. Septoria Leaf Spot: Small, circular spots with dark borders on lower leaves; manage by crop rotation and removing infected plant debris.​',
      '4. Fusarium Wilt: Yellowing and wilting of leaves, starting from the lower leaves; use resistant varieties and practice crop rotation.​',
      '5. Bacterial Spot: Water-soaked lesions on leaves and fruit; control by using disease-free seed and practicing good sanitation.​',
      '6. Tomato Mosaic Virus (ToMV): Mottled, yellowing leaves and stunted growth; prevent by using resistant varieties and avoiding handling plants when infected with the virus.​'
    ]
  }
];

const Info = () => {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);

  const handleSelect = (e) => {
    const crop = crops.find((c) => c.name === e.target.value);
    setSelectedCrop(crop);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-6">🌱 Crop Information</h1>

      <div className="flex justify-center mb-10">
        <select
          value={selectedCrop.name}
          onChange={handleSelect}
          className="px-6 py-3 rounded-full border border-green-400 shadow-md bg-white text-green-800 font-semibold text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
        >
          {crops.map((crop) => (
            <option key={crop.name} value={crop.name}>
              {crop.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-white p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
        <div className="flex justify-center lg:w-1/3">
          <img
            src={selectedCrop.image}
            alt={selectedCrop.name}
            className="w-full max-w-sm rounded-xl border-2 border-green-200"
          />
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-green-900 mb-4">{selectedCrop.name}</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg">
            {selectedCrop.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;