import Semaphore from "semaphore-async-await";

export class Bank{
    private static readonly _lock= new Semaphore(1);

    private _balance: number = 0;

    public async depositAsync(amount:number){
        await Bank._lock.acquire();
        try
        {
            this._balance = this._balance + amount;
            console.log("Deposit Balance:", this._balance);
        }
        catch(ex){
            throw ex;
        }
        finally{
            Bank._lock.release();
            console.log(`Deposit lock release`);
        }
    }

    public async withdrawAsync(amount:number){
        await Bank._lock.acquire();
        try
        {
            this._balance = this._balance - amount;
            console.log("withdrawal Balance:", this._balance);
        }
        catch(ex){
            throw ex;
        }
        finally{
            Bank._lock.release();
            console.log(`Withdraw lock release`);
        }
    }
}