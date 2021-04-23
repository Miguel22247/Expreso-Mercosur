const Discord = require("discord.js");
const client = new Discord.Client();
const avatarEmbed = require('discord.js-avatar');
require("dotenv").config();
const prefix = process.env.PREFIX;

const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
  website: 'https://Expresobot.thephodit.repl.run',
  title: 'Secundario',
  interval: 30 // minutes

});

monitor.on('up', (res) => console.log(`${res.website} está encendido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));
///////////////////INICIO////////////////////////////////////////////////////////

client.on("ready", () => {
  console.log(`Bienvenido de nuevo, soy el bot de Expreso Mercosur`); // Imprime en consola cuando inicia correctamente


  const array = [
    {
      name: `www.expresomercosur.ga`,
      type: `WATCHING`
    },
    {
      name: `Expreso Mercosur`,
      type: `PLAYING`
    }												
  ]

  setInterval(() => {
    function presence() {
      client.user.setPresence({
        status: 'online',
        activity: array[Math.floor(Math.random() * array.length)],
      });
    }


    presence();
  }, 1000);
})





client.on("message", (message) => {

  if (message.content.startsWith(prefix + 'servidor')) { //Muestra datos del servidor
    var server = message.guild;

    const embed = new Discord.MessageEmbed()
      .setTitle("Datos del servidor de Expreso Mercosur")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor(0x00AE86)
      .setDescription("Estos son los datos del servidor.")
      .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
      .setTimestamp()
      .addField('ID', server.id, true)
      .addField('Region', server.region, true)
      .addField('Creado el', server.joinedAt.toDateString(), true)
      .addField('Dueño del Servidor', "<@334451601857052673>", true)
      .addField('Miembros', server.memberCount, true)
      .addField('Roles', server.roles.size, true)
      .setColor(0x66b3ff)

    message.channel.send(embed);
    message.delete()

  } else



    if (message.content.startsWith(prefix + 'ping')) {
      let ping = Math.floor(message.client.ws.ping);
      const embed = new Discord.MessageEmbed()
        .setTitle("Tu ping en Expreso Mercosur")
        .setColor(0x00AE86)
        .setDescription("Tu ping es de " + ping + "ms")
        .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
        .setTimestamp()
        .setColor(0x66b3ff)
        .setAuthor(message.author.username, message.author.displayAvatarURL())

      message.channel.send(embed)
      message.delete()
    } else

      if (message.content.startsWith(prefix + 'comandos')) { //Muestra los comandos disponibles para el servidor
        const embed = new Discord.MessageEmbed()
          .setTitle("Comandos de Expreso Mercosur")
          .setColor(0x00AE86)
          .setDescription("Estos son los comandos que podras utilizar con el prefijo ! en nuestra comunidad.")
          .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
          .setTimestamp()
          .setImage("https://cdn.discordapp.com/attachments/816454852330782781/826622368826130432/Y1EWQhP-1-1.png")
          .addField('SERVIDOR', 'Muestra propiedades del servidor', true)
          .addField('REDES', 'Con este comando veras las redes sociales', true)
          .addField('PING', 'Con este comando veras tu ping con el bot', true)
          .addField('REGLAS', 'Con este comando podras ver el canal donde estan las reglas', true)
          .addField("AV", "Con este comando mostra tu avatar o el avatar del usuario que menciones", true)
          .setColor(0x66b3ff)

        message.channel.send(embed)
        message.delete()

      } else
        if (message.content.startsWith(prefix + 'info')) { //Muestra los comandos disponibles para el servidor
          const embed = new Discord.MessageEmbed()
            .setTitle("Acerca de Expreso Mercosur")
            .setColor("#2f3136")
            .setDescription("Expreso Mercosur abrio sus puertas para todo el mundo el 28 de Febrero Del 2021 con el fin de juntar jugadores para salir a hacer rutas entre todos e asistir a convoys Publicos, Multiempresas E Privados y compartir buenos momentos entre todos! Nuestro lema, \"Haciendo nuestro propio camino\" que proviene de mi antigua VTC ¿que significa?, Bueno Significa que junto a nuestros conductores y tu que talvez te quieres unir! vamos a construir todo un camino junto lleno de Buena Vibra y Muchas Rutas!\n\n<:719767475985842278:832419852194676746> [**Pagina Web**](https://www.expresomercosur.ga)\n\n<:twitch:832420031714426901> [**Twitch**](https://www.twitch.tv/expresomercosurvtc)\n\n<:instagrampnginstagramiconlogopng:832426353084727296>  [**Instagram**](https://www.instagram.com/expreso.mercosur.vtc/)\n\n<:Facebook:832419852525633536>  [**Facebook**](https://www.facebook.com/ExpresoMercosur)\n\n<:Twitter:832420091504623616>   [**Twitter**](https://twitter.com/ExpresoMercosur)\n\n<:Youtube:832420067819257876>    [**Youtube**](https://www.youtube.com/channel/UCPRRqO6NP0Dlwd8dBG6-BoQ)\n\n<:777462420855062618:832426334613405729>     [**Truckers MP**](https://truckersmp.com/vtc/38038)")
            .setImage("https://cdn.discordapp.com/attachments/816454852330782781/832428349183754270/imagen_2021-04-07_201434.png")

          message.channel.send(embed)
          message.delete()

        } else
          if (message.content.startsWith(prefix + 'reglas')) { //Muestra un mensaje marcando donde estan las reglas
            const embed = new Discord.MessageEmbed()
              .setTitle("Redes de Expreso Mercosur")
              .setColor(0x00AE86)
              .setDescription("Aqui podras encontrar las reglas de nuestra VTC.")
              .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
              .setTimestamp()

              .addField('Aqui podras encontrar las reglas de la VTC', ' <#816454815173443624>', true)
              .addField('Aqui podras encontrar las reglas de Discord', '<#816454819149512715>', true)
              .addField('Aqui podras encontrar las reglas de TruckersMP', '<#816454821405523969>', true)
              .setColor(0x66b3ff)

            message.channel.send(embed)
            message.delete()
          } else

            if (message.content.startsWith(prefix + 'redes')) { //Muestra un mensaje mostrando nuestras redes sociales
              const embed = new Discord.MessageEmbed()
                .setTitle("Redes de Expreso Mercosur")
                .setColor(0x00AE86)
                .setDescription("Estas son las redes sociales de nuestra VTC.")
                .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/816454852330782781/826623754837688321/Y1EWQhP-1-1.png")
                .addField('<:Twitter:832420091504623616> Twitter', '[Link](https://twitter.com/ExpresoMercosur)', true)
                .addField('<:instagrampnginstagramiconlogopng:832426353084727296> Instagram', '[Link](https://www.instagram.com/expreso.mercosur.vtc/)', true)
                .addField('<:719767475985842278:832419852194676746> Pagina Web', '[Link](https://www.expresomercosur.ga/inicio)', true)
                .addField('<:twitch:832420031714426901> Twitch', '[Link](https://www.twitch.tv/expresomercosurvtc)', true)
                .addField('<:Youtube:832420067819257876> Youtube', '[Link](https://www.youtube.com/channel/UCPRRqO6NP0Dlwd8dBG6-BoQ)', true)
                .addField('<:discord:834210070719234099> Discord', '[Link](https://discord.gg/4femdCMZm5)', true)
                .setColor(0x66b3ff)

              message.channel.send(embed)
              message.delete()
            } else

              if (message.content.startsWith(prefix + 'unirse')) { //Muestra un mensaje mostrando como unirse a la empresa
                const embed = new Discord.MessageEmbed()
                  .setTitle(":construction_worker:¿Cómo me uno al equipo?:construction_worker:")
                  .setColor(0x00AE86)
                  .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                  .setTimestamp()
                  .setDescription('**Bienvenido a Expreso Mercosur, ¿estás interesado en entrar a nuestra comunidad? sigue los siguientes pasos.**')
                  .addField('1.- Primeramente, debes registrarte en Trucksbook con tu cuenta de Steam, para así poder jugar en el MP.', 'Link de Trucksbook: https://trucksbook.eu/')
                  .addField('2.- Luego, debes mandar solicitud a la empresa en Trucksbook y un miembro Staff aceptará tu solicitud (Recuerda leer todas las reglas)', 'Link de la empresa en Trucksbook: https://trucksbook.eu/company/112783 ')
                  .addField('3.- Instala TRUCKSBOOK CLIENT para que se puedan registrar tus trabajos en ETS2/ATS-MP, obligatorio.', 'Link: https://cdn.trucksbook.eu/data/client/TB_Client_1_3_7.zip')
                  .addField('4.- Sigue los pasos de la aplicación, sincroniza tu cuenta de Trucksbook e inserta las direcciones de los juegos.', '⠀')
                  .addField('5.- Únete al VTC de TruckersMP', 'Link de la VTC en TMP: https://truckersmp.com/vtc/38038')
                  .setColor(0x66b3ff)

                message.channel.send(embed)
                message.delete()

              } else

                if (message.content.startsWith(prefix + 'confirmacion')) {
                  const embed = new Discord.MessageEmbed()
                    .setTitle("Confirmacion de asistencia")
                    .setDescription("¿Asistiras al convoy?")
                    .setColor(0x00AE86)
                    .addField('✅ Si - ❔ Tal Vez - ❌ No', 'Reacciona abajo')
                    .setFooter("Staff de Expreso Mercosur", client.user.avatarURL())
                    .setTimestamp()
                  message.channel.send(embed)
                    .then(sentEmbed => {
                      sentEmbed.react("✅");
                      sentEmbed.react("❔");
                      sentEmbed.react("❌");//Reacciona al mensaje
                      message.delete()
                    });
                } else //Aqui comienzan los comandos varios como Buenos dias, buenas tardes y buenas noches 

                  if (message.content.startsWith(prefix + 'gm')) {
                    const embed = new Discord.MessageEmbed()
                      .setTitle("Buenos dias, " + message.author.username + " espero que tengan un buen dia")
                      .setColor(0x00AE86)
                      .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                      .setImage("https://media.giphy.com/media/JoHCsfie23fag/giphy.gif")
                      .setTimestamp()
                      .setColor(0x66b3ff)
                    message.channel.send(embed)
                    message.delete()
                  } else //Comando de Buenas noches

                    if (message.content.startsWith(prefix + 'gn')) {
                      const embed = new Discord.MessageEmbed()
                        .setTitle("Buenas noches " + message.author.username + ", Duerme bien")
                        .setColor(0x00AE86)
                        .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                        .setImage("https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif")
                        .setTimestamp()
                        .setColor(0x66b3ff)
                      message.channel.send(embed)
                      message.delete()
                    } else //Comando de Buenas tardes

                      if (message.content.startsWith(prefix + 'ga')) {
                        const embed = new Discord.MessageEmbed()
                          .setTitle("Buenas tardes " + message.author.username + ", espero estes teniendo un excelente dia")
                          .setColor(0x00AE86)
                          .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                          .setImage("https://i.imgur.com/wFwbxZz.gif")
                          .setTimestamp()
                          .setColor(0x66b3ff)
                        message.channel.send(embed)
                        message.delete()
                      }

  if (message.content.startsWith(prefix + "convoy")) {
    message.channel.send("@everyone");}
 if (message.content.startsWith(prefix + 'convoy')) { //Muestra un mensaje mostrando el siguiente convoy
              const embed = new Discord.MessageEmbed()
                 .setColor("#2f3136")
                .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                .setDescription("")
                .setTimestamp()
                .setImage("https://static.truckersmp.com/images/event/cover/2363.1618152480.jpeg")
                .addField('ES - Español:', 'En esta ocacion el segundo "Evento Publico" de Expreso Mercosur se basara de una ruta de 647KM aproximadamente saliendo desde la ciudad de "Bratislava" hasta la cantera de "Prague". La ruta se encuentra en el boton de la izquierda "View Route"! P.D: Marcar los puntos por cualquier problema!')
                .addField('EN - English:', 'On this occasion the second "Public Event" of Expreso Mercosur will be based on a route of approximately 647KM leaving from the city of "Bratislava" to the quarry of "Prague". The route is on the left button "View Route"! PS: Score points for any problems!')
                .addField('BR - Portugués:', 'Nesta ocasião, o segundo “Evento Público” do Expreso Mercosul terá como base uma rota de aproximadamente 647 Km partindo da cidade de “Bratislava” para a pedreira de “Praga”. A rota está no botão esquerdo "Ver Rota"! PS: Marque pontos para quaisquer problemas!')
                .addField('Event In TruckersMP:', 'https://truckersmp.com/events/2363-convoy-public%7C-may-event')

              message.channel.send(embed)

            } 


    if (message.content.startsWith(prefix + 'av')) { //Muestra el avatar del usuario
      avatarEmbed(message, language = 'spanish');
    }
















});

client.login(process.env.TOKEN);