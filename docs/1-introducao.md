![logo](/images/logo.png)

# 1. Introdução

O sistema em questão será uma plataforma de gestão para um salão de serviços, oferecendo módulos distintos para clientes e administradores, com funcionalidades específicas para cada tipo de usuário. O módulo “Cliente” será destinado a pessoas físicas que desejam usufruir dos serviços oferecidos pelo salão, permitindo que os usuários realizem seu cadastro, agendem serviços, escolham formas de pagamento e forneçam feedback sobre os serviços prestados. Já o módulo “ADM” será destinado à administração do salão, permitindo aos administradores gerenciar a agenda, o cadastro de serviços, o cadastro de clientes e dependentes, além do histórico de agendamentos.
O sistema deverá permitir o registro de clientes, solicitando dados como nome completo, CPF, data de nascimento, e-mail, telefone, endereço, login e senha. O sistema realizará uma verificação de idade para garantir que o cliente tenha 18 anos ou mais, com base na data de nascimento informada. Caso o cliente deseje alterar seus dados cadastrais, será solicitado o login e a senha para garantir a segurança. Caso o cliente perca sua senha, ele poderá recuperá-la através do e-mail associado ao cadastro. Os dados que o cliente poderá alterar incluem nome completo, e-mail, telefone, endereço e senha. Além disso, será disponibilizado um campo de observação onde o cliente poderá informar restrições no uso de produtos.
Para acessar o sistema, o cliente deverá realizar o login utilizando seu e-mail e senha cadastrados. Caso ainda não esteja registrado, o cliente será redirecionado para a tela de cadastro, conforme descrito anteriormente. O sistema permitirá também que os administradores cadastrem os serviços e combos oferecidos pelo salão, com informações como nome, descrição e valor de cada serviço ou combo.
O sistema deve possibilitar o agendamento de serviços, onde o usuário poderá escolher o serviço desejado, o horário disponível e a forma de pagamento. As formas de pagamento aceitas incluem Pix, cartão de débito ou crédito, transferência bancária e dinheiro. As bandeiras de cartão aceitas são Mastercard, Visa, Elo e Hipercard. Após realizar o agendamento, o cliente poderá optar por receber um lembrete de agendamento, com as opções de envio por WhatsApp ou e-mail.
Após o serviço, o sistema permitirá que o cliente forneça um feedback sobre a experiência no salão. Esse feedback será dado em uma escala de 0 a 5 estrelas, podendo ser complementado com um campo descritivo para comentários adicionais. Caso o cliente opte por um plano família, o sistema permitirá o cadastro de dependentes, onde serão solicitados os dados do dependente, como nome completo, CPF e data de nascimento. O cliente também poderá excluir o cadastro de dependentes a qualquer momento.
Os administradores terão acesso à agenda do salão, podendo realizar alterações nos horários e excluir horários quando necessário. O sistema também permitirá que o cliente visualize seu histórico de agendamentos, com a possibilidade de filtrar os agendamentos realizados dentro de um período de tempo específico.
Além dos requisitos funcionais, o sistema deve atender a uma série de requisitos não funcionais. Ele deverá ser compatível com dispositivos móveis, funcionando em iPhones com iOS 15 a 18 e em dispositivos Android nas versões 13, 14 e 15. O sistema também deverá ser compatível com os navegadores Microsoft Edge (versões 117.0.2045a 125), Google Chrome (versões 125 a 137) e Safari (versões 13.2 a 18). Para garantir a segurança, o sistema deverá exibir um selo de verificação segura, assegurando que as informações transmitidas entre o usuário e o sistema sejam protegidas. O sistema deverá utilizar um banco de dados hospedado na nuvem, garantindo acessibilidade e segurança das informações online. Além disso, o sistema deverá ser capaz de suportar até 50 usuários simultâneos sem comprometer seu desempenho ou a estabilidade das funcionalidades.
Dessa forma, o sistema visa atender às necessidades de todos os usuários, oferecendo uma plataforma segura, eficiente e acessível para gerenciar os serviços de um salão de forma prática e moderna.


## 1.1 Objetivo

Desenvolver uma plataforma digital de gestão de salão com módulos distintos para clientes e administradores 

Permitir o agendamento de serviços online no qual o usuário possa escolher serviço, horários e qual das funcionárias gostaria que realizasse o mesmo, com configuração de lembrete por e-mail ou WhatsApp.

Oferecer um cadastro seguro com verificação de idade mínima (18+) e recuperação de senha por e-mail.

Disponibilizar histórico de agendamentos e feedbacks por parte dos clientes. 

Disponibilizar uma plataforma segura para a realização de pagamentos antecipados (Pix, cartão débito/crédito, transferência) com lembrete no Email ou WhatsApp.

Ser compatível com dispositivos (iOS, Android) e navegadores (Chrome, Edge, Safari).

Garantir o acesso ao sistema em dispositivos móveis e navegadores para até 50 usuários simultâneos


## 1.2 Escopo

Este projeto visa desenvolver uma plataforma web responsiva e compatível com dispositivos móveis, que terá como finalidade à gestão de serviços de salão, com funcionalidades voltadas para dois tipos de usuários principais: clientes e administradores. 

## 1.3 Definições

ADM: Administrador
CPF: Cadastro de Pessoa Física
Combo: Conjunto de serviços oferecidos com preço promocional

## 1.4 Público-alvo

O público-alvo da plataforma são tanto os clientes de salões de beleza quanto os administradores responsáveis pela gestão do negócio. O sistema atende pessoas físicas com 18 anos ou mais, que buscam praticidade para agendar serviços, escolher formas de pagamento, cadastrar dependentes e receber lembretes e notificações. 
Do outro lado, a plataforma é voltada para proprietários, gerentes e profissionais do setor de beleza que desejam modernizar a gestão do salão. Eles buscam controle sobre agendamentos, cadastro de clientes e serviços, além de otimização do atendimento. 
