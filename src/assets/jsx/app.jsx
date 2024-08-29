import React, { useState } from "react";
import Card from "./card.jsx";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className="cards-container">
            <Card
                imageSrc="https://imagenes.20minutos.es/files/image_990_556/files/fp/uploads/imagenes/2023/08/02/nintendo-switch.r_d.495-275-10114.jpeg"
                title="Nintendo Switch"
                description="Consola híbrida portátil y de TV con controles desmontables y pantalla táctil de 6.2''."
            />
            <Card
                imageSrc="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2016/08/186616-nueva-xbox-one-s.jpg?tf=1200x"
                title="Xbox One"
                description="Consola 4K con carga rápida y mando con retroalimentación háptica para una experiencia inmersiva."
            />
            <Card
                imageSrc="https://i.pcmag.com/imagery/reviews/04TbDVTrBvaKXiUQsElxT0q-1.fit_scale.size_1028x578.v1699538397.jpg"
                title="PS5"
                description="Consola HD con soporte para 4K (en modelos más nuevos) y una amplia biblioteca de juegos."
            />
        </div>
    );
};

root.render(<App />);