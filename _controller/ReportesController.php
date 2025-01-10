<?php 
    require_once "_model/MainModel.php";
    
    class ReportesController {
        private $query;
        private $datos;

        public function __construct() {
            // Inicializar la consulta SQL
            $this->query = "
                SELECT 
                DATE_SUB(CURDATE(), INTERVAL 0 DAY) AS Dia_Consulta,
                SUM(CASE WHEN Fecha = DATE_SUB(CURDATE(), INTERVAL 0 DAY) THEN Total ELSE 0 END) AS Total_Dia,
                YEAR(CURDATE()) AS Año,
                WEEK(CURDATE(), 1) AS Semana,
                SUM(CASE WHEN WEEK(Fecha, 1) = WEEK(CURDATE(), 1) THEN Total ELSE 0 END) AS Total_Semana,
                MONTH(CURDATE()) AS Mes,
                SUM(CASE WHEN MONTH(Fecha) = MONTH(CURDATE()) THEN Total ELSE 0 END) AS Total_Mes
            FROM 
                Notas
            WHERE 
                YEAR(Fecha) = YEAR(CURDATE());
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
