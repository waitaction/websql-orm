@Table()
class user {
    @Column("char(36) NOT NULL")
    public id: string;
    @Column("varchar(255) DEFAULT NULL")
    public name: string;

}

@Table()
class user2 {
    @Column("text")
    public id2: string;
    @Column("number")
    public name2: string;
}


@Table()
class test {
    @Column("text")
    public id2: string;
    @Column("number")
    public name2: string;
}



