const cache = require('../controllers/SponsorCacheController');
const cloud = require('../controllers/SponsorCloudController');

exports.getSponsors = async (req, res) => {
    cacheData = await cache.getSponsorsCache();
    if(cacheData && cacheData.length > 0){
        res.status(200).json({
            status: true,
            sponsors: cacheData
        });
    }else{
        const { allData, cloudData } = await cloud.getSponsorsCloud();
        
        if(cloudData){
            cache.saveSponsors(allData);
            res.status(200).json({
                status: true,
                sponsors: cloudData
            });
        }else{
            res.status(500).json({
                status: false,
                error: "Patrocinadores no encontrados"
            });
        }
    }
}