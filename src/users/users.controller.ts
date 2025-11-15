import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get() //GET /users?role=value
    getAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.getAll(role);
    }

    @Get(':id')  //GET /users/:id
    getById(@Param('id') id: string) {
        return this.usersService.getById(+id);
    }

    @Post()     //POST /users
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.create(user);
    }

    @Patch(':id')     //PATCH /users
    update(@Param('id') id: string,
        @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id')  //DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }
}
