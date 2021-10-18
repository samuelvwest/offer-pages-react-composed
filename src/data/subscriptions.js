// Build durations texts object
export const durationTexts = {
    dur1: `Monthly`,
    dur3: `Quarterly`,
    dur6: `Semi-Annual`,
    dur12: `Annual`
}

// Packages data object
export const packagesData = [
    {
        id: `usdiscovery`,
        order: 1,
        name: `U.S. Discovery`,
        desc: ``,
        denyStr: `Ancestry_US_Deluxe`
    }, {
        id: `worldexplorer`,
        order: 2,
        name: `World Explorer`,
        desc: ``,
        denyStr: `Ancestry_World_Deluxe`
    }, {
        id: `allaccess`,
        order: 3,
        name: `All Access`,
        desc: ``,
        denyStr: `All_Access`
    }
]

// Available subscriptions data object
export const subscriptions = [
    {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 24.99,
            MSRP: 24.99
        },
        offerIDs: {
            initial: 'O-25401',
            renewal: 'O-25370',
            migration: 'O-26218'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-3MB_I',
            renewal: 'O-20301',
            migration: 'TD_US-3MR-3MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-1MB_I',
            renewal: 'TD_US-3MR-1MB_R',
            migration: 'TD_US-3MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-23589',
            migration: 'O-23644'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-26418',
            renewal: 'O-26415',
            migration: 'TD_US-6MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-12MB_I',
            renewal: 'O-23652',
            migration: 'O-23653'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-1MB_I',
            renewal: 'TD_US-12MR-1MB_R',
            migration: 'TD_US-12MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 39.99,
            MSRP: 39.99
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-25371',
            migration: 'O-26219'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-3MB_I',
            renewal: 'O-20303',
            migration: 'TD_WE-3MR-3MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-1MB_I',
            renewal: 'TD_WE-3MR-1MB_R',
            migration: 'TD_WE-3MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-22056',
            renewal: 'O-22054',
            migration: 'O-23637'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-26419',
            renewal: 'O-26416',
            migration: 'TD_WE-6MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-12MB_I',
            renewal: 'O-679',
            migration: 'O-681'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-1MB_I',
            renewal: 'TD_WE-12MR-1MB_R',
            migration: 'TD_WE-12MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 49.99,
            MSRP: 49.99
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-25376',
            migration: 'O-26220'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 99.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-3MB_I',
            renewal: 'O-26590',
            migration: 'TD_AA-3MR-3MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 99.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-1MB_I',
            renewal: 'TD_AA-3MR-1MB_R',
            migration: 'TD_AA-3MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 199,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-24567',
            renewal: 'O-24566',
            migration: 'O-24568'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 199,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-26420',
            renewal: 'O-26417',
            migration: 'TD_AA-6MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 389,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-12MB_I',
            renewal: 'O-24569',
            migration: 'O-24571'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 389,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-1MB_I',
            renewal: 'TD_AA-12MR-1MB_R',
            migration: 'TD_AA-12MR-1MB_M'
        }
    }
]

// No ABM or QBM offers (includes SABM though)
export const noABMorQBM = [
    {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 24.99,
            MSRP: 24.99
        },
        offerIDs: {
            initial: 'O-25401',
            renewal: 'O-25370',
            migration: 'O-26218'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-3MB_I',
            renewal: 'O-20301',
            migration: 'TD_US-3MR-3MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-23589',
            migration: 'O-23644'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-26418',
            renewal: 'O-26415',
            migration: 'TD_US-6MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-12MB_I',
            renewal: 'O-23652',
            migration: 'O-23653'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 39.99,
            MSRP: 39.99
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-25371',
            migration: 'O-26219'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-3MB_I',
            renewal: 'O-20303',
            migration: 'TD_WE-3MR-3MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-22056',
            renewal: 'O-22054',
            migration: 'O-23637'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-26419',
            renewal: 'O-26416',
            migration: 'TD_WE-6MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-12MB_I',
            renewal: 'O-679',
            migration: 'O-681'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 49.99,
            MSRP: 49.99
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-25376',
            migration: 'O-26220'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 99.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-3MB_I',
            renewal: 'O-26590',
            migration: 'TD_AA-3MR-3MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 199,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-24567',
            renewal: 'O-24566',
            migration: 'O-24568'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 199,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-26420',
            renewal: 'O-26417',
            migration: 'TD_AA-6MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 389,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-12MB_I',
            renewal: 'O-24569',
            migration: 'O-24571'
        }
    }
]

export const winbackSubscriptions = [
    {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 24.99,
            MSRP: 24.99
        },
        offerIDs: {
            initial: 'O-25401',
            renewal: 'O-25370',
            migration: 'O-26218'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 79,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-25370',
            migration: 'O-23644'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 39.99,
            MSRP: 39.99
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-25371',
            migration: 'O-26219'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 99,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-22056',
            renewal: 'O-23688',
            migration: 'O-23637'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 49.99,
            MSRP: 49.99
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-25376',
            migration: 'O-26220'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 139,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-24567',
            renewal: 'O-24807',
            migration: 'O-24568'
        }
    }
]

export const promoSubscriptions = [
    {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 24.99,
            MSRP: 24.99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-25370',
            migration: 'O-26218'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-3MB_I',
            renewal: 'O-20301',
            migration: 'TD_US-3MR-3MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-1MB_I',
            renewal: 'TD_US-3MR-1MB_R',
            migration: 'TD_US-3MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-23589',
            migration: 'O-23644'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-26418',
            renewal: 'O-26415',
            migration: 'TD_US-6MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-12MB_I',
            renewal: 'O-23652',
            migration: 'O-23653'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-1MB_I',
            renewal: 'TD_US-12MR-1MB_R',
            migration: 'TD_US-12MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 39.99,
            MSRP: 39.99
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-25371',
            migration: 'O-26219'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-3MB_I',
            renewal: 'O-20303',
            migration: 'TD_WE-3MR-3MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-1MB_I',
            renewal: 'TD_WE-3MR-1MB_R',
            migration: 'TD_WE-3MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-22054',
            migration: 'O-23637'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-26419',
            renewal: 'O-26416',
            migration: 'TD_WE-6MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-12MB_I',
            renewal: 'O-679',
            migration: 'O-681'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-1MB_I',
            renewal: 'TD_WE-12MR-1MB_R',
            migration: 'TD_WE-12MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 33.99,
            MSRP: 49.99
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-25376',
            migration: 'O-26220'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 68.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-3MB_I',
            renewal: 'TD_AA-3MR-3MB_R',
            migration: 'TD_AA-3MR-3MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 68.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-1MB_I',
            renewal: 'TD_AA-3MR-1MB_R',
            migration: 'TD_AA-3MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 139,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-24566',
            migration: 'O-24568'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 139,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-26420',
            renewal: 'O-26417',
            migration: 'TD_AA-6MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 272,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-12MB_I',
            renewal: 'O-24569',
            migration: 'O-24571'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 272,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-1MB_I',
            renewal: 'TD_AA-12MR-1MB_R',
            migration: 'TD_AA-12MR-1MB_M'
        }
    }
]

export const semiDiscountTest = {
    sa30sabm30: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 109,
                MSRP: 109
            },
            offerIDs: {
                initial: 'O-26650',
                renewal: 'O-26647',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 109,
                MSRP: 109
            },
            offerIDs: {
                initial: 'O-26658',
                renewal: 'O-26653',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 159,
                MSRP: 159
            },
            offerIDs: {
                initial: 'O-26667',
                renewal: 'O-26663',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 159,
                MSRP: 159
            },
            offerIDs: {
                initial: 'O-26677',
                renewal: 'O-26671',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 209,
                MSRP: 209
            },
            offerIDs: {
                initial: 'O-26687',
                renewal: 'O-26683',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 209,
                MSRP: 209
            },
            offerIDs: {
                initial: 'O-26697',
                renewal: 'O-26691',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa25sabm25: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 119,
                MSRP: 119
            },
            offerIDs: {
                initial: 'O-26651',
                renewal: 'O-26648',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 119,
                MSRP: 119
            },
            offerIDs: {
                initial: 'O-26659',
                renewal: 'O-26654',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 169,
                MSRP: 169
            },
            offerIDs: {
                initial: 'O-26668',
                renewal: 'O-26664',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 169,
                MSRP: 169
            },
            offerIDs: {
                initial: 'O-26678',
                renewal: 'O-26672',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 229,
                MSRP: 229
            },
            offerIDs: {
                initial: 'O-26688',
                renewal: 'O-26684',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 229,
                MSRP: 229
            },
            offerIDs: {
                initial: 'O-26698',
                renewal: 'O-26692',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa20sabm20: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 119,
                MSRP: 119
            },
            offerIDs: {
                initial: 'O-26651 (d)',
                renewal: 'O-26648 (d)',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 119,
                MSRP: 119
            },
            offerIDs: {
                initial: 'O-26659 (d)',
                renewal: 'O-26654 (d)',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 189,
                MSRP: 189
            },
            offerIDs: {
                initial: 'O-26669',
                renewal: 'O-26665',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 189,
                MSRP: 189
            },
            offerIDs: {
                initial: 'O-26679',
                renewal: 'O-26673',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 249,
                MSRP: 249
            },
            offerIDs: {
                initial: 'O-26689',
                renewal: 'O-26685',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 249,
                MSRP: 249
            },
            offerIDs: {
                initial: 'O-26699',
                renewal: 'O-26693',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa15sabm15: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 129,
                MSRP: 129
            },
            offerIDs: {
                initial: 'O-26652',
                renewal: 'O-26649',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 129,
                MSRP: 129
            },
            offerIDs: {
                initial: 'O-26660',
                renewal: 'O-26655',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 199,
                MSRP: 199
            },
            offerIDs: {
                initial: 'O-26670',
                renewal: 'O-26666',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 199,
                MSRP: 199
            },
            offerIDs: {
                initial: 'O-26680',
                renewal: 'O-26674',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 259,
                MSRP: 259
            },
            offerIDs: {
                initial: 'O-26690',
                renewal: 'O-26686',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 259,
                MSRP: 259
            },
            offerIDs: {
                initial: 'O-26700',
                renewal: 'O-26694',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa35sabm25: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 99,
                MSRP: 99
            },
            offerIDs: {
                initial: 'O-23590 (d)',
                renewal: 'O-23589 (d)',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 113.94,
                MSRP: 113.94
            },
            offerIDs: {
                initial: 'O-26661',
                renewal: 'O-26656',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 149,
                MSRP: 149
            },
            offerIDs: {
                initial: 'O-22056 (d)',
                renewal: 'O-22054 (d)',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 173.94,
                MSRP: 173.94
            },
            offerIDs: {
                initial: 'O-26681',
                renewal: 'O-26675',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 199,
                MSRP: 199
            },
            offerIDs: {
                initial: 'O-24567 (d)',
                renewal: 'O-24566 (d)',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 227.94,
                MSRP: 227.94
            },
            offerIDs: {
                initial: 'O-26701',
                renewal: 'O-26695',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa35sabm15: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 99,
                MSRP: 99
            },
            offerIDs: {
                initial: 'O-23590 (d)',
                renewal: 'O-23589 (d)',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 131.94,
                MSRP: 131.94
            },
            offerIDs: {
                initial: 'O-26662',
                renewal: 'O-26657',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 149,
                MSRP: 149
            },
            offerIDs: {
                initial: 'O-22056 (d)',
                renewal: 'O-22054 (d)',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 197.94,
                MSRP: 197.94
            },
            offerIDs: {
                initial: 'O-26682',
                renewal: 'O-26676',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 199,
                MSRP: 199
            },
            offerIDs: {
                initial: 'O-24567 (d)',
                renewal: 'O-24566 (d)',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 257.94,
                MSRP: 257.94
            },
            offerIDs: {
                initial: 'O-26702',
                renewal: 'O-26696',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa30sabm15: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 109,
                MSRP: 109
            },
            offerIDs: {
                initial: 'O-26650 (d)',
                renewal: 'O-26647 (d)',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 131.94,
                MSRP: 131.94
            },
            offerIDs: {
                initial: 'O-26662 (d)',
                renewal: 'O-26657 (d)',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 159,
                MSRP: 159
            },
            offerIDs: {
                initial: 'O-26667 (d)',
                renewal: 'O-26663 (d)',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 197.94,
                MSRP: 197.94
            },
            offerIDs: {
                initial: 'O-26682 (d)',
                renewal: 'O-26676 (d)',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 209,
                MSRP: 209
            },
            offerIDs: {
                initial: 'O-26687 (d)',
                renewal: 'O-26683 (d)',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 257.94,
                MSRP: 257.94
            },
            offerIDs: {
                initial: 'O-26702 (d)',
                renewal: 'O-26696 (d)',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ],
    sa25sabm15: [
        {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 24.99,
                MSRP: 24.99
            },
            offerIDs: {
                initial: 'O-25401',
                renewal: 'O-25370',
                migration: 'O-26218'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 119,
                MSRP: 119
            },
            offerIDs: {
                initial: 'O-26651 (d)',
                renewal: 'O-26648 (d)',
                migration: 'TD_GB_US-6MR-6MB_M'
            }
        }, {
            packageID: 'usdiscovery',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 131.94,
                MSRP: 131.94
            },
            offerIDs: {
                initial: 'O-26662 (d)',
                renewal: 'O-26657 (d)',
                migration: 'TD_GB_US-6MR-1MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 39.99,
                MSRP: 39.99
            },
            offerIDs: {
                initial: 'O-25405',
                renewal: 'O-25371',
                migration: 'O-26219'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 169,
                MSRP: 169
            },
            offerIDs: {
                initial: 'O-26668 (d)',
                renewal: 'O-26664 (d)',
                migration: 'TD_GB_WD-6MR-6MB_M'
            }
        }, {
            packageID: 'worldexplorer',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 197.94,
                MSRP: 197.94
            },
            offerIDs: {
                initial: 'O-26682 (d)',
                renewal: 'O-26676 (d)',
                migration: 'TD_GB_WE-6MR-1MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 1,
                billMonths: 1,
                displayPrice: 49.99,
                MSRP: 49.99
            },
            offerIDs: {
                initial: 'O-25410',
                renewal: 'O-25376',
                migration: 'O-26220'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 6,
                displayPrice: 229,
                MSRP: 229
            },
            offerIDs: {
                initial: 'O-26688 (d)',
                renewal: 'O-26684 (d)',
                migration: 'TD_GB_AA-6MR-6MB_M'
            }
        }, {
            packageID: 'allaccess',
            currency: '$',
            initialPeriod: {
                duration: 14,
                durationType: 'Day',
                type: 'Trial',
                displayPrice: '0'
            },
            renewalPeriod: {
                renewMonths: 6,
                billMonths: 1,
                displayPrice: 257.94,
                MSRP: 257.94
            },
            offerIDs: {
                initial: 'O-26702 (d)',
                renewal: 'O-26696 (d)',
                migration: 'TD_GB_AA-6MR-1MB_M'
            }
        }
    ]
}

export default subscriptions;