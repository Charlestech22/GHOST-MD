const {zokou} =require("../framework/zokou");
const axios =require("axios");


zokou({ nomCom: "lyrics",
        reaction: "✨",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
   try {

    if (!arg || arg.length === 0) return repondre("Where is the name of music");

    let  result  = await axios.get(`http://api.maher-zubair.tech/search/lyrics?q=${arg.join(' ')}`);

    let lyrics = result.data.result;

    if (lyrics.error) return repondre("no lyrics found");

    let msg = `---------👻⌑*Ghost Md*⌑👻--------

* *Artist :* ${lyrics.artist}


* *Title :* ${lyrics.title}


${lyrics.lyrics}
𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝙂𝙃𝙊𝙎𝙏 𝙈𝘿 👻`

    zk.sendMessage(dest,{image : { url : './media/lyrics-img.jpg'} , caption : msg}, { quoted : ms });
    
   } catch (err) {
       repondre('Error')
   }
        })
