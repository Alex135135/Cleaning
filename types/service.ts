export type ServiceKey = "sofa" | "corner" | "chair" | "mattress";
export type Counts = Record<ServiceKey, number>;
export interface Service {
    key: ServiceKey;
    title: string;
    note: string;
    price: number;
}
