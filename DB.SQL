create table pessoa (
  idpessoa serial primary key,
  nome_completo varchar(150),
  nome_usuario varchar(150),
  email varchar(100),
  senha varchar(50),
  foto varchar(200)  
);
create table postagem (
 idpostagem serial primary key,
 foto varchar(200),
 data_postagem date,
 titulo varchar(100),
 descricao varchar(300),
 localizacao varchar(300),
 idpessoa int,
 foreign key(idpessoa) references pessoa(idpessoa)
),