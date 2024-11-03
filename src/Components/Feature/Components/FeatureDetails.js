import {Black247, White247 , BlackMoneyBox, BlackSecure,  BlackShopping, WhiteMoneyBox, WhiteSecure,  WhiteShopping ,Green247, GreenMoneyBox, GreenSecure,GreenShopping} from '../../../assets/Feature/FeatureItems.js'

const FeatureDetails = [
    {
        ID: 1,
        sourceBlackURL : BlackShopping,
        sourceWhiteURL : WhiteShopping,
        sourceGreenURL : GreenShopping,
        sourceAlt: 'The Feature 24-7',
        featureTitle : 'Free Shipping',
        featureDescription: 'Free shipping on all your order',
        isBorderRight: true
    },
    {
        ID: 2,
        sourceBlackURL : Black247,
        sourceWhiteURL : White247,
        sourceGreenURL : Green247,
        sourceAlt: 'The Feature 24-7',
        featureTitle : 'Customer Support 24/7',
        featureDescription: 'Instant access to Support',
        isBorderRight: true
    },
    {
        ID: 3,
        sourceBlackURL : BlackSecure,
        sourceWhiteURL : WhiteSecure,
        sourceGreenURL : GreenSecure,
        sourceAlt: 'The Feature secure',
        featureTitle : '100% Secure Payment',
        featureDescription: 'We ensure your money is save',
        isBorderRight: true
    },
    {
        ID: 4,
        sourceBlackURL : BlackMoneyBox,
        sourceWhiteURL : WhiteMoneyBox,
        sourceGreenURL : GreenMoneyBox,
        sourceAlt: 'The Feature money box',
        featureTitle : 'Money-Back Guarantee',
        featureDescription: '30 Days Money-Back Guarantee',
        isBorderRight: false
    },
]

export default FeatureDetails