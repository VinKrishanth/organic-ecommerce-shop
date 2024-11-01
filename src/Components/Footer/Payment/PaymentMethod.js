import {ApplePay, ApplePayGreen, Mastercard, MastercardGreen, discVer, discVerGreen, lock, lockGreen, visa, visaGreen } from '../../../assets/Footer/payment/PaymentItem.js'

const PaymentMethod = [
    {
        ID : 0,
        sourceURL: ApplePay,
        sourceURLGreen: ApplePayGreen,
        SourceAlt: 'The Payment apple pay'
    },
    {
        ID : 1,
        sourceURL: visa,
        sourceURLGreen: visaGreen,
        SourceAlt: 'The Payment visa card'
    },
    {
        ID : 2,
        sourceURL: discVer,
        sourceURLGreen: discVerGreen,
        SourceAlt: 'The Payment disc-ver'
    },
    {
        ID : 3,
        sourceURL: Mastercard,
        sourceURLGreen: MastercardGreen,
        SourceAlt: 'The Payment master-card'
    },
    {
        ID : 4,
        sourceURL: lock,
        sourceURLGreen: lockGreen,
        SourceAlt: 'The Payment secure '
    },
]

export default PaymentMethod