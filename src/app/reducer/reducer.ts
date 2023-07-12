import { createReducer, on } from '@ngrx/store';
import { changeImage } from '../action/main.action';

export interface ColorOption {
  name: string;
  photoPath: string;
  price: number;
}

export interface RimOption {
  name: string;
  photoPath: string;
  price: number;
}

export interface InteriorOption {
  name: string;
  photoPath: string;
  price: number;
}

export interface EquipmentOption {
  photoPath: string;
  name: string;
  price: number;
}

export interface EquipmentCategoryOptions {
    [key: string]: EquipmentOption[] | {};
  }

export interface AccessoryOption {
    name: string;
    photoPath: string;
    price: number;
  }

  export interface AccessoriesOptions {
    [key: string]: {
      [key: string]: AccessoryOption;
    } | {};
  }

export interface IAlpineOptions {
  id: number;
  name: string;
  price: number;
  photoPath: string;
  color: ColorOption;
  rims: RimOption;
  interior: InteriorOption;
  equipments: EquipmentCategoryOptions[] | {};
  accessories: AccessoriesOptions[] | {};
}

export interface IAlpineState {
  viewImage: string;
  car: IAlpineOptions;
}

export const initialState: IAlpineState = {
  viewImage: "pngwing.com_1",
  car: {
    id: 1,
    name: "A110 Legende",
    price: 54700,
    photoPath: "../../../assets/images/configurateur/modele/selection/legende.png",
    color: {
      name: "Peinture Opaque Blanc Glacier",
      photoPath: "../../../assets/images/configurateur/couleurs/selection/blanc.jpg",
      price: 0
    },
    rims: {
      name: "Standard",
      photoPath: "../../../assets/images/configurateur/jantes/selection/jante-standard.jpg",
      price: 0
    },
    interior: {
      name: "Sièges Confort en cuir noir",
      photoPath: "../../../assets/images/configurateur/interieurs/selection/cuir-noir.jpg",
      price: 0
    },
    equipments: {
      Design: {},
      Media_et_navigation: {
        4: {
          photoPath: "../../../assets/images/configurateur/equipments/categories/media et navigation/audio-standard.jpg",
          name: "Système Audio Standard",
          price: 0
        }
      },
      Confort: {
        1: {
          name: "Retroviseur Intérieur Electrochrome",
          photoPath: "../../../assets/images/configurateur/equipments/categories/confort/retro-int-electrochrome.jpg",
          price: 0
        },
        4: {
          name: "Régulateur Limiteur de Vitesse",
          photoPath: "../../../assets/images/configurateur/equipments/categories/confort/regul-limit-vitesse.jpg",
          price: 0
        }
      },
      Conduite: {},
      Sécurité: {
        2: {
          name: "Assistance de Freinage d'Urgence",
          photoPath: "../../../assets/images/configurateur/equipments/categories/securite/aide-freinage-durgence.jpg",
          price: 0
        },
        3: {
          name: "Airbags Frontaux conducteur et passager",
          photoPath: "../../../assets/images/configurateur/equipments/categories/securite/airbag.jpg",
          price: 0
        }
      },
      Personnalisation_Extérieure: {
        3: {
          name: "Etriers de frein couleur Gris Anthracite",
          photoPath: "../../../assets/images/configurateur/equipments/categories/personnalisation exterieure/etrier-gris.jpg",
          price: 0
        }
      },
      Personnalisation_Intérieure: {
        2: {
            name: "Harmonie Carbone",
            photoPath: "../../../assets/images/configurateur/equipments/categories/personnalisation interieure/pack-carbone.jpeg",
            price: 0
          },
        }
      },
      accessories: {
        Transport_et_Protection: {},
        Multimédia: {},
        Intérieur: {},
        Matériel_de_Garage: {},
        Extérieur: {}
      }
    },
  };
  
  export const reducer = createReducer(
    initialState,
  
    on(changeImage, (state, { selectedImage }) => ({
      ...state,
      viewImage: selectedImage
    })),
  );