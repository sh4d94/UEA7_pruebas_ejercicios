// Base de datos en Supabase
 
    const namuClient = supabase.createClient('https://geeatbnsxnjicdfdcjvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZWF0Ym5zeG5qaWNkZmRjanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTkzNTUsImV4cCI6MjA3NzQ3NTM1NX0.ja-NZq9Ql01n5gF_IN-vl8yCxbELUzLt2zXr1kU77Ok', {
            db: {schema:"public"}
        });

    async function registroUsuario(nickname) {
            const nombreUsuario = await namuClient.from('usuariosRegistros').insert([
                {usuarios: nickname},
            ]).select()
        }
        registroUsuario();

// Loader de entrada
// NO IDENTAR; EL FORMATO YA ESTÁ BIEN
// INVESTIGAR CÓMO HACER QUE EL CURSOR INICIE CADA FRASE DESDE EL INICIO DE LA LÍNEA

document.addEventListener("DOMContentLoaded", () => {

            const text = 
`Recopilando...
Accediendo a los fragmentos...
Iniciando...`;

            let index = 0;
            const screen = document.getElementById("typewriter-screen");
            const typewriter = document.getElementById("typewriter-text");

            // Espera a que termine el loader (2.5s)
            setTimeout(() => {

                // Ocultar loader
                document.getElementById("loader").style.display = "none";

                // Mostrar pantalla de máquina de escribir
                screen.style.display = "flex";
                setTimeout(() => screen.style.opacity = 1, 50);

                function type() {
                    if (index < text.length) {
                        typewriter.textContent += text[index];
                        index++;

                        const speed = 40 + Math.random() * 80; // Velocidad variable
                        setTimeout(type, speed);

                    } else {
                        // DESVANECER Y MOSTRAR CONTENIDO REAL
                        setTimeout(() => {
                            screen.style.opacity = 0;

                            setTimeout(() => {
                                screen.style.display = "none";
                                document.querySelector(".container").style.display = "flex";
                                document.body.style.overflow = "auto";
                            }, 600);

                        }, 900);
                    }
                }

                type();

            }, 2500);
        });
