export interface ItemData {
  brand: string,
  productName: string,
  productDescription: string,
  price: number,
}

export type Sizes = 'XL' | 'L' | 'M'
export interface ShirtData extends ItemData {
    size: Sizes
}

export type MobileVersions = '512GB' | '256GB' | '128GB'
export interface MobileData extends ItemData {
    versions: MobileVersions
}

