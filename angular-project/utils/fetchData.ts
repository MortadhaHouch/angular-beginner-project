import {Todo,Comment,Post,Album,Photo,User,Address } from "./types";
type Return = Todo|Comment|Post|Album|Photo|User|Address|Error
async function fetchData(url:string,method:string,body:object|null):Promise<Return>{
    try {
        let request = await fetch(url,{
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body:body?JSON.stringify(body):null
        })
        return await request.json();
    } catch (error) {
        return Error("Failed to fetch data");
    }
}
export {fetchData}