import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]) : string[] {
    return friends.map(friend =>{
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`
    });

}

console.log(allOlder(friends))