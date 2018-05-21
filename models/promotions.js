export default {
    state: {
        promotions : []
    },

    reducers: {
        setPromotions(state, promotions) {
            return { ...state, promotions }
        }
    },

    effects: {
        initialize() {
            this.setPromotions(promotions);
        }
    }
}

const promotions = [
    {
        tile: '30% off northern spa',
        pictureURL: 'https://daks2k3a4ib2z.cloudfront.net/5848980605eb48c840980333/59289c0b4ee2985a175b2dea_aurora-borealis-northern-lights-spa-vacation-yukon-canada.jpeg',
        id: '1'
    },
    {
        tile: '30% off northern spa',
        pictureURL: 'https://daks2k3a4ib2z.cloudfront.net/5848980605eb48c840980333/59289c0b4ee2985a175b2dea_aurora-borealis-northern-lights-spa-vacation-yukon-canada.jpeg',
        id: '2'
    },
    {
        tile: '30% off northern spa',
        pictureURL: 'https://daks2k3a4ib2z.cloudfront.net/5848980605eb48c840980333/59289c0b4ee2985a175b2dea_aurora-borealis-northern-lights-spa-vacation-yukon-canada.jpeg',
        id: '3'
    },
    {
        tile: '30% off northern spa',
        pictureURL: 'https://daks2k3a4ib2z.cloudfront.net/5848980605eb48c840980333/59289c0b4ee2985a175b2dea_aurora-borealis-northern-lights-spa-vacation-yukon-canada.jpeg',
        id: '4'
    }
];
