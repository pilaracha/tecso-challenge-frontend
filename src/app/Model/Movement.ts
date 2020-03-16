import { Account } from './Account';

export class Movement{
    id: number
    account: Account
    movementType:string
    movementDate : Date
	movementDescription: string
	movementAmount: number
}