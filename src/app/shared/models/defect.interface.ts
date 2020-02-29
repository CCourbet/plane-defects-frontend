import { DefectTypes } from "./defect-types.interface";

export interface Defect {
    id?: number;
    xcoordinate: number;
    ycoordinate: number;
    zcoordinate: number;
    defecttype: DefectTypes;
    comment: string;
}