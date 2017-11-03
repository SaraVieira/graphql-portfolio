import { Server } from 'hapi';
export interface Register {
    (server: Server, options: any, next: any): void;
    attributes?: any;
}
declare const hapi: Register;
export default hapi;
