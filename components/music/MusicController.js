const {musicDB} = require('../../resources/DB/MusicDB');

class MusicController {
    
    async newMusic (req, res) {
        const {music, url} = await req.body;
        musicDB.create({
            name: music.toLowerCase().replace(/[^a-z]/g, ""),
            music: music,
            url: url,
        })
            .then(c => res.send(c))
            .catch(e => res.json(e["original"]));
    }
    
    async getMusics (req, res) {
        musicDB.findAll()
            .then(c => res.json(c))
            .catch(e => res.json(e));
    }
    
    async getMusicByName (req, res) {
        const musicName = req.params.music;
        const singer = req.params.singer;
        console.log(musicName);
        musicDB.findByPk(musicName)
            .then(c => {
                if (!c) {
                    return res.json(null);
                }
                return res.json(JSON.stringify(c));
            })
            .catch(() => res.json(null));
    }
    
    async deleteMusic (req, res) {
        const musicName = req.params.music.toLowerCase().replace(/[^a-z]/g, "");
        musicDB.destroy({
            where: {name: musicName}
        })
            .then(c => res.json({deleted: true, count: c}))
            .catch(e => res.json(e));
    };
    
}

module.exports = new MusicController();