function calculate(data){
    const soilType = data.soiltype;
    const cropType = data.croptype;
    const farmSize= data.landsize;
    const nitrogenLevel = data.nitrogenLevel;
    const phosphorusLevel =data.phosphorusLevel;
    const potassiumLevel = data.potassiumLevel;
    let nitrogenContent = data.nitrogenContent;
    let phosphorusContent =data.phosphorusContent;
    let potassiumContent = data.potassiumContent;
    

    const cropNPK={
        'Jawar':{
          'N':2,
          'P':1,
          'K':1.3
        },
        'Mung':{
          'N':2,
          'P':1,
          'K':1
        },
        'Bajara':{
          'N':1,
          'P':2,
          'K':1.5
        },
        'Urad':{
          'N':2.5,
          'P':1,
          'K':1.4
        },
        'Gram':{
          'N':1,
          'P':2,
          'K':1
        },
        'Rice':{
          'N':2.5,
          'P':0.5,
          'K':1.5
        },
        'Corn':{
          'N':2.0,
          'P':0.8,
          'K':1.3
        },
        'Sugarcane':{
          'N':1.8,
          'P':1.5,
          'K':2
        },
        'Tur':{'N':2,
        'P':1.8,
        'K':1.3
      }
    }

    //average ratio of npk kg per acer
    const soilNPK={
        'black':{
          'N':3.5,
          'P':2.5,
          'K':3.5
        },
        'red':{
          'N':0.2,
          'P':0.15,
          'K':2.5
        },
        'laterite':{
          'N':0.25,
          'P':0.15,
          'K':2.5
        },
        'coastal':{
          'N':0.25,
          'P':0.15,
          'K':3.5
        },
        'alluvial':{
          'N':0.4,
          'P':0.2,
          'K':04
        }
    }

    fertilizerNPK={
      'N':nitrogenContent,
      'P':phosphorusContent,
      'K':potassiumContent
    }

    const soilNPKratios=soilNPK[soilType];

    //calculate the required amount of npk based on npk ratios and land size
    //here multiplying by 16 means converting ratios into kg/acre
    const requiredN=((cropNPK[cropType]['N']*16)-soilNPK[soilType]['N']*2)*farmSize;
    const requiredP=((cropNPK[cropType]['P']*18)-soilNPK[soilType]['P']*2)*farmSize;
    const requiredK=((cropNPK[cropType]['K']*18)-soilNPK[soilType]['K']*2)*farmSize;

    //calcuate the amount of npk already present in the soil
    const availabeN=nitrogenLevel*farmSize
    const availabeP=phosphorusLevel*farmSize
    const availabeK=potassiumLevel*farmSize

    //calculate how much fertilizaer we would require from fertilizer
    const requiredNFromFertilizer=Math.max(0,requiredN-availabeN)
    const requiredPFromFertilizer=Math.max(0,requiredP-availabeP)
    const requiredKFromFertilizer=Math.max(0,requiredK-availabeK)

    //calculate the amount of fertilizer required based on npk contents and npk required from fertilizers
    const requiredFertilizerN=Math.floor((requiredNFromFertilizer/nitrogenContent)*10)
    const requiredFertilizerP=Math.floor((requiredPFromFertilizer/phosphorusContent)*10)
    const requiredFertilizerK=Math.floor((requiredKFromFertilizer/potassiumContent)*10)

    //calculate the total amount of fertilizer required ande per acre amount
    const totalFertilizer=Math.floor(requiredFertilizerN+requiredFertilizerP+requiredFertilizerK)
    const perAcreAmount=Math.floor(totalFertilizer/10) 

    // let message=`To grow ${cropType} on ${farmSize} acres of ${soilType}, you need to apply ${totalFertilizer.toFixed(2)}... ;)`
    let message={
      'totalFertilizer':totalFertilizer,
      'totalRequiredN':requiredFertilizerN,
      'totalRequiredP':requiredFertilizerP,
      'totalRequiredK':requiredFertilizerK,
      'fertilizarePerAcre':perAcreAmount
    }
    return message;

}

module.exports={
    calculate
}