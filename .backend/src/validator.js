const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsing de dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para o formulário
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Validação simples
    if (!name || !email || !message) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    // Salvar informações em arquivo
    const folderPath = path.join(__dirname, 'submissions');
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const filePath = path.join(folderPath, `${Date.now()}_submission.txt`);
    const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

    fs.writeFileSync(filePath, formData);

    // Configurar nodemailer para enviar o e-mail
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use qualquer serviço SMTP compatível
        auth: {
            user: 'seuemail@gmail.com', // seu email
            pass: 'suasenha', // sua senha de app
        },
    });

    const mailOptions = {
        from: 'seuemail@gmail.com',
        to: 'emaildestino@gmail.com',
        subject: 'Novo formulário enviado',
        text: formData,
    };

    // Enviar e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Erro ao enviar e-mail');
        }
        console.log('Email enviado: ' + info.response);
        res.send('Formulário enviado com sucesso!');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
