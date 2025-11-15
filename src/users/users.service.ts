import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id" : 1,
            "name": "Leanne Graham",
            "email": "sincere@april.biz",
            "role": "INTERN"
        },
        {
            "id" : 2,
            "name": "Ervin Howell",
            "email": "shanna@melissa.tv",
            "role": "INTERN"
        },
        {
            "id" : 3,
            "name": "Clementine Paul",
            "email": "c.paul@april.biz",
            "role": "ENGINEER"
        },
        {
            "id" : 4,
            "name": "Patricia Lebsack",
            "email": "p.lebsack@kory.org",
            "role": "ENGINEER"
        },
        {
            "id" : 5,
            "name": "Chelsea Dietrich",
            "email": "c.detrich@annie.ca",
            "role": "ADMIN"
        }
    ]

    getAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.filter(u => u.role === role)
        }
        else{
            return this.users;
        }
    }

    getById(id?: number){
        return this.users.find(u => u.id === id)
    }

    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        const userHighestId = [...this.users].sort((a,b) => b.id - a.id)[0];
        const newUser = {
            id: userHighestId.id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, user: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        this.users.map(u => {
            if (u.id === id){
                return{...u, ...user}
            }

            return u;
        })

        return this.getById(id);
    }

    delete(id:number){
        const removedUser = this.getById(id);

        this.users = this.users.filter(u => u.id !== id);

        return removedUser;
    }
}
