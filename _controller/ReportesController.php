<?php 
    require_once "_model/MainModel.php";
    
    class ReportesController {
        private $query;
        private $datos;

        public function __construct() {
            // Inicializar la consulta SQL
            $this->query = "
                SELECT
                CURDATE() AS Dia,
                SUM(Total) AS Total_Dia,
                YEAR(Fecha) AS Año,
                WEEK(Fecha, 1) AS Semana,
                SUM(Total) AS Total_Semana,
                MONTH(Fecha) AS Mes,
                SUM(Total) AS Total_Mes
                FROM
                    Notas
                WHERE
                    Fecha = CURDATE()
                GROUP BY
                    Fecha, YEAR(Fecha), WEEK(Fecha, 1), MONTH(Fecha)
                ORDER BY
                    Fecha DESC
            ";
            
            // Ejecutar la consulta
            $mysql = new MainModel();
            $this->datos = $mysql->specialQuery($this->query);
        }

        public function renderContent() {
            include "_view/reporte.html";
        }

        public function renderCSS() {
            // Aquí puedes agregar cualquier CSS necesario
        }
    }
?>
