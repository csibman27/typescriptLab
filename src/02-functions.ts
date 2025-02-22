import {Friend, Colleague, ColleagueHistory, EmailContact } from './myTypes'
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

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  
  function addColleague(currentColleagues : Colleague[], name : string, department : string, email: string) {
    
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
          email: email,
          extension: 133,
        }
      };
      
      currentColleagues.push(newColleague)
  };

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// console.log(colleagues.current)

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
      end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const result = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result.slice(0,end) 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  

function findFriends(friends: Friend[], seperater: (p: Friend) => boolean) {
  
  
  const result = friends.map((friend) => ({ name: friend.name }));
  return result
  
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));


function addInterest(friend : Friend, newInterest : string): string[] {
  
  friend.interests = [newInterest]
  friend.interests.push(newInterest)
  return friend.interests;
  }

  console.log(addInterest(friends[0], 'Politics'))