import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("jac_user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
}
