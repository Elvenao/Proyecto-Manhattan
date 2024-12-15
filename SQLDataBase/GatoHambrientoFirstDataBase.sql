CREATE TABLE inventario (
    id INTEGER PRIMARY KEY,
    producto TEXT NOT NULL,
    cantidad INTEGER NOT NULL
);
INSERT INTO inventario VALUES(1,'Carne de hamburguesa',8);
INSERT INTO inventario VALUES(2,'Tiras de pollo',47);
INSERT INTO inventario VALUES(3,'Carne de pollo hamburguesa',25);
INSERT INTO inventario VALUES(4,'Boneless',20);
INSERT INTO inventario VALUES(5,'Alitas',30);
INSERT INTO inventario VALUES(6,'Papa waffle',22);
INSERT INTO inventario VALUES(7,'Papa Gajo',30);
INSERT INTO inventario VALUES(8,'Piña en almíbar',4);
INSERT INTO inventario VALUES(9,'Champiñones en lata',8);
INSERT INTO inventario VALUES(10,'Frijoles en lata',12);
INSERT INTO inventario VALUES(11,'Pepinillos en frasco',4);
INSERT INTO inventario VALUES(12,'Chiles jalapeños en bolsa',4);
INSERT INTO inventario VALUES(13,'Mayonesa',3);
INSERT INTO inventario VALUES(14,'Mostaza',3);
INSERT INTO inventario VALUES(15,'Catsup',4);
INSERT INTO inventario VALUES(16,'Caguama Corona',12);
INSERT INTO inventario VALUES(17,'Caguama Victoria',12);
INSERT INTO inventario VALUES(18,'Cerveza de latón modelo',9);
INSERT INTO inventario VALUES(19,'Cerveza de latón victoria',9);
INSERT INTO inventario VALUES(20,'Cerveza de latón Heineken',9);
INSERT INTO inventario VALUES(21,'Boing de mango',12);
INSERT INTO inventario VALUES(22,'Boing de guayaba',6);
INSERT INTO inventario VALUES(23,'Boing de manzana',9);
INSERT INTO inventario VALUES(24,'Coca cola de vidrio',15);
INSERT INTO inventario VALUES(25,'Coca cola de lata',12);
INSERT INTO inventario VALUES(26,'Coca cola botella',12);
INSERT INTO inventario VALUES(27,'Fanta',10);
INSERT INTO inventario VALUES(28,'Delaware',8);
INSERT INTO inventario VALUES(29,'Sprite',7);
INSERT INTO inventario VALUES(30,'Sidral Mundet',9);
INSERT INTO inventario VALUES(31,'Coca cola sin azúcar',12);
INSERT INTO inventario VALUES(32,'Naranja y nada',6);
INSERT INTO inventario VALUES(33,'Limón y nada',6);
INSERT INTO inventario VALUES(34,'Peñafiel',20);
INSERT INTO inventario VALUES(35,'Sangría',12);
INSERT INTO inventario VALUES(36,'Leche entera',12);
INSERT INTO inventario VALUES(37,'Queso americano',4);
INSERT INTO inventario VALUES(38,'Queso cheddar',3);
INSERT INTO inventario VALUES(39,'Queso manchego',3);
INSERT INTO inventario VALUES(40,'Queso Oaxaca',4);
INSERT INTO inventario VALUES(41,'Salchicha de pavo',4);
INSERT INTO inventario VALUES(42,'Tocino',2);
INSERT INTO inventario VALUES(43,'Bisteck',3);
INSERT INTO inventario VALUES(44,'Jamón',4);
INSERT INTO inventario VALUES(45,'Pan para hot dog',6);
INSERT INTO inventario VALUES(46,'Bollo para hamburguesa',8);
INSERT INTO inventario VALUES(47,'Costillas',20);
INSERT INTO inventario VALUES(48,'Aros de cebolla',12);
INSERT INTO inventario VALUES(49,'Nuggets',18);
INSERT INTO inventario VALUES(50,'Tortilla de burrito',10);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre_rol TEXT NOT NULL
);

INSERT INTO roles VALUES(1,'Supervisor');
INSERT INTO roles VALUES(2,'Usuario');

CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user TEXT NOT NULL,
    password TEXT NOT NULL,
    rol_id INTEGER NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES roles(id)
);

INSERT INTO usuarios VALUES(1,'super','sup1',1);
INSERT INTO usuarios VALUES(2,'user','admin',2);
INSERT INTO usuarios VALUES(1, 'Niamky', 'Zorua570');
INSERT INTO usuarios VALUES(1,'elvenao','DarkSouls');

CREATE TABLE Hamburguesas ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );

INSERT INTO Hamburguesas VALUES(101,'Clásica',65.0,'');
INSERT INTO Hamburguesas VALUES(102,'Sencilla',75.0,'');
INSERT INTO Hamburguesas VALUES(103,'3 quesos',85.0,'');
INSERT INTO Hamburguesas VALUES(104,'4 quesos',90.0,'');
INSERT INTO Hamburguesas VALUES(105,'Doble carne',115.0,'');
INSERT INTO Hamburguesas VALUES(106,'Hawaiana 2q',85.0,'');
INSERT INTO Hamburguesas VALUES(107,'Hawaiana 4q',95.0,'');
INSERT INTO Hamburguesas VALUES(108,'Tocino 2q',85.0,'');
INSERT INTO Hamburguesas VALUES(109,'Tocino 4q',95.0,'');
INSERT INTO Hamburguesas VALUES(110,'4 quesos',0.0,NULL);
INSERT INTO Hamburguesas VALUES(111,'Champiñones 4q',95.0,'');
INSERT INTO Hamburguesas VALUES(112,'Fried chicken',125.0,'');
INSERT INTO Hamburguesas VALUES(113,'Deluxe',120.0,'');
INSERT INTO Hamburguesas VALUES(114,'Mango habanero',120.0,'');

CREATE TABLE Snaks ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );

INSERT INTO Snaks VALUES(201,'Papas ch',50.0,'');
INSERT INTO Snaks VALUES(202,'Papas md',70.0,'');
INSERT INTO Snaks VALUES(203,'Papas grd',90.0,'');
INSERT INTO Snaks VALUES(204,'Papas gajo',65.0,'');
INSERT INTO Snaks VALUES(205,'Papas waffle',70.0,'');
INSERT INTO Snaks VALUES(206,'Nuggets',65.0,'');
INSERT INTO Snaks VALUES(207,'Aros de cebolla',75.0,'');
INSERT INTO Snaks VALUES(208,'Papas especiales',120.0,'');
INSERT INTO Snaks VALUES(209,'Salchipapas',90.0,'');
INSERT INTO Snaks VALUES(210,'Salchipulpos',60.0,'');

CREATE TABLE Pollo ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );

INSERT INTO Pollo VALUES(301,'Alitas',105.0,'');
INSERT INTO Pollo VALUES(302,'Alitas con nachos',115.0,'');
INSERT INTO Pollo VALUES(303,'Alitas con papas',125.0,'');
INSERT INTO Pollo VALUES(304,'Boneless',110.0,'');
INSERT INTO Pollo VALUES(305,'Boneless con nachos',120.0,'');
INSERT INTO Pollo VALUES(306,'Boneless con papas',125.0,'');
INSERT INTO Pollo VALUES(307,'K-tiras',110.0,'');
INSERT INTO Pollo VALUES(308,'K-tiras con nachos',120.0,'');
INSERT INTO Pollo VALUES(309,'K-tiras con papas',125.0,'');

CREATE TABLE Burritos ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );

INSERT INTO Burritos VALUES(401,'Burro bisteck',115.0,'');
INSERT INTO Burritos VALUES(402,'Burro longaniza',115.0,'');
INSERT INTO Burritos VALUES(403,'Burro tocino',115.0,'');
INSERT INTO Burritos VALUES(404,'Burro champiñones',115.0,'');
INSERT INTO Burritos VALUES(405,'Burro hawaiano',115.0,'');
INSERT INTO Burritos VALUES(406,'Burro campechano',120.0,'');
INSERT INTO Burritos VALUES(407,'Burro bisteck tocino',120.0,'');
INSERT INTO Burritos VALUES(408,'Burro bisteck champiñones',120.0,'');
INSERT INTO Burritos VALUES(410,'Burro arrachera',0.0,NULL);
CREATE TABLE Refrescos ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );
INSERT INTO Refrescos VALUES(701,'Coca cola lata',35.0,'25');
INSERT INTO Refrescos VALUES(702,'Coca cola 600ml',35.0,'26');
INSERT INTO Refrescos VALUES(703,'Coca cola vidrio',35.0,'24');
INSERT INTO Refrescos VALUES(704,'Coca cola zero',35.0,'31');
INSERT INTO Refrescos VALUES(705,'Fanta',35.0,'5');
INSERT INTO Refrescos VALUES(706,'Sprite',35.0,'29');
INSERT INTO Refrescos VALUES(707,'Delaware',35.0,'28');
INSERT INTO Refrescos VALUES(708,'Sidral Mundet',35.0,'30');
INSERT INTO Refrescos VALUES(709,'Naranja y nada',35.0,'32');
INSERT INTO Refrescos VALUES(710,'Limón y nada',35.0,'33');
INSERT INTO Refrescos VALUES(711,'Sangría',35.0,'35');
INSERT INTO Refrescos VALUES(712,'Boing mango',20.0,'21');
INSERT INTO Refrescos VALUES(713,'Boing manzana',20.0,'23');
INSERT INTO Refrescos VALUES(714,'Boing guayaba',22.0,'14');
INSERT INTO Refrescos VALUES(715,'Sangría preparada',60.0,'35');
INSERT INTO Refrescos VALUES(716,'Tehuacan preparada',60.0,'34');

CREATE TABLE Cerveza ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );

INSERT INTO Cerveza VALUES(801,'Cerveza de Latón Victoria',45.0,'19');
INSERT INTO Cerveza VALUES(802,'Cerveza de Latón Modelo',45.0,'18');
INSERT INTO Cerveza VALUES(804,'Cerveza de Latón Heineken',45.0,'20');
INSERT INTO Cerveza VALUES(805,'Cerillito Victoria',50.0,'19');
INSERT INTO Cerveza VALUES(806,'Cerillito Modelo',50.0,'18');
INSERT INTO Cerveza VALUES(807,'Caguama mega Victoria',95.0,'17');
INSERT INTO Cerveza VALUES(808,'Caguama mega Corna',16.0,'');
INSERT INTO Cerveza VALUES(809,'Michelada de sabor Corona',120.0,'16');
INSERT INTO Cerveza VALUES(810,'Michelada de sabor Victoria',120.0,'17');
INSERT INTO Cerveza VALUES(811,'Michelada ClamatoCorona',120.0,'16');
INSERT INTO Cerveza VALUES(812,'Michelada Clamato Victoria',120.0,'17');
INSERT INTO Cerveza VALUES(813,'MicheladaCorona',100.0,NULL);
INSERT INTO Cerveza VALUES(814,'Michelada Victoria',100.0,'17');

CREATE TABLE Hotdogs ( id_alimento INTEGER PRIMARY KEY, alimento TEXT, precio REAL, prod_desch TEXT );

INSERT INTO Hotdogs VALUES(501,'Hot dog sencillo',25.0,'');
INSERT INTO Hotdogs VALUES(502,'Hot dog sencillo ord',70.0,'');
INSERT INTO Hotdogs VALUES(503,'Hot dog c queso',35.0,'');
INSERT INTO Hotdogs VALUES(504,'Hot dog c queso ord',90.0,'');
INSERT INTO Hotdogs VALUES(505,'Hot dog c tocino',35.0,'');
INSERT INTO Hotdogs VALUES(506,'Hot dog c tocino ord',90.0,'');
INSERT INTO Hotdogs VALUES(507,'Hot dog especial',40.0,'');
INSERT INTO Hotdogs VALUES(508,'Hot dog especial ord',110.0,'');
INSERT INTO Hotdogs VALUES(509,'Hot dog hawaiano',40.0,'');
INSERT INTO Hotdogs VALUES(510,'Hot dog hawaiano ord',110.0,'');
