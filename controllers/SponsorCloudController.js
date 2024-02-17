const Sponsor = require('../models/SponsorCloud')
const SponsorService = require('../services/SponsorService')

const sponsors = 3;

exports.getSponsorsCloud = async() => {
    const {result, status, message} = await Sponsor.getAll()

    if(status){

        return {
            allData: result,
            cloudData: SponsorService.shuffleArray(result, sponsors)
        }
    }else{
        return null
    }
}