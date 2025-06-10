const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json());

app.get("/api/product", (req, res) => {
    res.json({
        name: "Auriculares Inalámbricos Pro",
        description: "Auriculares con cancelación de ruido activa, hasta 30 horas de batería.",
        price: 89.99,
        image: "https://via.placeholder.com/400x400.png?text=Auriculares+Pro",
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
