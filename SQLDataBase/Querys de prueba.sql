use basedatos;

SELECT i.Id_Inventario, i.Nombre, i.Stock, c.Categoria FROM Inventario AS i INNER JOIN Inventario_Categorias AS c ON IC_Id = Id_IC;

SELECT * FROM Inventario_Categorias;

SELECT * FROM usuario;
