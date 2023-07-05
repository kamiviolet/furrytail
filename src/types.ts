export type Breed = {
    id: string,
    name: string,
    weight_metric: string,
    temperament: string,
    origin: string,
    country_code?: string,
    description: string,
    life_span: string,
    alt_names?: string,
    hypoallergenic: number,
    wikipedia_url?: string,
    image_id: string,
    [key: string]: any
}