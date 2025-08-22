-- Juego Educativo - Base de Datos Completa
-- Eliminar tablas si existen
DROP TABLE IF EXISTS user_answers;
DROP TABLE IF EXISTS game_sessions;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;

-- Crear tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100),
    total_score INT DEFAULT 0,
    games_played INT DEFAULT 0,
    correct_answers INT DEFAULT 0,
    total_questions INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crear tabla de categorías
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    color VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de preguntas
CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    question_text TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
    difficulty INT DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 3),
    explanation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Crear tabla de sesiones de juego
CREATE TABLE game_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_id INT,
    total_questions INT DEFAULT 0,
    correct_answers INT DEFAULT 0,
    total_score INT DEFAULT 0,
    time_taken INT DEFAULT 0,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Crear tabla de respuestas de usuario
CREATE TABLE user_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT,
    question_id INT,
    user_answer CHAR(1) CHECK (user_answer IN ('A', 'B', 'C', 'D')),
    is_correct BOOLEAN DEFAULT FALSE,
    time_taken INT DEFAULT 0,
    points_earned INT DEFAULT 0,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES game_sessions(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- Insertar categorías
INSERT INTO categories (name, description, icon, color) VALUES
('Ciencia', 'Preguntas sobre biología, química, física y ciencias naturales', 'Microscope', 'blue'),
('Historia', 'Preguntas sobre eventos históricos, personajes y civilizaciones', 'Clock', 'green'),
('Matemáticas', 'Preguntas sobre aritmética, álgebra, geometría y cálculo', 'Calculator', 'purple');

-- Insertar preguntas de Ciencia
INSERT INTO questions (category_id, question_text, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation) VALUES
(1, '¿Cuál es el elemento químico más abundante en el universo?', 'Oxígeno', 'Hidrógeno', 'Carbono', 'Helio', 'B', 1, 'El hidrógeno representa aproximadamente el 75% de la masa del universo observable.'),
(1, '¿Qué tipo de animal es una ballena?', 'Pez', 'Mamífero', 'Reptil', 'Anfibio', 'B', 1, 'Las ballenas son mamíferos marinos que respiran aire y amamantan a sus crías.'),
(1, '¿Cuántos huesos tiene el cuerpo humano adulto?', '206', '215', '198', '220', 'A', 2, 'Un adulto tiene 206 huesos, mientras que los bebés nacen con aproximadamente 270 huesos.'),
(1, '¿Qué planeta es conocido como el "planeta rojo"?', 'Venus', 'Júpiter', 'Marte', 'Saturno', 'C', 1, 'Marte es llamado el planeta rojo debido al óxido de hierro en su superficie.'),
(1, '¿Cuál es la velocidad de la luz en el vacío?', '300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s', 'A', 2, 'La velocidad de la luz en el vacío es aproximadamente 299,792,458 metros por segundo.'),
(1, '¿Qué gas es esencial para la fotosíntesis?', 'Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Hidrógeno', 'C', 2, 'Las plantas usan CO2 del aire junto con agua y luz solar para producir glucosa y oxígeno.'),
(1, '¿Cuál es la unidad básica de la herencia?', 'Cromosoma', 'Gen', 'ADN', 'Proteína', 'B', 3, 'Los genes son las unidades básicas de la herencia que determinan las características hereditarias.'),
(1, '¿Qué científico propuso la teoría de la evolución?', 'Einstein', 'Newton', 'Darwin', 'Mendel', 'C', 2, 'Charles Darwin propuso la teoría de la evolución por selección natural en 1859.');

-- Insertar preguntas de Historia
INSERT INTO questions (category_id, question_text, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation) VALUES
(2, '¿En qué año comenzó la Segunda Guerra Mundial?', '1938', '1939', '1940', '1941', 'B', 1, 'La Segunda Guerra Mundial comenzó el 1 de septiembre de 1939 con la invasión alemana a Polonia.'),
(2, '¿Quién fue el primer emperador romano?', 'Julio César', 'Augusto', 'Nerón', 'Trajano', 'B', 2, 'Augusto (Octavio) fue el primer emperador romano, gobernando desde el 27 a.C. hasta el 14 d.C.'),
(2, '¿En qué año llegó Cristóbal Colón a América?', '1490', '1491', '1492', '1493', 'C', 1, 'Cristóbal Colón llegó a América el 12 de octubre de 1492.'),
(2, '¿Cuál fue la capital del Imperio Inca?', 'Machu Picchu', 'Cusco', 'Lima', 'Quito', 'B', 2, 'Cusco fue la capital del Imperio Inca y el centro de su civilización.'),
(2, '¿Qué revolución comenzó en Francia en 1789?', 'Industrial', 'Francesa', 'Americana', 'Rusa', 'B', 1, 'La Revolución Francesa comenzó en 1789 y transformó la estructura política de Francia.'),
(2, '¿Quién pintó la Capilla Sixtina?', 'Leonardo da Vinci', 'Rafael', 'Miguel Ángel', 'Donatello', 'C', 2, 'Miguel Ángel pintó el techo de la Capilla Sixtina entre 1508 y 1512.'),
(2, '¿En qué siglo vivió Shakespeare?', 'XV', 'XVI', 'XVII', 'XVIII', 'B', 2, 'William Shakespeare vivió principalmente en el siglo XVI (1564-1616).'),
(2, '¿Qué imperio construyó Machu Picchu?', 'Azteca', 'Maya', 'Inca', 'Olmeca', 'C', 1, 'Machu Picchu fue construido por el Imperio Inca en el siglo XV.');

-- Insertar preguntas de Matemáticas
INSERT INTO questions (category_id, question_text, option_a, option_b, option_c, option_d, correct_answer, difficulty, explanation) VALUES
(3, '¿Cuánto es 7 × 8?', '54', '56', '58', '64', 'B', 1, '7 multiplicado por 8 es igual a 56.'),
(3, '¿Cuál es el valor de π (pi) aproximadamente?', '3.14', '3.41', '2.14', '4.13', 'A', 1, 'Pi (π) es aproximadamente 3.14159, comúnmente redondeado a 3.14.'),
(3, '¿Cuántos grados tiene un círculo completo?', '180°', '270°', '360°', '450°', 'C', 1, 'Un círculo completo tiene 360 grados.'),
(3, '¿Cuál es la raíz cuadrada de 64?', '6', '7', '8', '9', 'C', 2, 'La raíz cuadrada de 64 es 8, porque 8 × 8 = 64.'),
(3, '¿Cuánto es 15% de 200?', '25', '30', '35', '40', 'B', 2, '15% de 200 es 30 (200 × 0.15 = 30).'),
(3, '¿Cuál es la fórmula del área de un círculo?', 'πr', 'πr²', '2πr', 'πd', 'B', 2, 'El área de un círculo se calcula con la fórmula πr², donde r es el radio.'),
(3, '¿Cuánto es 2³ (2 elevado a la 3)?', '6', '8', '9', '12', 'B', 2, '2³ = 2 × 2 × 2 = 8.'),
(3, '¿Cuál es el resultado de 144 ÷ 12?', '11', '12', '13', '14', 'B', 1, '144 dividido entre 12 es igual a 12.');

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_questions_category ON questions(category_id);
CREATE INDEX idx_game_sessions_user ON game_sessions(user_id);
CREATE INDEX idx_user_answers_session ON user_answers(session_id);

-- Crear trigger para actualizar estadísticas automáticamente (MySQL syntax)
DELIMITER //
CREATE TRIGGER trigger_update_user_stats
    AFTER INSERT ON game_sessions
    FOR EACH ROW
BEGIN
    UPDATE users SET
        total_score = (
            SELECT COALESCE(SUM(total_score), 0)
            FROM game_sessions
            WHERE user_id = NEW.user_id
        ),
        games_played = (
            SELECT COUNT(*)
            FROM game_sessions
            WHERE user_id = NEW.user_id
        ),
        correct_answers = (
            SELECT COALESCE(SUM(correct_answers), 0)
            FROM game_sessions
            WHERE user_id = NEW.user_id
        ),
        total_questions = (
            SELECT COALESCE(SUM(total_questions), 0)
            FROM game_sessions
            WHERE user_id = NEW.user_id
        ),
        updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.user_id;
END//
DELIMITER ;
