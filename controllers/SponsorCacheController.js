const Sponsor = require('../models/SponsorCache')
const SponsorService = require('../services/SponsorService')

const sponsors = 3;

exports.getSponsorsCache = async() => {
    const {result, status, message} = await Sponsor.getAll()

    if(status){

        return SponsorService.shuffleArray(result, sponsors)
    }else{
        return null
    }
}

exports.saveSponsors = async(sponsors = []) => {
    if(sponsors){
        sponsors.forEach( async(sponsor) => {
            delete sponsor['id'];
            const values = Object.values(sponsor);
            const res = await Sponsor.create(values);
            console.log(res.message);
        });
    }
}