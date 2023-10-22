CREATE DATABASE chatbot;

CREATE TABLE [chatbot].[dbo].[QuestionsAndAnswers] (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Question TEXT,
    Answer TEXT,
    LanguageName VARCHAR(50)
);

--Spanish
INSERT INTO [chatbot].[dbo].[QuestionsAndAnswers] (Question, Answer, LanguageName)
VALUES ('¿Quién es XUMTECH?', 'XUMTECH es una firma tecnológica enfocada en acompañar a sus clientes en el proceso de transformación digital y adopción de tecnologías de vanguardia para la automatización de procesos de negocio de cara al cliente.', 'Spanish'),
	   ('¿Como es trabajar en XUMTECH?', 'En XUMTECH valoramos la excelencia, el bienestar de nuestros colaboradores y clientes, y la generación de valor en nuestro diario quehacer. ', 'Spanish'),
	   ('¿Cuando fue fundada XUMTECH?', 'XUMTECH fue fundada en el 2016.', 'Spanish'),
	   ('¿Cuantas personas trabajan en XUMTECH?', 'Hoy en día cuenta con un equipo de 50 personas.', 'Spanish'),
       ('¿Qué servicios ofrece tu empresa?', 'Ofrecemos una variedad de servicios, incluyendo desarrollo web, diseño gráfico y consultoría en tecnología.', 'Spanish'),
       ('¿Cómo puedo contactar al soporte técnico?', 'Puedes contactar al soporte técnico a través del número de teléfono (+1234567890) o correo electrónico (bot@example.com).', 'Spanish'),
	   ('¿Cómo puedo restablecer mi contraseña?', 'Puedes restablecer tu contraseña en la página de inicio de sesión.', 'Spanish'),
       ('¿Cuál es el nombre de la empresa?', 'ChatBotCR', 'Spanish'),
	   ('¿Dónde los puedo encontrar?', 'En nuestras oficinas en San José, San Pedro, Montes de Oca.', 'Spanish'),
	   ('¿Cuantas fases tiene el proceso de reclutamiento en XUMTECH?', 'El proceso de reclutamiento en XUMTECH consta de 5 fases, en donde se avanza a la siguiente fase conforme se supera la anterior.', 'Spanish');

--English   
INSERT INTO [chatbot].[dbo].[QuestionsAndAnswers] (Question, Answer, LanguageName)
VALUES ('Who is XUMTECH?', 'XUMTECH is a technology firm focused on assisting its clients in the process of digital transformation and the adoption of cutting-edge technologies for customer-facing business process automation.', 'English'),
       ('What is it like to work at XUMTECH?', 'At XUMTECH, we value excellence, the well-being of our employees and clients, and the generation of value in our daily work.', 'English'),
       ('When was XUMTECH founded?', 'XUMTECH was founded in 2016.', 'English'),
       ('How many people work at XUMTECH?', 'Today, it has a team of 50 people.', 'English'),
       ('What services does your company offer?', 'We offer a variety of services, including web development, graphic design, and technology consulting.', 'English'),
       ('How can I contact technical support?', 'You can contact technical support by phone (+1234567890) or email (bot@example.com).', 'English'),
       ('How can I reset my password?', 'You can reset your password on the login page.', 'English'),
       ('What is the name of the company?', 'ChatBotCR', 'English'),
       ('Where can I find you?', 'In our offices in San José, San Pedro, Montes de Oca.', 'English'),
       ('How many phases are there in XUMTECH recruitment process?', 'XUMTECH recruitment process consists of 5 phases, where you progress to the next phase as you successfully pass the previous one.', 'English');

SELECT * FROM [chatbot].[dbo].[QuestionsAndAnswers];