export type Product = {
   
    product?:  object | any , 
    id?: string | number,
    title?: string,
    price?: number,
    description?: string,
    category?: {
        id: string,
        name: string,
        image: string
    },
    images?: string[]
}
export type ActiveTabs = {
  AllProActiveTab: boolean,
  ClothesActiveTab: boolean, 
  WatchesActiveTab: boolean, 
  FurnitureActiveTab:  boolean,
  ShoesActiveTab: boolean, 
  OtherActiveTab: boolean, 
  getAllproductsHandler: () => void, 
  getOnlyClothesHandler: () => void,
  getOnlyFurnitureHandler: () => void, 
  getOnlyShoesHandler: () => void,
  getOnlyWatchesHandler: () => void, 
  getOnlyOtherHandler:() => void
}

