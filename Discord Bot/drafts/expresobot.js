const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

let prefix = config.prefix;

client.on("ready", () => {
   console.log(`Bienvenido de nuevo, soy el bot de Expreso Mercosur`); // Imprime en consola cuando inicia correctamente


   const array = [ 
    {
      name: `www.expresomercosur.ga`, 
      type: `WATCHING` 
    },
    {
      name: `Expreso Mercosur`, 
      type: `COMPETING` 
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
      }, 10000); 
    })

client.on("message", (message) => {

    if(message.content.startsWith(prefix + 'servidor')) { //Muestra datos del servidor
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
     .addField('Dueño del Servidor', server.owner.user.tag , true)
     .addField('Miembros', server.memberCount, true)
     .addField('Roles', server.roles.size, true)
     .setColor(0x66b3ff)
         
     message.channel.send(embed);
     message.delete()
        
    } else

    if(message.content.startsWith(prefix + 'ping' )) { //Muestra el ping actual
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(":ping_pong: Pong!, tu ping es de "+ ping +"ms");

    } else

    if(message.content.startsWith(prefix + 'comandos')){ //Muestra los comandos disponibles para el servidor
            const embed = new Discord.MessageEmbed()
                    .setTitle("Comandos de Expreso Mercosur")
                    .setColor(0x00AE86)
                    .setDescription("Estos son los comandos que podras utilizar en nuestra comunidad.")
                    .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                    .setTimestamp()
                    .addField('servidor', 'muestra propiedades del servidor', true)
                    .addField('redes', 'Con este comando veras las redes sociales', true)
                    .addField('ping', 'con este comando veras tu ping con el bot', true)
                    .addField('reglas', 'Con este comando podras ver el canal donde estan las reglas', true)                    
                    .setColor(0x66b3ff)

    message.channel.send(embed)
    message.delete()

} else

    if(message.content.startsWith(prefix + 'reglas')){ //Muestra un mensaje marcando donde estan las reglas
            const embed = new Discord.MessageEmbed()
            .setTitle("Redes de Expreso Mercosur")
            .setColor(0x00AE86)
            .setDescription("Aqui podras encontrar las reglas de nuestra VTC.")
            .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
            .setTimestamp()
            .addField('Aqui podras encontrar las reglas de la VTC',' <#816454815173443624>', true)
            .addField('Aqui podras encontrar las reglas de Discord', '<#816454819149512715>', true)
            .addField('Aqui podras encontrar las reglas de TruckersMP', '<#816454821405523969>', true)
            .setColor(0x66b3ff)

            message.channel.send(embed)
            message.delete()
} else

    if(message.content.startsWith(prefix + 'redes')){ //Muestra un mensaje mostrando nuestras redes sociales
        const embed = new Discord.MessageEmbed()
                    .setTitle("Redes de Expreso Mercosur")
                    .setColor(0x00AE86)
                    .setDescription("Estas son las redes sociales de nuestra VTC.")
                    .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                    .setTimestamp()
                    .addField('Twitter','https://twitter.com/ExpresoMercosur', true)
                    .addField('Instagram', 'https://www.instagram.com/expreso.mercosur.vtc/', true)
                    .addField('Pagina Web', 'https://www.expresomercosur.ga/inicio', true)
                    .addField('Twitch', 'https://www.twitch.tv/expresomercosurvtc', true)                    
                    .addField('Youtube', 'https://www.youtube.com/channel/UCPRRqO6NP0Dlwd8dBG6-BoQ', true)
                    .addField('Discord', 'https://discord.gg/4femdCMZm5', true)
                    .setColor(0x66b3ff)

    message.channel.send(embed)
    message.delete()
    } else

    if(message.content.startsWith(prefix + 'unirse')){ //Muestra un mensaje mostrando como unirse a la empresa
        const embed = new Discord.MessageEmbed()
                    .setTitle(":construction_worker:¿Cómo me uno al equipo?:construction_worker:")
                    .setColor(0x00AE86)
                    .setFooter("Expreso Mercosur | Todos los derechos reservados", client.user.avatarURL())
                    .setTimestamp()
                    .setDescription('**Bienvenido a Expreso Mercosur, ¿estás interesado en entrar a nuestra comunidad? sigue los siguientes pasos.**')
                    .addField('1.- Primeramente, debes registrarte en Trucksbook con tu cuenta de Steam, para así poder jugar en el MP.','Link de Trucksbook: https://trucksbook.eu/')
                    .addField('2.- Luego, debes mandar solicitud a la empresa en Trucksbook y un miembro Staff aceptará tu solicitud (Recuerda leer todas las reglas)','Link de la empresa en Trucksbook: https://trucksbook.eu/company/112783 ')
                    .addField('3.- Instala TRUCKSBOOK CLIENT para que se puedan registrar tus trabajos en ETS2/ATS-MP, obligatorio.','Link: https://cdn.trucksbook.eu/data/client/TB_Client_1_3_7.zip')
                    .addField('4.- Sigue los pasos de la aplicación, sincroniza tu cuenta de Trucksbook e inserta las direcciones de los juegos.', '⠀')
                    .addField('5.- Únete al VTC de TruckersMP', 'Link de la VTC en TMP: https://truckersmp.com/vtc/38038')
                    .setColor(0x66b3ff)

    message.channel.send(embed)
    message.delete()
    
    } else

   if(message.content.startsWith(prefix + 'confirmacion')){
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

if(message.content.startsWith(prefix + 'gm')) {
message.channel.send('Buenos dias' +message.author.username+', espero tengas un buen dia https://media.giphy.com/media/JoHCsfie23fag/giphy.gif')
} else //Comando de Buenas noches

if(message.content.startsWith(prefix + 'gn')) {
message.channel.send('Buenas noches' +message.author.username+', Duerme bien https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif')
}
});

    client.login(config.token);
