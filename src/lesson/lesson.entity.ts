import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Lesson {
    // Mongo ID
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string

    @Column()
    students: string[];
}