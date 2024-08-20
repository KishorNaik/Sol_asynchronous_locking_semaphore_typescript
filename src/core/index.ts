import 'reflect-metadata';
import { NODE_ENV } from './config/env';
import { Bank } from './modules/demo';
console.log(`Node Env : ${NODE_ENV}`);
console.log(`Directory : ${__dirname}`);


const main=async():Promise<void> => {

    const bankObj=new Bank();
    await bankObj.depositAsync(100);
    await bankObj.withdrawAsync(50);

    await bankObj.depositAsync(200);
    await bankObj.withdrawAsync(50);
}

main().then().catch(ex => console.log(ex.message));
